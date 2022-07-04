
using System;
using System.Collections.Generic;
using System.Data.SqlTypes;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for InquiryENT
/// </summary>
/// 
namespace HouseHoldServiceBooking.ENT
{
    public class InquiryENT
    {
        #region Constructor
        public InquiryENT()
        {
            //
            // TODO: Add constructor logic here
            //
        }
        #endregion Constructor

        #region InquiryID
        protected SqlInt32 _InquiryID;

        public SqlInt32 InquiryID
        {
            get
            {
                return _InquiryID;
            }
            set
            {
                _InquiryID = value;
            }
        }
        #endregion InquiryID
    
        #region Name
        protected SqlString _Name;

        public SqlString Name
        {
            get
            {
                return _Name;
            }
            set
            {
                _Name = value;
            }
        }
        #endregion Name
    
        #region Email
        protected SqlString _Email;

        public SqlString Email
        {
            get
            {
                return _Email;
            }
            set
            {
                _Email = value;
            }
        }
        #endregion Email
    
        #region MobileNo
        protected SqlString _MobileNo;

        public SqlString MobileNo
        {
            get
            {
                return _MobileNo;
            }
            set
            {
                _MobileNo = value;
            }
        }
        #endregion MobileNo
    
        #region Location
        protected SqlString _Location;

        public SqlString Location
        {
            get
            {
                return _Location;
            }
            set
            {
                _Location = value;
            }
        }
        #endregion Location
    
        #region Subject
        protected SqlString _Subject;

        public SqlString Subject
        {
            get
            {
                return _Subject;
            }
            set
            {
                _Subject = value;
            }
        }
        #endregion Subject
    
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

        #region IsAttended
        protected SqlBoolean _IsAttended;

        public SqlBoolean IsAttended
        {
            get
            {
                return _IsAttended;
            }
            set
            {
                _IsAttended = value;
            }
        }
        #endregion IsAttended

    }
}
