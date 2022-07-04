
using System;
using System.Collections.Generic;
using System.Data.SqlTypes;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for RequestENT
/// </summary>
/// 
namespace HouseHoldServiceBooking.ENT
{
    public class RequestENT
    {
        #region Constructor
        public RequestENT()
        {
            //
            // TODO: Add constructor logic here
            //
        }
        #endregion Constructor

        #region RequestID
        protected SqlInt32 _RequestID;

        public SqlInt32 RequestID
        {
            get
            {
                return _RequestID;
            }
            set
            {
                _RequestID = value;
            }
        }
        #endregion RequestID
    
        #region ServiceProviderID
        protected SqlInt32 _ServiceProviderID;

        public SqlInt32 ServiceProviderID
        {
            get
            {
                return _ServiceProviderID;
            }
            set
            {
                _ServiceProviderID = value;
            }
        }
        #endregion ServiceProviderID
    
        #region ServiceProviderServicesID
        protected SqlInt32 _ServiceProviderServicesID;

        public SqlInt32 ServiceProviderServicesID
        {
            get
            {
                return _ServiceProviderServicesID;
            }
            set
            {
                _ServiceProviderServicesID = value;
            }
        }
        #endregion ServiceProviderServicesID
    
        #region ClientMobileNo
        protected SqlString _ClientMobileNo;

        public SqlString ClientMobileNo
        {
            get
            {
                return _ClientMobileNo;
            }
            set
            {
                _ClientMobileNo = value;
            }
        }
        #endregion ClientMobileNo
    
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
