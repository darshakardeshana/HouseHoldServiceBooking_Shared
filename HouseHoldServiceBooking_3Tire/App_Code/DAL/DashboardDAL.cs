using HouseHoldServiceBooking;
using HouseHoldServiceBooking.ENT;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Data.SqlTypes;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for DashboardDAL
/// </summary>
namespace HouseHoldServiceBooking.DAL
{
    public class DashboardDAL : DatabaseConfig
    {
        #region Local variables

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

        #endregion Local variables

        #region Constructor
        public DashboardDAL()
        {
            //
            // TODO: Add constructor logic here
            //
        }
        #endregion Constructor

        #region GetDetails
        public DataTable GetDetails()
        {
            using (SqlConnection objConn = new SqlConnection(ConnectionString))
            {
                objConn.Open();
                using (SqlCommand objCmd = objConn.CreateCommand())
                {
                    try
                    {
                        #region Prepare Command
                        objCmd.CommandType = CommandType.StoredProcedure;
                        objCmd.CommandText = "PR_Dashboard_GetDetails";
                        #endregion Prepare Command

                        #region ReadData and Set Controls
                        DataTable dt = new DataTable();
                        using (SqlDataReader objSDR = objCmd.ExecuteReader())
                        {
                            dt.Load(objSDR);
                        }
                        return dt;

                        #endregion ReadData and Set Controls
                    }

                    catch (SqlException sqlex)
                    {
                        Message = sqlex.Message.ToString();
                        return null;
                    }

                    catch (Exception ex)
                    {
                        Message = ex.Message.ToString();
                        return null;
                    }

                    finally
                    {
                        if (objConn.State == ConnectionState.Open)
                            objConn.Close();
                    }
                }

            }
        }
        #endregion GetDetails
    }
}