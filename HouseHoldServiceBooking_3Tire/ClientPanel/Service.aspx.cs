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

public partial class ClientPanel_Service : System.Web.UI.Page
{
    #region Page Load Event
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!Page.IsPostBack)
        {
            CommonFillMethods.FillDropDownListService(ddlServiceID);
        }
    }
    #endregion Page Load Event

    #region Selected Index Changed
    protected void ddlServiceID_SelectedIndexChanged(object sender, EventArgs e)
    {
        Session["ClientMobileNo"] = hfMobileNo.Value.ToString();
        ServiceProviderServicesBAL balServiceProviderServices = new ServiceProviderServicesBAL();
        DataTable dt = balServiceProviderServices.SelectByServiceID(Convert.ToInt32(ddlServiceID.SelectedValue));
        dt.Columns.Add("IsSent", typeof(Int32));
        foreach (DataRow dr in dt.Rows)
        {
            dr["IsSent"] = 0;
        }
        if (dt != null && dt.Rows.Count > 0)
        {
            ViewState["vsService"] = dt;
            rpServiceProvider.DataSource = dt;
            rpServiceProvider.DataBind();
        }
        else
        {
            CommonFunctions.BindEmptyRepeater(rpServiceProvider);
        }
    }
    #endregion Selected Index Changed

    #region Item Command
    protected void rpServiceProvider_ItemCommand(object source, RepeaterCommandEventArgs e)
    {
        DataTable dt = (DataTable)ViewState["vsService"];
        DataRow dr = dt.Select("ServiceProviderServicesID = " + Convert.ToInt32(e.CommandArgument)).FirstOrDefault();
        dr["IsSent"] = 1;

        #region parameters
        RequestENT entRequest = new RequestENT();
        RequestBAL balRequest = new RequestBAL();
        #endregion parameters

        #region Gather Data
        if(!dr["ServiceProviderID"].Equals(DBNull.Value))
        {
            entRequest.ServiceProviderID = Convert.ToInt32(dr["ServiceProviderID"]);
        }
        if (!dr["ServiceProviderServicesID"].Equals(DBNull.Value))
        {
            entRequest.ServiceProviderServicesID = Convert.ToInt32(dr["ServiceProviderServicesID"]);
        }
        if (Session["ClientMobileNo"] != null)
        {
            entRequest.ClientMobileNo = Session["ClientMobileNo"].ToString();
        }
        entRequest.IsAttended = false;
        entRequest.CreationDate = CV.CurrentDate;
        entRequest.ModificationDate = CV.CurrentDate;

        #endregion Gather Data

        #region Insert Request
        if(balRequest.Insert(entRequest))
        {
        }
        #endregion Insert Request

        if (dt != null && dt.Rows.Count > 0)
        {
            ViewState["vsService"] = dt;
            rpServiceProvider.DataSource = dt;
            rpServiceProvider.DataBind();
        }
        else
        {
            CommonFunctions.BindEmptyRepeater(rpServiceProvider);
        }

    }
    #endregion Item Command
}