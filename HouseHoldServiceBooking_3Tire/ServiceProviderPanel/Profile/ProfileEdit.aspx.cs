using HouseHoldServiceBooking;
using HouseHoldServiceBooking.BAL;
using HouseHoldServiceBooking.ENT;
using HouseHoldServiceBooking.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlTypes;

public partial class ServiceProviderPanel_Profile_ProfileEdit : System.Web.UI.Page
{
    #region Page Load Event
    protected void Page_Load(object sender, EventArgs e)
    {
        if (Session["ServiceProviderID"] == null)
        {
            Response.Redirect("~/ServiceProviderPanel/Login/LoginPage.aspx");
        }

        if (!Page.IsPostBack)
        {
            FillDropDownList();
            FillControl(Convert.ToInt32(Session["ServiceProviderID"]));
        }
    }
    #endregion Page Load Event

    #region Fill DropDownList
    private void FillDropDownList()
    {
        CommonFillMethods.FillDropDownListCountry(ddlHomeCountryID);
        CommonFillMethods.FillEmptyDropDownList(ddlHomeStateID, "State");
        CommonFillMethods.FillEmptyDropDownList(ddlHomeCityID, "City");
        CommonFillMethods.FillDropDownListCountry(ddlWorkCountryID);
        CommonFillMethods.FillEmptyDropDownList(ddlWorkStateID, "State");
        CommonFillMethods.FillEmptyDropDownList(ddlWorkCityID, "City");
        CommonFillMethods.FillDropDownListBank(ddlBankID);
    }
    #endregion Fill DropDownList

    #region SelectIndexChanged Events
    protected void ddlBankID_SelectedIndexChanged(object sender, EventArgs e)
    {
        if (ddlBankID.SelectedIndex > 0)
        {
            txtAccountNo.Enabled = true;
            txtIFSCCode.Enabled = true;
        }
        else
        {
            txtAccountNo.Text = String.Empty;
            txtIFSCCode.Text = String.Empty;
            txtAccountNo.Enabled = false;
            txtIFSCCode.Enabled = false;
        }
    }

    protected void ddlWorkCountryID_SelectedIndexChanged(object sender, EventArgs e)
    {
        CommonFillMethods.FillDropDownListStateByCountryID(ddlWorkStateID, Convert.ToInt32(ddlWorkCountryID.SelectedValue));
    }

    protected void ddlWorkStateID_SelectedIndexChanged(object sender, EventArgs e)
    {
        CommonFillMethods.FillDropDownListCityByStateID(ddlWorkCityID, Convert.ToInt32(ddlWorkStateID.SelectedValue));
    }

    protected void ddlHomeCountryID_SelectedIndexChanged(object sender, EventArgs e)
    {
        CommonFillMethods.FillDropDownListStateByCountryID(ddlHomeStateID, Convert.ToInt32(ddlHomeCountryID.SelectedValue));
    }

    protected void ddlHomeStateID_SelectedIndexChanged(object sender, EventArgs e)
    {
        CommonFillMethods.FillDropDownListCityByStateID(ddlHomeCityID, Convert.ToInt32(ddlHomeStateID.SelectedValue));
    }
    #endregion SelectIndexChanged Events

    #region Copy Address From Home address to Work Address
    protected void cbCopyAddress_CheckedChanged(object sender, EventArgs e)
    {
        if (cbCopyAddress.Checked)
        {
            txtWorkAddress.Text = txtHomeAddress.Text;
            ddlWorkCountryID.SelectedValue = ddlHomeCountryID.SelectedValue;
            CommonFillMethods.FillDropDownListStateByCountryID(ddlWorkStateID, Convert.ToInt32(ddlWorkCountryID.SelectedValue));
            ddlWorkStateID.SelectedValue = ddlHomeStateID.SelectedValue;
            CommonFillMethods.FillDropDownListCityByStateID(ddlWorkCityID, Convert.ToInt32(ddlWorkStateID.SelectedValue));
            ddlWorkCityID.SelectedValue = ddlHomeCityID.SelectedValue;
            txtWorkPincode.Text = txtHomePincode.Text;
        }

    }
    #endregion Copy Address From Home address to Work Address

    #region FillControl
    private void FillControl(SqlInt32 ServiceProviderID)
    {
        ServiceProviderBAL balServiceProvider = new ServiceProviderBAL();
        ServiceProviderENT entServiceProvider = balServiceProvider.SelectByPK(ServiceProviderID);

        if (!entServiceProvider.UserName.IsNull)
        {
            txtUserName.Text = entServiceProvider.UserName.Value;
            txtUserName.Enabled = false;
        }
        if (!entServiceProvider.Password.IsNull)
        {
            txtPassword.Enabled = false;
            txtReTypePassword.Enabled = false;
            txtPassword.Text = entServiceProvider.Password.Value;
            txtReTypePassword.Text = entServiceProvider.Password.Value;
        }
        if (!entServiceProvider.ServiceProviderName.IsNull)
        {
            txtServiceProviderName.Text = entServiceProvider.ServiceProviderName.Value;
            txtServiceProviderName.Enabled = false;
        }
        if (!entServiceProvider.MobileNo.IsNull)
        {
            txtMobileNo.Text = entServiceProvider.MobileNo.Value;
        }
        if (!entServiceProvider.DOB.IsNull)
        {
            txtDOB.Text = Convert.ToDateTime(entServiceProvider.DOB.Value).ToString(CV.DefaultFillDateFormat);
        }
        if (!entServiceProvider.HomeAddress.IsNull)
        {
            txtHomeAddress.Text = entServiceProvider.HomeAddress.Value;
        }
        if (!entServiceProvider.HomeCityID.IsNull)
        {
            CommonFillMethods.FillDropDownListCityByStateID(ddlHomeCityID, entServiceProvider.HomeStateID);
            ddlHomeCityID.SelectedValue = Convert.ToString(entServiceProvider.HomeCityID);
        }
        if (!entServiceProvider.HomeStateID.IsNull)
        {
            CommonFillMethods.FillDropDownListStateByCountryID(ddlHomeStateID, entServiceProvider.HomeCountryID);
            ddlHomeStateID.SelectedValue = Convert.ToString(entServiceProvider.HomeStateID.Value);
        }
        if (!entServiceProvider.HomeCountryID.IsNull)
        {
            ddlHomeCountryID.SelectedValue = Convert.ToString(entServiceProvider.HomeCountryID.Value);
        }
        if (!entServiceProvider.HomePincode.IsNull)
        {
            txtHomePincode.Text = entServiceProvider.HomePincode.Value;
        }

        if (!entServiceProvider.WorkAddress.IsNull)
        {
            txtWorkAddress.Text = entServiceProvider.WorkAddress.Value;
        }
        if (!entServiceProvider.WorkCityID.IsNull)
        {
            CommonFillMethods.FillDropDownListCityByStateID(ddlWorkCityID, entServiceProvider.WorkStateID);
            ddlWorkCityID.SelectedValue = Convert.ToString(entServiceProvider.WorkCityID);
        }
        if (!entServiceProvider.WorkStateID.IsNull)
        {
            CommonFillMethods.FillDropDownListStateByCountryID(ddlWorkStateID, entServiceProvider.WorkCountryID);
            ddlWorkStateID.SelectedValue = Convert.ToString(entServiceProvider.WorkStateID.Value);
        }
        if (!entServiceProvider.WorkCountryID.IsNull)
        {
            ddlWorkCountryID.SelectedValue = Convert.ToString(entServiceProvider.WorkCountryID.Value);
        }
        if (!entServiceProvider.WorkPincode.IsNull)
        {
            txtWorkPincode.Text = entServiceProvider.WorkPincode.Value;
        }

        if (!entServiceProvider.AadharCard.IsNull)
        {
            txtAadharCard.Text = entServiceProvider.AadharCard.Value;
        }
        if (!entServiceProvider.AadharCard.IsNull)
        {
            txtAadharCard.Text = entServiceProvider.AadharCard.Value;
        }
        if (!entServiceProvider.PANCardNo.IsNull)
        {
            txtPANCardNo.Text = entServiceProvider.PANCardNo.Value;
        }
        if (!entServiceProvider.GSTNo.IsNull)
        {
            txtGSTNo.Text = entServiceProvider.GSTNo.Value;
        }
        if (!entServiceProvider.BankID.IsNull)
        {
            ddlBankID.SelectedValue = entServiceProvider.BankID.Value.ToString();

            if (!entServiceProvider.AccountNo.IsNull)
            {
                txtAccountNo.Enabled = true;
                txtAccountNo.Text = entServiceProvider.AccountNo.Value;
            }
            if (!entServiceProvider.IFSCCode.IsNull)
            {
                txtIFSCCode.Enabled = true;
                txtIFSCCode.Text = entServiceProvider.IFSCCode.Value;
            }
        }
        btnAdd.Text = "Edit";
    }
    #endregion FillControl




    protected void btnAdd_Click(object sender, EventArgs e)
    {
        #region Local Variables
        String strErrorMessage = "";
        ServiceProviderENT entServiceProvider = new ServiceProviderENT();
        ServiceProviderBAL balServiceProvider = new ServiceProviderBAL();
        #endregion Local Variables

        #region Server Side Validation

        if (txtUserName.Text.Trim() == String.Empty)
            strErrorMessage += " - Enter UserName<br />";

        if (txtPassword.Text.Trim() == String.Empty)
            strErrorMessage += " - Enter Password<br />";

        if (txtReTypePassword.Text.Trim() == String.Empty)
            strErrorMessage += " - Re-Type Password<br />";

        if (txtReTypePassword.Text.Trim() != txtPassword.Text.Trim())
            strErrorMessage += " - Password do not match<br />";

        if (txtServiceProviderName.Text.Trim() == String.Empty)
            strErrorMessage += " - Enter Name<br />";

        if (txtWorkAddress.Text.Trim() == String.Empty)
            strErrorMessage += " - Enter Work Address<br />";

        if (ddlWorkCountryID.SelectedIndex <= 0)
            strErrorMessage += " - Select Work Country<br />";

        if (ddlWorkStateID.SelectedIndex <= 0)
            strErrorMessage += " - Select Work State<br />";

        if (ddlWorkCityID.SelectedIndex <= 0)
            strErrorMessage += " - Select Work City<br />";

        if (txtWorkPincode.Text.Trim() == String.Empty)
            strErrorMessage += " - Select Work Pincode<br />";

        if (ddlBankID.SelectedIndex > 0 && (txtAccountNo.Text.Trim() == String.Empty || txtIFSCCode.Text.Trim() == String.Empty))
            strErrorMessage += " - Enter Proper Bank Account Details<br />";

        if (cbTermsAndCondition.Checked == false)
            strErrorMessage += " - Agree to Terms and Conditions<br />";

        if (strErrorMessage != "")
        {
            strErrorMessage = "Solve the Following Error/s : <br />" + strErrorMessage;
            lblErrorMessage.Text = strErrorMessage;
            divError.Visible = true;
            divSuccess.Visible = false;
            return;
        }
        #endregion Server Side Validation

        #region Gather Data

        if (txtUserName.Text.Trim() != String.Empty)
            entServiceProvider.UserName = txtUserName.Text.Trim();

        if (txtPassword.Text.Trim() != String.Empty && txtPassword.Text.Trim() == txtReTypePassword.Text.Trim())
            entServiceProvider.Password = txtPassword.Text.Trim();

        if (txtServiceProviderName.Text.Trim() != String.Empty)
            entServiceProvider.ServiceProviderName = txtServiceProviderName.Text.Trim();

        if (txtMobileNo.Text.Trim() != String.Empty)
            entServiceProvider.MobileNo = txtMobileNo.Text.Trim();

        if (txtDOB.Text.Trim() != String.Empty)
            entServiceProvider.DOB = txtDOB.Text.Trim();

        if (txtHomeAddress.Text.Trim() != String.Empty)
            entServiceProvider.HomeAddress = txtHomeAddress.Text.Trim();

        if (txtHomePincode.Text.Trim() != String.Empty)
            entServiceProvider.HomePincode = txtHomePincode.Text.Trim();

        if (ddlHomeCountryID.SelectedIndex > 0)
            entServiceProvider.HomeCountryID = Convert.ToInt32(ddlHomeCountryID.SelectedValue);

        if (ddlHomeStateID.SelectedIndex > 0)
            entServiceProvider.HomeStateID = Convert.ToInt32(ddlHomeStateID.SelectedValue);

        if (ddlHomeCityID.SelectedIndex > 0)
            entServiceProvider.HomeCityID = Convert.ToInt32(ddlHomeCityID.SelectedValue);

        if (txtWorkAddress.Text.Trim() != String.Empty)
            entServiceProvider.WorkAddress = txtWorkAddress.Text.Trim();

        if (txtWorkPincode.Text.Trim() != String.Empty)
            entServiceProvider.WorkPincode = txtWorkPincode.Text.Trim();

        if (ddlWorkCountryID.SelectedIndex > 0)
            entServiceProvider.WorkCountryID = Convert.ToInt32(ddlWorkCountryID.SelectedValue);

        if (ddlWorkStateID.SelectedIndex > 0)
            entServiceProvider.WorkStateID = Convert.ToInt32(ddlWorkStateID.SelectedValue);

        if (ddlWorkCityID.SelectedIndex > 0)
            entServiceProvider.WorkCityID = Convert.ToInt32(ddlWorkCityID.SelectedValue);

        if (txtAadharCard.Text.Trim() != String.Empty)
            entServiceProvider.AadharCard = txtAadharCard.Text.Trim();

        if (txtPANCardNo.Text.Trim() != String.Empty)
            entServiceProvider.PANCardNo = txtPANCardNo.Text.Trim();

        if (txtGSTNo.Text.Trim() != String.Empty)
            entServiceProvider.GSTNo = txtGSTNo.Text.Trim();

        if (ddlBankID.SelectedIndex > 0)
            entServiceProvider.BankID = Convert.ToInt32(ddlBankID.SelectedValue);

        if (txtAccountNo.Text.Trim() != String.Empty)
            entServiceProvider.AccountNo = txtAccountNo.Text.Trim();

        if (txtIFSCCode.Text.Trim() != String.Empty)
            entServiceProvider.IFSCCode = txtIFSCCode.Text.Trim();

        if (Session["ServiceProviderID"] != null)
        {
            entServiceProvider.ServiceProviderID = Convert.ToInt32(Session["ServiceProviderID"]);
        }

        #endregion Gather Data

        #region Insert/Update Operation

        if (balServiceProvider.UpdateByServiceProvider(entServiceProvider))
        {
            Response.Redirect("~/ServiceProviderPanel/Profile/ProfileView.aspx");
        }
        else
        {
            lblErrorMessage.Text = "Not Inserted";
            divSuccess.Visible = false;
            divError.Visible = true;
        }

        #endregion Insert/Update Operation
    }
}