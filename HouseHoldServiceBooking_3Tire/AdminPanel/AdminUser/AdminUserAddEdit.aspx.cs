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

public partial class AdminPanel_AdminUser_AdminUserAddEdit : System.Web.UI.Page
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
            if (Request.QueryString["AdminUserID"] != null)
            {
                lblPageHeader.Text = "User Edit";
                btnAdd.Text = "Update";
                FillAdminUserForm(Convert.ToInt32(Request.QueryString["AdminUserID"]));
            }
            else
            {
                lblPageHeader.Text = "Add User";
            }
        }
    }
    #endregion Load Event

    #region Button : Add Click
    protected void btnAdd_Click(object sender, EventArgs e)
    {
        #region Local Variables
        String strErrorMessage = "";
        #endregion Local Variables

        #region Server Side Validation

        if (txtUserName.Text.Trim() == "")
            strErrorMessage += " - Enter UserName<br />";

        if (txtDisplayName.Text.Trim() == "")
            strErrorMessage += " - Enter Display Name<br />";

        if (txtPassword.Text.Trim() == "")
            strErrorMessage += " - Enter Password<br />";

        if (txtPassword.Text.Trim() != txtRePassword.Text.Trim())
            strErrorMessage += " - Password do not match<br />";

        if (strErrorMessage != "")
        {
            lblErrorMessage.Text = strErrorMessage;
            divError.Visible = true;
            divSuccess.Visible = false;
            return;
        }

        #endregion Server Side Validation

        AdminUserENT entAdminUser = new AdminUserENT();

        #region Collect Form Data
        if (txtUserName.Text.Trim() != "")
            entAdminUser.UserName = txtUserName.Text.Trim();

        if (txtDisplayName.Text.Trim() != "")
            entAdminUser.DisplayName = txtDisplayName.Text.Trim();

        if (txtPassword.Text.Trim() != "")
            entAdminUser.Password = txtPassword.Text.Trim();

        if (txtMobileNo.Text.Trim() != "")
            entAdminUser.MobileNo = txtMobileNo.Text.Trim();

        if (txtEmail.Text.Trim() != "")
            entAdminUser.Email = txtEmail.Text.Trim();

        if (txtDesignation.Text.Trim() != "")
            entAdminUser.Designation = txtDesignation.Text.Trim();

        entAdminUser.CreationDate = CV.CurrentDate;
        entAdminUser.ModificationDate = CV.CurrentDate;
        #endregion Collect Form Data

        AdminUserBAL balAdminUser = new AdminUserBAL();

        if (Request.QueryString["AdminUserID"] == null)
        {
            #region Insert AdminUser
            if (balAdminUser.Insert(entAdminUser))
            {
                ClearControls();
                lblSuccessMessage.Text = "Data Inserted Successfully";
                divError.Visible = false;
                divSuccess.Visible = true;
            }
            else
            {
                lblErrorMessage.Text = balAdminUser.Message;
                divError.Visible = true;
                divSuccess.Visible = false;
            }
            #endregion Insert AdminUser
        }
        else
        {
            #region Update AdminUser
            entAdminUser.UserID = Convert.ToInt32(Request.QueryString["AdminUserID"]);
            if (balAdminUser.Update(entAdminUser))
            {
                ClearControls();
                Response.Redirect("~/AdminPanel/AdminUser/AdminUserList.aspx");
            }
            else
            {
                lblErrorMessage.Text = balAdminUser.Message;
                divError.Visible = true;
                divSuccess.Visible = false;
            }
            #endregion Update AdminUser
        }
    }
    #endregion Button : Add Click

    #region Fill AdminUser Form
    private void FillAdminUserForm(SqlInt32 AdminUserID)
    {
        AdminUserBAL balAdminUser = new AdminUserBAL();
        AdminUserENT entAdminUser = new AdminUserENT();
        entAdminUser = balAdminUser.SelectByPK(AdminUserID);

        #region Fill Controls
        if (!entAdminUser.UserName.IsNull)
        {
            txtUserName.Text = entAdminUser.UserName.ToString().Trim();
        }
        if (!entAdminUser.Password.IsNull)
        {
            txtPassword.Text = entAdminUser.Password.ToString().Trim();
            txtRePassword.Text = entAdminUser.Password.ToString().Trim();
        }
        if (!entAdminUser.DisplayName.IsNull)
        {
            txtDisplayName.Text = entAdminUser.DisplayName.ToString().Trim();
        }
        if (!entAdminUser.MobileNo.IsNull)
        {
            txtMobileNo.Text = entAdminUser.MobileNo.ToString().Trim();
        }
        if (!entAdminUser.Email.IsNull)
        {
            txtEmail.Text = entAdminUser.Email.ToString().Trim();
        }
        if (!entAdminUser.Designation.IsNull)
        {
            txtDesignation.Text = entAdminUser.Designation.ToString().Trim();
        }
        #endregion Fill Controls
    }
    #endregion Fill AdminUser Form

    #region Clear Controls

    private void ClearControls()
    {
        txtUserName.Text = String.Empty;
        txtDisplayName.Text = String.Empty;
        txtPassword.Text = String.Empty;
        txtRePassword.Text = String.Empty;
        txtMobileNo.Text = String.Empty;
        txtEmail.Text = String.Empty;
        txtDesignation.Text = String.Empty;
        txtUserName.Focus();
    }
    #endregion Clear Controls

    #region Check For Duplicate Username
    protected void txtUserName_TextChanged(object sender, EventArgs e)
    {
        DataTable dtUserName = new DataTable();
        AdminUserBAL balAdminUser = new AdminUserBAL();
        dtUserName = balAdminUser.SelectByUserName(txtUserName.Text);
        if (dtUserName != null && dtUserName.Rows.Count > 0)
        {
            lblErrorMessage.Text = "UserName Already exists";
            divError.Visible = true;
            divSuccess.Visible = false;
            txtUserName.Focus();
        }
        else
        {
            divError.Visible = false;
            txtDisplayName.Focus();
        }
    }
    #endregion Check For Duplicate Username
}