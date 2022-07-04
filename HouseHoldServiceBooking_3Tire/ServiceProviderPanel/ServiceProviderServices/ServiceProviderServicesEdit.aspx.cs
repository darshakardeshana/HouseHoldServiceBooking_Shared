using HouseHoldServiceBooking;
using HouseHoldServiceBooking.BAL;
using HouseHoldServiceBooking.ENT;
using System;
using System.Collections.Generic;
using System.Data.SqlTypes;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class ServiceProviderPanel_ServiceProviderServices_ServiceProviderServicesEdit : System.Web.UI.Page
{
    #region Page Load Event
    protected void Page_Load(object sender, EventArgs e)
    {
        #region Check Valid User
        if (Session["ServiceProviderID"] == null)
        {
            Response.Redirect("~/ServiceProviderPanel/Login/LoginPage.aspx");
        }
        #endregion Check Valid User

        #region PostBack Event
        if (!Page.IsPostBack)
        {
            FillDropDownList();

            if (Request.QueryString["ServiceProviderServicesID"] != null)
            {
                lblPageHeader.Text = "Service Provider Services Edit";
                FillServiceProviderServicesForm(Convert.ToInt32(Request.QueryString["ServiceProviderServicesID"]));
                btnAdd.Text = "Edit";
            }
            else
            {
                lblPageHeader.Text = "Add Service Provider Services";
            }
        }
        #endregion PostBack Event

    }
    #endregion Page Load Event

    #region Fill DropDown List
    private void FillDropDownList()
    {
        CommonFillMethods.FillDropDownListService(ddlServiceID);
    }
    #endregion Fill DropDown List

    #region FillServiceProviderServices Form
    private void FillServiceProviderServicesForm(SqlInt32 ServiceProviderServicesID)
    {
        ServiceProviderServicesBAL balServiceProviderServices = new ServiceProviderServicesBAL();
        ServiceProviderServicesENT entServiceProviderServices = new ServiceProviderServicesENT();
        entServiceProviderServices = balServiceProviderServices.SelectByPK(ServiceProviderServicesID);

        #region Fill Controls
        if (!entServiceProviderServices.ServiceID.IsNull)
        {
            ddlServiceID.SelectedValue = entServiceProviderServices.ServiceID.ToString().Trim();
        }
        if (!entServiceProviderServices.Description.IsNull)
        {
            txtDescription.Text = entServiceProviderServices.Description.ToString().Trim();
        }
        if (!entServiceProviderServices.Rate.IsNull)
        {
            txtRate.Text = entServiceProviderServices.Rate.ToString().Trim();
        }
        if (!entServiceProviderServices.Specialist.IsNull)
        {
            txtSpecialist.Text = entServiceProviderServices.Specialist.ToString().Trim();
        }
        #endregion Fill Controls
    }
    #endregion FillServiceProviderServices Form

    protected void btnAdd_Click(object sender, EventArgs e)
    {
        #region Local Variables
        String strErrorMessage = "";
        #endregion Local Variables

        #region Server Side Validation

        if (ddlServiceID.SelectedIndex <= 0)
            strErrorMessage += " - Select Valid Service<br />";

        if (txtRate.Text.Trim() == "")
            strErrorMessage += " - Enter Valid Rate<br />";

        if (txtDescription.Text.Trim() == "")
            strErrorMessage += " - Enter Valid Description<br />";

        if (txtSpecialist.Text.Trim() == "")
            strErrorMessage += " - Enter Valid Specialist<br />";

        if (strErrorMessage != "")
        {
            lblErrorMessage.Text = strErrorMessage;
            divError.Visible = true;
            divSuccess.Visible = false;
            return;
        }

        #endregion Server Side Validation

        ServiceProviderServicesENT entServiceProviderServices = new ServiceProviderServicesENT();

        #region Collect Form Data
        if (ddlServiceID.SelectedIndex > 0)
        {
            entServiceProviderServices.ServiceID = Convert.ToInt32(ddlServiceID.SelectedValue);
        }
        if (txtRate.Text.Trim() != String.Empty)
        {
            entServiceProviderServices.Rate = Convert.ToDecimal(txtRate.Text);
        }
        if (txtDescription.Text.Trim() != String.Empty)
        {
            entServiceProviderServices.Description = txtDescription.Text.Trim();
        }
        if (txtSpecialist.Text.Trim() != String.Empty)
        {
            entServiceProviderServices.Specialist = txtSpecialist.Text.Trim();
        }
        entServiceProviderServices.UserID = 0;
        entServiceProviderServices.ModifiedBy = 0;
        entServiceProviderServices.CreationDate = CV.CurrentDate;
        entServiceProviderServices.ModificationDate = CV.CurrentDate;
        #endregion Collect Form Data

        ServiceProviderServicesBAL balServiceProviderServices = new ServiceProviderServicesBAL();

        if (Request.QueryString["ServiceProviderServicesID"] == null)
        {
            //#region Insert Country
            //if (balServiceProviderServices.Insert(entServiceProviderServices))
            //{
            //    ClearControls();
            //    lblSuccessMessage.Text = "Data Inserted Successfully";
            //    divError.Visible = false;
            //    divSuccess.Visible = true;
            //}
            //else
            //{
            //    lblErrorMessage.Text = balServiceProviderServices.Message;
            //    divError.Visible = true;
            //    divSuccess.Visible = false;
            //}
            //#endregion Insert Country
        }
        else
        {
            #region Update Country
            entServiceProviderServices.ServiceProviderServicesID = Convert.ToInt32(Request.QueryString["ServiceProviderServicesID"]);
            if (balServiceProviderServices.Update(entServiceProviderServices))
            {
                ClearControls();
                Response.Redirect("~/AdminPanel/ServiceProviderServices/ServiceProviderServicesList.aspx");
            }
            else
            {
                lblErrorMessage.Text = balServiceProviderServices.Message;
                divError.Visible = true;
                divSuccess.Visible = false;
            }
            #endregion Update Country
        }
    }

    #region Clear Control
    private void ClearControls()
    {
        ddlServiceID.SelectedIndex = 0;
        txtRate.Text = String.Empty;
        txtDescription.Text = String.Empty;
        txtSpecialist.Text = String.Empty;
    }
    #endregion Clear Control
}