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

public partial class AdminPanel_City_CityList : System.Web.UI.Page
{
    #region Page Load Event
    protected void Page_Load(object sender, EventArgs e)
    {
        #region Check Valid User
        if (Session["UserID"] == null)
            Response.Redirect("~/AdminPanel/Login/LoginPage.aspx");

        #endregion Check Valid User

        #region PostBack Event
        if (!Page.IsPostBack)
        {
            FillCityGridView();
        }
        #endregion PostBack Event
    }
    #endregion Page Load Event

    #region Fill City GridView 
    private void FillCityGridView()
    {
        #region Parameters
        CityBAL balCity = new CityBAL();
        DataTable dtCity = new DataTable();
        #endregion Parameters

        #region Fill City
        dtCity = balCity.SelectAll();

        if (dtCity != null && dtCity.Rows.Count > 0)
        {
            gvCityList.DataSource = dtCity;
            gvCityList.DataBind();
        }
        #endregion Fill City
    }
    #endregion Fill City GridView 

    #region Grid View Row Command
    protected void gvCityList_RowCommand(object sender, GridViewCommandEventArgs e)
    {
        if (e.CommandName == "DeleteRecord")
        {
            if (e.CommandArgument != null)
            {
                DeleteCity(Convert.ToInt32(e.CommandArgument.ToString().Trim()));
            }
        }
    }
    #endregion Grid View Row Command

    #region Delete City
    private void DeleteCity(SqlInt32 CityID)
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

        CityBAL balCity = new CityBAL();
        if (balCity.Delete(CityID, UserID))
        {
            lblSuccessMessage.Text = "Deleted Successfully";
            divError.Visible = false;
            divSuccess.Visible = true;
        }
        else
        {
            lblErrorMessage.Text = balCity.Message;
            divError.Visible = true;
            divSuccess.Visible = false;
        }
        FillCityGridView();
    }
    #endregion Delete City
}