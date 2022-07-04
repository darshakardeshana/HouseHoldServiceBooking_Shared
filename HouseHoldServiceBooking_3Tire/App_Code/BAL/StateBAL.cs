using HouseHoldServiceBooking.DAL;
using HouseHoldServiceBooking.ENT;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlTypes;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for StateBAL
/// </summary>
/// 
namespace HouseHoldServiceBooking.BAL
{
    public class StateBAL
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
        public StateBAL()
        {
            //
            // TODO: Add constructor logic here
            //
        }
        #endregion Constructor

        #region Insert Operation
        public Boolean Insert(StateENT entState)
        {
            StateDAL dalState = new StateDAL();
            if (dalState.Insert(entState))
            {
                return true;
            }
            else
            {
                Message = dalState.Message;
                return false;
            }
        }
        #endregion Insert Operation

        #region Delele Operation
        public Boolean Delete(SqlInt32 StateID, SqlInt32 UserID)
        {
            StateDAL dalState = new StateDAL();

            if (dalState.Delete(StateID, UserID))
            {
                return true;
            }
            else
            {
                Message = dalState.Message;
                return false;
            }
        }

        #endregion Delele Operation

        #region Update Operation
        public Boolean Update(StateENT entState)
        {
            StateDAL dalState = new StateDAL();
            if (dalState.Update(entState))
            {
                return true;
            }
            else
            {
                Message = dalState.Message;
                return false;
            }
        }
        #endregion Update Operation

        #region Select Operation

        #region Select All
        public DataTable SelectAll()
        {
            StateDAL dalState = new StateDAL();
            return dalState.SelectAll();
        }
        #endregion Select All

        #region Select For Dropdown List
        public DataTable SelectForDropDownList()
        {
            StateDAL dalState = new StateDAL();
            return dalState.SelectForDropDownList();
        }
        #endregion Select For Dropdown List

        #region SelectByPK
        public StateENT SelectByPK(SqlInt32 StateID)
        {
            StateDAL dalState = new StateDAL();
            return dalState.SelectByPK(StateID);
        }

        #endregion SelectByPK

        #region Select State DropDown List By CountryID
        public DataTable SelectForDropDownListByCountryID(SqlInt32 CountryID)
        {
            StateDAL dalState = new StateDAL();
            return dalState.SelectForDropDownListByCountryID(CountryID);
        }
        #endregion Select State DropDown List By CountryID

        #endregion Select Operation
    }
}