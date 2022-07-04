using HouseHoldServiceBooking;
using HouseHoldServiceBooking.ENT;
using HouseHoldServiceBooking.DAL;
using HouseHoldServiceBooking.BAL;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlTypes;

public partial class AdminPanel_ServiceProviderServices_ServiceProviderServicesAddEdit : System.Web.UI.Page
{
    #region Parameter
    static int key = 0;
    #endregion Parameter

    #region Page Load Event
    protected void Page_Load(object sender, EventArgs e)
    {
        #region Check Valid User
        if (Session["UserID"] == null)
        {
            Response.Redirect("~/AdminPanel/Login/LoginPage.aspx");
        }
        #endregion Check Valid User

        #region PostBack Event
        if (!Page.IsPostBack)
        {
            FillDropDownList();

            if (Request.QueryString["ServiceProviderServicesID"] != null)
            {
                lblPageHeader.Text = "ServiceProviderServices Edit";
            }
            else
            {
                lblPageHeader.Text = "Add ServiceProviderServices";
            }

            
        }
        #endregion PostBack Event

    }
    #endregion Page Load Event

    #region Fill DropDown List
    private void FillDropDownList()
    {
        CommonFillMethods.FillDropDownListServiceProvider(ddlServiceProviderID);
        CommonFillMethods.FillDropDownListService(ddlServiceID);
    }
    #endregion Fill DropDown List

    #region Init Method
    private void InItServiceDataTable()
    {
        DataTable dtService = new DataTable();
        dtService.Columns.Add("Key", typeof(Int32));
        dtService.Columns.Add("ServiceProviderServiceID", typeof(Int32));
        dtService.Columns.Add("ServiceID", typeof(Int32));
        dtService.Columns.Add("ServiceName", typeof(String));
        dtService.Columns.Add("Rate", typeof(Decimal));
        dtService.Columns.Add("Description", typeof(String));
        dtService.Columns.Add("Specialist", typeof(String));

        ViewState["vsService"] = dtService;
    }
    #endregion Init Method

    #region Add Button : Click

    protected void btnAdd_Click(object sender, EventArgs e)
    {
        if (ViewState["vsService"] == null)
        {
            InItServiceDataTable();
            AddRowToDataTable();
        }
        else
        {
            AddRowToDataTable();
        }
    }

    #endregion Add Button : Click

    #region Add Row
    private void AddRowToDataTable()
    {
        #region Parameter
        DataTable dt = (DataTable)ViewState["vsService"];
        DataRow dr;
        #endregion Parameter

        #region Check Edit or Add
        if (hfKey.Value != String.Empty)
        {
            dr = dt.Select("Key = '" + hfKey.Value + "'").FirstOrDefault();
        }
        else
        {
            dr = dt.NewRow();
            dr["Key"] = key + 1;
            key += 1;
        }
        #endregion Check Edit or Add

        #region Gather Data
        if (ddlServiceID.SelectedIndex > 0)
        {
            dr["ServiceID"] = Convert.ToInt32(ddlServiceID.SelectedValue);
            dr["ServiceName"] = Convert.ToString(ddlServiceID.SelectedItem);
        }

        if (txtRate.Text != String.Empty)
            dr["Rate"] = Convert.ToDecimal(txtRate.Text);

        if (txtDescription.Text != String.Empty)
            dr["Description"] = Convert.ToString(txtDescription.Text);

        if (txtSpecialist.Text != String.Empty)
            dr["Specialist"] = Convert.ToString(txtSpecialist.Text);

        if (hfKey.Value == String.Empty)
            dt.Rows.Add(dr);

        #endregion Gather Data

        #region Bind Repeater

        if (dt != null && dt.Rows.Count > 0)
        {
            divDataTable.Visible = true;
            ViewState["vsService"] = dt;
            rpData.DataSource = dt;
            rpData.DataBind();
            ClearControlTemp();
            hfKey.Value = String.Empty;
            btnAdd.Text = "Add";
        }
        else
        {
            divDataTable.Visible = false;
            CommonFunctions.BindEmptyRepeater(rpData);
        }
        #endregion Bind Repeater
    }
    #endregion Add Row

    #region Repeater Item Command Event
    protected void rpData_ItemCommand(object source, RepeaterCommandEventArgs e)
    {
        ClearControlTemp();

        #region Edit Record
        if (e.CommandName == "EditRecord")
        {
            DataTable dt = (DataTable)ViewState["vsService"];
            foreach (DataRow dr in dt.Rows)
            {
                if (Convert.ToInt32(dr["Key"]) == Convert.ToInt32(e.CommandArgument))
                {
                    btnAdd.Text = "Edit";
                    hfKey.Value = dr["Key"].ToString();
                    ddlServiceID.SelectedValue = dr["ServiceID"].ToString();

                    if (!dr["Rate"].Equals(DBNull.Value))
                        txtRate.Text = dr["Rate"].ToString();

                    if (!dr["Description"].Equals(DBNull.Value))
                        txtDescription.Text = dr["Description"].ToString();

                    if (!dr["Specialist"].Equals(DBNull.Value))
                        txtSpecialist.Text = dr["Specialist"].ToString();

                    break;
                }
            }
        }
        #endregion Edit Record

        #region Delete Record
        if (e.CommandName == "DeleteRecord")
        {
            DataTable dt = (DataTable)ViewState["vsService"];
            foreach (DataRow dr in dt.Rows)
            {
                if (Convert.ToInt32(dr["Key"]) == Convert.ToInt32(e.CommandArgument))
                {
                    dr.Delete();
                    break;
                }
            }
            if (dt != null && dt.Rows.Count > 0)
            {
                divDataTable.Visible = true;
                ViewState["vsService"] = dt;
                rpData.DataSource = dt;
                rpData.DataBind();
                ClearControlTemp();
            }
            else
            {
                if(rpData1.Items.Count <= 0)
                    divDataTable.Visible = false;
                CommonFunctions.BindEmptyRepeater(rpData);
            }
        }
        #endregion Delete Record
    }
    #endregion Repeater Item Command Event

    #region Clear Controls
    private void ClearControlTemp()
    {
        ddlServiceID.SelectedIndex = 0;
        txtRate.Text = String.Empty;
        txtDescription.Text = String.Empty;
        txtSpecialist.Text = String.Empty;
    }
    #endregion Clear Controls

    #region Select IndexChanged
    protected void ddlServiceProviderID_SelectedIndexChanged(object sender, EventArgs e)
    {
        if (ddlServiceProviderID.SelectedIndex > 0)
        {
            BindServiceRepeater(Convert.ToInt32(ddlServiceProviderID.SelectedValue));
            divService.Visible = true;
        }
        else
            divService.Visible = false;
    }
    #endregion Select IndexChanged

    #region Save Button : Click

    protected void btnSave_Click(object sender, EventArgs e)
    {
        ServiceProviderServicesENT entServiceProviderServices = new ServiceProviderServicesENT();
        ServiceProviderServicesBAL balServiceProviderServices = new ServiceProviderServicesBAL();

        DataTable dtService = (DataTable)ViewState["vsService"];

        if(ddlServiceProviderID.SelectedIndex > 0)
        {
            entServiceProviderServices.ServiceProviderID = Convert.ToInt32(ddlServiceProviderID.SelectedValue);
        }

        if(Session["UserID"] != null)
        {
            entServiceProviderServices.ModifiedBy = Convert.ToInt32(Session["UserID"]);
            entServiceProviderServices.UserID = Convert.ToInt32(Session["UserID"]);
        }

        entServiceProviderServices.CreationDate = CV.CurrentDate;
        entServiceProviderServices.ModificationDate = CV.CurrentDate;

        foreach (DataRow dr in dtService.Rows)
        {
            if(!dr["ServiceID"].Equals(DBNull.Value))
            {
                entServiceProviderServices.ServiceID = Convert.ToInt32(dr["ServiceID"]);
            }
            if (!dr["Rate"].Equals(DBNull.Value))
            {
                entServiceProviderServices.Rate = Convert.ToDecimal(dr["Rate"]);
            }
            if (!dr["Description"].Equals(DBNull.Value))
            {
                entServiceProviderServices.Description = Convert.ToString(dr["Description"]);
            }
            if (!dr["Specialist"].Equals(DBNull.Value))
            {
                entServiceProviderServices.Specialist = Convert.ToString(dr["Specialist"]);
            }

            if (balServiceProviderServices.Insert(entServiceProviderServices))
            {
                ClearControls();
                lblSuccessMessage.Text = "Data Inserted Successfully";
                divError.Visible = false;
                divSuccess.Visible = true;
            }
            else
            {
                lblErrorMessage.Text = balServiceProviderServices.Message;
                divError.Visible = true;
                divSuccess.Visible = false;
            }
        }
    }

    #endregion Save Button : Click

    #region Clear Control
    private void ClearControls()
    {
        ClearControlTemp();
        ddlServiceProviderID.SelectedIndex = 0;
        CommonFunctions.BindEmptyRepeater(rpData);
        divService.Visible = false;
    }
    #endregion Clear Control

    #region Fill DataTable services
    private void BindServiceRepeater(SqlInt32 ServiceProviderID)
    {
        ServiceProviderServicesBAL balServiceProviderServices = new ServiceProviderServicesBAL();
        DataTable dt = balServiceProviderServices.SelectForEditByServiceProviderID(ServiceProviderID);
        if (dt != null && dt.Rows.Count > 0)
        {
            divDataTable.Visible = true;
            rpData1.DataSource = dt;
            rpData1.DataBind();
            key = dt.Rows.Count;
            hfKey.Value = String.Empty;
            btnAdd.Text = "Add";
        }
        else
        {
            divDataTable.Visible = false;
            CommonFunctions.BindEmptyRepeater(rpData);
        }
    }
    #endregion Fill DataTable services

}