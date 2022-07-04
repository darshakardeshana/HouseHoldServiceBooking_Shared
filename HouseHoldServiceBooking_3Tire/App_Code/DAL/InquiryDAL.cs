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
/// Summary description for InquiryDAL
/// </summary>
/// 
namespace HouseHoldServiceBooking.DAL
{
    public class InquiryDAL : DatabaseConfig
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
        public InquiryDAL()
        {
            //
            // TODO: Add constructor logic here
            //
        }
        #endregion Constructor

        #region Insert Operation

        public Boolean Insert(InquiryENT entInquiry)
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
                        objCmd.CommandText = "PR_Inquiry_Insert";
    
                        objCmd.Parameters.Add("@InquiryID", SqlDbType.Int, 4).Direction = ParameterDirection.Output;
                        objCmd.Parameters.AddWithValue("@Name", entInquiry.Name);
                        objCmd.Parameters.AddWithValue("@Email", entInquiry.Email);
                        objCmd.Parameters.AddWithValue("@MobileNo", entInquiry.MobileNo);
                        objCmd.Parameters.AddWithValue("@Location", entInquiry.Location);
                        objCmd.Parameters.AddWithValue("@Subject", entInquiry.Subject);
                        objCmd.Parameters.AddWithValue("@IsAttended", entInquiry.IsAttended);
                        objCmd.Parameters.AddWithValue("@CreationDate", entInquiry.CreationDate);
                        objCmd.Parameters.AddWithValue("@ModificationDate", entInquiry.ModificationDate);
                        #endregion Prepare Command

                        objCmd.ExecuteNonQuery();
                        entInquiry.InquiryID = Convert.ToInt32(objCmd.Parameters["@InquiryID"].Value);

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

        public Boolean Update(InquiryENT entInquiry)
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
                        objCmd.CommandText = "PR_Inquiry_UpdateByPK";

                        objCmd.Parameters.AddWithValue("@InquiryID", entInquiry.InquiryID);
                        objCmd.Parameters.AddWithValue("@Name", entInquiry.Name);
                        objCmd.Parameters.AddWithValue("@Email", entInquiry.Email);
                        objCmd.Parameters.AddWithValue("@MobileNo", entInquiry.MobileNo);
                        objCmd.Parameters.AddWithValue("@Location", entInquiry.Location);
                        objCmd.Parameters.AddWithValue("@Subject", entInquiry.Subject);
                        objCmd.Parameters.AddWithValue("@IsAttended", entInquiry.IsAttended);
                        objCmd.Parameters.AddWithValue("@CreationDate", entInquiry.CreationDate);
                        objCmd.Parameters.AddWithValue("@ModificationDate", entInquiry.ModificationDate);
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

        public Boolean UpdateIsAttended(SqlInt32 InquiryID, SqlBoolean IsAttended)
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
                        objCmd.CommandText = "PR_Inquiry_UpdateIsAttended";

                        objCmd.Parameters.AddWithValue("@InquiryID", InquiryID);
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

        public Boolean Delete(SqlInt32 InquiryID)
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
                        objCmd.CommandText = "PR_Inquiry_DeleteByPK";
                        objCmd.Parameters.AddWithValue("@InquiryID", InquiryID);
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
                        objCmd.CommandText = "PR_Inquiry_SelectAll";
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
        public InquiryENT SelectByPK(SqlInt32 InquiryID)
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
                        objCmd.CommandText = "PR_Inquiry_SelectByPK";
                        objCmd.Parameters.AddWithValue("@InquiryID", InquiryID);
                        #endregion Prepare Command

                        #region ReadData and Set Controls
                        InquiryENT entInquiry = new InquiryENT();
                        using (SqlDataReader objSDR = objCmd.ExecuteReader())
                        {
                            while (objSDR.Read())
                            {
                                if (!objSDR["InquiryID"].Equals(DBNull.Value))
                                {
                                    entInquiry.InquiryID = Convert.ToInt32(objSDR["InquiryID"]);
                                }
                                if (!objSDR["Name"].Equals(DBNull.Value))
                                {
                                    entInquiry.Name = Convert.ToString(objSDR["Name"]);
                                }
                                if (!objSDR["Email"].Equals(DBNull.Value))
                                {
                                    entInquiry.Email = Convert.ToString(objSDR["Email"]);
                                }
                                if (!objSDR["MobileNo"].Equals(DBNull.Value))
                                {
                                    entInquiry.MobileNo = Convert.ToString(objSDR["MobileNo"]);
                                }
                                if (!objSDR["Location"].Equals(DBNull.Value))
                                {
                                    entInquiry.Location = Convert.ToString(objSDR["Location"]);
                                }
                                if (!objSDR["Subject"].Equals(DBNull.Value))
                                {
                                    entInquiry.Subject = Convert.ToString(objSDR["Subject"]);
                                }
                                if (!objSDR["CreationDate"].Equals(DBNull.Value))
                                {
                                    entInquiry.CreationDate = Convert.ToDateTime(objSDR["CreationDate"]);
                                }
                                if (!objSDR["ModificationDate"].Equals(DBNull.Value))
                                {
                                    entInquiry.ModificationDate = Convert.ToDateTime(objSDR["ModificationDate"]);
                                }
                            }
                            return entInquiry;
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
                        objCmd.CommandText = "PR_Inquiry_SelectForDropDownList";
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