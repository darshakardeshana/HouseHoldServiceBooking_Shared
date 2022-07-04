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

public partial class AdminPanel_State_StateAddEdit : System.Web.UI.Page
{
    #region Load Event
    protected void Page_Load(object sender, EventArgs e)
    {
        if (Session["UserID"] == null)
        {
            Response.Redirect("~/AdminPanel/Login/LoginPage.aspx");
        }
        if (!Page.IsPostBack)
        {
            FillCountryDropDownList();
            if (Request.QueryString["StateID"] != null)
            {
                lblPageHeaderText.Text = "State Edit";
                btnAdd.Text = "Edit";
                FillControls(Convert.ToInt32(Request.QueryString["StateID"]));
            }
            else
            {
                lblPageHeaderText.Text = "State Add";
                btnAdd.Text = "Add";
            }
        }
    }
    #endregion Load Event

    #region Button : Add
    protected void btnAdd_Click(object sender, EventArgs e)
    {
        #region Local Variables
        String strErrorMessage = "";
        #endregion Local Variables

        #region Server Side Validation

        if (txtStateName.Text.Trim() == "")
            strErrorMessage += " - Enter State Name<br />";

        if (ddlCountryID.SelectedIndex < 0)
            strErrorMessage += " - Select Country<br />";

        if (strErrorMessage != "")
        {
            lblErrorMessage.Text = strErrorMessage;
            divError.Visible = true;
            divSuccess.Visible = false;
            return;
        }

        #endregion Server Side Validation

        #region Collect Form Data

        StateENT entState = new StateENT();

        if (txtStateName.Text.Trim() != "")
        {
            entState.StateName = txtStateName.Text.Trim();
        }
        if (ddlCountryID.SelectedIndex >= 0)
        {
            entState.CountryID = Convert.ToInt32(ddlCountryID.SelectedValue.ToString().Trim());
        }
        if (Session["UserID"] != null)
        {
            entState.ModifiedBy = Convert.ToInt32(Session["UserID"].ToString().Trim());
            entState.UserID = Convert.ToInt32(Session["UserID"].ToString().Trim());
        }
        entState.CreationDate = CV.CurrentDate;
        entState.ModificationDate = CV.CurrentDate;

        #endregion Collect Form Data

        #region Insert / Update Record
        StateBAL balState = new StateBAL();

        if (Request.QueryString["StateID"] == null)
        {
            if (balState.Insert(entState))
            {
                ClearControls();
                lblSuccessMessage.Text = "Data Inserted Successfully";
                divError.Visible = false;
                divSuccess.Visible = true;
            }
            else
            {
                lblErrorMessage.Text = balState.Message;
                divError.Visible = true;
                divSuccess.Visible = false;
            }
        }
        else
        {
            entState.StateID = Convert.ToInt32(Request.QueryString["StateID"]);
            if (balState.Update(entState))
            {
                ClearControls();
                Response.Redirect("~/AdminPanel/State/StateList.aspx");
            }
            else
            {
                lblErrorMessage.Text = balState.Message;
                divError.Visible = true;
                divSuccess.Visible = false;
            }
        }
        #endregion Insert / Update Record
    }
    #endregion Button : Save

    #region Fill Controls

    private void FillControls(SqlInt32 StateID)
    {
        StateENT entState = new StateENT();
        StateBAL balState = new StateBAL();

        entState = balState.SelectByPK(StateID);

        if (!entState.StateName.IsNull)
        {
            txtStateName.Text = entState.StateName.ToString().Trim();
        }
        if (!entState.CountryID.IsNull)
        {
            ddlCountryID.SelectedValue = Convert.ToString(entState.CountryID);
        }
    }

    #endregion Fill Controls

    #region Clear Controls

    private void ClearControls()
    {
        txtStateName.Text = "";
        txtStateName.Focus();
        ddlCountryID.SelectedIndex = 0;
    }

    #endregion Clear Controls

    #region Nagivate URL
    protected void btnStateList_Click(object sender, EventArgs e)
    {
        Response.Redirect("~/AdminPanel/State/StateList.aspx");
    }
    #endregion Nagivate URL

    #region Fill Country DropDownList
    private void FillCountryDropDownList()
    {
        CommonFillMethods.FillDropDownListCountry(ddlCountryID);
    }
    #endregion Fill Country DropDownList
}