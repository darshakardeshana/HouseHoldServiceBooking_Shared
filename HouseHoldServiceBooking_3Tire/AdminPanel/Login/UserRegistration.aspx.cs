using HouseHoldServiceBooking.ENT;
using HouseHoldServiceBooking.DAL;
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

    #region Add User
    protected void btnSignUp_Click(object sender, EventArgs e)
    {
        #region Local Variables
        String strErrorMessage = "";
        AdminUserENT entAdminUser = new AdminUserENT();
        AdminUserBAL balAdminUser = new AdminUserBAL();
        #endregion Local Variables

        #region Server Side Validation
        if (txtUserName.Text == String.Empty)
        {
            strErrorMessage += "Enter UserName <br />";
        }
        if (txtDisplayName.Text == String.Empty)
        {
            strErrorMessage += "Enter Display Name <br />";
        }
        if (txtMobileNo.Text == String.Empty)
        {
            strErrorMessage += "Enter Mobile Number <br />";
        }
        if (txtPassword.Text == String.Empty)
        {
            strErrorMessage += "Enter Password <br />";
        }
        if (txtRePassword.Text == String.Empty)
        {
            strErrorMessage += "Re Type Password <br />";
        }
        if (txtPassword.Text.Trim() != txtRePassword.Text.Trim())
        {
            strErrorMessage += "Passwords Don't Match <br />";
        }
        if (strErrorMessage != "")
        {
            lblSuccessMessage.Text = "";
            lblErrorMessage.Text = strErrorMessage;
            return;
        }
        #endregion Server Side validation

        #region Read Form Value
        if (txtUserName.Text != String.Empty)
        {
            entAdminUser.UserName = txtUserName.Text.Trim();
        }
        if (txtPassword.Text != String.Empty)
        {
            entAdminUser.Password = txtPassword.Text.Trim();
        }
        if (txtDisplayName.Text != String.Empty)
        {
            entAdminUser.DisplayName = txtDisplayName.Text.Trim();
        }
        if (txtMobileNo.Text != String.Empty)
        {
            entAdminUser.MobileNo = txtMobileNo.Text.Trim();
        }
        if (txtEmail.Text != String.Empty)
        {
            entAdminUser.Email = txtEmail.Text.Trim();
        }
        if (txtDesignation.Text != String.Empty)
        {
            entAdminUser.Designation = txtDesignation.Text.Trim();
        }
        entAdminUser.CreationDate = CV.CurrentDate;
        entAdminUser.ModificationDate = CV.CurrentDate;

        #endregion Read Form Value

        #region Insert AdminUser
        if (balAdminUser.Insert(entAdminUser))
        {
            ClearControls();
            lblSuccessMessage.Text = "User Registered Successfully";
        }
        else
        {
            lblErrorMessage.Text = balAdminUser.Message;
        }
        #endregion Insert AdminUser
    }

    #endregion Add User

    #region Validate UserName
    protected void txtUserName_TextChanged(object sender, EventArgs e)
    {
        DataTable dtUserName = new DataTable();
        AdminUserBAL balAdminUser = new AdminUserBAL();
        dtUserName = balAdminUser.SelectByUserName(txtUserName.Text);
        if(dtUserName != null && dtUserName.Rows.Count > 0)
        {
            lblErrorMessage.Text = "UserName Already exists";
        }
    }
    #endregion Validate UserName

    #region Redirect Links 
    protected void lbLogin_Click(object sender, EventArgs e)
    {
        Response.Redirect("~/AdminPanel/Login/loginPage.aspx");
    }
    #endregion Redirect Links

    #region Clear Controls
    private void ClearControls()
    {
        txtUserName.Text = "";
        txtDisplayName.Text = "";
        txtMobileNo.Text = "";
        txtEmail.Text = "";
        txtDesignation.Text = "";
        txtPassword.Text = "";
        txtRePassword.Text = "";
        lblErrorMessage.Text = "";
    }
    #endregion Clear Controls
}