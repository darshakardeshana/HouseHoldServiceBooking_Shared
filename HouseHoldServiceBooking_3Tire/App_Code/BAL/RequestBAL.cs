using HouseHoldServiceBooking.DAL;
using HouseHoldServiceBooking.ENT;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlTypes;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for RequestBAL
/// </summary>
/// 
namespace HouseHoldServiceBooking.BAL
{
    public class RequestBAL
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
        public RequestBAL()
        {
            //
            // TODO: Add constructor logic here
            //
        }
        #endregion Constructor

        #region Insert Operation
        public Boolean Insert(RequestENT entRequest)
        {
            RequestDAL dalRequest = new RequestDAL();
            if (dalRequest.Insert(entRequest))
            {
                return true;
            }
            else
            {
                Message = dalRequest.Message;
                return false;
            }
        }
        #endregion Insert Operation

        #region Delele Operation
        public Boolean Delete(SqlInt32 RequestID)
        {
            RequestDAL dalRequest = new RequestDAL();

            if (dalRequest.Delete(RequestID))
            {
                return true;
            }
            else
            {
                Message = dalRequest.Message;
                return false;
            }
        }

        #endregion Delele Operation

        #region Update Operation
        public Boolean Update(RequestENT entRequest)
        {
            RequestDAL dalRequest = new RequestDAL();
            if (dalRequest.Update(entRequest))
            {
                return true;
            }
            else
            {
                Message = dalRequest.Message;
                return false;
            }
        }

        public Boolean UpdateIsAttended(SqlInt32 RequestID, SqlBoolean IsAttended)
        {
            RequestDAL dalRequest = new RequestDAL();
            if (dalRequest.UpdateIsAttended(RequestID, IsAttended))
            {
                return true;
            }
            else
            {
                Message = dalRequest.Message;
                return false;
            }
        }
        #endregion Update Operation

        #region Select Operation

        #region Select All
        public DataTable SelectAll()
        {
            RequestDAL dalRequest = new RequestDAL();
            return dalRequest.SelectAll();
        }
        #endregion Select All

        #region SelectByServiceProviderID
        public DataTable SelectByServiceProviderID(SqlInt32 ServiceProviderID)
        {
            RequestDAL dalRequest = new RequestDAL();
            return dalRequest.SelectByServiceProviderID(ServiceProviderID);
        }
        #endregion SelectByServiceProviderID

        #region SelectByClientMobileNoIsAttended
        public DataTable SelectByClientMobileNoIsAttended(SqlString ClientMobileNo)
        {
            RequestDAL dalRequest = new RequestDAL();
            return dalRequest.SelectByClientMobileNoIsAttended(ClientMobileNo);
        }
        #endregion SelectByClientMobileNoIsAttended

        #region Select For Dropdown List
        public DataTable SelectForDropDownList()
        {
            RequestDAL dalRequest = new RequestDAL();
            return dalRequest.SelectForDropDownList();
        }
        #endregion Select For Dropdown List

        #region SelectByPK
        public RequestENT SelectByPK(SqlInt32 RequestID)
        {
            RequestDAL dalRequest = new RequestDAL();
            return dalRequest.SelectByPK(RequestID);
        }

        #endregion SelectByPK

        #endregion Select Operation
    }
}