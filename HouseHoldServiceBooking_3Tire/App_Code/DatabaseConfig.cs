using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for DatabaseConfig
/// </summary>
public class DatabaseConfig
{
    #region Constructor
    public DatabaseConfig()
    {
        //
        // TODO: Add constructor logic here
        //
    }
    #endregion Constructor

    #region ConnectionString
    public static string ConnectionString = ConfigurationManager.ConnectionStrings["HouseHoldServiceBookingConnectionString"].ConnectionString.ToString();
    #endregion ConnectionString
}