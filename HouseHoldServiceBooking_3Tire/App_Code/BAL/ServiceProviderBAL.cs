using HouseHoldServiceBooking.DAL;
using HouseHoldServiceBooking.ENT;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlTypes;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for ServiceProviderBAL
/// </summary>
/// 
namespace HouseHoldServiceBooking.BAL
{
    public class ServiceProviderBAL
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
        public ServiceProviderBAL()
        {
            //
            // TODO: Add constructor logic here
            //
        }
        #endregion Constructor

        #region Insert Operation
        public Boolean Insert(ServiceProviderENT entServiceProvider)
        {
            ServiceProviderDAL dalServiceProvider = new ServiceProviderDAL();
            if (dalServiceProvider.Insert(entServiceProvider))
            {
                return true;
            }
            else
            {
                Message = dalServiceProvider.Message;
                return false;
            }
        }
        #endregion Insert Operation

        #region Delele Operation
        public Boolean Delete(SqlInt32 ServiceProviderID)
        {
            ServiceProviderDAL dalServiceProvider = new ServiceProviderDAL();

            if (dalServiceProvider.Delete(ServiceProviderID))
            {
                return true;
            }
            else
            {
                Message = dalServiceProvider.Message;
                return false;
            }
        }

        #endregion Delele Operation

        #region Update Operation
        public Boolean Update(ServiceProviderENT entServiceProvider)
        {
            ServiceProviderDAL dalServiceProvider = new ServiceProviderDAL();
            if (dalServiceProvider.Update(entServiceProvider))
            {
                return true;
            }
            else
            {
                Message = dalServiceProvider.Message;
                return false;
            }
        }

        public Boolean UpdateByServiceProvider(ServiceProviderENT entServiceProvider)
        {
            ServiceProviderDAL dalServiceProvider = new ServiceProviderDAL();
            if (dalServiceProvider.UpdateByServiceProvider(entServiceProvider))
            {
                return true;
            }
            else
            {
                Message = dalServiceProvider.Message;
                return false;
            }
        }
        #endregion Update Operation

        #region Select Operation

        #region Select All
        public DataTable SelectAll()
        {
            ServiceProviderDAL dalServiceProvider = new ServiceProviderDAL();
            return dalServiceProvider.SelectAll();
        }
        #endregion Select All

        #region Select For Dropdown List
        public DataTable SelectForDropDownList()
        {
            ServiceProviderDAL dalServiceProvider = new ServiceProviderDAL();
            return dalServiceProvider.SelectForDropDownList();
        }
        #endregion Select For Dropdown List

        #region SelectByPK
        public ServiceProviderENT SelectByPK(SqlInt32 ServiceProviderID)
        {
            ServiceProviderDAL dalServiceProvider = new ServiceProviderDAL();
            return dalServiceProvider.SelectByPK(ServiceProviderID);
        }

        #endregion SelectByPK

        #region Select By UserName Password
        public ServiceProviderENT SelectByUserNamePassword(SqlString strUserName, SqlString strPassword)
        {
            ServiceProviderDAL dalServiceProvider = new ServiceProviderDAL();
            return dalServiceProvider.SelectByUserNamePassword(strUserName, strPassword);
        }
        #endregion Select By UserName Password

        #region Select By UserName
        public DataTable SelectByUserName(SqlString strUserName)
        {
            ServiceProviderDAL dalServiceProvider = new ServiceProviderDAL();
            return dalServiceProvider.SelectByUserName(strUserName);
        }
        #endregion Select By UserName

        #region Select For Profile View
        public DataTable SelectForProfileView(SqlInt32 ServiceProviderID)
        {
            ServiceProviderDAL dalServiceProvider = new ServiceProviderDAL();
            return dalServiceProvider.SelectForProfileView(ServiceProviderID);
        }
        #endregion Select For Profile View

        

        #endregion Select Operation
    }
}