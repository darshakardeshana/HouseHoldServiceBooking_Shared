using HouseHoldServiceBooking;
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

public partial class AdminPanel_Country_CountryAddEdit : System.Web.UI.Page
{
    #region Load Event
    protected void Page_Load(object sender, EventArgs e)
    {
        #region Check Valid User
        if (Session["UserID"] == null)
        {
            Response.Redirect("~/AdminPanel/Login/LoginPage.aspx");
        }
        #endregion Check Valid User

        if (!Page.IsPostBack)
        {
            if (Request.QueryString["CountryID"] != null)
            {
                lblPageHeader.Text = "Country Edit";
                btnAdd.Text = "Update";
                FillCountryForm(Convert.ToInt32(Request.QueryString["CountryID"]));
            }
            else
            {
                lblPageHeader.Text = "Add Country";
            }
        }
    }
    #endregion Load Event

    #region Button : Add Click
    protected void btnAdd_Click(object sender, EventArgs e)
    {
        #region Local Variables
        String strErrorMessage = "";
        #endregion Local Variables

        #region Server Side Validation

        if (txtCountryName.Text.Trim() == "")
            strErrorMessage += " - Enter Country Name<br />";

        if (txtCountryCode.Text.Trim() == "")
            strErrorMessage += " - Enter Country Code<br />";

        if (strErrorMessage != "")
        {
            lblErrorMessage.Text = strErrorMessage;
            divError.Visible = true;
            divSuccess.Visible = false;
            return;
        }

        #endregion Server Side Validation

        CountryENT entCountry = new CountryENT();

        #region Collect Form Data
        if (txtCountryName.Text.Trim() != null)
        {
            entCountry.CountryName = txtCountryName.Text.Trim();
        }
        if (txtCountryCode.Text.Trim() != null)
        {
            entCountry.CountryCode= txtCountryCode.Text.Trim();
        }
        if (Session["UserID"] != null)
        {
            entCountry.UserID = Convert.ToInt32(Session["UserID"].ToString().Trim());
            entCountry.ModifiedBy = Convert.ToInt32(Session["UserID"].ToString().Trim());
        }
        entCountry.CreationDate = CV.CurrentDate;
        entCountry.ModificationDate = CV.CurrentDate;
        #endregion Collect Form Data

        CountryBAL balCountry = new CountryBAL();

        if (Request.QueryString["CountryID"] == null)
        {
            #region Insert Country
            if (balCountry.Insert(entCountry))
            {
                ClearControls();
                lblSuccessMessage.Text = "Data Inserted Successfully";
                divError.Visible = false;
                divSuccess.Visible = true;
            }
            else
            {
                lblErrorMessage.Text = balCountry.Message;
                divError.Visible = true;
                divSuccess.Visible = false;
            }
            #endregion Insert Country
        }
        else
        {
            #region Update Country
            entCountry.CountryID = Convert.ToInt32(Request.QueryString["CountryID"]);
            if (balCountry.Update(entCountry))
            {
                ClearControls();
                Response.Redirect("~/AdminPanel/Country/CountryList.aspx");
            }
            else
            {
                lblErrorMessage.Text = balCountry.Message;
                divError.Visible = true;
                divSuccess.Visible = false;
            }
            #endregion Update Country
        }
    }
    #endregion Button : Add Click

    #region Fill Country Form
    private void FillCountryForm(SqlInt32 CountryID)
    {
        CountryBAL balCountry = new CountryBAL();
        CountryENT entCountry = new CountryENT();
        entCountry = balCountry.SelectByPK(CountryID);

        #region Fill Controls
        if (!entCountry.CountryName.IsNull)
        {
            txtCountryName.Text = entCountry.CountryName.ToString().Trim();
        }
        if (!entCountry.CountryCode.IsNull)
        {
            txtCountryCode.Text = entCountry.CountryCode.ToString().Trim();
        }
        #endregion Fill Controls
    }
    #endregion Fill Country Form

    #region Clear Controls

    private void ClearControls()
    {
        txtCountryName.Text = "";
        txtCountryName.Focus();
        txtCountryCode.Text = "";
    }

    #endregion Clear Controls

}
