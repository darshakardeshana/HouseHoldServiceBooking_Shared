using HouseHoldServiceBooking.BAL;
using HouseHoldServiceBooking;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlTypes;

public partial class ServiceProviderPanel_ServiceRequests_ServiceRequests : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        #region Check Valid User
        if (Session["ServiceProviderID"] == null)
        {
            Response.Redirect("~/ServiceProviderPanel/Login/LoginPage.aspx");
        }
        #endregion Check Valid User

        #region PostBack Event
        if (!Page.IsPostBack)
        {
            FillRequestGridView();
        }
        #endregion PostBack Event
    }

    #region Fill Service Provider Services Grid View
    private void FillRequestGridView()
    {
        RequestBAL balRequest = new RequestBAL();
        DataTable dtRequest = new DataTable();
        dtRequest = balRequest.SelectByServiceProviderID(Convert.ToInt32(Session["ServiceProviderID"]));

        if (dtRequest != null && dtRequest.Rows.Count > 0)
        {
            gvRequestList.DataSource = dtRequest;
            gvRequestList.DataBind();
        }
        else
        {
            CommonFunctions.BindEmptyGridView(gvRequestList);
        }
    }
    #endregion Fill Service Provider Services Grid View

    protected void gvRequestList_RowCommand(object sender, GridViewCommandEventArgs e)
    {
        SqlBoolean IsAttended = SqlBoolean.Null;
        RequestBAL balRequest = new RequestBAL();
        if(e.CommandName == "Attended")
        {
            IsAttended = true;
            if (e.CommandArgument != null)
            {
                if(balRequest.UpdateIsAttended(Convert.ToInt32(e.CommandArgument), IsAttended))
                {
                    lblSuccessMessage.Text = "Request with Unique No. <b>" + e.CommandArgument.ToString() + "</b> marked Attended.";
                    divSuccess.Visible = true;
                    divError.Visible = false;
                }
                else
                {
                    lblErrorMessage.Text = "Record not Updated successfully";
                    divSuccess.Visible = false;
                    divError.Visible = true;
                }
            }
        }
        if (e.CommandName == "NotAttended")
        {
            IsAttended = false;
            if (e.CommandArgument != null)
            {
                if (balRequest.UpdateIsAttended(Convert.ToInt32(e.CommandArgument), IsAttended))
                {
                    lblSuccessMessage.Text = "Request with Unique No. <b>" + e.CommandArgument.ToString() + "</b> marked Not Attended.";
                    divSuccess.Visible = true;
                    divError.Visible = false;
                }
                else
                {
                    lblErrorMessage.Text = "Record not Updated successfully";
                    divSuccess.Visible = false;
                    divError.Visible = true;
                }
            }
        }
        FillRequestGridView();
    }
}