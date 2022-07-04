using HouseHoldServiceBooking.BAL;
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

public partial class AdminPanel_User_AdminUserList : System.Web.UI.Page
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
            FillAdminUserGridView();
        }
    }
    #endregion Load Event

    #region Fill AdminUser GridView
    private void FillAdminUserGridView()
    {
        AdminUserBAL balAdminUser = new AdminUserBAL();
        DataTable dtAdminUser = new DataTable();
        dtAdminUser = balAdminUser.SelectAll();

        if (dtAdminUser != null && dtAdminUser.Rows.Count > 0)
        {
            gvAdminUserList.DataSource = dtAdminUser;
            gvAdminUserList.DataBind();
        }
    }
    #endregion Fill AdminUser GridView

    #region GridView Row Command
    protected void gvAdminUserList_RowCommand(object sender, GridViewCommandEventArgs e)
    {
        if (e.CommandName == "DeleteRecord")
        {
            if (e.CommandArgument != null)
            {
                DeleteAdminUser(Convert.ToInt32(e.CommandArgument.ToString().Trim()));
            }
        }
    }
    #endregion GridView Row Command

    #region Delete AdminUser 
    private void DeleteAdminUser(SqlInt32 UserID)
    {
        AdminUserBAL balAdminUser = new AdminUserBAL();
        if (balAdminUser.Delete(UserID))
        {
            lblSuccessMessage.Text = "Deleted Successfully";
            divError.Visible = false;
            divSuccess.Visible = true;
        }
        else
        {
            lblErrorMessage.Text = balAdminUser.Message;
            divError.Visible = true;
            divSuccess.Visible = false;
        }

        FillAdminUserGridView();
    }
    #endregion Delete AdminUser
}