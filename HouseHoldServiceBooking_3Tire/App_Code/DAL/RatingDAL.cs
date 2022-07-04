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
/// Summary description for RatingDAL
/// </summary>
/// 
namespace HouseHoldServiceBooking.DAL
{
    public class RatingDAL : DatabaseConfig
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
        public RatingDAL()
        {
            //
            // TODO: Add constructor logic here
            //
        }
        #endregion Constructor

        #region Insert Operation

        public Boolean Insert(RatingENT entRating)
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
                        objCmd.CommandText = "PR_Rating_InsertByUserID";
    
                        objCmd.Parameters.Add("@RatingID", SqlDbType.Int, 4).Direction = ParameterDirection.Output;
                        objCmd.Parameters.AddWithValue("@RatingDate", entRating.RatingDate);
                        objCmd.Parameters.AddWithValue("@Review", entRating.Review);
                        objCmd.Parameters.AddWithValue("@ServiceProviderServicesID", entRating.ServiceProviderServicesID);
                        objCmd.Parameters.AddWithValue("@ServiceProviderID", entRating.ServiceProviderID);
                        objCmd.Parameters.AddWithValue("@PersonName", entRating.PersonName);
                        objCmd.Parameters.AddWithValue("@Comment", entRating.Comment);
                        objCmd.Parameters.AddWithValue("@ModifiedBy", entRating.ModifiedBy);
                        objCmd.Parameters.AddWithValue("@UserID", entRating.UserID);
                        objCmd.Parameters.AddWithValue("@CreationDate", entRating.CreationDate);
                        objCmd.Parameters.AddWithValue("@ModificationDate", entRating.ModificationDate);
                        #endregion Prepare Command

                        objCmd.ExecuteNonQuery();
                        entRating.RatingID = Convert.ToInt32(objCmd.Parameters["@RatingID"].Value);

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

        public Boolean Update(RatingENT entRating)
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
                        objCmd.CommandText = "PR_Rating_UpdateByPK";

                        objCmd.Parameters.AddWithValue("@RatingID", entRating.RatingID);
                        objCmd.Parameters.AddWithValue("@RatingDate", entRating.RatingDate);
                        objCmd.Parameters.AddWithValue("@Review", entRating.Review);
                        objCmd.Parameters.AddWithValue("@ServiceProviderServicesID", entRating.ServiceProviderServicesID);
                        objCmd.Parameters.AddWithValue("@ServiceProviderID", entRating.ServiceProviderID);
                        objCmd.Parameters.AddWithValue("@PersonName", entRating.PersonName);
                        objCmd.Parameters.AddWithValue("@Comment", entRating.Comment);
                        objCmd.Parameters.AddWithValue("@ModifiedBy", entRating.ModifiedBy);
                        objCmd.Parameters.AddWithValue("@ModificationDate", entRating.ModificationDate);
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

        public Boolean Delete(SqlInt32 RatingID, SqlInt32 UserID)
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
                        objCmd.CommandText = "PR_Rating_DeleteByPK";
                        objCmd.Parameters.AddWithValue("@RatingID", RatingID);
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
                        objCmd.CommandText = "PR_Rating_SelectAll";
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
        public RatingENT SelectByPK(SqlInt32 RatingID)
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
                        objCmd.CommandText = "PR_Rating_SelectByPK";
                        objCmd.Parameters.AddWithValue("@RatingID", RatingID);

                        #endregion Prepare Command

                        #region ReadData and Set Controls
                        RatingENT entRating = new RatingENT();
                        using (SqlDataReader objSDR = objCmd.ExecuteReader())
                        {
                            while (objSDR.Read())
                            {
                                if (!objSDR["RatingID"].Equals(DBNull.Value))
                                {
                                    entRating.RatingID = Convert.ToInt32(objSDR["RatingID"]);
                                }
                                if (!objSDR["RatingDate"].Equals(DBNull.Value))
                                {
                                    entRating.RatingDate = Convert.ToDateTime(objSDR["RatingDate"]);
                                }
                                if (!objSDR["Review"].Equals(DBNull.Value))
                                {
                                    entRating.Review = Convert.ToInt32(objSDR["Review"]);
                                }
                                if (!objSDR["ServiceProviderServicesID"].Equals(DBNull.Value))
                                {
                                    entRating.ServiceProviderServicesID = Convert.ToInt32(objSDR["ServiceProviderServicesID"]);
                                }
                                if (!objSDR["ServiceProviderID"].Equals(DBNull.Value))
                                {
                                    entRating.ServiceProviderID = Convert.ToInt32(objSDR["ServiceProviderID"]);
                                }
                                if (!objSDR["PersonName"].Equals(DBNull.Value))
                                {
                                    entRating.PersonName = Convert.ToString(objSDR["PersonName"]);
                                }
                                if (!objSDR["Comment"].Equals(DBNull.Value))
                                {
                                    entRating.Comment = Convert.ToString(objSDR["Comment"]);
                                }
                                if (!objSDR["ModifiedBy"].Equals(DBNull.Value))
                                {
                                    entRating.ModifiedBy = Convert.ToInt32(objSDR["ModifiedBy"]);
                                }
                                if (!objSDR["UserID"].Equals(DBNull.Value))
                                {
                                    entRating.UserID = Convert.ToInt32(objSDR["UserID"]);
                                }
                                if (!objSDR["CreationDate"].Equals(DBNull.Value))
                                {
                                    entRating.CreationDate = Convert.ToDateTime(objSDR["CreationDate"]);
                                }
                                if (!objSDR["ModificationDate"].Equals(DBNull.Value))
                                {
                                    entRating.ModificationDate = Convert.ToDateTime(objSDR["ModificationDate"]);
                                }
                            }
                            return entRating;
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
                        objCmd.CommandText = "PR_Rating_SelectForDropDownList";
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

        #region UPSERT
        public Boolean UPSERT(RatingENT entRating)
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
                        objCmd.CommandText = "PR_Rating_UPSERT";

                        objCmd.Parameters.AddWithValue("@RatingDate", entRating.RatingDate);
                        objCmd.Parameters.AddWithValue("@Review", entRating.Review);
                        objCmd.Parameters.AddWithValue("@ServiceProviderServicesID", entRating.ServiceProviderServicesID);
                        objCmd.Parameters.AddWithValue("@ServiceProviderID", entRating.ServiceProviderID);
                        objCmd.Parameters.AddWithValue("@PersonName", entRating.PersonName);
                        objCmd.Parameters.AddWithValue("@ModifiedBy", entRating.ModifiedBy);
                        objCmd.Parameters.AddWithValue("@UserID", entRating.UserID);
                        objCmd.Parameters.AddWithValue("@CreationDate", entRating.CreationDate);
                        objCmd.Parameters.AddWithValue("@ModificationDate", entRating.ModificationDate);
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
        #endregion UPSERT

    }
}