using HouseHoldServiceBooking;
using HouseHoldServiceBooking.BAL;
using HouseHoldServiceBooking.ENT;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Data.SqlTypes;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class AdminPanel_Service_ServiceAddEdit : System.Web.UI.Page
{
    #region Load Event
    protected void Page_Load(object sender, EventArgs e)
    {
        #region Check Valid User
        if (Session["UserID"] == null)
        {
            Response.Redirect("~/AdminPanel/Login/LoginPage.aspx");
        }
        #endregion Check Valid User


        if (!Page.IsPostBack)
        {
            if (Request.QueryString["ServiceID"] != null)
            {
                lblPageHeaderText.Text = "Service Edit";
                btnAdd.Text = "Update";
                FillServiceForm(Convert.ToInt32(Request.QueryString["ServiceID"]));
            }
            else
            {
                lblPageHeaderText.Text = "Add Service";
            }
        }
    }
    #endregion Load Event

    #region Add Country
    protected void btnAdd_Click(object sender, EventArgs e)
    {

        #region Local Variable
        string strErrorMessage = "";
        #endregion Local Variable

        #region Server Side Validation
        if (txtServiceName.Text == String.Empty)
        {
            strErrorMessage += "Enter the Valid Service Name\n";
        }
        if (strErrorMessage != "")
        {
            lblErrorMessage.Text = strErrorMessage;
            return;
        }
        #endregion Server Side Validation

        #region Read Form Value
        ServiceENT entService = new ServiceENT();
        ServiceBAL balService = new ServiceBAL();
        if (txtServiceName.Text != String.Empty)
        {
            entService.ServiceName = txtServiceName.Text;
        }
        if (Session["UserID"] != null)
        {
            entService.UserID = Convert.ToInt32(Session["UserID"].ToString().Trim());
            entService.ModifiedBy = Convert.ToInt32(Session["UserID"].ToString().Trim());
        }

        entService.ModificationDate = CV.CurrentDate;
        entService.CreationDate = CV.CurrentDate;

        #endregion Read Form Value

        if (Request.QueryString["ServiceID"] == null)
        {
            #region Insert Service
            if (balService.Insert(entService))
            {
                ClearControls();
                lblSuccessMessage.Text = "Data Inserted Successfully";
                divError.Visible = false;
                divSuccess.Visible = true;
            }
            else
            {
                lblErrorMessage.Text = balService.Message;
                divError.Visible = true;
                divSuccess.Visible = false;
            }
            #endregion Insert Service
        }
        else
        {
            #region Update Service
            entService.ServiceID = Convert.ToInt32(Request.QueryString["ServiceID"]);
            if (balService.Update(entService))
            {
                ClearControls();
                Response.Redirect("~/AdminPanel/Service/ServiceList.aspx");
            }
            else
            {
                lblErrorMessage.Text = balService.Message;
                divError.Visible = true;
                divSuccess.Visible = false;
            }
            #endregion Update Service
        }
    }
    #endregion Add Country

    #region Fill Service Form
    private void FillServiceForm(SqlInt32 ServiceID)
    {
        using (SqlConnection objConn = new SqlConnection(ConfigurationManager.ConnectionStrings["HouseHoldServiceBookingConnectionString"].ConnectionString))
        {
            try
            {
                lblErrorMessage.Text = "";
                if (objConn.State != ConnectionState.Open)
                {
                    objConn.Open();
                }
                using (SqlCommand objCmd = objConn.CreateCommand())
                {
                    #region Prepare Command 
                    objCmd.CommandType = CommandType.StoredProcedure;
                    objCmd.CommandText = "PR_Service_SelectByPK";

                    objCmd.Parameters.Add("@ServiceID", SqlDbType.Int).Value = ServiceID;
                    #endregion Prepare Command 

                    using (SqlDataReader objSDR = objCmd.ExecuteReader())
                    {
                        #region Read and Display Data
                        if (objSDR.HasRows)
                        {
                            while (objSDR.Read())
                            {
                                if (!objSDR["ServiceName"].Equals(DBNull.Value))
                                {
                                    txtServiceName.Text = objSDR["ServiceName"].ToString().Trim();
                                }
                            }
                        }
                        #endregion Read and Display Data
                    }
                }
            }
            catch (Exception ex)
            {
                lblErrorMessage.Text = ex.Message;
            }
            finally
            {
                if (objConn.State == ConnectionState.Open)
                {
                    objConn.Close();
                }
            }
        }
    }
    #endregion Fill Service Form

    #region Clear Controls

    private void ClearControls()
    {
        txtServiceName.Text = String.Empty;
        txtServiceName.Focus();
    }
    #endregion Clear Controls
}


