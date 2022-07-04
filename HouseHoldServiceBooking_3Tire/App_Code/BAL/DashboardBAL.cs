using HouseHoldServiceBooking.DAL;
using HouseHoldServiceBooking.ENT;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlTypes;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for DashboardBAL
/// </summary>
namespace HouseHoldServiceBooking.BAL
{
    public class DashboardBAL
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
        public DashboardBAL()
        {
            //
            // TODO: Add constructor logic here
            //
        }
        #endregion Constructor

        #region GetDetails
        public DataTable GetDetails()
        {
            DashboardDAL dalDashboard = new DashboardDAL();
            return dalDashboard.GetDetails();
        }
        #endregion GetDetails
    }
}