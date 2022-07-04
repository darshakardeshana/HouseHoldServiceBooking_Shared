
using System;
using System.Collections.Generic;
using System.Data.SqlTypes;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for ServiceProviderServicesENT
/// </summary>
/// 
namespace HouseHoldServiceBooking.ENT
{
    public class ServiceProviderServicesENT
    {
        #region Constructor
        public ServiceProviderServicesENT()
        {
            //
            // TODO: Add constructor logic here
            //
        }
        #endregion Constructor

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
    
        #region ServiceID
        protected SqlInt32 _ServiceID;

        public SqlInt32 ServiceID
        {
            get
            {
                return _ServiceID;
            }
            set
            {
                _ServiceID = value;
            }
        }
        #endregion ServiceID
    
        #region Rate
        protected SqlDecimal _Rate;

        public SqlDecimal Rate
        {
            get
            {
                return _Rate;
            }
            set
            {
                _Rate = value;
            }
        }
        #endregion Rate
    
        #region Description
        protected SqlString _Description;

        public SqlString Description
        {
            get
            {
                return _Description;
            }
            set
            {
                _Description = value;
            }
        }
        #endregion Description
    
        #region Specialist
        protected SqlString _Specialist;

        public SqlString Specialist
        {
            get
            {
                return _Specialist;
            }
            set
            {
                _Specialist = value;
            }
        }
        #endregion Specialist
    
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
