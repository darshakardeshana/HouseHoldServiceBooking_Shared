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

public partial class AdminPanel_Bank_BankAddEdit : System.Web.UI.Page
{
    #region Load Event
    protected void Page_Load(object sender, EventArgs e)
    {
        if(Session["UserID"] == null)
        {
            Response.Redirect("~/AdminPanel/Login/LoginPage.aspx");
        }
        if (!Page.IsPostBack)
        {
            if (Request.QueryString["BankID"] != null)
            {
                lblPageHeaderText.Text = "Bank Edit";
                btnAdd.Text = "Edit";
                FillControls(Convert.ToInt32(Request.QueryString["BankID"]));
            }
            else
            {
                lblPageHeaderText.Text = "Bank Add";
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

        if (txtBankName.Text.Trim() == "")
            strErrorMessage += " - Enter Bank Name<br />";

        if (strErrorMessage != "")
        {
            lblErrorMessage.Text = strErrorMessage;
            divError.Visible = true;
            divSuccess.Visible = false;
            return;
        }

        #endregion Server Side Validation

        #region Collect Form Data

        BankENT entBank = new BankENT();

        if (txtBankName.Text.Trim() != "")
        {
            entBank.BankName = txtBankName.Text.Trim();
        }
        if (Session["UserID"] != null)
        {
            entBank.ModifiedBy = Convert.ToInt32(Session["UserID"].ToString().Trim());
            entBank.UserID = Convert.ToInt32(Session["UserID"].ToString().Trim());
        }
        entBank.CreationDate = CV.CurrentDate;
        entBank.ModificationDate = CV.CurrentDate;

        #endregion Collect Form Data

        BankBAL balBank = new BankBAL();

        if (Request.QueryString["BankID"] == null)
        {
            if (balBank.Insert(entBank))
            {
                ClearControls();
                lblSuccessMessage.Text = "Data Inserted Successfully";
                divError.Visible = false;
                divSuccess.Visible = true;
            }
            else
            {
                lblErrorMessage.Text = balBank.Message;
                divError.Visible = true;
                divSuccess.Visible = false;
            }
        }
        else
        {
            entBank.BankID = Convert.ToInt32(Request.QueryString["BankID"]);
            if (balBank.Update(entBank))
            {
                ClearControls();
                Response.Redirect("~/AdminPanel/Bank/BankList.aspx");
            }
            else
            {
                lblErrorMessage.Text = balBank.Message;
                divError.Visible = true;
                divSuccess.Visible = false;
            }
        }
    }
    #endregion Button : Save

    #region Fill Controls

    private void FillControls(SqlInt32 BankID)
    {
        BankENT entBank = new BankENT();
        BankBAL balBank = new BankBAL();

        entBank = balBank.SelectByPK(BankID);

        if (!entBank.BankName.IsNull)
            txtBankName.Text = entBank.BankName.Value.ToString();
    }

    #endregion Fill Controls

    #region Clear Controls

    private void ClearControls()
    {
        txtBankName.Text = "";
        txtBankName.Focus();
    }

    #endregion Clear Controls

    #region Nagivate URL
    protected void btnBankList_Click(object sender, EventArgs e)
    {
        Response.Redirect("~/AdminPanel/Bank/BankList.aspx");
    }
    #endregion Nagivate URL
}