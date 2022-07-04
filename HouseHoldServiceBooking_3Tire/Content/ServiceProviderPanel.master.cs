using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Content_ServiceProviderPanel : System.Web.UI.MasterPage
{
    protected void Page_Load(object sender, EventArgs e)
    {
        lblDisplayName.Text = Session["ServiceProviderName"].ToString().Trim();
        if (Session["ProfilePhotoPath"] != null)
            imgProfilePhotoPath.ImageUrl = Session["ProfilePhotoPath"].ToString().Trim();
        else
            imgProfilePhotoPath.ImageUrl = "~/Images/DefaultMaleProfileImage.jpg";
    }

    protected void btnLogout_Click(object sender, EventArgs e)
    {
        Session.Clear();
        Response.Redirect("~/ServiceProviderPanel/Login/LoginPage.aspx");
    }
}
