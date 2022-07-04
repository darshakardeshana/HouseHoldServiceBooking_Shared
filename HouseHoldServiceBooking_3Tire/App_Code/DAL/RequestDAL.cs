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
/// Summary description for RequestDAL
/// </summary>
/// 
namespace HouseHoldServiceBooking.DAL
{
    public class RequestDAL : DatabaseConfig
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
        public RequestDAL()
        {
            //
            // TODO: Add constructor logic here
            //
        }
        #endregion Constructor

        #region Insert Operation

        public Boolean Insert(RequestENT entRequest)
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
                        objCmd.CommandText = "PR_Request_Insert";
    
                        objCmd.Parameters.Add("@RequestID", SqlDbType.Int, 4).Direction = ParameterDirection.Output;
                        objCmd.Parameters.AddWithValue("@ServiceProviderID", entRequest.ServiceProviderID);
                        objCmd.Parameters.AddWithValue("@ServiceProviderServicesID", entRequest.ServiceProviderServicesID);
                        objCmd.Parameters.AddWithValue("@ClientMobileNo", entRequest.ClientMobileNo);
                        objCmd.Parameters.AddWithValue("@IsAttended", entRequest.IsAttended);
                        objCmd.Parameters.AddWithValue("@CreationDate", entRequest.CreationDate);
                        objCmd.Parameters.AddWithValue("@ModificationDate", entRequest.ModificationDate);
                        #endregion Prepare Command

                        objCmd.ExecuteNonQuery();
                        entRequest.RequestID = Convert.ToInt32(objCmd.Parameters["@RequestID"].Value);

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

        public Boolean Update(RequestENT entRequest)
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
                        objCmd.CommandText = "PR_Request_UpdateByPK";

                        objCmd.Parameters.AddWithValue("@RequestID", entRequest.RequestID);
                        objCmd.Parameters.AddWithValue("@ServiceProviderID", entRequest.ServiceProviderID);
                        objCmd.Parameters.AddWithValue("@ServiceProviderServicesID", entRequest.ServiceProviderServicesID);
                        objCmd.Parameters.AddWithValue("@ClientMobileNo", entRequest.ClientMobileNo);
                        objCmd.Parameters.AddWithValue("@IsAttended", entRequest.IsAttended);
                        objCmd.Parameters.AddWithValue("@CreationDate", entRequest.CreationDate);
                        objCmd.Parameters.AddWithValue("@ModificationDate", entRequest.ModificationDate);
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

        public Boolean UpdateIsAttended(SqlInt32 RequestID, SqlBoolean IsAttended)
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
                        objCmd.CommandText = "PR_Request_UpdateIsAttended";

                        objCmd.Parameters.AddWithValue("@RequestID", RequestID);
                        objCmd.Parameters.AddWithValue("@IsAttended", IsAttended);
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

        public Boolean Delete(SqlInt32 RequestID)
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
                        objCmd.CommandText = "PR_Request_DeleteByPK";
                        objCmd.Parameters.AddWithValue("@RequestID", RequestID);
                        //objCmd.Parameters.AddWithValue("@UserID", UserID);
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
                        objCmd.CommandText = "PR_Request_SelectAll";
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

        #region SelectByServiceProviderID
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
                        objCmd.CommandText = "PR_Request_SelectByServiceProviderID";
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
        #endregion SelectByServiceProviderID

        #region SelectByClientMobileNoIsAttended
        public DataTable SelectByClientMobileNoIsAttended(SqlString ClientMobileNo)
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
                        objCmd.CommandText = "PR_Request_SelectByClientMobileNoIsAttended";
                        objCmd.Parameters.AddWithValue("@ClientMobileNo", ClientMobileNo);
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
        #endregion SelectByClientMobileNoIsAttended

        #region Select By PK Operation
        public RequestENT SelectByPK(SqlInt32 RequestID)
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
                        objCmd.CommandText = "PR_Request_SelectByPK";
                        objCmd.Parameters.AddWithValue("@RequestID", RequestID);
                        //objCmd.Parameters.AddWithValue("@UserID", UserID);
                        #endregion Prepare Command

                        #region ReadData and Set Controls
                        RequestENT entRequest = new RequestENT();
                        using (SqlDataReader objSDR = objCmd.ExecuteReader())
                        {
                            while (objSDR.Read())
                            {
                                if (!objSDR["RequestID"].Equals(DBNull.Value))
                                {
                                    entRequest.RequestID = Convert.ToInt32(objSDR["RequestID"]);
                                }
                                if (!objSDR["ServiceProviderID"].Equals(DBNull.Value))
                                {
                                    entRequest.ServiceProviderID = Convert.ToInt32(objSDR["ServiceProviderID"]);
                                }
                                if (!objSDR["ServiceProviderServicesID"].Equals(DBNull.Value))
                                {
                                    entRequest.ServiceProviderServicesID = Convert.ToInt32(objSDR["ServiceProviderServicesID"]);
                                }
                                if (!objSDR["ClientMobileNo"].Equals(DBNull.Value))
                                {
                                    entRequest.ClientMobileNo = Convert.ToString(objSDR["ClientMobileNo"]);
                                }
                                if (!objSDR["IsAttended"].Equals(DBNull.Value))
                                {
                                    entRequest.IsAttended = Convert.ToBoolean(objSDR["IsAttended"]);
                                }
                                if (!objSDR["CreationDate"].Equals(DBNull.Value))
                                {
                                    entRequest.CreationDate = Convert.ToDateTime(objSDR["CreationDate"]);
                                }
                                if (!objSDR["ModificationDate"].Equals(DBNull.Value))
                                {
                                    entRequest.ModificationDate = Convert.ToDateTime(objSDR["ModificationDate"]);
                                }
                            }
                            return entRequest;
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
                        objCmd.CommandText = "PR_Request_SelectForDropDownList";
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
        
        #endregion Select Operation

    }
}