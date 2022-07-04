using HouseHoldServiceBooking.BAL;
using System;
using System.Collections.Generic;
using System.Data.SqlTypes;
using System.Linq;
using System.Web;
using System.Web.UI.WebControls;

/// <summary>
/// Summary description for CommonFillMethods
/// </summary>
namespace HouseHoldServiceBooking
{
    public class CommonFillMethods
    {
        #region Constructor
        public CommonFillMethods()
        {
            //
            // TODO: Add constructor logic here
            //
        }
        #endregion Constructor

        #region Fill State DropDownList
        public static void FillDropDownListState(DropDownList ddl)
        {
            StateBAL balState = new StateBAL();
            ddl.DataSource = balState.SelectForDropDownList();
            ddl.DataValueField = "StateID";
            ddl.DataTextField = "StateName";
            ddl.DataBind();
            ddl.Items.Insert(0, new ListItem("Select State", "-1"));
        }
        #endregion Fill State DropDownList

        #region Fill City DropDownList
        public static void FillDropDownListCity(DropDownList ddl)
        {
            CityBAL balCity = new CityBAL();
            ddl.DataSource = balCity.SelectForDropDownList();
            ddl.DataValueField = "CityID";
            ddl.DataTextField = "CityName";
            ddl.DataBind();
            ddl.Items.Insert(0, new ListItem("Select City", "-1"));
        }
        #endregion Fill City DropDownList

        #region Fill Country DropDownList
        public static void FillDropDownListCountry(DropDownList ddl)
        {
            CountryBAL balCountry = new CountryBAL();
            ddl.DataSource = balCountry.SelectForDropDownList();
            ddl.DataValueField = "CountryID";
            ddl.DataTextField = "CountryName";
            ddl.DataBind();
            ddl.Items.Insert(0, new ListItem("Select Country", "-1"));
        }
        #endregion Fill Country DropDownList

        #region Fill Empty DropDownList
        public static void FillEmptyDropDownList(DropDownList ddl, String TableName)
        {
            ddl.Items.Clear();
            ddl.Items.Insert(0, new ListItem("Select " + TableName, "-1"));
        }
        #endregion Fill Empty DropDownList

        #region Fill State DropDownList By CountryID
        public static void FillDropDownListStateByCountryID(DropDownList ddl, SqlInt32 CountryID)
        {
            StateBAL balState = new StateBAL();
            ddl.DataSource = balState.SelectForDropDownListByCountryID(CountryID);
            ddl.DataValueField = "StateID";
            ddl.DataTextField = "StateName";
            ddl.DataBind();
            ddl.Items.Insert(0, new ListItem("Select State", "-1"));
        }
        #endregion Fill State DropDownList By CountryID

        #region Fill City DropDownList By StateID
        public static void FillDropDownListCityByStateID(DropDownList ddl, SqlInt32 StateID)
        {
            CityBAL balCity = new CityBAL();
            ddl.DataSource = balCity.SelectForDropDownListByStateID(StateID);
            ddl.DataValueField = "CityID";
            ddl.DataTextField = "CityName";
            ddl.DataBind();
            ddl.Items.Insert(0, new ListItem("Select City", "-1"));
        }
        #endregion Fill City DropDownList By StateID

        #region Fill Bank DropDownList
        public static void FillDropDownListBank(DropDownList ddl)
        {
            BankBAL balBank = new BankBAL();
            ddl.DataSource = balBank.SelectForDropDownList();
            ddl.DataValueField = "BankID";
            ddl.DataTextField = "BankName";
            ddl.DataBind();
            ddl.Items.Insert(0, new ListItem("Select Bank", "-1"));
        }
        #endregion Fill Bank DropDownList

        #region Fill Service Provider DropDownList
        public static void FillDropDownListServiceProvider(DropDownList ddl)
        {
            ServiceProviderBAL balServiceProvider = new ServiceProviderBAL();
            ddl.DataSource = balServiceProvider.SelectForDropDownList();
            ddl.DataValueField = "ServiceProviderID";
            ddl.DataTextField = "UserName";
            ddl.DataBind();
            ddl.Items.Insert(0, new ListItem("Select Service Provider", "-1"));
        }
        #endregion Fill Service Provider DropDownList

        #region Fill Service DropDownList
        public static void FillDropDownListService(DropDownList ddl)
        {
            ServiceBAL balService = new ServiceBAL();
            ddl.DataSource = balService.SelectForDropDownList();
            ddl.DataValueField = "ServiceID";
            ddl.DataTextField = "ServiceName";
            ddl.DataBind();
            ddl.Items.Insert(0, new ListItem("Select Service", "-1"));
        }
        #endregion Fill Service DropDownList

        #region Fill ServiceProviderService DropDownList By ServiceProviderID
        public static void FillDropDownListServiceProviderServiceByServiceProviderID(DropDownList ddl, SqlInt32 ServiceProviderID)
        {
            ServiceProviderServicesBAL balService = new ServiceProviderServicesBAL();
            ddl.DataSource = balService.SelectForDropDownListByServiceProviderID(ServiceProviderID);
            ddl.DataValueField = "ServiceProviderServicesID";
            ddl.DataTextField = "ServiceName";
            ddl.DataBind();
            ddl.Items.Insert(0, new ListItem("Select Service", "-1"));
        }
        #endregion Fill ServiceProviderService DropDownList By ServiceProviderID
    }
}