using HouseHoldServiceBooking;
using HouseHoldServiceBooking.BAL;
using HouseHoldServiceBooking.ENT;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class AdminPanel_ChangePassword : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        #region Check Valid User
        if (Session["UserID"] == null)
        {
            Response.Redirect("~/AdminPanel/Login/LoginPage.aspx");
        }
        #endregion Check Valid User
    }

    protected void btnChangePassword_Click(object sender, EventArgs e)
    {
        #region Local Variables
        String strErrorMessage = "";
        #endregion Local Variables

        #region Server Side Validation

        if (txtOldPassword.Text.Trim() == "")
            strErrorMessage += " - Enter Old Password<br />";

        if (txtNewPassword.Text.Trim() == "")
            strErrorMessage += " - Enter New Password<br />";

        if (txtReTypePassword.Text.Trim() == "")
            strErrorMessage += " - Enter Re-Type Password<br />";

        if (txtReTypePassword.Text.Trim() != txtNewPassword.Text.Trim())
            strErrorMessage += " - Password do not match<br />";

        if (txtOldPassword.Text.Trim() != Session["Password"].ToString())
            strErrorMessage += " - Old Password do not match<br />";

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
        if (txtNewPassword.Text.Trim() != "")
            entAdminUser.Password = txtNewPassword.Text.Trim();

        entAdminUser.CreationDate = CV.CurrentDate;
        entAdminUser.ModificationDate = CV.CurrentDate;
        #endregion Collect Form Data

        AdminUserBAL balAdminUser = new AdminUserBAL();

        #region Update Country
        entAdminUser.UserID = Convert.ToInt32(Session["UserID"]);
        if (balAdminUser.ChangePassword(entAdminUser))
        {
            ClearControls();
            lblSuccessMessage.Text = "Password Changed Successfully";
            Session["Password"] = entAdminUser.Password.Value;
            divError.Visible = false;
            divSuccess.Visible = true;
        }
        else
        {
            lblErrorMessage.Text = balAdminUser.Message;
            divError.Visible = true;
            divSuccess.Visible = false;
        }
        #endregion Update Country
    }

    #region Clear Control
    private void ClearControls()
    {
        txtOldPassword.Text = String.Empty;
        txtNewPassword.Text = String.Empty;
        txtReTypePassword.Text = String.Empty;
        txtOldPassword.Focus();
    }
    #endregion Clear Control

}