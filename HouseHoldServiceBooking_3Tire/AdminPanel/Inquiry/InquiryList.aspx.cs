using HouseHoldServiceBooking.BAL;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlTypes;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class AdminPanel_Inquiry_InquiryList : System.Web.UI.Page
{
    #region Load Event
    protected void Page_Load(object sender, EventArgs e)
    {
        #region Check Valid User
        if (Session["UserID"] == null)
            Response.Redirect("~/AdminPanel/Login/LoginPage.aspx");

        #endregion Check Valid User

        if (!Page.IsPostBack)
        {
            FillInquiryGridView();
        }
    }
    #endregion Load Event

    #region Fill Inquiry GridView
    private void FillInquiryGridView()
    {
        InquiryBAL balInquiry = new InquiryBAL();
        DataTable dtInquiry = new DataTable();
        dtInquiry = balInquiry.SelectAll();

        if (dtInquiry != null && dtInquiry.Rows.Count > 0)
        {
            gvInquiryList.DataSource = dtInquiry;
            gvInquiryList.DataBind();
        }
    }
    #endregion Fill Inquiry GridView

    #region Grid View Command
    protected void gvInquiryList_RowCommand(object sender, GridViewCommandEventArgs e)
    {
        SqlBoolean IsAttended = SqlBoolean.Null;
        InquiryBAL balInquiry = new InquiryBAL();
        if (e.CommandName == "Attended")
        {
            IsAttended = true;
            if (e.CommandArgument != null)
            {
                if (balInquiry.UpdateIsAttended(Convert.ToInt32(e.CommandArgument), IsAttended))
                {
                    lblSuccessMessage.Text = "Inquiry with Unique No. <b>" + e.CommandArgument.ToString() + "</b> marked Attended.";
                    divSuccess.Visible = true;
                    divError.Visible = false;
                }
                else
                {
                    lblErrorMessage.Text = "Record not Updated successfully";
                    divSuccess.Visible = false;
                    divError.Visible = true;
                }
            }
        }
        if (e.CommandName == "NotAttended")
        {
            IsAttended = false;
            if (e.CommandArgument != null)
            {
                if (balInquiry.UpdateIsAttended(Convert.ToInt32(e.CommandArgument), IsAttended))
                {
                    lblSuccessMessage.Text = "Inquiry with Unique No. <b>" + e.CommandArgument.ToString() + "</b> marked Not Attended.";
                    divSuccess.Visible = true;
                    divError.Visible = false;
                }
                else
                {
                    lblErrorMessage.Text = "Record not Updated successfully";
                    divSuccess.Visible = false;
                    divError.Visible = true;
                }
            }
        }
        FillInquiryGridView();
    }
    #endregion Grid View Command
}