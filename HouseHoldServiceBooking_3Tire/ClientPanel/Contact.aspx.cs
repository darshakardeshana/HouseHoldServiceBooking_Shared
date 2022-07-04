using HouseHoldServiceBooking;
using HouseHoldServiceBooking.BAL;
using HouseHoldServiceBooking.ENT;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class ClientPanel_Contact : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }

    protected void btnSubmit_Click(object sender, EventArgs e)
    {
        #region Local Variables
        String strErrorMessage = "";
        InquiryENT entInquiry = new InquiryENT();
        InquiryBAL balInquiry = new InquiryBAL();
        #endregion Local Variables

        #region Server Side Validation

        if (txtName.Text.Trim() == "")
            strErrorMessage += " - Enter Name<br />";

        if (txtEmail.Text.Trim() == "")
            strErrorMessage += " - Enter Email<br />";

        if (strErrorMessage != "")
        {
            lblErrorMessage.Text = strErrorMessage;
            divError.Visible = true;
            divSuccess.Visible = false;
            return;
        }

        #endregion Server Side Validation

        #region Collect Form Data
        if (txtName.Text.Trim() != null)
        {
            entInquiry.Name = txtName.Text.Trim();
        }
        if (txtEmail.Text.Trim() != null)
        {
            entInquiry.Email = txtEmail.Text.Trim();
        }
        if (txtMobileNo.Text.Trim() != null)
        {
            entInquiry.MobileNo = txtMobileNo.Text.Trim();
        }
        if (txtLocation.Text.Trim() != null)
        {
            entInquiry.Location = txtLocation.Text.Trim();
        }
        if (txtSubject.Text.Trim() != null)
        {
            entInquiry.Subject = txtSubject.Text.Trim();
        }

        entInquiry.CreationDate = CV.CurrentDate;
        entInquiry.ModificationDate = CV.CurrentDate;
        entInquiry.IsAttended = false;
        #endregion Collect Form Data

        #region Insert Inquiry
        if (balInquiry.Insert(entInquiry))
        {
            ClearControls();
            lblSuccessMessage.Text = "Message is Successfully Sent.";
            divError.Visible = false;
            divSuccess.Visible = true;
        }
        else
        {
            lblErrorMessage.Text = balInquiry.Message;
            divError.Visible = true;
            divSuccess.Visible = false;
        }
        #endregion Insert Inquiry
    }

    #region Clear Controls
    private void ClearControls()
    {
        txtName.Text = String.Empty;
        txtEmail.Text = String.Empty;
        txtMobileNo.Text = String.Empty;
        txtLocation.Text = String.Empty;
        txtSubject.Text = String.Empty;
    }
    #endregion Clear Controls
}