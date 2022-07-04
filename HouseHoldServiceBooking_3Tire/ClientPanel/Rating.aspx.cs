using HouseHoldServiceBooking.BAL;
using HouseHoldServiceBooking.DAL;
using HouseHoldServiceBooking;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using HouseHoldServiceBooking.ENT;

public partial class ClientPanel_Rating : System.Web.UI.Page
{
    #region Page Load Event
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!Page.IsPostBack)
        {
            
        }
    }
    #endregion Page Load Event

    #region Item Command
    protected void rpServiceProvider_ItemCommand(object source, RepeaterCommandEventArgs e)
    {
        foreach (RepeaterItem item in rpServiceProvider.Items)
        {
            #region Find Control
            LinkButton lbtnStar1 = (LinkButton)item.FindControl("lbtnStar1");
            LinkButton lbtnStar2 = (LinkButton)item.FindControl("lbtnStar2");
            LinkButton lbtnStar3 = (LinkButton)item.FindControl("lbtnStar3");
            LinkButton lbtnStar4 = (LinkButton)item.FindControl("lbtnStar4");
            LinkButton lbtnStar5 = (LinkButton)item.FindControl("lbtnStar5");
            HiddenField hfServiceProviderServicesID = (HiddenField)item.FindControl("hfServiceProviderServicesID");
            HiddenField hfServiceProviderID = (HiddenField)item.FindControl("hfServiceProviderID");
            #endregion Find Control

            #region Give Star and Update/Insert Rating
            if (hfServiceProviderServicesID.Value.ToString() == e.CommandArgument.ToString())
            {
                #region Parameters
                RatingENT entRating = new RatingENT();
                RatingBAL balRating = new RatingBAL();
                #endregion Parameters

                #region Gather Data
                entRating.RatingDate = CV.CurrentDate;
                entRating.Review = Convert.ToInt32(e.CommandName);

                if (hfServiceProviderServicesID.Value != String.Empty)
                    entRating.ServiceProviderServicesID = Convert.ToInt32(hfServiceProviderServicesID.Value);

                if (hfServiceProviderID.Value != String.Empty)
                    entRating.ServiceProviderID = Convert.ToInt32(hfServiceProviderID.Value);

                entRating.PersonName = hfMobileNo.Value.ToString();
                entRating.ModifiedBy = 0;
                entRating.UserID = 0;
                entRating.CreationDate = CV.CurrentDate;
                entRating.ModificationDate = CV.CurrentDate;

                #endregion Gather Data

                if(balRating.UPSERT(entRating))
                {

                }
                else
                {

                }

                #region Give Star
                if (e.CommandName.ToString() == "1")
                {
                    lbtnStar1.CssClass = "fa fa-star checked";
                    lbtnStar2.CssClass = "fa fa-star notchecked";
                    lbtnStar3.CssClass = "fa fa-star notchecked";
                    lbtnStar4.CssClass = "fa fa-star notchecked";
                    lbtnStar5.CssClass = "fa fa-star notchecked";
                }
                if (e.CommandName.ToString() == "2")
                {
                    lbtnStar1.CssClass = "fa fa-star checked";
                    lbtnStar2.CssClass = "fa fa-star checked";
                    lbtnStar3.CssClass = "fa fa-star notchecked";
                    lbtnStar4.CssClass = "fa fa-star notchecked";
                    lbtnStar5.CssClass = "fa fa-star notchecked";
                }
                if (e.CommandName.ToString() == "3")
                {
                    lbtnStar1.CssClass = "fa fa-star checked";
                    lbtnStar2.CssClass = "fa fa-star checked";
                    lbtnStar3.CssClass = "fa fa-star checked";
                    lbtnStar4.CssClass = "fa fa-star notchecked";
                    lbtnStar5.CssClass = "fa fa-star notchecked";
                }
                if (e.CommandName.ToString() == "4")
                {
                    lbtnStar1.CssClass = "fa fa-star checked";
                    lbtnStar2.CssClass = "fa fa-star checked";
                    lbtnStar3.CssClass = "fa fa-star checked";
                    lbtnStar4.CssClass = "fa fa-star checked";
                    lbtnStar5.CssClass = "fa fa-star notchecked";
                }
                if (e.CommandName.ToString() == "5")
                {
                    lbtnStar1.CssClass = "fa fa-star checked";
                    lbtnStar2.CssClass = "fa fa-star checked";
                    lbtnStar3.CssClass = "fa fa-star checked";
                    lbtnStar4.CssClass = "fa fa-star checked";
                    lbtnStar5.CssClass = "fa fa-star checked";
                }
                #endregion Give Star
                break;
            }
            #endregion Give Star
        }
    }
    #endregion Item Command

    #region To Load data and Bind Repeater
    protected void btnClick_Click(object sender, EventArgs e)
    {
        RequestBAL balRequest = new RequestBAL();
        DataTable dt = balRequest.SelectByClientMobileNoIsAttended(hfMobileNo.Value.ToString());
        if (dt != null && dt.Rows.Count > 0)
        {
            rpServiceProvider.DataSource = dt;
            rpServiceProvider.DataBind();
        }
        else
        {
            CommonFunctions.BindEmptyRepeater(rpServiceProvider);
        }
    }
    #endregion To Load data and Bind Repeater

    #region rpServiceProvider Item Bound Event
    protected void rpServiceProvider_ItemDataBound(object sender, RepeaterItemEventArgs e)
    {
        if (e.Item.ItemType == ListItemType.Item || e.Item.ItemType == ListItemType.AlternatingItem)
        {
            #region Find Control
            RepeaterItem item = e.Item;
            
            LinkButton lbtnStar1 = (LinkButton)item.FindControl("lbtnStar1");
            LinkButton lbtnStar2 = (LinkButton)item.FindControl("lbtnStar2");
            LinkButton lbtnStar3 = (LinkButton)item.FindControl("lbtnStar3");
            LinkButton lbtnStar4 = (LinkButton)item.FindControl("lbtnStar4");
            LinkButton lbtnStar5 = (LinkButton)item.FindControl("lbtnStar5");
            HiddenField hfReview = (HiddenField)item.FindControl("hfReview");
            #endregion Find Control

            #region Set Star
            if (hfReview.Value == "1")
            {
                lbtnStar1.CssClass = "fa fa-star checked";
                lbtnStar2.CssClass = "fa fa-star notchecked";
                lbtnStar3.CssClass = "fa fa-star notchecked";
                lbtnStar4.CssClass = "fa fa-star notchecked";
                lbtnStar5.CssClass = "fa fa-star notchecked";
            }
            if (hfReview.Value == "2")
            {
                lbtnStar1.CssClass = "fa fa-star checked";
                lbtnStar2.CssClass = "fa fa-star checked";
                lbtnStar3.CssClass = "fa fa-star notchecked";
                lbtnStar4.CssClass = "fa fa-star notchecked";
                lbtnStar5.CssClass = "fa fa-star notchecked";
            }
            if (hfReview.Value == "3")
            {
                lbtnStar1.CssClass = "fa fa-star checked";
                lbtnStar2.CssClass = "fa fa-star checked";
                lbtnStar3.CssClass = "fa fa-star checked";
                lbtnStar4.CssClass = "fa fa-star notchecked";
                lbtnStar5.CssClass = "fa fa-star notchecked";
            }
            if (hfReview.Value == "4")
            {
                lbtnStar1.CssClass = "fa fa-star checked";
                lbtnStar2.CssClass = "fa fa-star checked";
                lbtnStar3.CssClass = "fa fa-star checked";
                lbtnStar4.CssClass = "fa fa-star checked";
                lbtnStar5.CssClass = "fa fa-star notchecked";
            }
            if (hfReview.Value == "5")
            {
                lbtnStar1.CssClass = "fa fa-star checked";
                lbtnStar2.CssClass = "fa fa-star checked";
                lbtnStar3.CssClass = "fa fa-star checked";
                lbtnStar4.CssClass = "fa fa-star checked";
                lbtnStar5.CssClass = "fa fa-star checked";
            }
            #endregion Set Star
        }

    }
    #endregion rpServiceProvider Item Bound Event
}