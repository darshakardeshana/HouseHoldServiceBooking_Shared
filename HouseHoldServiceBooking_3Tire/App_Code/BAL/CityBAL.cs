using HouseHoldServiceBooking.DAL;
using HouseHoldServiceBooking.ENT;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlTypes;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for CityBAL
/// </summary>
/// 
namespace HouseHoldServiceBooking.BAL
{
    public class CityBAL
    {
        #region Local Variable
        protected string _Message;

        public string Message
        {
            get
            {
                return _Message;
            }
            set
            {
                _Message = value;
            }
        }

        #endregion Local Variable

        #region Constructor
        public CityBAL()
        {
            //
            // TODO: Add constructor logic here
            //
        }
        #endregion Constructor

        #region Insert Operation
        public Boolean Insert(CityENT entCity)
        {
            CityDAL dalCity = new CityDAL();
            if (dalCity.Insert(entCity))
            {
                return true;
            }
            else
            {
                Message = dalCity.Message;
                return false;
            }
        }
        #endregion Insert Operation

        #region Delele Operation
        public Boolean Delete(SqlInt32 CityID, SqlInt32 UserID)
        {
            CityDAL dalCity = new CityDAL();

            if (dalCity.Delete(CityID,UserID))
            {
                return true;
            }
            else
            {
                Message = dalCity.Message;
                return false;
            }
        }

        #endregion Delele Operation

        #region Update Operation
        public Boolean Update(CityENT entCity)
        {
            CityDAL dalCity = new CityDAL();
            if (dalCity.Update(entCity))
            {
                return true;
            }
            else
            {
                Message = dalCity.Message;
                return false;
            }
        }
        #endregion Update Operation

        #region Select Operation

        #region Select All
        public DataTable SelectAll()
        {
            CityDAL dalCity = new CityDAL();
            return dalCity.SelectAll();
        }
        #endregion Select All

        #region Select For Dropdown List
        public DataTable SelectForDropDownList()
        {
            CityDAL dalCity = new CityDAL();
            return dalCity.SelectForDropDownList();
        }
        #endregion Select For Dropdown List

        #region SelectByPK
        public CityENT SelectByPK(SqlInt32 CityID)
        {
            CityDAL dalCity = new CityDAL();
            return dalCity.SelectByPK(CityID);
        }

        #endregion SelectByPK

        #region Select For Dropdown List By StateID
        public DataTable SelectForDropDownListByStateID(SqlInt32 StateID)
        {
            CityDAL dalCity = new CityDAL();
            return dalCity.SelectForDropDownListByStateID(StateID);
        }
        #endregion Select For Dropdown List By StateID

        #endregion Select Operation
    }
}