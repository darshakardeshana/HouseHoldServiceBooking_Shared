using HouseHoldServiceBooking.DAL;
using HouseHoldServiceBooking.ENT;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlTypes;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for RatingBAL
/// </summary>
/// 
namespace HouseHoldServiceBooking.BAL
{
    public class RatingBAL
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
        public RatingBAL()
        {
            //
            // TODO: Add constructor logic here
            //
        }
        #endregion Constructor

        #region Insert Operation
        public Boolean Insert(RatingENT entRating)
        {
            RatingDAL dalRating = new RatingDAL();
            if (dalRating.Insert(entRating))
            {
                return true;
            }
            else
            {
                Message = dalRating.Message;
                return false;
            }
        }
        #endregion Insert Operation

        #region Delele Operation
        public Boolean Delete(SqlInt32 RatingID, SqlInt32 UserID)
        {
            RatingDAL dalRating = new RatingDAL();

            if (dalRating.Delete(RatingID, UserID))
            {
                return true;
            }
            else
            {
                Message = dalRating.Message;
                return false;
            }
        }

        #endregion Delele Operation

        #region Update Operation
        public Boolean Update(RatingENT entRating)
        {
            RatingDAL dalRating = new RatingDAL();
            if (dalRating.Update(entRating))
            {
                return true;
            }
            else
            {
                Message = dalRating.Message;
                return false;
            }
        }
        #endregion Update Operation

        #region Select Operation

        #region Select All
        public DataTable SelectAll()
        {
            RatingDAL dalRating = new RatingDAL();
            return dalRating.SelectAll();
        }
        #endregion Select All

        #region Select For Dropdown List
        public DataTable SelectForDropDownList()
        {
            RatingDAL dalRating = new RatingDAL();
            return dalRating.SelectForDropDownList();
        }
        #endregion Select For Dropdown List

        #region SelectByPK
        public RatingENT SelectByPK(SqlInt32 RatingID)
        {
            RatingDAL dalRating = new RatingDAL();
            return dalRating.SelectByPK(RatingID);
        }

        #endregion SelectByPK

        #endregion Select Operation

        #region UPSERT
        public Boolean UPSERT(RatingENT entRating)
        {
            RatingDAL dalRating = new RatingDAL();
            return dalRating.UPSERT(entRating);
        }
        #endregion UPSERT
    }
}