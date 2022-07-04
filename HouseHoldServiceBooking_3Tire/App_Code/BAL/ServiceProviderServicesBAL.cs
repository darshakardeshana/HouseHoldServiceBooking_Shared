using HouseHoldServiceBooking.DAL;
using HouseHoldServiceBooking.ENT;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlTypes;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for ServiceProviderServicesBAL
/// </summary>
/// 
namespace HouseHoldServiceBooking.BAL
{
    public class ServiceProviderServicesBAL
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
        public ServiceProviderServicesBAL()
        {
            //
            // TODO: Add constructor logic here
            //
        }
        #endregion Constructor

        #region Insert Operation
        public Boolean Insert(ServiceProviderServicesENT entServiceProviderServices)
        {
            ServiceProviderServicesDAL dalServiceProviderServices = new ServiceProviderServicesDAL();
            if (dalServiceProviderServices.Insert(entServiceProviderServices))
            {
                return true;
            }
            else
            {
                Message = dalServiceProviderServices.Message;
                return false;
            }
        }
        #endregion Insert Operation

        #region Delele Operation
        public Boolean Delete(SqlInt32 ServiceProviderServicesID, SqlInt32 UserID)
        {
            ServiceProviderServicesDAL dalServiceProviderServices = new ServiceProviderServicesDAL();

            if (dalServiceProviderServices.Delete(ServiceProviderServicesID, UserID))
            {
                return true;
            }
            else
            {
                Message = dalServiceProviderServices.Message;
                return false;
            }
        }

        #endregion Delele Operation

        #region Update Operation
        public Boolean Update(ServiceProviderServicesENT entServiceProviderServices)
        {
            ServiceProviderServicesDAL dalServiceProviderServices = new ServiceProviderServicesDAL();
            if (dalServiceProviderServices.Update(entServiceProviderServices))
            {
                return true;
            }
            else
            {
                Message = dalServiceProviderServices.Message;
                return false;
            }
        }
        #endregion Update Operation

        #region Select Operation

        #region Select All
        public DataTable SelectAll()
        {
            ServiceProviderServicesDAL dalServiceProviderServices = new ServiceProviderServicesDAL();
            return dalServiceProviderServices.SelectAll();
        }
        #endregion Select All

        #region Select For Dropdown List
        public DataTable SelectForDropDownList()
        {
            ServiceProviderServicesDAL dalServiceProviderServices = new ServiceProviderServicesDAL();
            return dalServiceProviderServices.SelectForDropDownList();
        }

        public DataTable SelectForDropDownListByServiceProviderID(SqlInt32 ServiceProviderID)
        {
            ServiceProviderServicesDAL dalServiceProviderServices = new ServiceProviderServicesDAL();
            return dalServiceProviderServices.SelectForDropDownListByServiceProviderID(ServiceProviderID);
        }
        #endregion Select For Dropdown List

        #region SelectByPK
        public ServiceProviderServicesENT SelectByPK(SqlInt32 ServiceProviderServicesID)
        {
            ServiceProviderServicesDAL dalServiceProviderServices = new ServiceProviderServicesDAL();
            return dalServiceProviderServices.SelectByPK(ServiceProviderServicesID);
        }

        #endregion SelectByPK

        #region Select By ServiceProviderID
        public DataTable SelectByServiceProviderID(SqlInt32 ServiceProviderID)
        {
            ServiceProviderServicesDAL dalServiceProviderServices = new ServiceProviderServicesDAL();
            return dalServiceProviderServices.SelectByServiceProviderID(ServiceProviderID);
        }
        #endregion Select By ServiceProviderID

        #region Select By ServiceProviderID
        public DataTable SelectForEditByServiceProviderID(SqlInt32 ServiceProviderID)
        {
            ServiceProviderServicesDAL dalServiceProviderServices = new ServiceProviderServicesDAL();
            return dalServiceProviderServices.SelectForEditByServiceProviderID(ServiceProviderID);
        }
        #endregion Select By ServiceProviderID

        #region Select By ServiceID
        public DataTable SelectByServiceID(SqlInt32 ServiceID)
        {
            ServiceProviderServicesDAL dalServiceProviderServices = new ServiceProviderServicesDAL();
            return dalServiceProviderServices.SelectByServiceID(ServiceID);
        }
        #endregion Select By ServiceID

        #endregion Select Operation
    }
}