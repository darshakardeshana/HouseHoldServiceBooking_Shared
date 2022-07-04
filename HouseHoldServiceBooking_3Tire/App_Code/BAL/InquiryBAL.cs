using HouseHoldServiceBooking.DAL;
using HouseHoldServiceBooking.ENT;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlTypes;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for InquiryBAL
/// </summary>
/// 
namespace HouseHoldServiceBooking.BAL
{
    public class InquiryBAL
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
        public InquiryBAL()
        {
            //
            // TODO: Add constructor logic here
            //
        }
        #endregion Constructor

        #region Insert Operation
        public Boolean Insert(InquiryENT entInquiry)
        {
            InquiryDAL dalInquiry = new InquiryDAL();
            if (dalInquiry.Insert(entInquiry))
            {
                return true;
            }
            else
            {
                Message = dalInquiry.Message;
                return false;
            }
        }
        #endregion Insert Operation

        #region Delele Operation
        public Boolean Delete(SqlInt32 InquiryID)
        {
            InquiryDAL dalInquiry = new InquiryDAL();

            if (dalInquiry.Delete(InquiryID))
            {
                return true;
            }
            else
            {
                Message = dalInquiry.Message;
                return false;
            }
        }

        #endregion Delele Operation

        #region Update Operation
        public Boolean Update(InquiryENT entInquiry)
        {
            InquiryDAL dalInquiry = new InquiryDAL();
            if (dalInquiry.Update(entInquiry))
            {
                return true;
            }
            else
            {
                Message = dalInquiry.Message;
                return false;
            }
        }

        public Boolean UpdateIsAttended(SqlInt32 InquiryID, SqlBoolean IsAttended)
        {
            InquiryDAL dalInquiry = new InquiryDAL();
            if (dalInquiry.UpdateIsAttended(InquiryID, IsAttended))
            {
                return true;
            }
            else
            {
                Message = dalInquiry.Message;
                return false;
            }
        }
        #endregion Update Operation

        #region Select Operation

        #region Select All
        public DataTable SelectAll()
        {
            InquiryDAL dalInquiry = new InquiryDAL();
            return dalInquiry.SelectAll();
        }
        #endregion Select All

        #region Select For Dropdown List
        public DataTable SelectForDropDownList()
        {
            InquiryDAL dalInquiry = new InquiryDAL();
            return dalInquiry.SelectForDropDownList();
        }
        #endregion Select For Dropdown List

        #region SelectByPK
        public InquiryENT SelectByPK(SqlInt32 InquiryID)
        {
            InquiryDAL dalInquiry = new InquiryDAL();
            return dalInquiry.SelectByPK(InquiryID);
        }

        #endregion SelectByPK

        #endregion Select Operation
    }
}