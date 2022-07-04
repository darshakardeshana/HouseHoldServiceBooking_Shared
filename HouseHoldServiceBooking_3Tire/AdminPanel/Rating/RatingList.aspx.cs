using HouseHoldServiceBooking;
using HouseHoldServiceBooking.BAL;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlTypes;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class AdminPanel_Rating_RatingList : System.Web.UI.Page
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
            FillRatingGridView();
        }
    }
    #endregion Load Event

    #region Fill Rating GridView
    private void FillRatingGridView()
    {
        RatingBAL balRating = new RatingBAL();
        DataTable dtRating = new DataTable();
        dtRating = balRating.SelectAll();

        if (dtRating != null && dtRating.Rows.Count > 0)
        {
            gvRatingList.DataSource = dtRating;
            gvRatingList.DataBind();
        }
        else
        {
            CommonFunctions.BindEmptyGridView(gvRatingList);
        }
    }
    #endregion Fill Rating GridView

    #region GridView Row Command
    protected void gvRatingList_RowCommand(object sender, GridViewCommandEventArgs e)
    {
        if (e.CommandName == "DeleteRecord")
        {
            if (e.CommandArgument != null)
            {
                DeleteRating(Convert.ToInt32(e.CommandArgument.ToString().Trim()));
            }
        }
    }
    #endregion GridView Row Command

    #region Delete Rating 
    private void DeleteRating(SqlInt32 RatingID)
    {
        #region Local Variables 
        SqlInt32 UserID = 0;
        #endregion Local Variables 

        #region Read UserID
        if (Session["UserID"] != null)
        {
            UserID = Convert.ToInt32(Session["UserID"].ToString().Trim());
        }
        #endregion Read UserID

        RatingBAL balRating = new RatingBAL();
        if (balRating.Delete(RatingID, UserID))
        {
            lblSuccessMessage.Text = "Deleted Successfully";
            divError.Visible = false;
            divSuccess.Visible = true;
            FillRatingGridView();
        }
        else
        {
            lblErrorMessage.Text = balRating.Message;
            divError.Visible = true;
            divSuccess.Visible = false;
        }

        FillRatingGridView();
    }
    #endregion Delete Rating
}