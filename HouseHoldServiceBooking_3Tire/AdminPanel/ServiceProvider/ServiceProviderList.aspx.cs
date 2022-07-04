using HouseHoldServiceBooking.ENT;
using HouseHoldServiceBooking.BAL;
using HouseHoldServiceBooking;
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

public partial class AdminPanel_ServiceProvider_ServiceProviderList : System.Web.UI.Page
{
    #region Load Event
    protected void Page_Load(object sender, EventArgs e)
    {
        #region Check Valid User
        if (Session["UserID"] == null)
            Response.Redirect("~/AdminPanel/Login/LoginPage.aspx");

        #endregion Check Valid User

        if (!Page.IsPostBack)
        {
            FillServiceProviderGridView();
        }
    }
    #endregion Load Event

    #region Fill ServiceProvider GridView
    private void FillServiceProviderGridView()
    {
        ServiceProviderENT entServiceProvider = new ServiceProviderENT();
        ServiceProviderBAL balServiceProvider = new ServiceProviderBAL();

        DataTable dtServiceProvider = balServiceProvider.SelectAll();

        if(dtServiceProvider != null && dtServiceProvider.Rows.Count > 0)
        {
            gvServiceProviderList.DataSource = dtServiceProvider;
            gvServiceProviderList.DataBind();
        }
    }
    #endregion Fill ServiceProvider GridView

    #region GridView Row Command
    protected void gvServiceProviderList_RowCommand(object sender, GridViewCommandEventArgs e)
    {
        #region Delete Record
        if (e.CommandName == "DeleteRecord")
        {
            if (e.CommandArgument != null)
            {
                DeleteServiceProvider(Convert.ToInt32(e.CommandArgument.ToString().Trim()));
            }
        }
        #endregion Delete Record

        #region View Record
        if (e.CommandName == "ViewRecord")
        {
            ServiceProviderBAL balServiceProvider = new ServiceProviderBAL();
            DataTable dtServiceProvider = balServiceProvider.SelectForProfileView(Convert.ToInt32(e.CommandArgument));

            #region Fill Controls
            if (dtServiceProvider != null && dtServiceProvider.Rows.Count > 0)
            {
                foreach (DataRow dr in dtServiceProvider.Rows)
                {
                    if (!dr["UserName"].Equals(DBNull.Value))
                    {
                        lblUserName.Text = Convert.ToString(dr["UserName"]);
                    }
                    if (!dr["DOB"].Equals(DBNull.Value))
                    {
                        lblDOB.Text = Convert.ToDateTime(dr["DOB"]).ToString(CV.DefaultDateFormat);
                    }
                    if (!dr["ServiceProviderName"].Equals(DBNull.Value))
                    {
                        lblServiceProviderName.Text = Convert.ToString(dr["ServiceProviderName"]);
                    }
                    if (!dr["MobileNo"].Equals(DBNull.Value))
                    {
                        lblMobileNo.Text = Convert.ToString(dr["MobileNo"]);
                    }
                    if (!dr["HomeAddress"].Equals(DBNull.Value))
                    {
                        lblHomeAddress.Text = Convert.ToString(dr["HomeAddress"]);
                    }
                    if (!dr["HomeCity"].Equals(DBNull.Value))
                    {
                        lblHomeCity.Text = Convert.ToString(dr["HomeCity"]);
                    }
                    if (!dr["HomePincode"].Equals(DBNull.Value))
                    {
                        lblHomePincode.Text = Convert.ToString(dr["HomePincode"]);
                    }
                    if (!dr["HomeState"].Equals(DBNull.Value))
                    {
                        lblHomeState.Text = Convert.ToString(dr["HomeState"]);
                    }
                    if (!dr["HomeCountry"].Equals(DBNull.Value))
                    {
                        lblHomeCountry.Text = Convert.ToString(dr["HomeCountry"]);
                    }

                    if (!dr["WorkAddress"].Equals(DBNull.Value))
                    {
                        lblWorkAddress.Text = Convert.ToString(dr["WorkAddress"]);
                    }
                    if (!dr["WorkCity"].Equals(DBNull.Value))
                    {
                        lblWorkCity.Text = Convert.ToString(dr["WorkCity"]);
                    }
                    if (!dr["WorkPincode"].Equals(DBNull.Value))
                    {
                        lblWorkPincode.Text = Convert.ToString(dr["WorkPincode"]);
                    }
                    if (!dr["WorkState"].Equals(DBNull.Value))
                    {
                        lblWorkState.Text = Convert.ToString(dr["WorkState"]);
                    }
                    if (!dr["WorkCountry"].Equals(DBNull.Value))
                    {
                        lblWorkCountry.Text = Convert.ToString(dr["WorkCountry"]);
                    }

                    if (!dr["AadharCard"].Equals(DBNull.Value))
                    {
                        lblAadharCard.Text = Convert.ToString(dr["AadharCard"]);
                    }
                    if (!dr["PANCardNo"].Equals(DBNull.Value))
                    {
                        lblPANCardNo.Text = Convert.ToString(dr["PANCardNo"]);
                    }
                    if (!dr["GSTNo"].Equals(DBNull.Value))
                    {
                        lblGSTNo.Text = Convert.ToString(dr["GSTNo"]);
                    }
                    if (!dr["BankName"].Equals(DBNull.Value))
                    {
                        lblBank.Text = Convert.ToString(dr["BankName"]);
                    }
                    if (!dr["AccountNo"].Equals(DBNull.Value))
                    {
                        lblAccountNo.Text = Convert.ToString(dr["AccountNo"]);
                    }
                    if (!dr["IFSCCode"].Equals(DBNull.Value))
                    {
                        lblIFSCCode.Text = Convert.ToString(dr["IFSCCode"]);
                    }
                    if (!dr["ProfilePhotoPath"].Equals(DBNull.Value))
                    {
                        imgProfilePhotoPath.ImageUrl = Convert.ToString(dr["ProfilePhotoPath"]);
                    }
                }
            }
            #endregion Fill Controls

            ScriptManager.RegisterStartupScript(this, this.GetType(), "Pop", "openModal();", true);
            
        }
        #endregion View Record
    }
    #endregion GridView Row Command

    #region Delete ServiceProvider 
    private void DeleteServiceProvider(SqlInt32 ServiceProviderID)
    {
        using (SqlConnection objConn = new SqlConnection(ConfigurationManager.ConnectionStrings["HouseHoldServiceBookingConnectionString"].ConnectionString))
        {
            #region Local Variables 
            SqlInt32 UserID = SqlInt32.Null;
            #endregion Local Variables

            #region Read UserID
            if (Session["UserID"] != null)
            {
                UserID = Convert.ToInt32(Session["UserID"].ToString().Trim());
            }
            #endregion Read UserID

            try
            {
                if (objConn.State != ConnectionState.Open)
                {
                    objConn.Open();
                }
                using (SqlCommand objCmd = objConn.CreateCommand())
                {
                    #region Prepare command
                    objCmd.CommandType = CommandType.StoredProcedure;
                    objCmd.CommandText = "PR_ServiceProvider_DeleteByPKUserID";
                    objCmd.Parameters.Add("@ServiceProviderID", SqlDbType.Int).Value = ServiceProviderID;
                    objCmd.Parameters.Add("@UserID", SqlDbType.Int).Value = UserID;
                    #endregion Prepare command

                    objCmd.ExecuteNonQuery();
                    FillServiceProviderGridView();
                    lblErrorMessage.Text = "";
                    lblSuccessMessage.Text = "Deleted Successfully";
                }

            }
            catch (SqlException sqlex)
            {
                lblErrorMessage.Text = sqlex.Message;
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
    #endregion Delete ServiceProvider
}