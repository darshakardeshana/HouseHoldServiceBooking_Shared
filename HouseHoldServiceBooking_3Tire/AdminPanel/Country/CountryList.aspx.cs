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

public partial class AdminPanel_Country_CountryList : System.Web.UI.Page
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
            FillCountryGridView();
        }
    }
    #endregion Load Event

    #region Fill Country GridView
    private void FillCountryGridView()
    {
        CountryBAL balCountry = new CountryBAL();
        DataTable dtCountry = new DataTable();
        dtCountry = balCountry.SelectAll();

        if (dtCountry != null && dtCountry.Rows.Count > 0)
        {
            gvCountryList.DataSource = dtCountry;
            gvCountryList.DataBind();
        }
    }
    #endregion Fill Country GridView

    #region GridView Row Command
    protected void gvCountryList_RowCommand(object sender, GridViewCommandEventArgs e)
    {
        if (e.CommandName == "DeleteRecord")
        {
            if (e.CommandArgument != null)
            {
                DeleteCountry(Convert.ToInt32(e.CommandArgument.ToString().Trim()));
            }
        }
    }
    #endregion GridView Row Command

    #region Delete Country 
    private void DeleteCountry(SqlInt32 CountryID)
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

        CountryBAL balCountry = new CountryBAL();
        if(balCountry.Delete(CountryID, UserID))
        {
            lblSuccessMessage.Text = "Deleted Successfully";
            divError.Visible = false;
            divSuccess.Visible = true;
        }
        else
        {
            lblErrorMessage.Text = balCountry.Message;
            divError.Visible = true;
            divSuccess.Visible = false;
        }

        FillCountryGridView();
    }
    #endregion Delete Country
}