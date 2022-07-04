using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI.WebControls;

/// <summary>
/// Summary description for CommonFunction
/// </summary>
///
namespace HouseHoldServiceBooking
{
    public class CommonFunctions
    {
        public CommonFunctions()
        {
            
        }

        public static void BindEmptyRepeater(Repeater rp)
        {
            rp.DataSource = null;
            rp.DataBind();
        }

        public static void BindEmptyGridView(GridView gv)
        {
            gv.DataSource = null;
            gv.DataBind();
        }
    }
}