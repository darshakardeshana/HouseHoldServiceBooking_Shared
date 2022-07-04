using HouseHoldServiceBooking.BAL;
using HouseHoldServiceBooking;
using HouseHoldServiceBooking.DAL;
using HouseHoldServiceBooking.ENT;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class AdminPanel_ServiceProviderServices_ServiceProviderServicesList : System.Web.UI.Page
{
    #region Load Event
    protected void Page_Load(object sender, EventArgs e)
    {
        if (Session["ServiceProviderID"] == null)
        {
            Response.Redirect("~/ServiceProviderPanel/Login/LoginPage.aspx");
        }

        if (!Page.IsPostBack)
        {
            FillServiceProviderServicesGridView();
        }
    }
    #endregion Load Event

    #region Fill Service Provider Services Grid View
    private void FillServiceProviderServicesGridView()
    {
        ServiceProviderServicesBAL balServiceProviderServices = new ServiceProviderServicesBAL();
        DataTable dtServiceProviderServices = new DataTable();
        dtServiceProviderServices = balServiceProviderServices.SelectByServiceProviderID(Convert.ToInt32(Session["ServiceProviderID"]));

        if (dtServiceProviderServices != null && dtServiceProviderServices.Rows.Count > 0)
        {
            gvServiceProviderServicesList.DataSource = dtServiceProviderServices;
            gvServiceProviderServicesList.DataBind();
        }
        else
        {
            CommonFunctions.BindEmptyGridView(gvServiceProviderServicesList);
        }
    }
    #endregion Fill Service Provider Services Grid View

    protected void gvServiceProviderServicesList_RowCommand(object sender, GridViewCommandEventArgs e)
    {
        if(e.CommandName == "DeleteRecord")
        {
            if(e.CommandArgument != null)
            {
                ServiceProviderServicesBAL balServiceProviderServices = new ServiceProviderServicesBAL();
                if(balServiceProviderServices.Delete(Convert.ToInt32(e.CommandArgument), Convert.ToInt32(Session["UserID"])))
                {
                    lblSuccessMessage.Text = "Delete Successfully";
                    divSuccess.Visible = true;
                    divError.Visible = false;
                    FillServiceProviderServicesGridView();
                }
                else
                {
                    lblErrorMessage.Text = balServiceProviderServices.Message;
                    divSuccess.Visible = false;
                    divError.Visible = true;
                }
            }
        }
    }
}