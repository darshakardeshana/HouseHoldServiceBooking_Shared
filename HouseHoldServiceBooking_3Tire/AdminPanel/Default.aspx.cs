using HouseHoldServiceBooking.BAL;
using HouseHoldServiceBooking.ENT;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class AdminPanel_Default : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        #region Check Valid User
        if (Session["UserID"] == null)
            Response.Redirect("~/AdminPanel/Login/LoginPage.aspx");

        #endregion Check Valid User

        if (!Page.IsPostBack)
        {
            FillDetails();
        }
    }

    private void FillDetails()
    {
        DashboardBAL balDashboard = new DashboardBAL();
        DataTable dtDashboard = new DataTable();

        dtDashboard = balDashboard.GetDetails();

        #region Fill Controls
        foreach(DataRow dr in dtDashboard.Rows)
        {
            if(!dr["TotalServiceCount"].Equals(DBNull.Value))
            {
                lblTotalServiceCount.Text = dr["TotalServiceCount"].ToString();
            }
            if (!dr["TotalServiceProviderCount"].Equals(DBNull.Value))
            {
                lblTotalServiceProviderCount.Text = dr["TotalServiceProviderCount"].ToString();
            }
            if (!dr["TotalRatingCount"].Equals(DBNull.Value))
            {
                lblTotalRatingCount.Text = dr["TotalRatingCount"].ToString();
            }
            if (!dr["TotalRequestCount"].Equals(DBNull.Value))
            {
                lblTotalRequestCount.Text = dr["TotalRequestCount"].ToString();
            }
            if (!dr["LastMonthRequestCount"].Equals(DBNull.Value))
            {
                lblLastMonthRequestCount.Text = dr["LastMonthRequestCount"].ToString();
            }
            if (!dr["TotalAttendedRequestCount"].Equals(DBNull.Value))
            {
                lblTotalAttendedRequestCount.Text = dr["TotalAttendedRequestCount"].ToString();
            }
            if (!dr["LastMonthAttendedRequestCount"].Equals(DBNull.Value))
            {
                lblLastMonthAttendedRequestCount.Text = dr["LastMonthAttendedRequestCount"].ToString();
            }
            if (!dr["TotalInquiryCount"].Equals(DBNull.Value))
            {
                lblTotalInquiryCount.Text = dr["TotalInquiryCount"].ToString();
            }
            if (!dr["LastMonthInquiryCount"].Equals(DBNull.Value))
            {
                lblLastMonthInquiryCount.Text = dr["LastMonthInquiryCount"].ToString();
            }
            if (!dr["TotalAttendedInquiryCount"].Equals(DBNull.Value))
            {
                lblTotalAttendedInquiryCount.Text = dr["TotalAttendedInquiryCount"].ToString();
            }
            if (!dr["LastMonthAttendedInquiryCount"].Equals(DBNull.Value))
            {
                lblLastMonthAttendedInquiryCount.Text = dr["LastMonthAttendedInquiryCount"].ToString();
            }
            if (!dr["TotalCountryCount"].Equals(DBNull.Value))
            {
                lblTotalCountryCount.Text = dr["TotalCountryCount"].ToString();
            }
            if (!dr["TotalStateCount"].Equals(DBNull.Value))
            {
                lblTotalStateCount.Text = dr["TotalStateCount"].ToString();
            }
            if (!dr["TotalCityCount"].Equals(DBNull.Value))
            {
                lblTotalCityCount.Text = dr["TotalCityCount"].ToString();
            }
            if (!dr["TotalAdminUserCount"].Equals(DBNull.Value))
            {
                lblTotalAdminUserCount.Text = dr["TotalAdminUserCount"].ToString();
            }
        }
        #endregion Fill Controls
    }
}