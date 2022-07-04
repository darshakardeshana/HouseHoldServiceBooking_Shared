
using System;
using System.Collections.Generic;
using System.Data.SqlTypes;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for BankENT
/// </summary>
/// 
namespace HouseHoldServiceBooking.ENT
{
    public class BankENT
    {
        #region Constructor
        public BankENT()
        {
            //
            // TODO: Add constructor logic here
            //
        }
        #endregion Constructor

        #region BankID
        protected SqlInt32 _BankID;

        public SqlInt32 BankID
        {
            get
            {
                return _BankID;
            }
            set
            {
                _BankID = value;
            }
        }
        #endregion BankID
    
        #region BankName
        protected SqlString _BankName;

        public SqlString BankName
        {
            get
            {
                return _BankName;
            }
            set
            {
                _BankName = value;
            }
        }
        #endregion BankName
    
        #region ModifiedBy
        protected SqlInt32 _ModifiedBy;

        public SqlInt32 ModifiedBy
        {
            get
            {
                return _ModifiedBy;
            }
            set
            {
                _ModifiedBy = value;
            }
        }
        #endregion ModifiedBy
    
        #region UserID
        protected SqlInt32 _UserID;

        public SqlInt32 UserID
        {
            get
            {
                return _UserID;
            }
            set
            {
                _UserID = value;
            }
        }
        #endregion UserID
    
        #region CreationDate
        protected SqlDateTime _CreationDate;

        public SqlDateTime CreationDate
        {
            get
            {
                return _CreationDate;
            }
            set
            {
                _CreationDate = value;
            }
        }
        #endregion CreationDate
    
        #region ModificationDate
        protected SqlDateTime _ModificationDate;

        public SqlDateTime ModificationDate
        {
            get
            {
                return _ModificationDate;
            }
            set
            {
                _ModificationDate = value;
            }
        }
        #endregion ModificationDate
    
    }
}
