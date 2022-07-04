using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Web;

namespace HouseHoldServiceBooking
{
    public class CV
    {
        #region Constructor
        public CV()
        {

        }
        #endregion Constructor

        public static DateTime CurrentDate = DateTime.Now;
        public static string DefaultDateFormat = "dd-MM-yyyy";
        public static string DefaultFillDateFormat = "yyyy-MM-dd";
    }
}
