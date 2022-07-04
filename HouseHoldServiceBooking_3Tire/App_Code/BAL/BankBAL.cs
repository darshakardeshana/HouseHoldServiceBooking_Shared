using HouseHoldServiceBooking.DAL;
using HouseHoldServiceBooking.ENT;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlTypes;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for BankBAL
/// </summary>
/// 
namespace HouseHoldServiceBooking.BAL
{
    public class BankBAL
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
        public BankBAL()
        {
            //
            // TODO: Add constructor logic here
            //
        }
        #endregion Constructor

        #region Insert Operation
        public Boolean Insert(BankENT entBank)
        {
            BankDAL dalBank = new BankDAL();
            if (dalBank.Insert(entBank))
            {
                return true;
            }
            else
            {
                Message = dalBank.Message;
                return false;
            }
        }
        #endregion Insert Operation

        #region Delele Operation
        public Boolean Delete(SqlInt32 BankID, SqlInt32 UserID)
        {
            BankDAL dalBank = new BankDAL();

            if (dalBank.Delete(BankID, UserID))
            {
                return true;
            }
            else
            {
                Message = dalBank.Message;
                return false;
            }
        }

        #endregion Delele Operation

        #region Update Operation
        public Boolean Update(BankENT entBank)
        {
            BankDAL dalBank = new BankDAL();
            if (dalBank.Update(entBank))
            {
                return true;
            }
            else
            {
                Message = dalBank.Message;
                return false;
            }
        }
        #endregion Update Operation

        #region Select Operation

        #region Select All
        public DataTable SelectAll()
        {
            BankDAL dalBank = new BankDAL();
            return dalBank.SelectAll();
        }
        #endregion Select All

        #region Select For Dropdown List
        public DataTable SelectForDropDownList()
        {
            BankDAL dalBank = new BankDAL();
            return dalBank.SelectForDropDownList();
        }
        #endregion Select For Dropdown List

        #region SelectByPK
        public BankENT SelectByPK(SqlInt32 BankID)
        {
            BankDAL dalBank = new BankDAL();
            return dalBank.SelectByPK(BankID);
        }

        #endregion SelectByPK

        #endregion Select Operation
    }
}