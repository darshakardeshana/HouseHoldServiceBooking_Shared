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
/// Summary description for ServiceProviderServicesDAL
/// </summary>
/// 
namespace HouseHoldServiceBooking.DAL
{
    public class ServiceProviderServicesDAL : DatabaseConfig
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
        public ServiceProviderServicesDAL()
        {
            //
            // TODO: Add constructor logic here
            //
        }
        #endregion Constructor

        #region Insert Operation

        public Boolean Insert(ServiceProviderServicesENT entServiceProviderServices)
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
                        objCmd.CommandText = "PR_ServiceProviderServices_InsertByUserID";

                        objCmd.Parameters.Add("@ServiceProviderServicesID", SqlDbType.Int, 4).Direction = ParameterDirection.Output;
                        objCmd.Parameters.AddWithValue("@ServiceProviderID", entServiceProviderServices.ServiceProviderID);
                        objCmd.Parameters.AddWithValue("@ServiceID", entServiceProviderServices.ServiceID);
                        objCmd.Parameters.AddWithValue("@Rate", entServiceProviderServices.Rate);
                        objCmd.Parameters.AddWithValue("@Description", entServiceProviderServices.Description);
                        objCmd.Parameters.AddWithValue("@Specialist", entServiceProviderServices.Specialist);
                        objCmd.Parameters.AddWithValue("@ModifiedBy", entServiceProviderServices.ModifiedBy);
                        objCmd.Parameters.AddWithValue("@UserID", entServiceProviderServices.UserID);
                        objCmd.Parameters.AddWithValue("@CreationDate", entServiceProviderServices.CreationDate);
                        objCmd.Parameters.AddWithValue("@ModificationDate", entServiceProviderServices.ModificationDate);
                        #endregion Prepare Command

                        objCmd.ExecuteNonQuery();
                        entServiceProviderServices.ServiceProviderServicesID = Convert.ToInt32(objCmd.Parameters["@ServiceProviderServicesID"].Value);

                        return true;
                    }
                    catch (SqlException sqlex)
                    {
                        Message = sqlex.Message.ToString();
                        return false;
                    }
                    catch (Exception ex)
                    {
                        Message = ex.Message.ToString();
                        return false;
                    }
                    finally
                    {
                        if (objConn.State == ConnectionState.Open)
                            objConn.Close();
                    }

                }
            }
        }

        #endregion Insert Operation

        #region Update Operation

        public Boolean Update(ServiceProviderServicesENT entServiceProviderServices)
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
                        objCmd.CommandText = "PR_ServiceProviderServices_UpdateByPK";

                        objCmd.Parameters.AddWithValue("@ServiceProviderServicesID", entServiceProviderServices.ServiceProviderServicesID);
                        objCmd.Parameters.AddWithValue("@ServiceProviderID", entServiceProviderServices.ServiceProviderID);
                        objCmd.Parameters.AddWithValue("@ServiceID", entServiceProviderServices.ServiceID);
                        objCmd.Parameters.AddWithValue("@Rate", entServiceProviderServices.Rate);
                        objCmd.Parameters.AddWithValue("@Description", entServiceProviderServices.Description);
                        objCmd.Parameters.AddWithValue("@Specialist", entServiceProviderServices.Specialist);
                        objCmd.Parameters.AddWithValue("@ModifiedBy", entServiceProviderServices.ModifiedBy);
                        objCmd.Parameters.AddWithValue("@CreationDate", entServiceProviderServices.CreationDate);
                        objCmd.Parameters.AddWithValue("@ModificationDate", entServiceProviderServices.ModificationDate);
                        #endregion Prepare Command

                        objCmd.ExecuteNonQuery();

                        return true;
                    }
                    catch (SqlException sqlex)
                    {
                        Message = sqlex.Message.ToString();
                        return false;
                    }
                    catch (Exception ex)
                    {
                        Message = ex.Message.ToString();
                        return false;
                    }
                    finally
                    {
                        if (objConn.State == ConnectionState.Open)
                            objConn.Close();
                    }

                }
            }
        }

        #endregion Update Operation

        #region Delete Operation

        public Boolean Delete(SqlInt32 ServiceProviderServicesID, SqlInt32 UserID)
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
                        objCmd.CommandText = "PR_ServiceProviderServices_DeleteByPK";
                        objCmd.Parameters.AddWithValue("@ServiceProviderServicesID", ServiceProviderServicesID);
                        objCmd.Parameters.AddWithValue("@UserID", UserID);
                        #endregion Prepare Command

                        objCmd.ExecuteNonQuery();

                        return true;

                    }
                    catch (SqlException sqlex)
                    {
                        Message = sqlex.Message.ToString();
                        return false;
                    }
                    catch (Exception ex)
                    {
                        Message = ex.Message.ToString();
                        return false;
                    }
                    finally
                    {
                        if (objConn.State == ConnectionState.Open)
                            objConn.Close();
                    }
                }
            }
        }

        #endregion Delete Operation

        #region Select Operation

        #region Select All Operation
        public DataTable SelectAll()
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
                        objCmd.CommandText = "PR_ServiceProviderServices_SelectAll";
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
        #endregion Select All Operation

        #region Select By PK Operation
        public ServiceProviderServicesENT SelectByPK(SqlInt32 ServiceProviderServicesID)
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
                        objCmd.CommandText = "PR_ServiceProviderServices_SelectByPK";
                        objCmd.Parameters.AddWithValue("@ServiceProviderServicesID", ServiceProviderServicesID);

                        #endregion Prepare Command

                        #region ReadData and Set Controls
                        ServiceProviderServicesENT entServiceProviderServices = new ServiceProviderServicesENT();
                        using (SqlDataReader objSDR = objCmd.ExecuteReader())
                        {
                            while (objSDR.Read())
                            {
                                if (!objSDR["ServiceProviderServicesID"].Equals(DBNull.Value))
                                {
                                    entServiceProviderServices.ServiceProviderServicesID = Convert.ToInt32(objSDR["ServiceProviderServicesID"]);
                                }
                                if (!objSDR["ServiceProviderID"].Equals(DBNull.Value))
                                {
                                    entServiceProviderServices.ServiceProviderID = Convert.ToInt32(objSDR["ServiceProviderID"]);
                                }
                                if (!objSDR["ServiceID"].Equals(DBNull.Value))
                                {
                                    entServiceProviderServices.ServiceID = Convert.ToInt32(objSDR["ServiceID"]);
                                }
                                if (!objSDR["Rate"].Equals(DBNull.Value))
                                {
                                    entServiceProviderServices.Rate = Convert.ToDecimal(objSDR["Rate"]);
                                }
                                if (!objSDR["Description"].Equals(DBNull.Value))
                                {
                                    entServiceProviderServices.Description = Convert.ToString(objSDR["Description"]);
                                }
                                if (!objSDR["Specialist"].Equals(DBNull.Value))
                                {
                                    entServiceProviderServices.Specialist = Convert.ToString(objSDR["Specialist"]);
                                }
                                if (!objSDR["ModifiedBy"].Equals(DBNull.Value))
                                {
                                    entServiceProviderServices.ModifiedBy = Convert.ToInt32(objSDR["ModifiedBy"]);
                                }
                                if (!objSDR["UserID"].Equals(DBNull.Value))
                                {
                                    entServiceProviderServices.UserID = Convert.ToInt32(objSDR["UserID"]);
                                }
                                if (!objSDR["CreationDate"].Equals(DBNull.Value))
                                {
                                    entServiceProviderServices.CreationDate = Convert.ToDateTime(objSDR["CreationDate"]);
                                }
                                if (!objSDR["ModificationDate"].Equals(DBNull.Value))
                                {
                                    entServiceProviderServices.ModificationDate = Convert.ToDateTime(objSDR["ModificationDate"]);
                                }
                            }
                            return entServiceProviderServices;
                        }

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
        #endregion Select By PK Operation

        #region Select For Dropdownlist Operation
        public DataTable SelectForDropDownList()
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
                        objCmd.CommandText = "PR_ServiceProviderServices_SelectForDropDownList";
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

        public DataTable SelectForDropDownListByServiceProviderID(SqlInt32 ServiceProviderID)
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
                        objCmd.CommandText = "PR_ServiceProviderServices_SelectForDropDownListByServiceProviderID";
                        objCmd.Parameters.AddWithValue("@ServiceProviderID", ServiceProviderID);
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

        #endregion Select For Dropdownlist Operation

        #region Select By ServiceProviderID
        public DataTable SelectByServiceProviderID(SqlInt32 ServiceProviderID)
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
                        objCmd.CommandText = "PR_ServiceProviderServices_SelectByServiceProviderID";
                        objCmd.Parameters.AddWithValue("@ServiceProviderID", ServiceProviderID);
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
        #endregion Select By ServiceProviderID

        #region SelectForEdit By ServiceProviderID
        public DataTable SelectForEditByServiceProviderID(SqlInt32 ServiceProviderID)
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
                        objCmd.CommandText = "PR_ServiceProviderServices_SelectForEditByServiceProviderID";
                        objCmd.Parameters.AddWithValue("@ServiceProviderID", ServiceProviderID);
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
        #endregion Select By ServiceProviderID

        #region Select By Service ID
        public DataTable SelectByServiceID(SqlInt32 ServiceID)
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
                        objCmd.CommandText = "PR_ServiceProviderServices_SelectByServiceID";
                        objCmd.Parameters.AddWithValue("@ServiceID", ServiceID);
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
        #endregion Select By Service ID

        #endregion Select Operation

    }
}