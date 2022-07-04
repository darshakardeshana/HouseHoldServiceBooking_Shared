using HouseHoldServiceBooking;
using HouseHoldServiceBooking.BAL;
using HouseHoldServiceBooking.ENT;
using System;
using System.Collections.Generic;
using System.Data.SqlTypes;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class AdminPanel_Rating_RatingAddEdit : System.Web.UI.Page
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
            FillDropDownList();
            if (Request.QueryString["RatingID"] != null)
            {
                lblPageHeader.Text = "Rating Edit";
                btnAdd.Text = "Update";
                FillRatingForm(Convert.ToInt32(Request.QueryString["RatingID"]));
            }
            else
            {
                lblPageHeader.Text = "Add Rating";
            }
        }
    }
    #endregion Load Event

    #region Star Rating System
    static int rating = 0;
    protected void Star1_Click(object sender, EventArgs e)
    {
        Star1.CssClass = "fa fa-star";
        Star2.CssClass = "fa fa-star-o";
        Star3.CssClass = "fa fa-star-o";
        Star4.CssClass = "fa fa-star-o";
        Star5.CssClass = "fa fa-star-o";
        rating = 1;
    }

    protected void Star2_Click(object sender, EventArgs e)
    {
        Star1.CssClass = "fa fa-star";
        Star2.CssClass = "fa fa-star";
        Star3.CssClass = "fa fa-star-o";
        Star4.CssClass = "fa fa-star-o";
        Star5.CssClass = "fa fa-star-o";
        rating = 2;
    }

    protected void Star3_Click(object sender, EventArgs e)
    {
        Star1.CssClass = "fa fa-star";
        Star2.CssClass = "fa fa-star";
        Star3.CssClass = "fa fa-star";
        Star4.CssClass = "fa fa-star-o";
        Star5.CssClass = "fa fa-star-o";
        rating = 3;
    }

    protected void Star4_Click(object sender, EventArgs e)
    {
        Star1.CssClass = "fa fa-star";
        Star2.CssClass = "fa fa-star";
        Star3.CssClass = "fa fa-star";
        Star4.CssClass = "fa fa-star";
        Star5.CssClass = "fa fa-star-o";
        rating = 4;
    }

    protected void Star5_Click(object sender, EventArgs e)
    {
        Star1.CssClass = "fa fa-star";
        Star2.CssClass = "fa fa-star";
        Star3.CssClass = "fa fa-star";
        Star4.CssClass = "fa fa-star";
        Star5.CssClass = "fa fa-star";
        rating = 5;
    }
    #endregion Star Rating System

    #region Fill DropDownList
    private void FillDropDownList()
    {
        CommonFillMethods.FillDropDownListServiceProvider(ddlServiceProviderID);
    }
    #endregion Fill DropDownList    

    #region Clear Controls

    private void ClearControls()
    {
        ddlServiceProviderID.SelectedIndex = 0;
        ddlServiceProviderServiceID.SelectedIndex = 0;
        txtPersonName.Text = String.Empty;
        txtComment.Text = String.Empty;
        Star1.CssClass = "fa fa-star-o";
        Star2.CssClass = "fa fa-star-o";
        Star3.CssClass = "fa fa-star-o";
        Star4.CssClass = "fa fa-star-o";
        Star5.CssClass = "fa fa-star-o";
        ddlServiceProviderID.Focus();
    }

    #endregion Clear Controls

    protected void ddlServiceProviderID_SelectedIndexChanged(object sender, EventArgs e)
    {

        CommonFillMethods.FillDropDownListServiceProviderServiceByServiceProviderID(ddlServiceProviderServiceID, Convert.ToInt32(ddlServiceProviderID.SelectedValue));
    }

    protected void btnAdd_Click(object sender, EventArgs e)
    {
        #region Local Variables
        String strErrorMessage = "";
        RatingENT entRating = new RatingENT();
        RatingBAL balRating = new RatingBAL();
        #endregion Local Variables

        #region Server Side Validation

        if (ddlServiceProviderID.SelectedIndex < 0)
            strErrorMessage += " - Select Service Provider<br />";

        if (ddlServiceProviderServiceID.SelectedIndex < 0)
            strErrorMessage += " - Select Service<br />";

        if (rating <= 0)
            strErrorMessage += " - Give Proper Rating";

        if (strErrorMessage != "")
        {
            lblErrorMessage.Text = strErrorMessage;
            divError.Visible = true;
            divSuccess.Visible = false;
            return;
        }

        #endregion Server Side Validation

        #region Gather Data
        if (rating > 0)
            entRating.Review = rating;

        if (ddlServiceProviderID.SelectedIndex > 0)
            entRating.ServiceProviderID = Convert.ToInt32(ddlServiceProviderID.SelectedValue);

        if(ddlServiceProviderServiceID.SelectedIndex > 0)
            entRating.ServiceProviderServicesID = Convert.ToInt32(ddlServiceProviderServiceID.SelectedValue);

        if (txtPersonName.Text != String.Empty)
            entRating.PersonName = txtPersonName.Text.ToString();

        if (txtComment.Text != String.Empty)
            entRating.Comment = txtComment.Text.ToString();

        if(Session["UserID"] != null)
        {
            entRating.UserID = Convert.ToInt32(Session["UserID"]);
            entRating.ModifiedBy = Convert.ToInt32(Session["UserID"]);
        }

        entRating.RatingDate = CV.CurrentDate;
        entRating.ModificationDate = CV.CurrentDate;
        entRating.CreationDate = CV.CurrentDate;

        #endregion Gather Data

        #region Insert/Update
        if (Request.QueryString["RatingID"] == null)
        {
            if(balRating.Insert(entRating))
            {
                lblSuccessMessage.Text = "Inserted Successfully";
                divSuccess.Visible = true;
                divError.Visible = false;
                ClearControls();
            }
            else
            {
                lblErrorMessage.Text = balRating.Message;
                divError.Visible = true;
                divSuccess.Visible = false;
            }
        }
        else
        {
            entRating.RatingID = Convert.ToInt32(Request.QueryString["RatingID"]);
            if (balRating.Update(entRating))
            {
                lblSuccessMessage.Text = "Updated Successfully";
                Response.Redirect("~/AdminPanel/Rating/RatingList.aspx");
            }
            else
            {
                lblErrorMessage.Text = balRating.Message;
                divError.Visible = true;
                divSuccess.Visible = false;
            }
        }
        #endregion Insert/Update
    }

    private void FillRatingForm(SqlInt32 RatingID)
    {
        RatingBAL balRating = new RatingBAL();
        RatingENT entRating = balRating.SelectByPK(RatingID);

        if(!entRating.Review.IsNull && entRating.Review > 0)
        {
            if (entRating.Review == 1)
                Star1_Click(this, null);
            if (entRating.Review == 2)
                Star2_Click(this, null);
            if (entRating.Review == 3)
                Star3_Click(this, null);
            if (entRating.Review == 4)
                Star4_Click(this, null);
            if (entRating.Review == 5)
                Star5_Click(this, null);
        }

        if(!entRating.ServiceProviderID.IsNull)
        {
            ddlServiceProviderID.SelectedValue = entRating.ServiceProviderID.ToString();
            CommonFillMethods.FillDropDownListServiceProviderServiceByServiceProviderID(ddlServiceProviderServiceID, entRating.ServiceProviderID);
        }
        if (!entRating.ServiceProviderServicesID.IsNull)
            ddlServiceProviderServiceID.SelectedValue = entRating.ServiceProviderServicesID.ToString();

        if (!entRating.PersonName.IsNull)
            txtPersonName.Text = entRating.PersonName.ToString();

        if (!entRating.Comment.IsNull)
            txtComment.Text = entRating.Comment.ToString();

    }
}