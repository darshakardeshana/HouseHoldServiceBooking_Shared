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

public partial class AdminPanel_State_StateList : System.Web.UI.Page
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
            FillStateGridView();
        }
    }
    #endregion Load Event

    #region Fill State GridView
    private void FillStateGridView()
    {
        #region Parameters
        StateBAL balState = new StateBAL();
        DataTable dtState = new DataTable();
        dtState = balState.SelectAll();
        #endregion Parameters

        #region Fill Data
        if (dtState != null && dtState.Rows.Count > 0)
        {
            gvStateList.DataSource = dtState;
            gvStateList.DataBind();
        }
        #endregion Fill Data
    }
    #endregion Fill State GridView

    #region GridView Row Command
    protected void gvStateList_RowCommand(object sender, GridViewCommandEventArgs e)
    {
        if (e.CommandName == "DeleteRecord")
        {
            if (e.CommandArgument != null)
            {
                DeleteState(Convert.ToInt32(e.CommandArgument.ToString().Trim()));
            }
        }
    }
    #endregion GridView Row Command

    #region Delete State 
    private void DeleteState(SqlInt32 StateID)
    {
        #region Local Variables 
        SqlInt32 UserID = 0;
        #endregion Local Variables 

        #region Read UserID
        if (Session["UserID"] != null)
        {
            UserID = Convert.ToInt32(Session["UserID"].ToString().Trim());
        }
        #endregion Read UserID

        #region Delete Event
        StateBAL balState = new StateBAL();
        if (balState.Delete(StateID, UserID))
        {
            lblSuccessMessage.Text = "Deleted Successfully";
            divError.Visible = false;
            divSuccess.Visible = true;
        }
        else
        {
            lblErrorMessage.Text = balState.Message;
            divError.Visible = true;
            divSuccess.Visible = false;
        }
        FillStateGridView();
        #endregion Delete Event
    }
    #endregion Delete State
}