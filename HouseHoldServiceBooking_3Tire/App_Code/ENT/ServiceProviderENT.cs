
using System;
using System.Collections.Generic;
using System.Data.SqlTypes;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for ServiceProviderENT
/// </summary>
/// 
namespace HouseHoldServiceBooking.ENT
{
    public class ServiceProviderENT
    {
        #region Constructor
        public ServiceProviderENT()
        {
            //
            // TODO: Add constructor logic here
            //
        }
        #endregion Constructor

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
    
        #region UserName
        protected SqlString _UserName;

        public SqlString UserName
        {
            get
            {
                return _UserName;
            }
            set
            {
                _UserName = value;
            }
        }
        #endregion UserName
    
        #region Password
        protected SqlString _Password;

        public SqlString Password
        {
            get
            {
                return _Password;
            }
            set
            {
                _Password = value;
            }
        }
        #endregion Password
    
        #region ServiceProviderName
        protected SqlString _ServiceProviderName;

        public SqlString ServiceProviderName
        {
            get
            {
                return _ServiceProviderName;
            }
            set
            {
                _ServiceProviderName = value;
            }
        }
        #endregion ServiceProviderName
    
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
    
        #region DOB
        protected SqlString _DOB;

        public SqlString DOB
        {
            get
            {
                return _DOB;
            }
            set
            {
                _DOB = value;
            }
        }
        #endregion DOB
    
        #region HomeAddress
        protected SqlString _HomeAddress;

        public SqlString HomeAddress
        {
            get
            {
                return _HomeAddress;
            }
            set
            {
                _HomeAddress = value;
            }
        }
        #endregion HomeAddress
    
        #region HomePincode
        protected SqlString _HomePincode;

        public SqlString HomePincode
        {
            get
            {
                return _HomePincode;
            }
            set
            {
                _HomePincode = value;
            }
        }
        #endregion HomePincode
    
        #region HomeCountryID
        protected SqlInt32 _HomeCountryID;

        public SqlInt32 HomeCountryID
        {
            get
            {
                return _HomeCountryID;
            }
            set
            {
                _HomeCountryID = value;
            }
        }
        #endregion HomeCountryID
    
        #region HomeStateID
        protected SqlInt32 _HomeStateID;

        public SqlInt32 HomeStateID
        {
            get
            {
                return _HomeStateID;
            }
            set
            {
                _HomeStateID = value;
            }
        }
        #endregion HomeStateID
    
        #region HomeCityID
        protected SqlInt32 _HomeCityID;

        public SqlInt32 HomeCityID
        {
            get
            {
                return _HomeCityID;
            }
            set
            {
                _HomeCityID = value;
            }
        }
        #endregion HomeCityID
    
        #region WorkAddress
        protected SqlString _WorkAddress;

        public SqlString WorkAddress
        {
            get
            {
                return _WorkAddress;
            }
            set
            {
                _WorkAddress = value;
            }
        }
        #endregion WorkAddress
    
        #region WorkPincode
        protected SqlString _WorkPincode;

        public SqlString WorkPincode
        {
            get
            {
                return _WorkPincode;
            }
            set
            {
                _WorkPincode = value;
            }
        }
        #endregion WorkPincode
    
        #region WorkCountryID
        protected SqlInt32 _WorkCountryID;

        public SqlInt32 WorkCountryID
        {
            get
            {
                return _WorkCountryID;
            }
            set
            {
                _WorkCountryID = value;
            }
        }
        #endregion WorkCountryID
    
        #region WorkStateID
        protected SqlInt32 _WorkStateID;

        public SqlInt32 WorkStateID
        {
            get
            {
                return _WorkStateID;
            }
            set
            {
                _WorkStateID = value;
            }
        }
        #endregion WorkStateID
    
        #region WorkCityID
        protected SqlInt32 _WorkCityID;

        public SqlInt32 WorkCityID
        {
            get
            {
                return _WorkCityID;
            }
            set
            {
                _WorkCityID = value;
            }
        }
        #endregion WorkCityID
    
        #region AadharCard
        protected SqlString _AadharCard;

        public SqlString AadharCard
        {
            get
            {
                return _AadharCard;
            }
            set
            {
                _AadharCard = value;
            }
        }
        #endregion AadharCard
    
        #region PANCardNo
        protected SqlString _PANCardNo;

        public SqlString PANCardNo
        {
            get
            {
                return _PANCardNo;
            }
            set
            {
                _PANCardNo = value;
            }
        }
        #endregion PANCardNo
    
        #region GSTNo
        protected SqlString _GSTNo;

        public SqlString GSTNo
        {
            get
            {
                return _GSTNo;
            }
            set
            {
                _GSTNo = value;
            }
        }
        #endregion GSTNo
    
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
    
        #region AccountNo
        protected SqlString _AccountNo;

        public SqlString AccountNo
        {
            get
            {
                return _AccountNo;
            }
            set
            {
                _AccountNo = value;
            }
        }
        #endregion AccountNo
    
        #region IFSCCode
        protected SqlString _IFSCCode;

        public SqlString IFSCCode
        {
            get
            {
                return _IFSCCode;
            }
            set
            {
                _IFSCCode = value;
            }
        }
        #endregion IFSCCode

        #region ProfilePhotoPath
        protected SqlString _ProfilePhotoPath;

        public SqlString ProfilePhotoPath
        {
            get
            {
                return _ProfilePhotoPath;
            }
            set
            {
                _ProfilePhotoPath = value;
            }
        }
        #endregion ProfilePhotoPath

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
