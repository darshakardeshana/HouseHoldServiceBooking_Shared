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

public partial class AdminPanel_Bank_BankList : System.Web.UI.Page
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
            FillBankGridView();
        }
    }
    #endregion Load Event

    #region Fill Bank GridView
    private void FillBankGridView()
    {
        BankBAL balBank = new BankBAL();
        DataTable dtBank = new DataTable();
        dtBank = balBank.SelectAll();

        if (dtBank != null && dtBank.Rows.Count > 0)
        {
            gvBankList.DataSource = dtBank;
            gvBankList.DataBind();
        }
    }
    #endregion Fill Bank GridView

    #region GridView Row Command
    protected void gvBankList_RowCommand(object sender, GridViewCommandEventArgs e)
    {
        if (e.CommandName == "DeleteRecord")
        {
            if (e.CommandArgument != null)
            {
                DeleteBank(Convert.ToInt32(e.CommandArgument.ToString().Trim()));
            }
        }
    }
    #endregion GridView Row Command

    #region Delete Bank 
    private void DeleteBank(SqlInt32 BankID)
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

        BankBAL balBank = new BankBAL();
        if (balBank.Delete(BankID, UserID))
        {
            lblSuccessMessage.Text = "Deleted Successfully";
            divError.Visible = false;
            divSuccess.Visible = true;
        }
        else
        {
            lblErrorMessage.Text = balBank.Message;
            divError.Visible = true;
            divSuccess.Visible = false;
        }
        FillBankGridView();
    }
    #endregion Delete Bank
}