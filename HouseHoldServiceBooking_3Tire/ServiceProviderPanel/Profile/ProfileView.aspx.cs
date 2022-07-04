using HouseHoldServiceBooking.BAL;
using HouseHoldServiceBooking.ENT;
using HouseHoldServiceBooking.DAL;
using HouseHoldServiceBooking;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;

public partial class ServiceProviderPanel_Profile_View : System.Web.UI.Page
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
            FillDetails();
        }
    }
    #endregion Load Event

    #region Fill Control
    private void FillDetails()
    {
        ServiceProviderBAL balServiceProvider = new ServiceProviderBAL();
        DataTable dtServiceProvider = balServiceProvider.SelectForProfileView(Convert.ToInt32(Session["ServiceProviderID"]));

        #region Fill Control
        if (dtServiceProvider != null && dtServiceProvider.Rows.Count > 0)
        {
            foreach (DataRow dr in dtServiceProvider.Rows)
            {
                if (!dr["UserName"].Equals(DBNull.Value))
                {
                    lblUserName.Text = Convert.ToString(dr["UserName"]);
                }
                if (!dr["DOB"].Equals(DBNull.Value))
                {
                    lblDOB.Text = Convert.ToDateTime(dr["DOB"]).ToString(CV.DefaultDateFormat);
                }
                if (!dr["ServiceProviderName"].Equals(DBNull.Value))
                {
                    lblServiceProviderName.Text = Convert.ToString(dr["ServiceProviderName"]);
                }
                if (!dr["MobileNo"].Equals(DBNull.Value))
                {
                    lblMobileNo.Text = Convert.ToString(dr["MobileNo"]);
                }
                if (!dr["HomeAddress"].Equals(DBNull.Value))
                {
                    lblHomeAddress.Text = Convert.ToString(dr["HomeAddress"]);
                }
                if (!dr["HomeCity"].Equals(DBNull.Value))
                {
                    lblHomeCity.Text = Convert.ToString(dr["HomeCity"]);
                }
                if (!dr["HomePincode"].Equals(DBNull.Value))
                {
                    lblHomePincode.Text = Convert.ToString(dr["HomePincode"]);
                }
                if (!dr["HomeState"].Equals(DBNull.Value))
                {
                    lblHomeState.Text = Convert.ToString(dr["HomeState"]);
                }
                if (!dr["HomeCountry"].Equals(DBNull.Value))
                {
                    lblHomeCountry.Text = Convert.ToString(dr["HomeCountry"]);
                }

                if (!dr["WorkAddress"].Equals(DBNull.Value))
                {
                    lblWorkAddress.Text = Convert.ToString(dr["WorkAddress"]);
                }
                if (!dr["WorkCity"].Equals(DBNull.Value))
                {
                    lblWorkCity.Text = Convert.ToString(dr["WorkCity"]);
                }
                if (!dr["WorkPincode"].Equals(DBNull.Value))
                {
                    lblWorkPincode.Text = Convert.ToString(dr["WorkPincode"]);
                }
                if (!dr["WorkState"].Equals(DBNull.Value))
                {
                    lblWorkState.Text = Convert.ToString(dr["WorkState"]);
                }
                if (!dr["WorkCountry"].Equals(DBNull.Value))
                {
                    lblWorkCountry.Text = Convert.ToString(dr["WorkCountry"]);
                }

                if (!dr["AadharCard"].Equals(DBNull.Value))
                {
                    lblAadharCard.Text = Convert.ToString(dr["AadharCard"]);
                }
                if (!dr["PANCardNo"].Equals(DBNull.Value))
                {
                    lblPANCardNo.Text = Convert.ToString(dr["PANCardNo"]);
                }
                if (!dr["GSTNo"].Equals(DBNull.Value))
                {
                    lblGSTNo.Text = Convert.ToString(dr["GSTNo"]);
                }
                if (!dr["BankName"].Equals(DBNull.Value))
                {
                    lblBank.Text = Convert.ToString(dr["BankName"]);
                }
                if (!dr["AccountNo"].Equals(DBNull.Value))
                {
                    lblAccountNo.Text = Convert.ToString(dr["AccountNo"]);
                }
                if (!dr["IFSCCode"].Equals(DBNull.Value))
                {
                    lblIFSCCode.Text = Convert.ToString(dr["IFSCCode"]);
                }
                if (!dr["ProfilePhotoPath"].Equals(DBNull.Value))
                {
                    imgProfilePhotoPath.ImageUrl = Convert.ToString(dr["ProfilePhotoPath"]);
                }
                else
                {
                    imgProfilePhotoPath.ImageUrl = "~/Images/DefaultMaleProfileImage.jpg";
                }
            }
        }
        #endregion Fill Control

    }
    #endregion Fill Control

    protected void btnEditProfile_Click(object sender, EventArgs e)
    {
        Response.Redirect("~/ServiceProviderPanel/Profile/ProfileEdit.aspx");
    }
}