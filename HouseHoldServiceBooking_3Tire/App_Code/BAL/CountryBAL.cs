using HouseHoldServiceBooking.DAL;
using HouseHoldServiceBooking.ENT;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlTypes;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for CountryBAL
/// </summary>
/// 
namespace HouseHoldServiceBooking.BAL
{
    public class CountryBAL
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
        public CountryBAL()
        {
            //
            // TODO: Add constructor logic here
            //
        }
        #endregion Constructor

        #region Insert Operation
        public Boolean Insert(CountryENT entCountry)
        {
            CountryDAL dalCountry = new CountryDAL();
            if (dalCountry.Insert(entCountry))
            {
                return true;
            }
            else
            {
                Message = dalCountry.Message;
                return false;
            }
        }
        #endregion Insert Operation

        #region Delele Operation
        public Boolean Delete(SqlInt32 CountryID, SqlInt32 UserID)
        {
            CountryDAL dalCountry = new CountryDAL();

            if (dalCountry.Delete(CountryID, UserID))
            {
                return true;
            }
            else
            {
                Message = dalCountry.Message;
                return false;
            }
        }

        #endregion Delele Operation

        #region Update Operation
        public Boolean Update(CountryENT entCountry)
        {
            CountryDAL dalCountry = new CountryDAL();
            if (dalCountry.Update(entCountry))
            {
                return true;
            }
            else
            {
                Message = dalCountry.Message;
                return false;
            }
        }
        #endregion Update Operation

        #region Select Operation

        #region Select All
        public DataTable SelectAll()
        {
            CountryDAL dalCountry = new CountryDAL();
            return dalCountry.SelectAll();
        }
        #endregion Select All

        #region Select For Dropdown List
        public DataTable SelectForDropDownList()
        {
            CountryDAL dalCountry = new CountryDAL();
            return dalCountry.SelectForDropDownList();
        }
        #endregion Select For Dropdown List

        #region SelectByPK
        public CountryENT SelectByPK(SqlInt32 CountryID)
        {
            CountryDAL dalCountry = new CountryDAL();
            return dalCountry.SelectByPK(CountryID);
        }

        #endregion SelectByPK

        #endregion Select Operation
    }
}