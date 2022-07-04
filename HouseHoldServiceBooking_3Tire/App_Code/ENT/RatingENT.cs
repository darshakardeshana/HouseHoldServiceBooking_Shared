
using System;
using System.Collections.Generic;
using System.Data.SqlTypes;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for RatingENT
/// </summary>
/// 
namespace HouseHoldServiceBooking.ENT
{
    public class RatingENT
    {
        #region Constructor
        public RatingENT()
        {
            //
            // TODO: Add constructor logic here
            //
        }
        #endregion Constructor

        #region RatingID
        protected SqlInt32 _RatingID;

        public SqlInt32 RatingID
        {
            get
            {
                return _RatingID;
            }
            set
            {
                _RatingID = value;
            }
        }
        #endregion RatingID
    
        #region RatingDate
        protected DateTime _RatingDate;

        public DateTime RatingDate
        {
            get
            {
                return _RatingDate;
            }
            set
            {
                _RatingDate = value;
            }
        }
        #endregion RatingDate
    
        #region Review
        protected SqlInt32 _Review;

        public SqlInt32 Review
        {
            get
            {
                return _Review;
            }
            set
            {
                _Review = value;
            }
        }
        #endregion Review
    
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

        #region ServiceProvider
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
        #endregion ServiceProviderServicesID

        #region PersonName
        protected SqlString _PersonName;

        public SqlString PersonName
        {
            get
            {
                return _PersonName;
            }
            set
            {
                _PersonName = value;
            }
        }
        #endregion PersonName
    
        #region Comment
        protected SqlString _Comment;

        public SqlString Comment
        {
            get
            {
                return _Comment;
            }
            set
            {
                _Comment = value;
            }
        }
        #endregion Comment
    
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
