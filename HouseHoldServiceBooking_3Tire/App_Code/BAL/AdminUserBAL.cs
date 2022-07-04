using HouseHoldServiceBooking.DAL;
using HouseHoldServiceBooking.ENT;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlTypes;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for AdminUserBAL
/// </summary>
/// 
namespace HouseHoldServiceBooking.BAL
{
    public class AdminUserBAL
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
        public AdminUserBAL()
        {
            //
            // TODO: Add constructor logic here
            //
        }
        #endregion Constructor

        #region Insert Operation
        public Boolean Insert(AdminUserENT entAdminUser)
        {
            AdminUserDAL dalAdminUser = new AdminUserDAL();
            if (dalAdminUser.Insert(entAdminUser))
            {
                return true;
            }
            else
            {
                Message = dalAdminUser.Message;
                return false;
            }
        }
        #endregion Insert Operation

        #region Delele Operation
        public Boolean Delete(SqlInt32 UserID)
        {
            AdminUserDAL dalAdminUser = new AdminUserDAL();

            if (dalAdminUser.Delete(UserID))
            {
                return true;
            }
            else
            {
                Message = dalAdminUser.Message;
                return false;
            }
        }

        #endregion Delele Operation

        #region Update Operation
        public Boolean Update(AdminUserENT entAdminUser)
        {
            AdminUserDAL dalAdminUser = new AdminUserDAL();
            if (dalAdminUser.Update(entAdminUser))
            {
                return true;
            }
            else
            {
                Message = dalAdminUser.Message;
                return false;
            }
        }
        #endregion Update Operation

        #region Update Operation
        public Boolean ChangePassword(AdminUserENT entAdminUser)
        {
            AdminUserDAL dalAdminUser = new AdminUserDAL();
            if (dalAdminUser.ChangePassword(entAdminUser))
            {
                return true;
            }
            else
            {
                Message = dalAdminUser.Message;
                return false;
            }
        }
        #endregion Update Operation

        #region Select Operation

        #region Select All
        public DataTable SelectAll()
        {
            AdminUserDAL dalAdminUser = new AdminUserDAL();
            return dalAdminUser.SelectAll();
        }
        #endregion Select All

        #region Select For Dropdown List
        public DataTable SelectForDropDownList()
        {
            AdminUserDAL dalAdminUser = new AdminUserDAL();
            return dalAdminUser.SelectForDropDownList();
        }
        #endregion Select For Dropdown List

        #region SelectByPK
        public AdminUserENT SelectByPK(SqlInt32 AdminUserID)
        {
            AdminUserDAL dalAdminUser = new AdminUserDAL();
            return dalAdminUser.SelectByPK(AdminUserID);
        }

        #endregion SelectByPK

        #region Select By UserName and Password
        public AdminUserENT SelectByUserNamePassword(SqlString UserName, SqlString Password)
        {
            AdminUserDAL dalAdminUser = new AdminUserDAL();
            return dalAdminUser.SelectByUserNamePassword(UserName, Password);
        }
        #endregion Select By UserName and Password

        #region Select By UserName
        #endregion Select By UserName
        public DataTable SelectByUserName(SqlString UserName)
        {
            AdminUserDAL dalAdminUser = new AdminUserDAL();
            return dalAdminUser.SelectByUserName(UserName);
        }
        #endregion Select Operation

    }
}