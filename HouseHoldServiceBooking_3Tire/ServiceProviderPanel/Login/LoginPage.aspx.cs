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

public partial class Login_LoginPage : System.Web.UI.Page
{
    #region Load Event
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!Page.IsPostBack)
        {
            txtUserName.Focus();
            txtUserName.Text = "dk";
            txtPassword.Text = "dk";
        }
    }
    #endregion Load Event

    #region Login Event
    protected void btnLogin_Click(object sender, EventArgs e)
    {
        #region Local Variables
        string strErrorMessage = "";
        SqlString strUserName = SqlString.Null;
        SqlString strPassword = SqlString.Null;
        #endregion Local Variables

        #region Server Side validation
        if(txtUserName.Text == String.Empty)
        {
            strErrorMessage += "Enter UserName <br />";
        }
        if (txtPassword.Text == String.Empty)
        {
            strErrorMessage += "Enter Password <br />";
        }
        if(strErrorMessage != "")
        {
            lblErrorMessage.Text = strErrorMessage;
            return;
        }

        #endregion Server Side validation

        #region Read Form Value
        if (txtUserName.Text != String.Empty)
        {
            strUserName = txtUserName.Text.Trim();
        }
        if (txtPassword.Text != String.Empty)
        {
            strPassword = txtPassword.Text.Trim();
        }
        #endregion Read Form Value

        ServiceProviderBAL balServiceProvider = new ServiceProviderBAL();
        ServiceProviderENT entServiceProvider = balServiceProvider.SelectByUserNamePassword(strUserName, strPassword);
        if(!entServiceProvider.UserName.IsNull)
        {
            Session["Username"] = entServiceProvider.UserName.Value;
        }

        if (!entServiceProvider.ServiceProviderID.IsNull)
        {
            Session["ServiceProviderID"] = entServiceProvider.ServiceProviderID.Value;
        }

        if (!entServiceProvider.Password.IsNull)
        {
            Session["Password"] = entServiceProvider.Password.Value;
        }

        if (!entServiceProvider.ServiceProviderName.IsNull)
        {
            Session["ServiceProviderName"] = entServiceProvider.ServiceProviderName.Value;
        }

        if (!entServiceProvider.ProfilePhotoPath.IsNull)
        {
            Session["ProfilePhotoPath"] = entServiceProvider.ProfilePhotoPath.Value;
        }

        Response.Redirect("~/ServiceProviderPanel/Default.aspx");
    }
    #endregion Login Event

    protected void lbSignUp_Click(object sender, EventArgs e)
    {
        lblErrorMessage.Text = "Please Contact Admin of Household Service Booking to get registrated as Service Provider<br /> Self registration will be Coming Soon";
        //Response.Redirect("~/AdminPanel/Login/UserRegistration.aspx");
    }
}