using HouseHoldServiceBooking.DAL;
using HouseHoldServiceBooking.ENT;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlTypes;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for ServiceBAL
/// </summary>
/// 
namespace HouseHoldServiceBooking.BAL
{
    public class ServiceBAL
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
        public ServiceBAL()
        {
            //
            // TODO: Add constructor logic here
            //
        }
        #endregion Constructor

        #region Insert Operation
        public Boolean Insert(ServiceENT entService)
        {
            ServiceDAL dalService = new ServiceDAL();
            if (dalService.Insert(entService))
            {
                return true;
            }
            else
            {
                Message = dalService.Message;
                return false;
            }
        }
        #endregion Insert Operation

        #region Delele Operation
        public Boolean Delete(SqlInt32 ServiceID, SqlInt32 UserID)
        {
            ServiceDAL dalService = new ServiceDAL();

            if (dalService.Delete(ServiceID, UserID))
            {
                return true;
            }
            else
            {
                Message = dalService.Message;
                return false;
            }
        }

        #endregion Delele Operation

        #region Update Operation
        public Boolean Update(ServiceENT entService)
        {
            ServiceDAL dalService = new ServiceDAL();
            if (dalService.Update(entService))
            {
                return true;
            }
            else
            {
                Message = dalService.Message;
                return false;
            }
        }
        #endregion Update Operation

        #region Select Operation

        #region Select All
        public DataTable SelectAll()
        {
            ServiceDAL dalService = new ServiceDAL();
            return dalService.SelectAll();
        }
        #endregion Select All

        #region Select For Dropdown List
        public DataTable SelectForDropDownList()
        {
            ServiceDAL dalService = new ServiceDAL();
            return dalService.SelectForDropDownList();
        }
        #endregion Select For Dropdown List

        #region SelectByPK
        public ServiceENT SelectByPK(SqlInt32 ServiceID)
        {
            ServiceDAL dalService = new ServiceDAL();
            return dalService.SelectByPK(ServiceID);
        }

        #endregion SelectByPK

        #endregion Select Operation
    }
}