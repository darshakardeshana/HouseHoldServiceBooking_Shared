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

public partial class AdminPanel_City_CityAddEdit : System.Web.UI.Page
{
    #region Page Load Event
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
            FillCountryDropDownList();
            if (Request.QueryString["CityID"] != null)
            {
                lblPageHeaderText.Text = "City Edit";
                btnAdd.Text = "Update";
                FillCityForm(Convert.ToInt32(Request.QueryString["CityID"]));
            }
            else
            {
                lblPageHeaderText.Text = "Add City";
            }
        }
    }
    #endregion Page Load Event

    #region Add City
    protected void btnAdd_Click(object sender, EventArgs e)
    {

        #region Local Variables
        CityENT entCity = new CityENT();
        CityBAL balCity = new CityBAL();
        SqlInt32 UserID = SqlInt32.Null;
        String strErrorMessage = "";
        #endregion Local Variables

        #region Server Side Validation
        if (txtCityName.Text == String.Empty)
        {
            strErrorMessage += "Enter City Name" + "<br>";
        }

        if (ddlCountryID.SelectedIndex <= 0)
        {
            strErrorMessage += "Select Proper Country" + "<br>";
        }

        if (ddlStateID.SelectedIndex <= 0)
        {
            strErrorMessage += "Select Proper State" + "<br>";
        }

        if (strErrorMessage != "")
        {
            lblErrorMessage.Text = strErrorMessage;
        }
        #endregion Server Side Validation

        #region Read Form value
        if (txtCityName.Text != String.Empty)
        {
            entCity.CityName = txtCityName.Text.Trim();
        }

        if (ddlStateID.SelectedIndex > 0)
        {
            entCity.StateID = Convert.ToInt32(ddlStateID.SelectedValue.ToString().Trim());
        }

        if (Session["UserID"] != null)
        {
            entCity.UserID = Convert.ToInt32(Session["UserID"].ToString().Trim());
            entCity.ModifiedBy = Convert.ToInt32(Session["UserID"].ToString().Trim());
        }
        entCity.CreationDate = DateTime.Now;
        entCity.ModificationDate = DateTime.Now;
        #endregion Read Form value

        if (Request.QueryString["CityID"] == null)
        {
            if (balCity.Insert(entCity))
            {
                ClearControls();
                lblSuccessMessage.Text = "Data Inserted Successfully";
                divError.Visible = false;
                divSuccess.Visible = true;
            }
            else
            {
                lblErrorMessage.Text = balCity.Message;
                divError.Visible = true;
                divSuccess.Visible = false;
            }
        }
        else
        {
            entCity.CityID = Convert.ToInt32(Request.QueryString["CityID"]);
            if (balCity.Update(entCity))
            {
                ClearControls();
                Response.Redirect("~/AdminPanel/City/CityList.aspx");
            }
            else
            {
                lblErrorMessage.Text = balCity.Message;
                divError.Visible = true;
                divSuccess.Visible = false;
            }
        }

    }
    #endregion Add City

    #region Clear Controls

    private void ClearControls()
    {
        txtCityName.Text = "";
        ddlCountryID.SelectedIndex = 0;
        ddlStateID.Items.Clear();
        txtCityName.Focus();
    }

    #endregion Clear Controls

    #region Fill Country DropDownList
    private void FillCountryDropDownList()
    {
        CommonFillMethods.FillDropDownListCountry(ddlCountryID);
    }
    #endregion Fill Country DropDownList

    #region ddlCountry - Selected Index Changed
    protected void ddlCountryID_SelectedIndexChanged(object sender, EventArgs e)
    {
        CommonFillMethods.FillDropDownListStateByCountryID(ddlStateID, Convert.ToInt32(ddlCountryID.SelectedValue));
    }
    #endregion ddlCountry - Selected Index Changed

    #region Fill City Form
    private void FillCityForm(SqlInt32 CityID)
    {
        CityENT entCity = new CityENT();
        CityBAL balCity = new CityBAL();
        SqlInt32 UserID = Convert.ToInt32(Session["UserID"]);
        entCity = balCity.SelectByPK(CityID);

        if (!entCity.CityName.IsNull)
            txtCityName.Text = entCity.CityName.Value.ToString();

        if (!entCity.StateID.IsNull)
        {
            StateBAL balState = new StateBAL();
            StateENT entState = balState.SelectByPK(entCity.StateID);
            ddlCountryID.SelectedValue = Convert.ToString(entState.CountryID);
            CommonFillMethods.FillDropDownListStateByCountryID(ddlStateID, entState.CountryID);
            ddlStateID.SelectedValue = Convert.ToString(entCity.StateID);
        }
    }
    #endregion Fill City Form
}