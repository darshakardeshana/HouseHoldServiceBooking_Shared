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

        AdminUserBAL balAdminUser = new AdminUserBAL();
        AdminUserENT entAdminUser = balAdminUser.SelectByUserNamePassword(strUserName, strPassword);

        if (!entAdminUser.UserID.IsNull)
        {
            Session["UserID"] = entAdminUser.UserID.ToString().Trim();
        }
        else
        {
            lblErrorMessage.Text = "Username or Password is incorrect";
            return;
        }
        if (!entAdminUser.DisplayName.IsNull)
        {
            Session["DisplayName"] = entAdminUser.DisplayName.ToString().Trim();
        }
        if (!entAdminUser.Password.IsNull)
        {
            Session["Password"] = entAdminUser.Password.ToString().Trim();
        }
        Response.Redirect("~/AdminPanel/Default.aspx");
    }
    #endregion Login Event

    protected void lbSignUp_Click(object sender, EventArgs e)
    {
        Response.Redirect("~/AdminPanel/Login/UserRegistration.aspx");
    }
}