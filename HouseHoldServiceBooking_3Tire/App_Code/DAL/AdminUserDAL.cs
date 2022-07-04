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
/// Summary description for AdminUserDAL
/// </summary>
/// 
namespace HouseHoldServiceBooking.DAL
{
    public class AdminUserDAL : DatabaseConfig
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
        public AdminUserDAL()
        {
            //
            // TODO: Add constructor logic here
            //
        }
        #endregion Constructor

        #region Insert Operation

        public Boolean Insert(AdminUserENT entAdminUser)
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
                        objCmd.CommandText = "PR_AdminUser_Insert";

                        objCmd.Parameters.Add("@UserID", SqlDbType.Int, 4).Direction = ParameterDirection.Output;
                        objCmd.Parameters.AddWithValue("@UserName", entAdminUser.UserName);
                        objCmd.Parameters.AddWithValue("@Password", entAdminUser.Password);
                        objCmd.Parameters.AddWithValue("@DisplayName", entAdminUser.DisplayName);
                        objCmd.Parameters.AddWithValue("@MobileNo", entAdminUser.MobileNo);
                        objCmd.Parameters.AddWithValue("@Email", entAdminUser.Email);
                        objCmd.Parameters.AddWithValue("@Designation", entAdminUser.Designation);
                        objCmd.Parameters.AddWithValue("@CreationDate", entAdminUser.CreationDate);
                        objCmd.Parameters.AddWithValue("@ModificationDate", entAdminUser.ModificationDate);
                        #endregion Prepare Command

                        objCmd.ExecuteNonQuery();
                        entAdminUser.UserID = Convert.ToInt32(objCmd.Parameters["@UserID"].Value);

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

        public Boolean Update(AdminUserENT entAdminUser)
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
                        objCmd.CommandText = "PR_AdminUser_UpdateByPK";

                        objCmd.Parameters.AddWithValue("@UserID", entAdminUser.UserID);
                        objCmd.Parameters.AddWithValue("@UserName", entAdminUser.UserName);
                        objCmd.Parameters.AddWithValue("@Password", entAdminUser.Password);
                        objCmd.Parameters.AddWithValue("@DisplayName", entAdminUser.DisplayName);
                        objCmd.Parameters.AddWithValue("@MobileNo", entAdminUser.MobileNo);
                        objCmd.Parameters.AddWithValue("@Email", entAdminUser.Email);
                        objCmd.Parameters.AddWithValue("@Designation", entAdminUser.Designation);
                        objCmd.Parameters.AddWithValue("@CreationDate", entAdminUser.CreationDate);
                        objCmd.Parameters.AddWithValue("@ModificationDate", entAdminUser.ModificationDate);
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

        #region Change Password
        public Boolean ChangePassword(AdminUserENT entAdminUser)
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
                        objCmd.CommandText = "PR_AdminUser_ChangePasswordByPK";

                        objCmd.Parameters.AddWithValue("@UserID", entAdminUser.UserID);
                        objCmd.Parameters.AddWithValue("@Password", entAdminUser.Password);
                        objCmd.Parameters.AddWithValue("@ModificationDate", entAdminUser.ModificationDate);
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
        #endregion Change Password

        #region Delete Operation

        public Boolean Delete(SqlInt32 UserID)
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
                        objCmd.CommandText = "PR_AdminUser_DeleteByPK";
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
                        objCmd.CommandText = "PR_AdminUser_SelectAll";
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
        public AdminUserENT SelectByPK(SqlInt32 UserID)
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
                        objCmd.CommandText = "PR_AdminUser_SelectByPK";
                        objCmd.Parameters.AddWithValue("@UserID", UserID);

                        #endregion Prepare Command

                        #region ReadData and Set Controls
                        AdminUserENT entAdminUser = new AdminUserENT();
                        using (SqlDataReader objSDR = objCmd.ExecuteReader())
                        {
                            while (objSDR.Read())
                            {
                                if (!objSDR["UserID"].Equals(DBNull.Value))
                                {
                                    entAdminUser.UserID = Convert.ToInt32(objSDR["UserID"]);
                                }
                                if (!objSDR["UserName"].Equals(DBNull.Value))
                                {
                                    entAdminUser.UserName = Convert.ToString(objSDR["UserName"]);
                                }
                                if (!objSDR["Password"].Equals(DBNull.Value))
                                {
                                    entAdminUser.Password = Convert.ToString(objSDR["Password"]);
                                }
                                if (!objSDR["DisplayName"].Equals(DBNull.Value))
                                {
                                    entAdminUser.DisplayName = Convert.ToString(objSDR["DisplayName"]);
                                }
                                if (!objSDR["MobileNo"].Equals(DBNull.Value))
                                {
                                    entAdminUser.MobileNo = Convert.ToString(objSDR["MobileNo"]);
                                }
                                if (!objSDR["Email"].Equals(DBNull.Value))
                                {
                                    entAdminUser.Email = Convert.ToString(objSDR["Email"]);
                                }
                                if (!objSDR["Designation"].Equals(DBNull.Value))
                                {
                                    entAdminUser.Designation = Convert.ToString(objSDR["Designation"]);
                                }
                                if (!objSDR["CreationDate"].Equals(DBNull.Value))
                                {
                                    entAdminUser.CreationDate = Convert.ToDateTime(objSDR["CreationDate"]);
                                }
                                if (!objSDR["ModificationDate"].Equals(DBNull.Value))
                                {
                                    entAdminUser.ModificationDate = Convert.ToDateTime(objSDR["ModificationDate"]);
                                }
                            }
                            return entAdminUser;
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
                        objCmd.CommandText = "PR_AdminUser_SelectForDropDownList";
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

        #region Select By UserName and Password
        public AdminUserENT SelectByUserNamePassword(SqlString UserName, SqlString Password)
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
                        objCmd.CommandText = "PR_AdminUser_SelectByUserNamePassword";
                        objCmd.Parameters.AddWithValue("@UserName", UserName);
                        objCmd.Parameters.AddWithValue("@Password", Password);

                        #endregion Prepare Command

                        #region ReadData and Set Controls
                        AdminUserENT entAdminUser = new AdminUserENT();
                        using (SqlDataReader objSDR = objCmd.ExecuteReader())
                        {
                            while (objSDR.Read())
                            {
                                if (!objSDR["UserID"].Equals(DBNull.Value))
                                {
                                    entAdminUser.UserID = Convert.ToInt32(objSDR["UserID"]);
                                }
                                if (!objSDR["UserName"].Equals(DBNull.Value))
                                {
                                    entAdminUser.UserName = Convert.ToString(objSDR["UserName"]);
                                }
                                if (!objSDR["Password"].Equals(DBNull.Value))
                                {
                                    entAdminUser.Password = Convert.ToString(objSDR["Password"]);
                                }
                                if (!objSDR["DisplayName"].Equals(DBNull.Value))
                                {
                                    entAdminUser.DisplayName = Convert.ToString(objSDR["DisplayName"]);
                                }
                                if (!objSDR["MobileNo"].Equals(DBNull.Value))
                                {
                                    entAdminUser.MobileNo = Convert.ToString(objSDR["MobileNo"]);
                                }
                                if (!objSDR["Email"].Equals(DBNull.Value))
                                {
                                    entAdminUser.Email = Convert.ToString(objSDR["Email"]);
                                }
                                if (!objSDR["Designation"].Equals(DBNull.Value))
                                {
                                    entAdminUser.Designation = Convert.ToString(objSDR["Designation"]);
                                }
                                if (!objSDR["CreationDate"].Equals(DBNull.Value))
                                {
                                    entAdminUser.CreationDate = Convert.ToDateTime(objSDR["CreationDate"]);
                                }
                                if (!objSDR["ModificationDate"].Equals(DBNull.Value))
                                {
                                    entAdminUser.ModificationDate = Convert.ToDateTime(objSDR["ModificationDate"]);
                                }
                            }
                            return entAdminUser;
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
        #endregion Select By UserName and Password

        #region Select By UserName
        public DataTable SelectByUserName(SqlString UserName)
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
                        objCmd.CommandText = "PR_AdminUser_SelectByUserName";
                        objCmd.Parameters.AddWithValue("@UserName", UserName);
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

        #endregion Select Operation

    }
}