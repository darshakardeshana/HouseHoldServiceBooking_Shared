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

public partial class AdminPanel_Service_ServiceList : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if(!Page.IsPostBack)
        {
            FillServiceGridView();
        }
    }

    #region Fill Service Grid View
    private void FillServiceGridView()
    {
        ServiceBAL balService = new ServiceBAL();
        DataTable dtService = new DataTable();
        dtService = balService.SelectAll();

        if (dtService != null && dtService.Rows.Count > 0)
        {
            gvServiceList.DataSource = dtService;
            gvServiceList.DataBind();
        }
    }
    #endregion Fill Service Grid View

    #region Grid View Row Command
    protected void gvService_RowCommand(object sender, GridViewCommandEventArgs e)
    {
        if (e.CommandName == "DeleteRecord")
        {
            if (e.CommandArgument != null)
            {
                DeleteService(Convert.ToInt32(e.CommandArgument.ToString().Trim()));
            }
        }
    }
    #endregion Grid View Row Command

    #region Delete Service 
    private void DeleteService(SqlInt32 ServiceID)
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

        ServiceBAL balService = new ServiceBAL();
        if (balService.Delete(ServiceID, UserID))
        {
            lblSuccessMessage.Text = "Deleted Successfully";
            divError.Visible = false;
            divSuccess.Visible = true;
        }
        else
        {
            lblErrorMessage.Text = balService.Message;
            divError.Visible = true;
            divSuccess.Visible = false;
        }

        FillServiceGridView();
    }
    #endregion Delete Service
}