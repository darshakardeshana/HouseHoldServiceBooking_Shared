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
/// Summary description for ServiceProviderDAL
/// </summary>
/// 
namespace HouseHoldServiceBooking.DAL
{
    public class ServiceProviderDAL : DatabaseConfig
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
        public ServiceProviderDAL()
        {
            //
            // TODO: Add constructor logic here
            //
        }
        #endregion Constructor

        #region Insert Operation

        public Boolean Insert(ServiceProviderENT entServiceProvider)
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
                        objCmd.CommandText = "PR_ServiceProvider_InsertByUserID";
    
                        objCmd.Parameters.Add("@ServiceProviderID", SqlDbType.Int, 4).Direction = ParameterDirection.Output;
                        objCmd.Parameters.AddWithValue("@UserName", entServiceProvider.UserName);
                        objCmd.Parameters.AddWithValue("@Password", entServiceProvider.Password);
                        objCmd.Parameters.AddWithValue("@ServiceProviderName", entServiceProvider.ServiceProviderName);
                        objCmd.Parameters.AddWithValue("@MobileNo", entServiceProvider.MobileNo);
                        objCmd.Parameters.AddWithValue("@DOB", entServiceProvider.DOB);
                        objCmd.Parameters.AddWithValue("@HomeAddress", entServiceProvider.HomeAddress);
                        objCmd.Parameters.AddWithValue("@HomePincode", entServiceProvider.HomePincode);
                        objCmd.Parameters.AddWithValue("@HomeCountryID", entServiceProvider.HomeCountryID);
                        objCmd.Parameters.AddWithValue("@HomeStateID", entServiceProvider.HomeStateID);
                        objCmd.Parameters.AddWithValue("@HomeCityID", entServiceProvider.HomeCityID);
                        objCmd.Parameters.AddWithValue("@WorkAddress", entServiceProvider.WorkAddress);
                        objCmd.Parameters.AddWithValue("@WorkPincode", entServiceProvider.WorkPincode);
                        objCmd.Parameters.AddWithValue("@WorkCountryID", entServiceProvider.WorkCountryID);
                        objCmd.Parameters.AddWithValue("@WorkStateID", entServiceProvider.WorkStateID);
                        objCmd.Parameters.AddWithValue("@WorkCityID", entServiceProvider.WorkCityID);
                        objCmd.Parameters.AddWithValue("@AadharCard", entServiceProvider.AadharCard);
                        objCmd.Parameters.AddWithValue("@PANCardNo", entServiceProvider.PANCardNo);
                        objCmd.Parameters.AddWithValue("@GSTNo", entServiceProvider.GSTNo);
                        objCmd.Parameters.AddWithValue("@BankID", entServiceProvider.BankID);
                        objCmd.Parameters.AddWithValue("@AccountNo", entServiceProvider.AccountNo);
                        objCmd.Parameters.AddWithValue("@IFSCCode", entServiceProvider.IFSCCode);
                        objCmd.Parameters.AddWithValue("@ProfilePhotoPath", entServiceProvider.ProfilePhotoPath);
                        objCmd.Parameters.AddWithValue("@ModifiedBy", entServiceProvider.ModifiedBy);
                        objCmd.Parameters.AddWithValue("@UserID", entServiceProvider.UserID);
                        objCmd.Parameters.AddWithValue("@CreationDate", entServiceProvider.CreationDate);
                        objCmd.Parameters.AddWithValue("@ModificationDate", entServiceProvider.ModificationDate);
                        #endregion Prepare Command

                        objCmd.ExecuteNonQuery();
                        entServiceProvider.ServiceProviderID = Convert.ToInt32(objCmd.Parameters["@ServiceProviderID"].Value);

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

        public Boolean Update(ServiceProviderENT entServiceProvider)
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
                        objCmd.CommandText = "PR_ServiceProvider_UpdateByPK";

                        objCmd.Parameters.AddWithValue("@ServiceProviderID", entServiceProvider.ServiceProviderID);
                        objCmd.Parameters.AddWithValue("@UserName", entServiceProvider.UserName);
                        objCmd.Parameters.AddWithValue("@Password", entServiceProvider.Password);
                        objCmd.Parameters.AddWithValue("@ServiceProviderName", entServiceProvider.ServiceProviderName);
                        objCmd.Parameters.AddWithValue("@MobileNo", entServiceProvider.MobileNo);
                        objCmd.Parameters.AddWithValue("@DOB", entServiceProvider.DOB);
                        objCmd.Parameters.AddWithValue("@HomeAddress", entServiceProvider.HomeAddress);
                        objCmd.Parameters.AddWithValue("@HomePincode", entServiceProvider.HomePincode);
                        objCmd.Parameters.AddWithValue("@HomeCountryID", entServiceProvider.HomeCountryID);
                        objCmd.Parameters.AddWithValue("@HomeStateID", entServiceProvider.HomeStateID);
                        objCmd.Parameters.AddWithValue("@HomeCityID", entServiceProvider.HomeCityID);
                        objCmd.Parameters.AddWithValue("@WorkAddress", entServiceProvider.WorkAddress);
                        objCmd.Parameters.AddWithValue("@WorkPincode", entServiceProvider.WorkPincode);
                        objCmd.Parameters.AddWithValue("@WorkCountryID", entServiceProvider.WorkCountryID);
                        objCmd.Parameters.AddWithValue("@WorkStateID", entServiceProvider.WorkStateID);
                        objCmd.Parameters.AddWithValue("@WorkCityID", entServiceProvider.WorkCityID);
                        objCmd.Parameters.AddWithValue("@AadharCard", entServiceProvider.AadharCard);
                        objCmd.Parameters.AddWithValue("@PANCardNo", entServiceProvider.PANCardNo);
                        objCmd.Parameters.AddWithValue("@GSTNo", entServiceProvider.GSTNo);
                        objCmd.Parameters.AddWithValue("@BankID", entServiceProvider.BankID);
                        objCmd.Parameters.AddWithValue("@AccountNo", entServiceProvider.AccountNo);
                        objCmd.Parameters.AddWithValue("@IFSCCode", entServiceProvider.IFSCCode);
                        objCmd.Parameters.AddWithValue("@ProfilePhotoPath", entServiceProvider.ProfilePhotoPath);
                        objCmd.Parameters.AddWithValue("@ModifiedBy", entServiceProvider.ModifiedBy);
                        objCmd.Parameters.AddWithValue("@ModificationDate", entServiceProvider.ModificationDate);
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

        public Boolean UpdateByServiceProvider(ServiceProviderENT entServiceProvider)
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
                        objCmd.CommandText = "PR_ServiceProvider_UpdateByPKServiceProvider";

                        objCmd.Parameters.AddWithValue("@ServiceProviderID", entServiceProvider.ServiceProviderID);
                        objCmd.Parameters.AddWithValue("@UserName", entServiceProvider.UserName);
                        objCmd.Parameters.AddWithValue("@Password", entServiceProvider.Password);
                        objCmd.Parameters.AddWithValue("@ServiceProviderName", entServiceProvider.ServiceProviderName);
                        objCmd.Parameters.AddWithValue("@MobileNo", entServiceProvider.MobileNo);
                        objCmd.Parameters.AddWithValue("@DOB", entServiceProvider.DOB);
                        objCmd.Parameters.AddWithValue("@HomeAddress", entServiceProvider.HomeAddress);
                        objCmd.Parameters.AddWithValue("@HomePincode", entServiceProvider.HomePincode);
                        objCmd.Parameters.AddWithValue("@HomeCountryID", entServiceProvider.HomeCountryID);
                        objCmd.Parameters.AddWithValue("@HomeStateID", entServiceProvider.HomeStateID);
                        objCmd.Parameters.AddWithValue("@HomeCityID", entServiceProvider.HomeCityID);
                        objCmd.Parameters.AddWithValue("@WorkAddress", entServiceProvider.WorkAddress);
                        objCmd.Parameters.AddWithValue("@WorkPincode", entServiceProvider.WorkPincode);
                        objCmd.Parameters.AddWithValue("@WorkCountryID", entServiceProvider.WorkCountryID);
                        objCmd.Parameters.AddWithValue("@WorkStateID", entServiceProvider.WorkStateID);
                        objCmd.Parameters.AddWithValue("@WorkCityID", entServiceProvider.WorkCityID);
                        objCmd.Parameters.AddWithValue("@AadharCard", entServiceProvider.AadharCard);
                        objCmd.Parameters.AddWithValue("@PANCardNo", entServiceProvider.PANCardNo);
                        objCmd.Parameters.AddWithValue("@GSTNo", entServiceProvider.GSTNo);
                        objCmd.Parameters.AddWithValue("@BankID", entServiceProvider.BankID);
                        objCmd.Parameters.AddWithValue("@AccountNo", entServiceProvider.AccountNo);
                        objCmd.Parameters.AddWithValue("@IFSCCode", entServiceProvider.IFSCCode);
                        objCmd.Parameters.AddWithValue("@ProfilePhotoPath", entServiceProvider.ProfilePhotoPath);
                        objCmd.Parameters.AddWithValue("@ModifiedBy", entServiceProvider.ModifiedBy);
                        objCmd.Parameters.AddWithValue("@ModificationDate", entServiceProvider.ModificationDate);
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

        public Boolean Delete(SqlInt32 ServiceProviderID)
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
                        objCmd.CommandText = "PR_ServiceProvider_DeleteByPK";
                        objCmd.Parameters.AddWithValue("@ServiceProviderID", ServiceProviderID);
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
                        objCmd.CommandText = "PR_ServiceProvider_SelectAll";
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
        public ServiceProviderENT SelectByPK(SqlInt32 ServiceProviderID)
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
                        objCmd.CommandText = "PR_ServiceProvider_SelectByPK";
                        objCmd.Parameters.AddWithValue("@ServiceProviderID", ServiceProviderID);

                        #endregion Prepare Command

                        #region ReadData and Set Controls
                        ServiceProviderENT entServiceProvider = new ServiceProviderENT();
                        using (SqlDataReader objSDR = objCmd.ExecuteReader())
                        {
                            while (objSDR.Read())
                            {
                                if (!objSDR["ServiceProviderID"].Equals(DBNull.Value))
                                {
                                    entServiceProvider.ServiceProviderID = Convert.ToInt32(objSDR["ServiceProviderID"]);
                                }
                                if (!objSDR["UserName"].Equals(DBNull.Value))
                                {
                                    entServiceProvider.UserName = Convert.ToString(objSDR["UserName"]);
                                }
                                if (!objSDR["Password"].Equals(DBNull.Value))
                                {
                                    entServiceProvider.Password = Convert.ToString(objSDR["Password"]);
                                }
                                if (!objSDR["ServiceProviderName"].Equals(DBNull.Value))
                                {
                                    entServiceProvider.ServiceProviderName = Convert.ToString(objSDR["ServiceProviderName"]);
                                }
                                if (!objSDR["MobileNo"].Equals(DBNull.Value))
                                {
                                    entServiceProvider.MobileNo = Convert.ToString(objSDR["MobileNo"]);
                                }
                                if (!objSDR["DOB"].Equals(DBNull.Value))
                                {
                                    entServiceProvider.DOB = Convert.ToString(objSDR["DOB"]);
                                }
                                if (!objSDR["HomeAddress"].Equals(DBNull.Value))
                                {
                                    entServiceProvider.HomeAddress = Convert.ToString(objSDR["HomeAddress"]);
                                }
                                if (!objSDR["HomePincode"].Equals(DBNull.Value))
                                {
                                    entServiceProvider.HomePincode = Convert.ToString(objSDR["HomePincode"]);
                                }
                                if (!objSDR["HomeCountryID"].Equals(DBNull.Value))
                                {
                                    entServiceProvider.HomeCountryID = Convert.ToInt32(objSDR["HomeCountryID"]);
                                }
                                if (!objSDR["HomeStateID"].Equals(DBNull.Value))
                                {
                                    entServiceProvider.HomeStateID = Convert.ToInt32(objSDR["HomeStateID"]);
                                }
                                if (!objSDR["HomeCityID"].Equals(DBNull.Value))
                                {
                                    entServiceProvider.HomeCityID = Convert.ToInt32(objSDR["HomeCityID"]);
                                }
                                if (!objSDR["WorkAddress"].Equals(DBNull.Value))
                                {
                                    entServiceProvider.WorkAddress = Convert.ToString(objSDR["WorkAddress"]);
                                }
                                if (!objSDR["WorkPincode"].Equals(DBNull.Value))
                                {
                                    entServiceProvider.WorkPincode = Convert.ToString(objSDR["WorkPincode"]);
                                }
                                if (!objSDR["WorkCountryID"].Equals(DBNull.Value))
                                {
                                    entServiceProvider.WorkCountryID = Convert.ToInt32(objSDR["WorkCountryID"]);
                                }
                                if (!objSDR["WorkStateID"].Equals(DBNull.Value))
                                {
                                    entServiceProvider.WorkStateID = Convert.ToInt32(objSDR["WorkStateID"]);
                                }
                                if (!objSDR["WorkCityID"].Equals(DBNull.Value))
                                {
                                    entServiceProvider.WorkCityID = Convert.ToInt32(objSDR["WorkCityID"]);
                                }
                                if (!objSDR["AadharCard"].Equals(DBNull.Value))
                                {
                                    entServiceProvider.AadharCard = Convert.ToString(objSDR["AadharCard"]);
                                }
                                if (!objSDR["PANCardNo"].Equals(DBNull.Value))
                                {
                                    entServiceProvider.PANCardNo = Convert.ToString(objSDR["PANCardNo"]);
                                }
                                if (!objSDR["GSTNo"].Equals(DBNull.Value))
                                {
                                    entServiceProvider.GSTNo = Convert.ToString(objSDR["GSTNo"]);
                                }
                                if (!objSDR["BankID"].Equals(DBNull.Value))
                                {
                                    entServiceProvider.BankID = Convert.ToInt32(objSDR["BankID"]);
                                }
                                if (!objSDR["AccountNo"].Equals(DBNull.Value))
                                {
                                    entServiceProvider.AccountNo = Convert.ToString(objSDR["AccountNo"]);
                                }
                                if (!objSDR["IFSCCode"].Equals(DBNull.Value))
                                {
                                    entServiceProvider.IFSCCode = Convert.ToString(objSDR["IFSCCode"]);
                                }
                                if (!objSDR["ProfilePhotoPath"].Equals(DBNull.Value))
                                {
                                    entServiceProvider.ProfilePhotoPath = Convert.ToString(objSDR["ProfilePhotoPath"]);
                                }
                                if (!objSDR["ModifiedBy"].Equals(DBNull.Value))
                                {
                                    entServiceProvider.ModifiedBy = Convert.ToInt32(objSDR["ModifiedBy"]);
                                }
                                if (!objSDR["UserID"].Equals(DBNull.Value))
                                {
                                    entServiceProvider.UserID = Convert.ToInt32(objSDR["UserID"]);
                                }
                                if (!objSDR["CreationDate"].Equals(DBNull.Value))
                                {
                                    entServiceProvider.CreationDate = Convert.ToDateTime(objSDR["CreationDate"]);
                                }
                                if (!objSDR["ModificationDate"].Equals(DBNull.Value))
                                {
                                    entServiceProvider.ModificationDate = Convert.ToDateTime(objSDR["ModificationDate"]);
                                }
                            }
                            return entServiceProvider;
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
                        objCmd.CommandText = "PR_ServiceProvider_SelectForDropDownList";
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

        #region Select By UserName Password
        public ServiceProviderENT SelectByUserNamePassword(SqlString strUserName, SqlString strPassword)
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
                        objCmd.CommandText = "PR_ServiceProvider_SelectByUserNamePassword";
                        objCmd.Parameters.AddWithValue("@UserName", strUserName);
                        objCmd.Parameters.AddWithValue("@Password", strPassword);
                        #endregion Prepare Command

                        #region ReadData and Set Controls
                        ServiceProviderENT entServiceProvider = new ServiceProviderENT();
                        using (SqlDataReader objSDR = objCmd.ExecuteReader())
                        {
                            while (objSDR.Read())
                            {
                                if (!objSDR["ServiceProviderID"].Equals(DBNull.Value))
                                {
                                    entServiceProvider.ServiceProviderID = Convert.ToInt32(objSDR["ServiceProviderID"]);
                                }
                                if (!objSDR["UserName"].Equals(DBNull.Value))
                                {
                                    entServiceProvider.UserName = Convert.ToString(objSDR["UserName"]);
                                }
                                if (!objSDR["Password"].Equals(DBNull.Value))
                                {
                                    entServiceProvider.Password = Convert.ToString(objSDR["Password"]);
                                }
                                if (!objSDR["ServiceProviderName"].Equals(DBNull.Value))
                                {
                                    entServiceProvider.ServiceProviderName = Convert.ToString(objSDR["ServiceProviderName"]);
                                }
                                if (!objSDR["MobileNo"].Equals(DBNull.Value))
                                {
                                    entServiceProvider.MobileNo = Convert.ToString(objSDR["MobileNo"]);
                                }
                                if (!objSDR["DOB"].Equals(DBNull.Value))
                                {
                                    entServiceProvider.DOB = Convert.ToString(objSDR["DOB"]);
                                }
                                if (!objSDR["HomeAddress"].Equals(DBNull.Value))
                                {
                                    entServiceProvider.HomeAddress = Convert.ToString(objSDR["HomeAddress"]);
                                }
                                if (!objSDR["HomePincode"].Equals(DBNull.Value))
                                {
                                    entServiceProvider.HomePincode = Convert.ToString(objSDR["HomePincode"]);
                                }
                                if (!objSDR["HomeCountryID"].Equals(DBNull.Value))
                                {
                                    entServiceProvider.HomeCountryID = Convert.ToInt32(objSDR["HomeCountryID"]);
                                }
                                if (!objSDR["HomeStateID"].Equals(DBNull.Value))
                                {
                                    entServiceProvider.HomeStateID = Convert.ToInt32(objSDR["HomeStateID"]);
                                }
                                if (!objSDR["HomeCityID"].Equals(DBNull.Value))
                                {
                                    entServiceProvider.HomeCityID = Convert.ToInt32(objSDR["HomeCityID"]);
                                }
                                if (!objSDR["WorkAddress"].Equals(DBNull.Value))
                                {
                                    entServiceProvider.WorkAddress = Convert.ToString(objSDR["WorkAddress"]);
                                }
                                if (!objSDR["WorkPincode"].Equals(DBNull.Value))
                                {
                                    entServiceProvider.WorkPincode = Convert.ToString(objSDR["WorkPincode"]);
                                }
                                if (!objSDR["WorkCountryID"].Equals(DBNull.Value))
                                {
                                    entServiceProvider.WorkCountryID = Convert.ToInt32(objSDR["WorkCountryID"]);
                                }
                                if (!objSDR["WorkStateID"].Equals(DBNull.Value))
                                {
                                    entServiceProvider.WorkStateID = Convert.ToInt32(objSDR["WorkStateID"]);
                                }
                                if (!objSDR["WorkCityID"].Equals(DBNull.Value))
                                {
                                    entServiceProvider.WorkCityID = Convert.ToInt32(objSDR["WorkCityID"]);
                                }
                                if (!objSDR["AadharCard"].Equals(DBNull.Value))
                                {
                                    entServiceProvider.AadharCard = Convert.ToString(objSDR["AadharCard"]);
                                }
                                if (!objSDR["PANCardNo"].Equals(DBNull.Value))
                                {
                                    entServiceProvider.PANCardNo = Convert.ToString(objSDR["PANCardNo"]);
                                }
                                if (!objSDR["GSTNo"].Equals(DBNull.Value))
                                {
                                    entServiceProvider.GSTNo = Convert.ToString(objSDR["GSTNo"]);
                                }
                                if (!objSDR["BankID"].Equals(DBNull.Value))
                                {
                                    entServiceProvider.BankID = Convert.ToInt32(objSDR["BankID"]);
                                }
                                if (!objSDR["AccountNo"].Equals(DBNull.Value))
                                {
                                    entServiceProvider.AccountNo = Convert.ToString(objSDR["AccountNo"]);
                                }
                                if (!objSDR["IFSCCode"].Equals(DBNull.Value))
                                {
                                    entServiceProvider.IFSCCode = Convert.ToString(objSDR["IFSCCode"]);
                                }
                                if (!objSDR["ProfilePhotoPath"].Equals(DBNull.Value))
                                {
                                    entServiceProvider.ProfilePhotoPath = Convert.ToString(objSDR["ProfilePhotoPath"]);
                                }
                                if (!objSDR["ModifiedBy"].Equals(DBNull.Value))
                                {
                                    entServiceProvider.ModifiedBy = Convert.ToInt32(objSDR["ModifiedBy"]);
                                }
                                if (!objSDR["UserID"].Equals(DBNull.Value))
                                {
                                    entServiceProvider.UserID = Convert.ToInt32(objSDR["UserID"]);
                                }
                                if (!objSDR["CreationDate"].Equals(DBNull.Value))
                                {
                                    entServiceProvider.CreationDate = Convert.ToDateTime(objSDR["CreationDate"]);
                                }
                                if (!objSDR["ModificationDate"].Equals(DBNull.Value))
                                {
                                    entServiceProvider.ModificationDate = Convert.ToDateTime(objSDR["ModificationDate"]);
                                }
                            }
                            return entServiceProvider;
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
        #endregion Select By UserName Password

        #region Select By UserName
        public DataTable SelectByUserName(SqlString strUserName)
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
                        objCmd.CommandText = "PR_ServiceProvider_SelectByUserName";
                        objCmd.Parameters.AddWithValue("@UserName", strUserName);
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
        #endregion Select By UserName

        #region Select For Profile View

        public DataTable SelectForProfileView(SqlInt32 ServiceProviderID)
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
                        objCmd.CommandText = "PR_ServiceProvider_SelectForProfileView";
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

        #endregion Select For Profile View

        #endregion Select Operation

    }
}