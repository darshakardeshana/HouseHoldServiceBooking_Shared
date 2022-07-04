using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class ServiceProviderPanel_Default : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        #region Check Valid User
        if (Session["ServiceProviderID"] == null)
        {
            Response.Redirect("~/ServiceProviderPanel/Login/LoginPage.aspx");
        }
        #endregion Check Valid User

        Response.Redirect("~/ServiceProviderPanel/ServiceRequests/ServiceRequestsList.aspx");
    }
}