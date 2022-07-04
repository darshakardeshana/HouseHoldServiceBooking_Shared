USE [master]
GO
/****** Object:  Database [HouseholdServiceBooking]    Script Date: 04-07-2022 07:59:51 AM ******/
CREATE DATABASE [HouseholdServiceBooking]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'HouseholdServiceBooking', FILENAME = N'E:\ASP.NET\work\HouseHoldServiceBooking\Database\HouseholdServiceBooking.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'HouseholdServiceBooking_log', FILENAME = N'E:\ASP.NET\work\HouseHoldServiceBooking\Database\HouseholdServiceBooking_log.ldf' , SIZE = 73728KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [HouseholdServiceBooking] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [HouseholdServiceBooking].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [HouseholdServiceBooking] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [HouseholdServiceBooking] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [HouseholdServiceBooking] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [HouseholdServiceBooking] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [HouseholdServiceBooking] SET ARITHABORT OFF 
GO
ALTER DATABASE [HouseholdServiceBooking] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [HouseholdServiceBooking] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [HouseholdServiceBooking] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [HouseholdServiceBooking] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [HouseholdServiceBooking] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [HouseholdServiceBooking] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [HouseholdServiceBooking] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [HouseholdServiceBooking] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [HouseholdServiceBooking] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [HouseholdServiceBooking] SET  DISABLE_BROKER 
GO
ALTER DATABASE [HouseholdServiceBooking] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [HouseholdServiceBooking] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [HouseholdServiceBooking] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [HouseholdServiceBooking] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [HouseholdServiceBooking] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [HouseholdServiceBooking] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [HouseholdServiceBooking] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [HouseholdServiceBooking] SET RECOVERY FULL 
GO
ALTER DATABASE [HouseholdServiceBooking] SET  MULTI_USER 
GO
ALTER DATABASE [HouseholdServiceBooking] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [HouseholdServiceBooking] SET DB_CHAINING OFF 
GO
ALTER DATABASE [HouseholdServiceBooking] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [HouseholdServiceBooking] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [HouseholdServiceBooking] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'HouseholdServiceBooking', N'ON'
GO
ALTER DATABASE [HouseholdServiceBooking] SET QUERY_STORE = OFF
GO
USE [HouseholdServiceBooking]
GO
/****** Object:  Table [dbo].[AdminUser]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AdminUser](
	[UserID] [int] IDENTITY(1,1) NOT NULL,
	[UserName] [varchar](100) NOT NULL,
	[Password] [varchar](100) NOT NULL,
	[DisplayName] [varchar](100) NOT NULL,
	[MobileNo] [varchar](10) NOT NULL,
	[Email] [varchar](100) NULL,
	[Designation] [varchar](100) NULL,
	[CreationDate] [datetime] NOT NULL,
	[ModificationDate] [datetime] NOT NULL,
 CONSTRAINT [PK_AdminUser] PRIMARY KEY CLUSTERED 
(
	[UserID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Bank]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Bank](
	[BankID] [int] IDENTITY(1,1) NOT NULL,
	[BankName] [varchar](100) NOT NULL,
	[ModifiedBy] [int] NOT NULL,
	[UserID] [int] NOT NULL,
	[CreationDate] [datetime] NOT NULL,
	[ModificationDate] [datetime] NOT NULL,
 CONSTRAINT [PK_Bank] PRIMARY KEY CLUSTERED 
(
	[BankID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[City]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[City](
	[CityID] [int] IDENTITY(1,1) NOT NULL,
	[CityName] [varchar](100) NOT NULL,
	[StateID] [int] NOT NULL,
	[ModifiedBy] [int] NOT NULL,
	[UserID] [int] NOT NULL,
	[CreationDate] [datetime] NOT NULL,
	[ModificationDate] [datetime] NOT NULL,
 CONSTRAINT [PK_City] PRIMARY KEY CLUSTERED 
(
	[CityID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Country]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Country](
	[CountryID] [int] IDENTITY(1,1) NOT NULL,
	[CountryName] [varchar](100) NOT NULL,
	[CountryCode] [varchar](25) NOT NULL,
	[ModifiedBy] [int] NOT NULL,
	[UserID] [int] NOT NULL,
	[CreationDate] [datetime] NOT NULL,
	[ModificationDate] [datetime] NOT NULL,
 CONSTRAINT [PK_Country] PRIMARY KEY CLUSTERED 
(
	[CountryID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Inquiry]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Inquiry](
	[InquiryID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](100) NOT NULL,
	[Email] [varchar](100) NOT NULL,
	[MobileNo] [varchar](10) NULL,
	[Location] [varchar](200) NULL,
	[Subject] [varchar](500) NULL,
	[CreationDate] [datetime] NOT NULL,
	[ModificationDate] [datetime] NOT NULL,
	[IsAttended] [bit] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Rating]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Rating](
	[RatingID] [int] IDENTITY(1,1) NOT NULL,
	[RatingDate] [datetime] NOT NULL,
	[Review] [int] NOT NULL,
	[ServiceProviderServicesID] [int] NOT NULL,
	[ServiceProviderID] [int] NOT NULL,
	[PersonName] [varchar](100) NULL,
	[Comment] [varchar](500) NULL,
	[ModifiedBy] [int] NOT NULL,
	[UserID] [int] NOT NULL,
	[CreationDate] [datetime] NOT NULL,
	[ModificationDate] [datetime] NOT NULL,
 CONSTRAINT [PK_Rating] PRIMARY KEY CLUSTERED 
(
	[RatingID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Request]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Request](
	[RequestID] [int] IDENTITY(1,1) NOT NULL,
	[ServiceProviderID] [int] NOT NULL,
	[ServiceProviderServicesID] [int] NOT NULL,
	[ClientMobileNo] [varchar](50) NOT NULL,
	[IsAttended] [bit] NOT NULL,
	[CreationDate] [datetime] NOT NULL,
	[ModificationDate] [datetime] NOT NULL,
 CONSTRAINT [PK_Request] PRIMARY KEY CLUSTERED 
(
	[RequestID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Service]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Service](
	[ServiceID] [int] IDENTITY(1,1) NOT NULL,
	[ServiceName] [varchar](100) NOT NULL,
	[ModifiedBy] [int] NOT NULL,
	[UserID] [int] NOT NULL,
	[CreationDate] [datetime] NOT NULL,
	[ModificationDate] [datetime] NOT NULL,
 CONSTRAINT [PK_Service] PRIMARY KEY CLUSTERED 
(
	[ServiceID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ServiceProvider]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ServiceProvider](
	[ServiceProviderID] [int] IDENTITY(1,1) NOT NULL,
	[UserName] [varchar](100) NOT NULL,
	[Password] [varchar](100) NOT NULL,
	[ServiceProviderName] [varchar](100) NOT NULL,
	[MobileNo] [varchar](10) NULL,
	[DOB] [datetime] NULL,
	[HomeAddress] [varchar](250) NULL,
	[HomePincode] [varchar](10) NULL,
	[HomeCountryID] [int] NULL,
	[HomeStateID] [int] NULL,
	[HomeCityID] [int] NULL,
	[WorkAddress] [varchar](250) NOT NULL,
	[WorkPincode] [varchar](10) NOT NULL,
	[WorkCountryID] [int] NOT NULL,
	[WorkStateID] [int] NOT NULL,
	[WorkCityID] [int] NOT NULL,
	[AadharCard] [varchar](50) NULL,
	[PANCardNo] [varchar](50) NULL,
	[GSTNo] [varchar](100) NULL,
	[BankID] [int] NULL,
	[AccountNo] [varchar](100) NULL,
	[IFSCCode] [varchar](50) NULL,
	[ProfilePhotoPath] [varchar](500) NULL,
	[ModifiedBy] [int] NOT NULL,
	[UserID] [int] NOT NULL,
	[CreationDate] [datetime] NOT NULL,
	[ModificationDate] [datetime] NOT NULL,
 CONSTRAINT [PK_ServiceProvider] PRIMARY KEY CLUSTERED 
(
	[ServiceProviderID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ServiceProviderServices]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ServiceProviderServices](
	[ServiceProviderServicesID] [int] IDENTITY(1,1) NOT NULL,
	[ServiceProviderID] [int] NOT NULL,
	[ServiceID] [int] NOT NULL,
	[Rate] [decimal](6, 2) NOT NULL,
	[Description] [varchar](1000) NULL,
	[Specialist] [varchar](500) NULL,
	[ModifiedBy] [int] NOT NULL,
	[UserID] [int] NOT NULL,
	[CreationDate] [datetime] NOT NULL,
	[ModificationDate] [datetime] NOT NULL,
 CONSTRAINT [PK_ServiceProviderServices] PRIMARY KEY CLUSTERED 
(
	[ServiceProviderServicesID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[State]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[State](
	[StateID] [int] IDENTITY(1,1) NOT NULL,
	[StateName] [varchar](100) NOT NULL,
	[CountryID] [int] NOT NULL,
	[ModifiedBy] [int] NOT NULL,
	[UserID] [int] NOT NULL,
	[CreationDate] [datetime] NOT NULL,
	[ModificationDate] [datetime] NOT NULL,
 CONSTRAINT [PK_State] PRIMARY KEY CLUSTERED 
(
	[StateID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[AdminUser] ON 

INSERT [dbo].[AdminUser] ([UserID], [UserName], [Password], [DisplayName], [MobileNo], [Email], [Designation], [CreationDate], [ModificationDate]) VALUES (0, N'self', N'1', N'self', N'1122331122', N'self', N'Service Provider Self', CAST(N'2021-04-29T00:00:00.000' AS DateTime), CAST(N'2021-04-30T15:17:36.250' AS DateTime))
INSERT [dbo].[AdminUser] ([UserID], [UserName], [Password], [DisplayName], [MobileNo], [Email], [Designation], [CreationDate], [ModificationDate]) VALUES (2, N'admin', N'admin', N'Darshak Ardeshana', N'9033403368', N'darshakardeshana500@gamil.com', N'founder', CAST(N'2020-12-30T00:00:00.000' AS DateTime), CAST(N'2021-08-25T21:51:58.280' AS DateTime))
INSERT [dbo].[AdminUser] ([UserID], [UserName], [Password], [DisplayName], [MobileNo], [Email], [Designation], [CreationDate], [ModificationDate]) VALUES (4, N'admin2', N'admin', N'Mike Ross', N'1234567899', N'mikeross@gmail.com', N'cofounder', CAST(N'2020-12-30T00:00:00.000' AS DateTime), CAST(N'2020-12-30T00:00:00.000' AS DateTime))
SET IDENTITY_INSERT [dbo].[AdminUser] OFF
GO
SET IDENTITY_INSERT [dbo].[Bank] ON 

INSERT [dbo].[Bank] ([BankID], [BankName], [ModifiedBy], [UserID], [CreationDate], [ModificationDate]) VALUES (2, N'State Bank Of India', 2, 2, CAST(N'2021-01-03T18:23:49.790' AS DateTime), CAST(N'2021-02-14T21:59:43.550' AS DateTime))
INSERT [dbo].[Bank] ([BankID], [BankName], [ModifiedBy], [UserID], [CreationDate], [ModificationDate]) VALUES (18, N'Bank of Baroda', 2, 2, CAST(N'2021-04-30T15:09:18.390' AS DateTime), CAST(N'2021-04-30T15:09:18.390' AS DateTime))
INSERT [dbo].[Bank] ([BankID], [BankName], [ModifiedBy], [UserID], [CreationDate], [ModificationDate]) VALUES (19, N'Punjab National Bank', 2, 2, CAST(N'2021-04-30T15:09:18.390' AS DateTime), CAST(N'2021-04-30T15:09:18.390' AS DateTime))
INSERT [dbo].[Bank] ([BankID], [BankName], [ModifiedBy], [UserID], [CreationDate], [ModificationDate]) VALUES (20, N'HDFC Bank', 2, 2, CAST(N'2021-04-30T15:09:18.390' AS DateTime), CAST(N'2021-04-30T15:09:18.390' AS DateTime))
INSERT [dbo].[Bank] ([BankID], [BankName], [ModifiedBy], [UserID], [CreationDate], [ModificationDate]) VALUES (21, N'Indus Bank', 2, 2, CAST(N'2021-04-30T15:09:18.390' AS DateTime), CAST(N'2021-04-30T15:09:18.390' AS DateTime))
INSERT [dbo].[Bank] ([BankID], [BankName], [ModifiedBy], [UserID], [CreationDate], [ModificationDate]) VALUES (22, N'Kotak Mahindra Bank', 2, 2, CAST(N'2021-04-30T15:09:18.390' AS DateTime), CAST(N'2021-04-30T15:19:54.367' AS DateTime))
SET IDENTITY_INSERT [dbo].[Bank] OFF
GO
SET IDENTITY_INSERT [dbo].[City] ON 

INSERT [dbo].[City] ([CityID], [CityName], [StateID], [ModifiedBy], [UserID], [CreationDate], [ModificationDate]) VALUES (1, N'Rajkot', 4, 2, 2, CAST(N'2021-01-03T15:17:24.410' AS DateTime), CAST(N'2021-02-18T23:08:30.943' AS DateTime))
INSERT [dbo].[City] ([CityID], [CityName], [StateID], [ModifiedBy], [UserID], [CreationDate], [ModificationDate]) VALUES (2, N'Ahemdabad', 4, 2, 2, CAST(N'2021-01-03T15:18:18.213' AS DateTime), CAST(N'2021-01-03T15:18:18.213' AS DateTime))
INSERT [dbo].[City] ([CityID], [CityName], [StateID], [ModifiedBy], [UserID], [CreationDate], [ModificationDate]) VALUES (8, N'Mumbai', 3, 2, 2, CAST(N'2021-02-14T20:18:34.960' AS DateTime), CAST(N'2021-02-14T20:18:34.960' AS DateTime))
INSERT [dbo].[City] ([CityID], [CityName], [StateID], [ModifiedBy], [UserID], [CreationDate], [ModificationDate]) VALUES (9, N'High City', 5, 2, 2, CAST(N'2021-02-14T21:56:55.653' AS DateTime), CAST(N'2021-04-30T15:12:31.550' AS DateTime))
INSERT [dbo].[City] ([CityID], [CityName], [StateID], [ModifiedBy], [UserID], [CreationDate], [ModificationDate]) VALUES (12, N'Rajkot', 4, 2, 2, CAST(N'2021-02-22T23:40:15.757' AS DateTime), CAST(N'2021-02-22T23:40:15.757' AS DateTime))
INSERT [dbo].[City] ([CityID], [CityName], [StateID], [ModifiedBy], [UserID], [CreationDate], [ModificationDate]) VALUES (13, N'Surat', 4, 2, 2, CAST(N'2021-03-28T22:56:36.740' AS DateTime), CAST(N'2021-03-28T22:56:36.740' AS DateTime))
INSERT [dbo].[City] ([CityID], [CityName], [StateID], [ModifiedBy], [UserID], [CreationDate], [ModificationDate]) VALUES (16, N'New York', 11, 2, 2, CAST(N'2021-04-30T15:12:56.430' AS DateTime), CAST(N'2021-04-30T15:12:56.430' AS DateTime))
SET IDENTITY_INSERT [dbo].[City] OFF
GO
SET IDENTITY_INSERT [dbo].[Country] ON 

INSERT [dbo].[Country] ([CountryID], [CountryName], [CountryCode], [ModifiedBy], [UserID], [CreationDate], [ModificationDate]) VALUES (1, N'India', N'91', 2, 2, CAST(N'2020-12-30T14:04:20.910' AS DateTime), CAST(N'2021-01-02T11:07:09.213' AS DateTime))
INSERT [dbo].[Country] ([CountryID], [CountryName], [CountryCode], [ModifiedBy], [UserID], [CreationDate], [ModificationDate]) VALUES (2, N'Australia', N'61', 2, 2, CAST(N'2020-12-31T00:00:00.000' AS DateTime), CAST(N'2021-01-02T11:07:27.570' AS DateTime))
INSERT [dbo].[Country] ([CountryID], [CountryName], [CountryCode], [ModifiedBy], [UserID], [CreationDate], [ModificationDate]) VALUES (15, N'Sri Lanka', N'93', 2, 2, CAST(N'2021-04-30T15:09:18.390' AS DateTime), CAST(N'2021-04-30T15:09:18.390' AS DateTime))
INSERT [dbo].[Country] ([CountryID], [CountryName], [CountryCode], [ModifiedBy], [UserID], [CreationDate], [ModificationDate]) VALUES (16, N'America', N'65', 2, 2, CAST(N'2021-04-30T15:09:18.390' AS DateTime), CAST(N'2021-04-30T15:09:18.390' AS DateTime))
INSERT [dbo].[Country] ([CountryID], [CountryName], [CountryCode], [ModifiedBy], [UserID], [CreationDate], [ModificationDate]) VALUES (17, N'Russia', N'50', 2, 2, CAST(N'2021-04-30T15:09:18.390' AS DateTime), CAST(N'2021-04-30T15:09:18.390' AS DateTime))
SET IDENTITY_INSERT [dbo].[Country] OFF
GO
SET IDENTITY_INSERT [dbo].[Inquiry] ON 

INSERT [dbo].[Inquiry] ([InquiryID], [Name], [Email], [MobileNo], [Location], [Subject], [CreationDate], [ModificationDate], [IsAttended]) VALUES (2, N'Darshak', N'darshak@gmail.com', N'9033403368', N'Rajkot', N'Message here', CAST(N'2021-04-29T19:43:27.457' AS DateTime), CAST(N'2021-04-29T19:43:27.457' AS DateTime), 1)
INSERT [dbo].[Inquiry] ([InquiryID], [Name], [Email], [MobileNo], [Location], [Subject], [CreationDate], [ModificationDate], [IsAttended]) VALUES (3, N'Darshak', N'darshakardeshana@gmail.com', N'9988776655', N'rajkot', N'ok demo messagee', CAST(N'2021-05-02T14:20:22.270' AS DateTime), CAST(N'2021-05-02T14:20:22.270' AS DateTime), 0)
SET IDENTITY_INSERT [dbo].[Inquiry] OFF
GO
SET IDENTITY_INSERT [dbo].[Rating] ON 

INSERT [dbo].[Rating] ([RatingID], [RatingDate], [Review], [ServiceProviderServicesID], [ServiceProviderID], [PersonName], [Comment], [ModifiedBy], [UserID], [CreationDate], [ModificationDate]) VALUES (1, CAST(N'2021-05-02T14:20:22.270' AS DateTime), 2, 27, 3, N'1231231231', NULL, 0, 0, CAST(N'2021-05-02T14:20:22.270' AS DateTime), CAST(N'2021-05-02T14:20:22.270' AS DateTime))
INSERT [dbo].[Rating] ([RatingID], [RatingDate], [Review], [ServiceProviderServicesID], [ServiceProviderID], [PersonName], [Comment], [ModifiedBy], [UserID], [CreationDate], [ModificationDate]) VALUES (2, CAST(N'2021-05-02T14:20:22.270' AS DateTime), 1, 29, 3, N'1231231231', NULL, 0, 0, CAST(N'2021-05-02T14:20:22.270' AS DateTime), CAST(N'2021-05-02T14:20:22.270' AS DateTime))
INSERT [dbo].[Rating] ([RatingID], [RatingDate], [Review], [ServiceProviderServicesID], [ServiceProviderID], [PersonName], [Comment], [ModifiedBy], [UserID], [CreationDate], [ModificationDate]) VALUES (3, CAST(N'2021-05-23T20:36:35.607' AS DateTime), 3, 42, 15, N'9033403368', NULL, 0, 0, CAST(N'2021-05-23T20:36:35.607' AS DateTime), CAST(N'2021-05-23T20:36:35.607' AS DateTime))
INSERT [dbo].[Rating] ([RatingID], [RatingDate], [Review], [ServiceProviderServicesID], [ServiceProviderID], [PersonName], [Comment], [ModifiedBy], [UserID], [CreationDate], [ModificationDate]) VALUES (4, CAST(N'2021-06-12T20:37:09.103' AS DateTime), 4, 41, 15, N'9033403368', NULL, 0, 0, CAST(N'2021-05-23T20:36:35.607' AS DateTime), CAST(N'2021-06-12T20:37:09.103' AS DateTime))
SET IDENTITY_INSERT [dbo].[Rating] OFF
GO
SET IDENTITY_INSERT [dbo].[Request] ON 

INSERT [dbo].[Request] ([RequestID], [ServiceProviderID], [ServiceProviderServicesID], [ClientMobileNo], [IsAttended], [CreationDate], [ModificationDate]) VALUES (1, 3, 32, N'1231231231', 1, CAST(N'2021-04-29T17:32:57.180' AS DateTime), CAST(N'2021-04-29T17:32:57.180' AS DateTime))
INSERT [dbo].[Request] ([RequestID], [ServiceProviderID], [ServiceProviderServicesID], [ClientMobileNo], [IsAttended], [CreationDate], [ModificationDate]) VALUES (2, 3, 29, N'1231231231', 1, CAST(N'2021-04-29T17:32:57.180' AS DateTime), CAST(N'2021-04-29T17:32:57.180' AS DateTime))
INSERT [dbo].[Request] ([RequestID], [ServiceProviderID], [ServiceProviderServicesID], [ClientMobileNo], [IsAttended], [CreationDate], [ModificationDate]) VALUES (3, 3, 28, N'1231231231', 1, CAST(N'2021-04-29T17:32:57.180' AS DateTime), CAST(N'2021-04-29T17:32:57.180' AS DateTime))
INSERT [dbo].[Request] ([RequestID], [ServiceProviderID], [ServiceProviderServicesID], [ClientMobileNo], [IsAttended], [CreationDate], [ModificationDate]) VALUES (4, 3, 27, N'1231231231', 0, CAST(N'2021-04-29T17:32:57.180' AS DateTime), CAST(N'2021-04-29T17:32:57.180' AS DateTime))
INSERT [dbo].[Request] ([RequestID], [ServiceProviderID], [ServiceProviderServicesID], [ClientMobileNo], [IsAttended], [CreationDate], [ModificationDate]) VALUES (5, 3, 32, N'1231231231', 0, CAST(N'2021-04-29T17:32:57.180' AS DateTime), CAST(N'2021-04-29T17:32:57.180' AS DateTime))
INSERT [dbo].[Request] ([RequestID], [ServiceProviderID], [ServiceProviderServicesID], [ClientMobileNo], [IsAttended], [CreationDate], [ModificationDate]) VALUES (6, 15, 40, N'9033403368', 0, CAST(N'2021-05-01T23:13:56.870' AS DateTime), CAST(N'2021-05-01T23:13:56.870' AS DateTime))
INSERT [dbo].[Request] ([RequestID], [ServiceProviderID], [ServiceProviderServicesID], [ClientMobileNo], [IsAttended], [CreationDate], [ModificationDate]) VALUES (7, 15, 41, N'9033403368', 1, CAST(N'2021-05-01T23:13:56.870' AS DateTime), CAST(N'2021-05-01T23:13:56.870' AS DateTime))
INSERT [dbo].[Request] ([RequestID], [ServiceProviderID], [ServiceProviderServicesID], [ClientMobileNo], [IsAttended], [CreationDate], [ModificationDate]) VALUES (8, 15, 42, N'9033403368', 1, CAST(N'2021-05-01T23:13:56.870' AS DateTime), CAST(N'2021-05-01T23:13:56.870' AS DateTime))
INSERT [dbo].[Request] ([RequestID], [ServiceProviderID], [ServiceProviderServicesID], [ClientMobileNo], [IsAttended], [CreationDate], [ModificationDate]) VALUES (9, 15, 40, N'1122112211', 0, CAST(N'2021-05-02T17:57:05.667' AS DateTime), CAST(N'2021-05-02T17:57:05.667' AS DateTime))
INSERT [dbo].[Request] ([RequestID], [ServiceProviderID], [ServiceProviderServicesID], [ClientMobileNo], [IsAttended], [CreationDate], [ModificationDate]) VALUES (10, 15, 41, N'1122112211', 0, CAST(N'2021-05-02T17:57:05.667' AS DateTime), CAST(N'2021-05-02T17:57:05.667' AS DateTime))
SET IDENTITY_INSERT [dbo].[Request] OFF
GO
SET IDENTITY_INSERT [dbo].[Service] ON 

INSERT [dbo].[Service] ([ServiceID], [ServiceName], [ModifiedBy], [UserID], [CreationDate], [ModificationDate]) VALUES (2, N'Capenter', 2, 2, CAST(N'2021-01-03T18:02:22.343' AS DateTime), CAST(N'2021-04-30T15:09:18.390' AS DateTime))
INSERT [dbo].[Service] ([ServiceID], [ServiceName], [ModifiedBy], [UserID], [CreationDate], [ModificationDate]) VALUES (3, N'Plumbing', 2, 2, CAST(N'2021-01-03T18:03:18.120' AS DateTime), CAST(N'2021-04-30T15:09:18.390' AS DateTime))
INSERT [dbo].[Service] ([ServiceID], [ServiceName], [ModifiedBy], [UserID], [CreationDate], [ModificationDate]) VALUES (5, N'Driver', 2, 2, CAST(N'2021-02-18T23:34:01.427' AS DateTime), CAST(N'2021-02-18T23:34:01.427' AS DateTime))
INSERT [dbo].[Service] ([ServiceID], [ServiceName], [ModifiedBy], [UserID], [CreationDate], [ModificationDate]) VALUES (9, N'TV Repair', 2, 2, CAST(N'2021-04-30T15:09:18.390' AS DateTime), CAST(N'2021-04-30T15:09:18.390' AS DateTime))
INSERT [dbo].[Service] ([ServiceID], [ServiceName], [ModifiedBy], [UserID], [CreationDate], [ModificationDate]) VALUES (10, N'Split AC Repair', 2, 2, CAST(N'2021-04-30T15:09:18.390' AS DateTime), CAST(N'2021-04-30T15:09:18.390' AS DateTime))
INSERT [dbo].[Service] ([ServiceID], [ServiceName], [ModifiedBy], [UserID], [CreationDate], [ModificationDate]) VALUES (11, N'Window AC Repair', 2, 2, CAST(N'2021-04-30T15:09:18.390' AS DateTime), CAST(N'2021-04-30T15:09:18.390' AS DateTime))
INSERT [dbo].[Service] ([ServiceID], [ServiceName], [ModifiedBy], [UserID], [CreationDate], [ModificationDate]) VALUES (12, N'Electrical Fixing', 2, 2, CAST(N'2021-04-30T15:09:18.390' AS DateTime), CAST(N'2021-04-30T15:09:18.390' AS DateTime))
SET IDENTITY_INSERT [dbo].[Service] OFF
GO
SET IDENTITY_INSERT [dbo].[ServiceProvider] ON 

INSERT [dbo].[ServiceProvider] ([ServiceProviderID], [UserName], [Password], [ServiceProviderName], [MobileNo], [DOB], [HomeAddress], [HomePincode], [HomeCountryID], [HomeStateID], [HomeCityID], [WorkAddress], [WorkPincode], [WorkCountryID], [WorkStateID], [WorkCityID], [AadharCard], [PANCardNo], [GSTNo], [BankID], [AccountNo], [IFSCCode], [ProfilePhotoPath], [ModifiedBy], [UserID], [CreationDate], [ModificationDate]) VALUES (3, N'dk', N'dk', N'Darshak Ardeshana', N'9090909090', CAST(N'2021-03-02T00:00:00.000' AS DateTime), N'Dayaram Krupa New Gopal Park - 1 Ankur nagar main road', N'360004', 1, 4, 1, N'Dayaram Krupa New Gopal Park - 1 Ankur nagar main road', N'360004', 1, 4, 1, N'123412341234', N'AAAAA1111A', N'04AABCU9603R1ZV', 2, N'111222333', N'BARB0CORAHM', N'~/UploadData/ProfilePicture/dk.jpg', 2, 2, CAST(N'2021-02-28T09:36:26.603' AS DateTime), CAST(N'2021-04-18T23:47:16.140' AS DateTime))
INSERT [dbo].[ServiceProvider] ([ServiceProviderID], [UserName], [Password], [ServiceProviderName], [MobileNo], [DOB], [HomeAddress], [HomePincode], [HomeCountryID], [HomeStateID], [HomeCityID], [WorkAddress], [WorkPincode], [WorkCountryID], [WorkStateID], [WorkCityID], [AadharCard], [PANCardNo], [GSTNo], [BankID], [AccountNo], [IFSCCode], [ProfilePhotoPath], [ModifiedBy], [UserID], [CreationDate], [ModificationDate]) VALUES (15, N'jemis', N'jemis', N'jemis bakarania', N'1111111111', CAST(N'2001-02-21T00:00:00.000' AS DateTime), N'Rajkot', N'360004', 1, 4, 1, N'Rajkot', N'360004', 1, 4, 1, NULL, NULL, NULL, NULL, NULL, NULL, N'~/UploadData/ProfilePicture/jemis.jpeg', 2, 2, CAST(N'2021-04-27T18:43:08.283' AS DateTime), CAST(N'2021-04-30T15:09:18.390' AS DateTime))
INSERT [dbo].[ServiceProvider] ([ServiceProviderID], [UserName], [Password], [ServiceProviderName], [MobileNo], [DOB], [HomeAddress], [HomePincode], [HomeCountryID], [HomeStateID], [HomeCityID], [WorkAddress], [WorkPincode], [WorkCountryID], [WorkStateID], [WorkCityID], [AadharCard], [PANCardNo], [GSTNo], [BankID], [AccountNo], [IFSCCode], [ProfilePhotoPath], [ModifiedBy], [UserID], [CreationDate], [ModificationDate]) VALUES (16, N'vishal', N'vishal', N'vishal', N'1231231231', CAST(N'2000-03-03T00:00:00.000' AS DateTime), N'Rajkot', N'100001', 16, 11, 16, N'Rajkot', N'100001', 16, 11, 16, N'111122223333', N'AAAAA1111A', NULL, NULL, NULL, NULL, N'~/UploadData/ProfilePicture/vishal.jpeg', 2, 2, CAST(N'2021-04-30T15:09:18.390' AS DateTime), CAST(N'2021-04-30T15:09:18.390' AS DateTime))
INSERT [dbo].[ServiceProvider] ([ServiceProviderID], [UserName], [Password], [ServiceProviderName], [MobileNo], [DOB], [HomeAddress], [HomePincode], [HomeCountryID], [HomeStateID], [HomeCityID], [WorkAddress], [WorkPincode], [WorkCountryID], [WorkStateID], [WorkCityID], [AadharCard], [PANCardNo], [GSTNo], [BankID], [AccountNo], [IFSCCode], [ProfilePhotoPath], [ModifiedBy], [UserID], [CreationDate], [ModificationDate]) VALUES (17, N'shweta', N'shweta', N'shweta', N'3366553366', CAST(N'2000-01-01T00:00:00.000' AS DateTime), N'malborn', N'250001', 2, 5, 9, N'malborn', N'250001', 2, 5, 9, N'777788889999', N'AAAAA1111A', NULL, NULL, NULL, NULL, N'~/UploadData/ProfilePicture/shweta.jpeg', 2, 2, CAST(N'2021-04-30T15:09:18.390' AS DateTime), CAST(N'2021-04-30T15:09:18.390' AS DateTime))
INSERT [dbo].[ServiceProvider] ([ServiceProviderID], [UserName], [Password], [ServiceProviderName], [MobileNo], [DOB], [HomeAddress], [HomePincode], [HomeCountryID], [HomeStateID], [HomeCityID], [WorkAddress], [WorkPincode], [WorkCountryID], [WorkStateID], [WorkCityID], [AadharCard], [PANCardNo], [GSTNo], [BankID], [AccountNo], [IFSCCode], [ProfilePhotoPath], [ModifiedBy], [UserID], [CreationDate], [ModificationDate]) VALUES (18, N'rossy', N'rossy', N'Rossy', N'7778889997', CAST(N'1990-05-05T00:00:00.000' AS DateTime), N'New York', N'789654', 16, 11, 16, N'New York', N'789654', 16, 11, 16, N'444455556666', N'AAAAA1111A', NULL, NULL, NULL, NULL, N'~/UploadData/ProfilePicture/rossy.jpeg', 2, 2, CAST(N'2021-04-30T15:09:18.390' AS DateTime), CAST(N'2021-04-30T15:09:18.390' AS DateTime))
INSERT [dbo].[ServiceProvider] ([ServiceProviderID], [UserName], [Password], [ServiceProviderName], [MobileNo], [DOB], [HomeAddress], [HomePincode], [HomeCountryID], [HomeStateID], [HomeCityID], [WorkAddress], [WorkPincode], [WorkCountryID], [WorkStateID], [WorkCityID], [AadharCard], [PANCardNo], [GSTNo], [BankID], [AccountNo], [IFSCCode], [ProfilePhotoPath], [ModifiedBy], [UserID], [CreationDate], [ModificationDate]) VALUES (19, N'rachel', N'rachel', N'Rachel', N'7534263145', CAST(N'2000-09-09T00:00:00.000' AS DateTime), N'Ahemdabad', N'987654', 1, 4, 2, N'Ahemdabad', N'987654', 1, 4, 2, N'456456456456', N'AAAAA1111A', NULL, NULL, NULL, NULL, N'~/UploadData/ProfilePicture/rachel.jpeg', 2, 2, CAST(N'2021-04-30T15:09:18.390' AS DateTime), CAST(N'2021-04-30T15:09:18.390' AS DateTime))
SET IDENTITY_INSERT [dbo].[ServiceProvider] OFF
GO
SET IDENTITY_INSERT [dbo].[ServiceProviderServices] ON 

INSERT [dbo].[ServiceProviderServices] ([ServiceProviderServicesID], [ServiceProviderID], [ServiceID], [Rate], [Description], [Specialist], [ModifiedBy], [UserID], [CreationDate], [ModificationDate]) VALUES (27, 3, 2, CAST(1100.00 AS Decimal(6, 2)), N'Wooden Table', N'Table', 0, 2, CAST(N'2021-04-16T18:32:37.067' AS DateTime), CAST(N'2021-04-29T20:42:35.000' AS DateTime))
INSERT [dbo].[ServiceProviderServices] ([ServiceProviderServicesID], [ServiceProviderID], [ServiceID], [Rate], [Description], [Specialist], [ModifiedBy], [UserID], [CreationDate], [ModificationDate]) VALUES (28, 3, 3, CAST(456.00 AS Decimal(6, 2)), N'Full Service', N'Service', 2, 2, CAST(N'2021-04-16T18:32:37.067' AS DateTime), CAST(N'2021-04-29T20:42:35.000' AS DateTime))
INSERT [dbo].[ServiceProviderServices] ([ServiceProviderServicesID], [ServiceProviderID], [ServiceID], [Rate], [Description], [Specialist], [ModifiedBy], [UserID], [CreationDate], [ModificationDate]) VALUES (29, 3, 5, CAST(789.00 AS Decimal(6, 2)), N'Sport car', N'Safe Driving', 2, 2, CAST(N'2021-04-16T18:32:37.067' AS DateTime), CAST(N'2021-04-29T20:42:35.000' AS DateTime))
INSERT [dbo].[ServiceProviderServices] ([ServiceProviderServicesID], [ServiceProviderID], [ServiceID], [Rate], [Description], [Specialist], [ModifiedBy], [UserID], [CreationDate], [ModificationDate]) VALUES (32, 3, 2, CAST(1500.00 AS Decimal(6, 2)), N'Sofa Set', N'Every Sofa Set', 2, 2, CAST(N'2021-04-18T23:47:16.140' AS DateTime), CAST(N'2021-04-29T20:42:35.000' AS DateTime))
INSERT [dbo].[ServiceProviderServices] ([ServiceProviderServicesID], [ServiceProviderID], [ServiceID], [Rate], [Description], [Specialist], [ModifiedBy], [UserID], [CreationDate], [ModificationDate]) VALUES (40, 15, 2, CAST(100.00 AS Decimal(6, 2)), N'bed', N'wooden bed', 2, 2, CAST(N'2021-04-27T18:43:08.283' AS DateTime), CAST(N'2021-04-27T18:43:08.283' AS DateTime))
INSERT [dbo].[ServiceProviderServices] ([ServiceProviderServicesID], [ServiceProviderID], [ServiceID], [Rate], [Description], [Specialist], [ModifiedBy], [UserID], [CreationDate], [ModificationDate]) VALUES (41, 15, 2, CAST(120.00 AS Decimal(6, 2)), N'chair', N'wooden chair', 2, 2, CAST(N'2021-04-27T18:43:08.283' AS DateTime), CAST(N'2021-04-27T18:43:08.283' AS DateTime))
INSERT [dbo].[ServiceProviderServices] ([ServiceProviderServicesID], [ServiceProviderID], [ServiceID], [Rate], [Description], [Specialist], [ModifiedBy], [UserID], [CreationDate], [ModificationDate]) VALUES (42, 15, 5, CAST(1000.00 AS Decimal(6, 2)), N'fastest mode of transport', N'suv', 2, 2, CAST(N'2021-04-27T18:43:08.283' AS DateTime), CAST(N'2021-04-27T18:43:08.283' AS DateTime))
SET IDENTITY_INSERT [dbo].[ServiceProviderServices] OFF
GO
SET IDENTITY_INSERT [dbo].[State] ON 

INSERT [dbo].[State] ([StateID], [StateName], [CountryID], [ModifiedBy], [UserID], [CreationDate], [ModificationDate]) VALUES (3, N'Maharashtra', 1, 2, 2, CAST(N'2021-01-03T13:20:10.630' AS DateTime), CAST(N'2021-01-03T13:20:23.873' AS DateTime))
INSERT [dbo].[State] ([StateID], [StateName], [CountryID], [ModifiedBy], [UserID], [CreationDate], [ModificationDate]) VALUES (4, N'Gujarat', 1, 2, 2, CAST(N'2021-01-03T14:24:41.207' AS DateTime), CAST(N'2021-01-03T14:24:41.207' AS DateTime))
INSERT [dbo].[State] ([StateID], [StateName], [CountryID], [ModifiedBy], [UserID], [CreationDate], [ModificationDate]) VALUES (5, N'Malborn', 2, 2, 2, CAST(N'2021-01-03T14:24:55.663' AS DateTime), CAST(N'2021-01-03T14:24:55.663' AS DateTime))
INSERT [dbo].[State] ([StateID], [StateName], [CountryID], [ModifiedBy], [UserID], [CreationDate], [ModificationDate]) VALUES (8, N'Sydney', 2, 2, 2, CAST(N'2021-04-30T15:09:18.390' AS DateTime), CAST(N'2021-04-30T15:09:18.390' AS DateTime))
INSERT [dbo].[State] ([StateID], [StateName], [CountryID], [ModifiedBy], [UserID], [CreationDate], [ModificationDate]) VALUES (9, N'Delhi', 1, 2, 2, CAST(N'2021-04-30T15:09:18.390' AS DateTime), CAST(N'2021-04-30T15:09:18.390' AS DateTime))
INSERT [dbo].[State] ([StateID], [StateName], [CountryID], [ModifiedBy], [UserID], [CreationDate], [ModificationDate]) VALUES (10, N'Jharkhand', 1, 2, 2, CAST(N'2021-04-30T15:09:18.390' AS DateTime), CAST(N'2021-04-30T15:09:18.390' AS DateTime))
INSERT [dbo].[State] ([StateID], [StateName], [CountryID], [ModifiedBy], [UserID], [CreationDate], [ModificationDate]) VALUES (11, N'chicago', 16, 2, 2, CAST(N'2021-04-30T15:09:18.390' AS DateTime), CAST(N'2021-04-30T15:09:18.390' AS DateTime))
SET IDENTITY_INSERT [dbo].[State] OFF
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_AdminUser]    Script Date: 04-07-2022 07:59:52 AM ******/
ALTER TABLE [dbo].[AdminUser] ADD  CONSTRAINT [IX_AdminUser] UNIQUE NONCLUSTERED 
(
	[UserName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_ServiceProvider]    Script Date: 04-07-2022 07:59:52 AM ******/
ALTER TABLE [dbo].[ServiceProvider] ADD  CONSTRAINT [IX_ServiceProvider] UNIQUE NONCLUSTERED 
(
	[UserName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_ServiceProvider_1]    Script Date: 04-07-2022 07:59:52 AM ******/
ALTER TABLE [dbo].[ServiceProvider] ADD  CONSTRAINT [IX_ServiceProvider_1] UNIQUE NONCLUSTERED 
(
	[MobileNo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Bank]  WITH CHECK ADD  CONSTRAINT [FK_Bank_AdminUser] FOREIGN KEY([UserID])
REFERENCES [dbo].[AdminUser] ([UserID])
GO
ALTER TABLE [dbo].[Bank] CHECK CONSTRAINT [FK_Bank_AdminUser]
GO
ALTER TABLE [dbo].[Bank]  WITH CHECK ADD  CONSTRAINT [FK_Bank_AdminUser1] FOREIGN KEY([ModifiedBy])
REFERENCES [dbo].[AdminUser] ([UserID])
GO
ALTER TABLE [dbo].[Bank] CHECK CONSTRAINT [FK_Bank_AdminUser1]
GO
ALTER TABLE [dbo].[City]  WITH CHECK ADD  CONSTRAINT [FK_City_AdminUser] FOREIGN KEY([UserID])
REFERENCES [dbo].[AdminUser] ([UserID])
GO
ALTER TABLE [dbo].[City] CHECK CONSTRAINT [FK_City_AdminUser]
GO
ALTER TABLE [dbo].[City]  WITH CHECK ADD  CONSTRAINT [FK_City_AdminUser1] FOREIGN KEY([ModifiedBy])
REFERENCES [dbo].[AdminUser] ([UserID])
GO
ALTER TABLE [dbo].[City] CHECK CONSTRAINT [FK_City_AdminUser1]
GO
ALTER TABLE [dbo].[City]  WITH CHECK ADD  CONSTRAINT [FK_City_State] FOREIGN KEY([StateID])
REFERENCES [dbo].[State] ([StateID])
GO
ALTER TABLE [dbo].[City] CHECK CONSTRAINT [FK_City_State]
GO
ALTER TABLE [dbo].[Country]  WITH CHECK ADD  CONSTRAINT [FK_Country_AdminUser] FOREIGN KEY([UserID])
REFERENCES [dbo].[AdminUser] ([UserID])
GO
ALTER TABLE [dbo].[Country] CHECK CONSTRAINT [FK_Country_AdminUser]
GO
ALTER TABLE [dbo].[Country]  WITH CHECK ADD  CONSTRAINT [FK_Country_AdminUser1] FOREIGN KEY([ModifiedBy])
REFERENCES [dbo].[AdminUser] ([UserID])
GO
ALTER TABLE [dbo].[Country] CHECK CONSTRAINT [FK_Country_AdminUser1]
GO
ALTER TABLE [dbo].[Rating]  WITH CHECK ADD  CONSTRAINT [FK_Rating_AdminUser] FOREIGN KEY([UserID])
REFERENCES [dbo].[AdminUser] ([UserID])
GO
ALTER TABLE [dbo].[Rating] CHECK CONSTRAINT [FK_Rating_AdminUser]
GO
ALTER TABLE [dbo].[Rating]  WITH CHECK ADD  CONSTRAINT [FK_Rating_AdminUser1] FOREIGN KEY([ModifiedBy])
REFERENCES [dbo].[AdminUser] ([UserID])
GO
ALTER TABLE [dbo].[Rating] CHECK CONSTRAINT [FK_Rating_AdminUser1]
GO
ALTER TABLE [dbo].[Rating]  WITH CHECK ADD  CONSTRAINT [FK_Rating_ServiceProvider] FOREIGN KEY([ServiceProviderID])
REFERENCES [dbo].[ServiceProvider] ([ServiceProviderID])
GO
ALTER TABLE [dbo].[Rating] CHECK CONSTRAINT [FK_Rating_ServiceProvider]
GO
ALTER TABLE [dbo].[Rating]  WITH CHECK ADD  CONSTRAINT [FK_Rating_ServiceProviderServices] FOREIGN KEY([ServiceProviderServicesID])
REFERENCES [dbo].[ServiceProviderServices] ([ServiceProviderServicesID])
GO
ALTER TABLE [dbo].[Rating] CHECK CONSTRAINT [FK_Rating_ServiceProviderServices]
GO
ALTER TABLE [dbo].[Request]  WITH CHECK ADD  CONSTRAINT [FK_Request_ServiceProvider] FOREIGN KEY([ServiceProviderID])
REFERENCES [dbo].[ServiceProvider] ([ServiceProviderID])
GO
ALTER TABLE [dbo].[Request] CHECK CONSTRAINT [FK_Request_ServiceProvider]
GO
ALTER TABLE [dbo].[Request]  WITH CHECK ADD  CONSTRAINT [FK_Request_ServiceProviderServices] FOREIGN KEY([ServiceProviderServicesID])
REFERENCES [dbo].[ServiceProviderServices] ([ServiceProviderServicesID])
GO
ALTER TABLE [dbo].[Request] CHECK CONSTRAINT [FK_Request_ServiceProviderServices]
GO
ALTER TABLE [dbo].[Service]  WITH CHECK ADD  CONSTRAINT [FK_Service_AdminUser] FOREIGN KEY([UserID])
REFERENCES [dbo].[AdminUser] ([UserID])
GO
ALTER TABLE [dbo].[Service] CHECK CONSTRAINT [FK_Service_AdminUser]
GO
ALTER TABLE [dbo].[Service]  WITH CHECK ADD  CONSTRAINT [FK_Service_AdminUser1] FOREIGN KEY([ModifiedBy])
REFERENCES [dbo].[AdminUser] ([UserID])
GO
ALTER TABLE [dbo].[Service] CHECK CONSTRAINT [FK_Service_AdminUser1]
GO
ALTER TABLE [dbo].[ServiceProvider]  WITH CHECK ADD  CONSTRAINT [FK_ServiceProvider_AdminUser] FOREIGN KEY([UserID])
REFERENCES [dbo].[AdminUser] ([UserID])
GO
ALTER TABLE [dbo].[ServiceProvider] CHECK CONSTRAINT [FK_ServiceProvider_AdminUser]
GO
ALTER TABLE [dbo].[ServiceProvider]  WITH CHECK ADD  CONSTRAINT [FK_ServiceProvider_AdminUser1] FOREIGN KEY([ModifiedBy])
REFERENCES [dbo].[AdminUser] ([UserID])
GO
ALTER TABLE [dbo].[ServiceProvider] CHECK CONSTRAINT [FK_ServiceProvider_AdminUser1]
GO
ALTER TABLE [dbo].[ServiceProvider]  WITH CHECK ADD  CONSTRAINT [FK_ServiceProvider_Bank] FOREIGN KEY([BankID])
REFERENCES [dbo].[Bank] ([BankID])
GO
ALTER TABLE [dbo].[ServiceProvider] CHECK CONSTRAINT [FK_ServiceProvider_Bank]
GO
ALTER TABLE [dbo].[ServiceProvider]  WITH CHECK ADD  CONSTRAINT [FK_ServiceProvider_City] FOREIGN KEY([HomeCityID])
REFERENCES [dbo].[City] ([CityID])
GO
ALTER TABLE [dbo].[ServiceProvider] CHECK CONSTRAINT [FK_ServiceProvider_City]
GO
ALTER TABLE [dbo].[ServiceProvider]  WITH CHECK ADD  CONSTRAINT [FK_ServiceProvider_City1] FOREIGN KEY([WorkCityID])
REFERENCES [dbo].[City] ([CityID])
GO
ALTER TABLE [dbo].[ServiceProvider] CHECK CONSTRAINT [FK_ServiceProvider_City1]
GO
ALTER TABLE [dbo].[ServiceProvider]  WITH CHECK ADD  CONSTRAINT [FK_ServiceProvider_Country] FOREIGN KEY([HomeCountryID])
REFERENCES [dbo].[Country] ([CountryID])
GO
ALTER TABLE [dbo].[ServiceProvider] CHECK CONSTRAINT [FK_ServiceProvider_Country]
GO
ALTER TABLE [dbo].[ServiceProvider]  WITH CHECK ADD  CONSTRAINT [FK_ServiceProvider_Country1] FOREIGN KEY([WorkCountryID])
REFERENCES [dbo].[Country] ([CountryID])
GO
ALTER TABLE [dbo].[ServiceProvider] CHECK CONSTRAINT [FK_ServiceProvider_Country1]
GO
ALTER TABLE [dbo].[ServiceProvider]  WITH CHECK ADD  CONSTRAINT [FK_ServiceProvider_State] FOREIGN KEY([HomeStateID])
REFERENCES [dbo].[State] ([StateID])
GO
ALTER TABLE [dbo].[ServiceProvider] CHECK CONSTRAINT [FK_ServiceProvider_State]
GO
ALTER TABLE [dbo].[ServiceProvider]  WITH CHECK ADD  CONSTRAINT [FK_ServiceProvider_State1] FOREIGN KEY([WorkStateID])
REFERENCES [dbo].[State] ([StateID])
GO
ALTER TABLE [dbo].[ServiceProvider] CHECK CONSTRAINT [FK_ServiceProvider_State1]
GO
ALTER TABLE [dbo].[ServiceProviderServices]  WITH CHECK ADD  CONSTRAINT [FK_ServiceProviderServices_AdminUser] FOREIGN KEY([UserID])
REFERENCES [dbo].[AdminUser] ([UserID])
GO
ALTER TABLE [dbo].[ServiceProviderServices] CHECK CONSTRAINT [FK_ServiceProviderServices_AdminUser]
GO
ALTER TABLE [dbo].[ServiceProviderServices]  WITH CHECK ADD  CONSTRAINT [FK_ServiceProviderServices_AdminUser1] FOREIGN KEY([ModifiedBy])
REFERENCES [dbo].[AdminUser] ([UserID])
GO
ALTER TABLE [dbo].[ServiceProviderServices] CHECK CONSTRAINT [FK_ServiceProviderServices_AdminUser1]
GO
ALTER TABLE [dbo].[ServiceProviderServices]  WITH CHECK ADD  CONSTRAINT [FK_ServiceProviderServices_Service] FOREIGN KEY([ServiceID])
REFERENCES [dbo].[Service] ([ServiceID])
GO
ALTER TABLE [dbo].[ServiceProviderServices] CHECK CONSTRAINT [FK_ServiceProviderServices_Service]
GO
ALTER TABLE [dbo].[ServiceProviderServices]  WITH CHECK ADD  CONSTRAINT [FK_ServiceProviderServices_ServiceProvider] FOREIGN KEY([ServiceProviderID])
REFERENCES [dbo].[ServiceProvider] ([ServiceProviderID])
GO
ALTER TABLE [dbo].[ServiceProviderServices] CHECK CONSTRAINT [FK_ServiceProviderServices_ServiceProvider]
GO
ALTER TABLE [dbo].[State]  WITH CHECK ADD  CONSTRAINT [FK_State_AdminUser] FOREIGN KEY([UserID])
REFERENCES [dbo].[AdminUser] ([UserID])
GO
ALTER TABLE [dbo].[State] CHECK CONSTRAINT [FK_State_AdminUser]
GO
ALTER TABLE [dbo].[State]  WITH CHECK ADD  CONSTRAINT [FK_State_AdminUser1] FOREIGN KEY([ModifiedBy])
REFERENCES [dbo].[AdminUser] ([UserID])
GO
ALTER TABLE [dbo].[State] CHECK CONSTRAINT [FK_State_AdminUser1]
GO
ALTER TABLE [dbo].[State]  WITH CHECK ADD  CONSTRAINT [FK_State_Country] FOREIGN KEY([CountryID])
REFERENCES [dbo].[Country] ([CountryID])
GO
ALTER TABLE [dbo].[State] CHECK CONSTRAINT [FK_State_Country]
GO
/****** Object:  StoredProcedure [dbo].[PR_AdminUser_ChangePasswordByPK]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_AdminUser_ChangePasswordByPK]
@UserID INT,
@Password VARCHAR(100),
@ModificationDate DATETIME
AS
UPDATE [dbo].[AdminUser]
SET
    [dbo].[AdminUser].[Password] = @Password,
    [dbo].[AdminUser].[ModificationDate] = GETDATE()
WHERE
    [dbo].[AdminUser].[UserID] = @UserID
GO
/****** Object:  StoredProcedure [dbo].[PR_AdminUser_DeleteByPK]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_AdminUser_DeleteByPK]
@UserID INT
AS
DELETE FROM [dbo].[AdminUser]
WHERE [dbo].[AdminUser].[UserID] = @UserID
GO
/****** Object:  StoredProcedure [dbo].[PR_AdminUser_Insert]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_AdminUser_Insert]
@UserID INT OUTPUT,
@UserName VARCHAR(100),
@Password VARCHAR(100),
@DisplayName VARCHAR(100),
@MobileNo VARCHAR(10),
@Email VARCHAR(100),
@Designation VARCHAR(100),
@CreationDate DATETIME,
@ModificationDate DATETIME
AS
INSERT INTO [dbo].[AdminUser]
(
	[dbo].[AdminUser].[UserName],
    [dbo].[AdminUser].[Password],
    [dbo].[AdminUser].[DisplayName],
    [dbo].[AdminUser].[MobileNo],
    [dbo].[AdminUser].[Email],
    [dbo].[AdminUser].[Designation],
    [dbo].[AdminUser].[CreationDate],
    [dbo].[AdminUser].[ModificationDate]
)
VALUES
(
	@UserName,
    @Password,
    @DisplayName,
    @MobileNo,
    @Email,
    @Designation,
    @CreationDate,
	@ModificationDate
)
SET @UserID = SCOPE_IDENTITY()
GO
/****** Object:  StoredProcedure [dbo].[PR_AdminUser_SelectAll]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_AdminUser_SelectAll]
AS
SELECT
    [dbo].[AdminUser].[UserID],
	[dbo].[AdminUser].[UserName],
    [dbo].[AdminUser].[Password],
    [dbo].[AdminUser].[DisplayName],
    [dbo].[AdminUser].[MobileNo],
    [dbo].[AdminUser].[Email],
    [dbo].[AdminUser].[Designation],
    CONVERT(VARCHAR,[dbo].[AdminUser].[CreationDate],106) AS [CreationDate],
    CONVERT(VARCHAR,[dbo].[AdminUser].[ModificationDate],106) AS [ModificationDate]
FROM
    [dbo].[AdminUser]
GO
/****** Object:  StoredProcedure [dbo].[PR_AdminUser_SelectByPK]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_AdminUser_SelectByPK]
@UserID INT
AS
SELECT
    [dbo].[AdminUser].[UserID],
	[dbo].[AdminUser].[UserName],
    [dbo].[AdminUser].[Password],
    [dbo].[AdminUser].[DisplayName],
    [dbo].[AdminUser].[MobileNo],
    [dbo].[AdminUser].[Email],
    [dbo].[AdminUser].[Designation],
    CONVERT(VARCHAR,[dbo].[AdminUser].[CreationDate],106) AS [CreationDate],
    CONVERT(VARCHAR,[dbo].[AdminUser].[ModificationDate],106) AS [ModificationDate]
FROM
    [dbo].[AdminUser]
WHERE
    [dbo].[AdminUser].[UserID] = @UserID
GO
/****** Object:  StoredProcedure [dbo].[PR_AdminUser_SelectByUserName]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_AdminUser_SelectByUserName]
@UserName VARCHAR(100)
AS
SELECT 
	[dbo].[AdminUser].[UserName]
FROM 
	[dbo].[AdminUser]
WHERE 
	[dbo].[AdminUser].[UserName] = @UserName
GO
/****** Object:  StoredProcedure [dbo].[PR_AdminUser_SelectByUsernamePassword]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- [dbo].[PR_AdminUser_SelectByUserNamePassword] @UserName = 'admin',@Password = 'admin'
CREATE PROCEDURE [dbo].[PR_AdminUser_SelectByUsernamePassword]
@UserName VARCHAR(100),
@Password VARCHAR(100)
AS
SELECT 
	[dbo].[AdminUser].[UserID],
	[dbo].[AdminUser].[UserName],
    [dbo].[AdminUser].[Password],
    [dbo].[AdminUser].[DisplayName],
    [dbo].[AdminUser].[MobileNo],
    [dbo].[AdminUser].[Email],
    [dbo].[AdminUser].[Designation],
    CONVERT(VARCHAR,[dbo].[AdminUser].[CreationDate],106) AS [CreationDate],
    CONVERT(VARCHAR,[dbo].[AdminUser].[ModificationDate],106) AS [ModificationDate]
FROM
	[dbo].[AdminUser]
WHERE
	[dbo].[AdminUser].[UserName] = @UserName
AND
	[dbo].[AdminUser].[Password] = @Password
GO
/****** Object:  StoredProcedure [dbo].[PR_AdminUser_UpdateByPK]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_AdminUser_UpdateByPK]
@UserID INT,
@UserName VARCHAR(100),
@Password VARCHAR(100),
@DisplayName VARCHAR(100),
@MobileNo VARCHAR(10),
@Email VARCHAR(100),
@Designation VARCHAR(100),
@CreationDate DATETIME,
@ModificationDate DATETIME
AS
UPDATE [dbo].[AdminUser]
SET
	[dbo].[AdminUser].[UserName] = @UserName,
    [dbo].[AdminUser].[Password] = @Password,
    [dbo].[AdminUser].[DisplayName] = @DisplayName,
    [dbo].[AdminUser].[MobileNo] = @MobileNo,
    [dbo].[AdminUser].[Email] = @Email,
    [dbo].[AdminUser].[Designation] = @Designation,
    [dbo].[AdminUser].[ModificationDate] = GETDATE()
WHERE
    [dbo].[AdminUser].[UserID] = @UserID
GO
/****** Object:  StoredProcedure [dbo].[PR_Bank_DeleteByPKUserID]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_Bank_DeleteByPKUserID]
@BankID INT,
@UserID INT
AS
DELETE FROM [dbo].[Bank]
WHERE 
	[dbo].[Bank].[BankID] = @BankID
AND
	[dbo].[Bank].[UserID] = @UserID
GO
/****** Object:  StoredProcedure [dbo].[PR_Bank_InsertByUserID]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_Bank_InsertByUserID]
@BankID INT OUTPUT,
@BankName VARCHAR(100),
@ModifiedBy INT,
@UserID INT,
@CreationDate DATETIME,
@ModificationDate DATETIME
AS
INSERT INTO [dbo].[Bank]
(
    [dbo].[Bank].[BankName],
    [dbo].[Bank].[ModifiedBy],
    [dbo].[Bank].[UserID],
    [dbo].[Bank].[CreationDate],
    [dbo].[Bank].[ModificationDate]
)
VALUES
(
    @BankName,
    @ModifiedBy,
    @UserID,
    @CreationDate,
	@ModificationDate
);
SET @BankID = SCOPE_IDENTITY();
GO
/****** Object:  StoredProcedure [dbo].[PR_Bank_SelectAll]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_Bank_SelectAll]
AS
SELECT
    [dbo].[Bank].[BankID],
    [dbo].[Bank].[BankName],
    [dbo].[Bank].[ModifiedBy],
    [dbo].[Bank].[UserID],
    CONVERT(VARCHAR,[dbo].[Bank].[CreationDate],106) AS [CreationDate],
    CONVERT(VARCHAR,[dbo].[Bank].[ModificationDate],106) AS [ModificationDate]
FROM
    [dbo].[Bank]
GO
/****** Object:  StoredProcedure [dbo].[PR_Bank_SelectByPK]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_Bank_SelectByPK]
@BankID INT
AS
SELECT
    [dbo].[Bank].[BankID],
    [dbo].[Bank].[BankName],
    [dbo].[Bank].[ModifiedBy],
    [dbo].[Bank].[UserID],
    CONVERT(VARCHAR,[dbo].[Bank].[CreationDate],106) AS [CreationDate],
    CONVERT(VARCHAR,[dbo].[Bank].[ModificationDate],106) AS [ModificationDate]
FROM
    [dbo].[Bank]
WHERE
    [dbo].[Bank].[BankID] = @BankID
GO
/****** Object:  StoredProcedure [dbo].[PR_Bank_SelectForDropdownList]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_Bank_SelectForDropdownList]
AS
SELECT 
	[dbo].[Bank].[BankID],
    [dbo].[Bank].[BankName]
FROM
	[dbo].[Bank]
GO
/****** Object:  StoredProcedure [dbo].[PR_Bank_UpdateByPK]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_Bank_UpdateByPK]
@BankID INT,
@BankName VARCHAR(100),
@ModifiedBy INT
AS
UPDATE [dbo].[Bank]
SET
    [dbo].[Bank].[BankName] = @BankName,
    [dbo].[Bank].[ModifiedBy] = @ModifiedBy,
    [dbo].[Bank].[ModificationDate] = GETDATE()
WHERE
    [dbo].[Bank].[BankID] = @BankID
GO
/****** Object:  StoredProcedure [dbo].[PR_City_DeleteByPKUserID]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_City_DeleteByPKUserID]
@CityID INT,
@UserID INT
AS
DELETE FROM [dbo].[City]
WHERE 
	[dbo].[City].[CityID] = @CityID
AND
	[dbo].[City].[UserID] = @UserID
GO
/****** Object:  StoredProcedure [dbo].[PR_City_InsertByUserID]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_City_InsertByUserID]
@CityID INT OUTPUT,
@CityName VARCHAR(100),
@StateID INT,
@ModifiedBy INT,
@UserID INT,
@CreationDate DATETIME,
@ModificationDate DATETIME
AS
INSERT INTO [dbo].[City]
(
	[dbo].[City].[CityName],
	[dbo].[City].[StateID],
	[dbo].[City].[ModifiedBy],
	[dbo].[City].[UserID],
	[dbo].[City].[CreationDate],
	[dbo].[City].[ModificationDate]
)
VALUES
(
	@CityName,
	@StateID,
	@ModifiedBy,
	@UserID,
	@CreationDate,
	@ModificationDate
)
SET @CityID = SCOPE_IDENTITY()
GO
/****** Object:  StoredProcedure [dbo].[PR_City_SelectAll]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_City_SelectAll]
AS
SELECT
	[dbo].[City].[CityID],
	[dbo].[City].[CityName],
	[dbo].[State].[StateName],
	[dbo].[Country].[CountryName],
	CONVERT(VARCHAR,[dbo].[City].[CreationDate],106) AS [CreationDate],
    CONVERT(VARCHAR,[dbo].[City].[ModificationDate],106) AS [ModificationDate]
FROM 
	[dbo].[City]

LEFT OUTER JOIN [dbo].[State]
ON [dbo].[State].[StateID] = [dbo].[City].[StateID]

LEFT OUTER JOIN [dbo].[Country]
ON [dbo].[Country].[CountryID] = [dbo].[State].[CountryID]
GO
/****** Object:  StoredProcedure [dbo].[PR_City_SelectByPK]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_City_SelectByPK]
@CityID INT
AS
SELECT
	[dbo].[City].[CityID],
	[dbo].[City].[CityName],
	[dbo].[City].[StateID],
	[dbo].[City].[UserID],
	[dbo].[City].[ModifiedBy],
	[dbo].[City].[CreationDate],
    [dbo].[City].[ModificationDate]
FROM 
	[dbo].[City]

WHERE
	[dbo].[City].[CityID] = @CityID
	
GO
/****** Object:  StoredProcedure [dbo].[PR_City_SelectForDropdownList]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_City_SelectForDropdownList]
AS
SELECT 
	[dbo].[City].[CityID],
	[dbo].[City].[CityName],
	[dbo].[City].[StateID]
FROM 
	[dbo].[City]
GO
/****** Object:  StoredProcedure [dbo].[PR_City_SelectForDropdownListByStateID]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_City_SelectForDropdownListByStateID]
@StateID INT
AS
SELECT 
	[dbo].[City].[CityID],
	[dbo].[City].[CityName],
	[dbo].[City].[StateID]
FROM 
	[dbo].[City]
WHERE
	[dbo].[City].[StateID] = @StateID
GO
/****** Object:  StoredProcedure [dbo].[PR_City_UpdateByPK]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_City_UpdateByPK]
@CityID INT,
@CityName VARCHAR(100),
@StateID INT,
@ModifiedBy INT,
@ModificationDate DATETIME
AS
UPDATE [dbo].[City]
SET
	[dbo].[City].[CityName] = @CityName,
	[dbo].[City].[StateID] = @StateID,
	[dbo].[City].[ModifiedBy] = ModifiedBy,
	[dbo].[City].[ModificationDate] = @ModificationDate
WHERE 
	[dbo].[City].[CityID] = @CityID
GO
/****** Object:  StoredProcedure [dbo].[PR_Country_DeleteByPKUserID]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_Country_DeleteByPKUserID]
@CountryID INT,
@UserID INT
AS
DELETE FROM [dbo].[Country]
WHERE 
	[dbo].[Country].[CountryID] = @CountryID
AND 
	[dbo].[Country].[UserID] = @UserID
GO
/****** Object:  StoredProcedure [dbo].[PR_Country_InsertByUserID]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_Country_InsertByUserID]
@CountryID INT OUTPUT,
@CountryName VARCHAR(100),
@CountryCode VARCHAR(25),
@ModifiedBy INT,
@UserID INT,
@CreationDate DATETIME,
@ModificationDate DATETIME
AS
INSERT INTO [dbo].[Country]
(
	[dbo].[Country].[CountryName],
	[dbo].[Country].[CountryCode],
	[dbo].[Country].[ModifiedBy],
	[dbo].[Country].[UserID],
	[dbo].[Country].[CreationDate],
	[dbo].[Country].[ModificationDate]
)
VALUES
(
	@CountryName,
	@CountryCode,
	@ModifiedBy,
	@UserID,
	@CreationDate,
	@ModificationDate
)
SET @CountryID = SCOPE_IDENTITY()
GO
/****** Object:  StoredProcedure [dbo].[PR_Country_SelectAll]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_Country_SelectAll]
AS
SELECT 
	[dbo].[Country].[CountryID],
	[dbo].[Country].[CountryName],
	[dbo].[Country].[CountryCode],
	[dbo].[Country].[ModifiedBy],
	[dbo].[Country].[UserID],
	CONVERT(VARCHAR,[dbo].[Country].[CreationDate],106) AS [CreationDate],
    CONVERT(VARCHAR,[dbo].[Country].[ModificationDate],106) AS [ModificationDate]
FROM [dbo].[Country]
GO
/****** Object:  StoredProcedure [dbo].[PR_Country_SelectByPK]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_Country_SelectByPK]
@CountryId INT
AS
SELECT 
	[dbo].[Country].[CountryID],
	[dbo].[Country].[CountryName],
	[dbo].[Country].[CountryCode],
	[dbo].[Country].[ModifiedBy],
	[dbo].[Country].[UserID],
	CONVERT(VARCHAR,[dbo].[Country].[CreationDate],106) AS [CreationDate],
    CONVERT(VARCHAR,[dbo].[Country].[ModificationDate],106) AS [ModificationDate]
FROM [dbo].[Country]
WHERE
	[dbo].[Country].[CountryID] = @CountryID
GO
/****** Object:  StoredProcedure [dbo].[PR_Country_SelectForDropdownList]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_Country_SelectForDropdownList]
as
SELECT
	[dbo].[Country].[CountryID],
	[dbo].[Country].[CountryName],
	[dbo].[Country].[CountryCode]
FROM [dbo].[Country]
GO
/****** Object:  StoredProcedure [dbo].[PR_Country_UpdateByPK]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_Country_UpdateByPK]
@CountryID INT,
@CountryName VARCHAR(100),
@CountryCode VARCHAR(25),
@ModifiedBy INT
AS
UPDATE [dbo].[Country]
SET
	[dbo].[Country].[CountryName] = @CountryName,
	[dbo].[Country].[CountryCode] = @CountryCode,
	[dbo].[Country].[ModifiedBy] = @ModifiedBy,
	[dbo].[Country].[ModificationDate] = GETDATE()
WHERE
	[dbo].[Country].[CountryID] = @CountryID
GO
/****** Object:  StoredProcedure [dbo].[PR_Dashboard_GetDetails]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_Dashboard_GetDetails]
AS
DECLARE 
	@TotalCountryCount INT,
	@TotalStateCount INT,
	@TotalCityCount INT,
	@TotalRatingCount INT,
	@TotalServiceProviderCount INT,
	@TotalServiceCount INT,
	@TotalAdminUserCount INT,
	@TotalInquireCount INT,
	@LastMonthInquireCount INT,
	@TotalAttendedInquireCount INT,
	@LastMonthAttendedInquireCount INT,
	@TotalRequestCount INT,
	@LastMonthRequestCount INT,
	@TotalAttendedRequestCount INT,
	@LastMonthAttendedRequestCount INT

SELECT	@TotalCountryCount = Count(1) FROM [dbo].[Country]
SELECT	@TotalStateCount = Count(1) FROM [dbo].[State]
SELECT	@TotalCityCount = Count(1) FROM [dbo].[City]
SELECT	@TotalRatingCount = Count(1) FROM [dbo].[Rating]
SELECT	@TotalServiceProviderCount = Count(1) FROM [dbo].[ServiceProvider]
SELECT	@TotalServiceCount = Count(1) FROM [dbo].[Service]
SELECT	@TotalAdminUserCount = Count(1) FROM [dbo].[AdminUser]

SELECT	@TotalInquireCount = Count(1) FROM [dbo].[Inquiry]

SELECT	@LastMonthInquireCount = Count(1) 
FROM	[dbo].[Inquiry] 
WHERE	MONTH([dbo].[Inquiry].[CreationDate]) = (MONTH(CURRENT_TIMESTAMP) - 1)

SELECT	@TotalAttendedInquireCount = Count(1) 
FROM	[dbo].[Inquiry] 
WHERE	[dbo].[Inquiry].[IsAttended] = 1

SELECT	@LastMonthAttendedInquireCount = Count(1) 
FROM	[dbo].[Inquiry] 
WHERE	MONTH([dbo].[Inquiry].[CreationDate]) = (MONTH(CURRENT_TIMESTAMP) - 1) 
AND		[dbo].[Inquiry].[IsAttended] = 1

SELECT	@TotalRequestCount = Count(1) FROM [dbo].[Request]

SELECT	@LastMonthRequestCount = Count(1) 
FROM	[dbo].[Request] 
WHERE	MONTH([dbo].[Request].[CreationDate]) = (MONTH(CURRENT_TIMESTAMP) - 1)

SELECT	@TotalAttendedRequestCount = Count(1) 
FROM	[dbo].[Request] 
WHERE	[dbo].[Request].[IsAttended] = 1

SELECT	@LastMonthAttendedRequestCount = Count(1) 
FROM	[dbo].[Request] 
WHERE	MONTH([dbo].[Request].[CreationDate]) = (MONTH(CURRENT_TIMESTAMP) - 1) 
AND		[dbo].[Request].[IsAttended] = 1

SELECT
	@TotalCountryCount AS [TotalCountryCount],
	@TotalStateCount AS [TotalStateCount],
	@TotalCityCount AS [TotalCityCount],
	@TotalRatingCount AS [TotalRatingCount],
	@TotalServiceProviderCount AS [TotalServiceProviderCount],
	@TotalServiceCount AS [TotalServiceCount],
	@TotalAdminUserCount AS [TotalAdminUserCount],
	@TotalInquireCount AS [TotalInquiryCount],
	@LastMonthInquireCount AS [LastMonthInquiryCount],
	@TotalAttendedInquireCount AS [TotalAttendedInquiryCount],
	@LastMonthAttendedInquireCount AS [LastMonthAttendedInquiryCount],
	@TotalRequestCount AS [TotalRequestCount],
	@LastMonthRequestCount AS [LastMonthRequestCount],
	@TotalAttendedRequestCount AS [TotalAttendedRequestCount],
	@LastMonthAttendedRequestCount AS [LastMonthAttendedRequestCount]
GO
/****** Object:  StoredProcedure [dbo].[PR_Inquiry_DeleteByPK]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_Inquiry_DeleteByPK]
@InquiryID INT
AS
DELETE FROM [dbo].[Inquiry]
WHERE [dbo].[Inquiry].[InquiryID] = @InquiryID
GO
/****** Object:  StoredProcedure [dbo].[PR_Inquiry_Insert]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_Inquiry_Insert]
@InquiryID INT OUTPUT,
@Name VARCHAR(100),
@Email VARCHAR(100),
@MobileNo VARCHAR(10),
@Location VARCHAR(200),
@Subject VARCHAR(500),
@CreationDate DATETIME,
@ModificationDate DATETIME,
@IsAttended BIT
AS
INSERT INTO [dbo].[Inquiry]
(
    [dbo].[Inquiry].[Name],
    [dbo].[Inquiry].[Email],
    [dbo].[Inquiry].[MobileNo],
    [dbo].[Inquiry].[Location],
    [dbo].[Inquiry].[Subject],
    [dbo].[Inquiry].[CreationDate],
    [dbo].[Inquiry].[ModificationDate],
	[dbo].[Inquiry].[IsAttended]
)
VALUES
(
    @Name,
    @Email,
    @MobileNo,
    @Location,
    @Subject,
    @CreationDate,
    @ModificationDate,
	@IsAttended
)

SET @InquiryID = SCOPE_IDENTITY()
GO
/****** Object:  StoredProcedure [dbo].[PR_Inquiry_SelectAll]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_Inquiry_SelectAll]
AS
SELECT
    [dbo].[Inquiry].[InquiryID],
    [dbo].[Inquiry].[Name],
    [dbo].[Inquiry].[Email],
    [dbo].[Inquiry].[MobileNo],
    [dbo].[Inquiry].[Location],
    [dbo].[Inquiry].[Subject],
    [dbo].[Inquiry].[CreationDate],
    [dbo].[Inquiry].[ModificationDate],
	[dbo].[Inquiry].[IsAttended]
FROM
    [dbo].[Inquiry]
	
ORDER BY [dbo].[Inquiry].[CreationDate] DESC
GO
/****** Object:  StoredProcedure [dbo].[PR_Inquiry_SelectByPK]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_Inquiry_SelectByPK]
@InquiryID INT
AS
SELECT
    [dbo].[Inquiry].[InquiryID],
    [dbo].[Inquiry].[Name],
    [dbo].[Inquiry].[Email],
    [dbo].[Inquiry].[MobileNo],
    [dbo].[Inquiry].[Location],
    [dbo].[Inquiry].[Subject],
    [dbo].[Inquiry].[CreationDate],
    [dbo].[Inquiry].[ModificationDate]
FROM
    [dbo].[Inquiry]
WHERE
    [dbo].[Inquiry].[InquiryID] = @InquiryID
GO
/****** Object:  StoredProcedure [dbo].[PR_Inquiry_UpdateByPK]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_Inquiry_UpdateByPK]
@InquiryID INT,
@Name VARCHAR,
@Email VARCHAR,
@MobileNo VARCHAR,
@Location VARCHAR,
@Subject VARCHAR,
@CreationDate DATETIME,
@ModificationDate DATETIME
AS
UPDATE [dbo].[Inquiry]
SET
    [dbo].[Inquiry].[Name] = @Name,
    [dbo].[Inquiry].[Email] = @Email,
    [dbo].[Inquiry].[MobileNo] = @MobileNo,
    [dbo].[Inquiry].[Location] = @Location,
    [dbo].[Inquiry].[Subject] = @Subject,
    [dbo].[Inquiry].[CreationDate] = @CreationDate,
    [dbo].[Inquiry].[ModificationDate] = @ModificationDate
WHERE
    [dbo].[Inquiry].[InquiryID] = @InquiryID
GO
/****** Object:  StoredProcedure [dbo].[PR_Inquiry_UpdateIsAttended]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_Inquiry_UpdateIsAttended]
@InquiryID INT,
@IsAttended BIT
AS
UPDATE [dbo].[Inquiry]
SET
    [dbo].[Inquiry].[IsAttended] = @IsAttended
WHERE
    [dbo].[Inquiry].[InquiryID] = @InquiryID
GO
/****** Object:  StoredProcedure [dbo].[PR_Rating_DeleteByPK]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_Rating_DeleteByPK]
@RatingID INT,
@UserID INT
AS
DELETE FROM [dbo].[Rating]
WHERE [dbo].[Rating].[RatingID] = @RatingID
AND [dbo].[Rating].[UserID] = @UserID
GO
/****** Object:  StoredProcedure [dbo].[PR_Rating_InsertByUserID]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_Rating_InsertByUserID]
@RatingID INT OUTPUT,
@RatingDate DATETIME,
@Review INT,
@ServiceProviderID INT,
@ServiceProviderServicesID INT,
@PersonName VARCHAR(100),
@Comment VARCHAR(500),
@ModifiedBy INT,
@UserID INT,
@CreationDate DATETIME,
@ModificationDate DATETIME
AS
INSERT INTO [dbo].[Rating]
(
    [dbo].[Rating].[RatingDate],
    [dbo].[Rating].[Review],
	[dbo].[Rating].[ServiceProviderID],
    [dbo].[Rating].[ServiceProviderServicesID],
    [dbo].[Rating].[PersonName],
    [dbo].[Rating].[Comment],
    [dbo].[Rating].[ModifiedBy],
    [dbo].[Rating].[UserID],
    [dbo].[Rating].[CreationDate],
    [dbo].[Rating].[ModificationDate]
)
VALUES
(
    @RatingDate,
    @Review,
	@ServiceProviderID,
    @ServiceProviderServicesID,
    @PersonName,
    @Comment,
    @ModifiedBy,
    @UserID,
    @CreationDate,
	@ModificationDate
)
SET @RatingID = SCOPE_IDENTITY()
GO
/****** Object:  StoredProcedure [dbo].[PR_Rating_SelectAll]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_Rating_SelectAll]
AS
SELECT
    [dbo].[Rating].[RatingID],
    CONVERT(VARCHAR,[dbo].[Rating].[RatingDate],106) as [RatingDate],
    [dbo].[Rating].[Review],
    [dbo].[Rating].[ServiceProviderServicesID],
	[dbo].[ServiceProviderServices].[ServiceID],
	[dbo].[Service].[ServiceName],
	[dbo].[ServiceProvider].[ServiceProviderName],
    [dbo].[Rating].[PersonName],
    [dbo].[Rating].[Comment],
    [dbo].[Rating].[ModifiedBy],
    [dbo].[Rating].[UserID],
    [dbo].[Rating].[CreationDate],
    [dbo].[Rating].[ModificationDate]
FROM
    [dbo].[Rating]
INNER JOIN [dbo].[ServiceProvider]
ON 	[dbo].[ServiceProvider].[ServiceProviderID] = [dbo].[Rating].[ServiceProviderID]
INNER JOIN [dbo].[ServiceProviderServices]
ON	[ServiceProviderServices].[ServiceProviderServicesID] = [dbo].[Rating].[ServiceProviderServicesID]
INNER JOIN [dbo].[Service]
ON	[dbo].[Service].[ServiceID] = [dbo].[ServiceProviderServices].[ServiceID]
GO
/****** Object:  StoredProcedure [dbo].[PR_Rating_SelectByPK]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_Rating_SelectByPK]
@RatingID INT
AS
SELECT
    [dbo].[Rating].[RatingID],
    [dbo].[Rating].[RatingDate],
    [dbo].[Rating].[Review],
	[dbo].[Rating].[ServiceProviderID],
    [dbo].[Rating].[ServiceProviderServicesID],
    [dbo].[Rating].[PersonName],
    [dbo].[Rating].[Comment],
    [dbo].[Rating].[ModifiedBy],
    [dbo].[Rating].[UserID],
    [dbo].[Rating].[CreationDate],
    [dbo].[Rating].[ModificationDate]
FROM
    [dbo].[Rating]
WHERE
    [dbo].[Rating].[RatingID] = @RatingID
GO
/****** Object:  StoredProcedure [dbo].[PR_Rating_UpdateByPK]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_Rating_UpdateByPK]
@RatingID INT,
@RatingDate DATETIME,
@Review INT,
@ServiceProviderID INT,
@ServiceProviderServicesID INT,
@PersonName VARCHAR(100),
@Comment VARCHAR(500),
@ModifiedBy INT,
@ModificationDate DATETIME
AS
UPDATE [dbo].[Rating]
SET
    [dbo].[Rating].[RatingDate] = @RatingDate,
    [dbo].[Rating].[Review] = @Review,
    [dbo].[Rating].[ServiceProviderServicesID] = @ServiceProviderServicesID,
	[dbo].[Rating].[ServiceProviderID] = @ServiceProviderID,
    [dbo].[Rating].[PersonName] = @PersonName,
    [dbo].[Rating].[Comment] = @Comment,
    [dbo].[Rating].[ModifiedBy] = @ModifiedBy,
    [dbo].[Rating].[ModificationDate] = @ModificationDate
WHERE
    [dbo].[Rating].[RatingID] = @RatingID
GO
/****** Object:  StoredProcedure [dbo].[PR_Rating_UPSERT]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_Rating_UPSERT]
@RatingDate DATETIME,
@Review INT,
@ServiceProviderID INT,
@ServiceProviderServicesID INT,
@PersonName VARCHAR(100),
@ModifiedBy INT,
@UserID INT,
@CreationDate DATETIME,
@ModificationDate DATETIME
AS
DECLARE @Count INT
SELECT @Count = COUNT(1) FROM [dbo].[Rating]
WHERE [dbo].[Rating].[PersonName] = @PersonName
AND	[dbo].[Rating].[ServiceProviderID] = @ServiceProviderID
AND	[dbo].[Rating].[ServiceProviderServicesID] = @ServiceProviderServicesID
IF @Count > 0
BEGIN
	UPDATE [dbo].[Rating]
	SET
			[dbo].[Rating].[RatingDate] = @RatingDate,
			[dbo].[Rating].[Review] = @Review,
			[dbo].[Rating].[ServiceProviderServicesID] = @ServiceProviderServicesID,
			[dbo].[Rating].[ServiceProviderID] = @ServiceProviderID,
			[dbo].[Rating].[PersonName] = @PersonName,
			[dbo].[Rating].[ModifiedBy] = @ModifiedBy,
			[dbo].[Rating].[ModificationDate] = @ModificationDate
	WHERE	[dbo].[Rating].[PersonName] = @PersonName
	AND		[dbo].[Rating].[ServiceProviderID] = @ServiceProviderID
	AND		[dbo].[Rating].[ServiceProviderServicesID] = @ServiceProviderServicesID
END
ELSE
BEGIN
	INSERT INTO [dbo].[Rating]
	(
		[dbo].[Rating].[RatingDate],
		[dbo].[Rating].[Review],
		[dbo].[Rating].[ServiceProviderID],
		[dbo].[Rating].[ServiceProviderServicesID],
		[dbo].[Rating].[PersonName],
		[dbo].[Rating].[ModifiedBy],
		[dbo].[Rating].[UserID],
		[dbo].[Rating].[CreationDate],
		[dbo].[Rating].[ModificationDate]
	)
	VALUES
	(
		@RatingDate,
		@Review,
		@ServiceProviderID,
		@ServiceProviderServicesID,
		@PersonName,
		@ModifiedBy,
		@UserID,
		@CreationDate,
		@ModificationDate
	)
END
GO
/****** Object:  StoredProcedure [dbo].[PR_Request_DeleteByPK]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_Request_DeleteByPK]
@RequestID INT
AS
DELETE FROM [dbo].[Request]
WHERE [dbo].[Request].[RequestID] = @RequestID
GO
/****** Object:  StoredProcedure [dbo].[PR_Request_Insert]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_Request_Insert]
@RequestID INT OUTPUT,
@ServiceProviderID INT,
@ServiceProviderServicesID INT,
@ClientMobileNo VARCHAR(50),
@IsAttended BIT,
@CreationDate DATETIME,
@ModificationDate DATETIME
AS
INSERT INTO [dbo].[Request]
(
    [dbo].[Request].[ServiceProviderID],
    [dbo].[Request].[ServiceProviderServicesID],
    [dbo].[Request].[ClientMobileNo],
    [dbo].[Request].[IsAttended],
    [dbo].[Request].[CreationDate],
    [dbo].[Request].[ModificationDate]
)
VALUES
(
    @ServiceProviderID,
    @ServiceProviderServicesID,
    @ClientMobileNo,
    @IsAttended,
    @CreationDate,
    @ModificationDate
)
SET @RequestID = SCOPE_IDENTITY()
GO
/****** Object:  StoredProcedure [dbo].[PR_Request_SelectAll]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_Request_SelectAll]
AS
SELECT
    [dbo].[Request].[RequestID],
    [dbo].[Request].[ServiceProviderID],
    [dbo].[Request].[ServiceProviderServicesID],
    [dbo].[Request].[ClientMobileNo],
    [dbo].[Request].[IsAttended],
    [dbo].[Request].[CreationDate],
    [dbo].[Request].[ModificationDate]
FROM
    [dbo].[Request]
	
ORDER BY [dbo].[Request].[CreationDate] DESC
GO
/****** Object:  StoredProcedure [dbo].[PR_Request_SelectByClientMobileNoIsAttended]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_Request_SelectByClientMobileNoIsAttended]
@ClientMobileNo VARCHAR(50)
AS
SELECT
	[dbo].[Rating].[Review],
	[dbo].[Request].[RequestID],
	[dbo].[Request].[ServiceProviderID],
	[dbo].[ServiceProvider].[ServiceProviderName],
	[dbo].[ServiceProvider].[ProfilePhotoPath],
	[dbo].[ServiceProvider].[MobileNo],
	[dbo].[Request].[ServiceProviderServicesID],
	[dbo].[Request].[ClientMobileNo],
	[dbo].[Request].[IsAttended],
	[dbo].[Request].[CreationDate],
	[dbo].[Request].[ModificationDate],
	[dbo].[Service].[ServiceName],
	[dbo].[ServiceProviderServices].[Specialist],
	[dbo].[ServiceProviderServices].[Description],
	[dbo].[ServiceProviderServices].[Rate]
FROM
	[dbo].[Request]

INNER JOIN [dbo].[ServiceProviderServices]
ON	[dbo].[ServiceProviderServices].[ServiceProviderServicesID] = [dbo].[Request].[ServiceProviderServicesID]

INNER JOIN [dbo].[ServiceProvider]
ON	[dbo].[ServiceProvider].[ServiceProviderID] = [dbo].[Request].[ServiceProviderID]

INNER JOIN [dbo].[Service]
ON	[dbo].[Service].[ServiceID] = [dbo].[ServiceProviderServices].[ServiceID]

LEFT OUTER JOIN [dbo].[Rating]
ON	[dbo].[Rating].[ServiceProviderServicesID] = [dbo].[Request].[ServiceProviderServicesID]


WHERE
	[dbo].[Request].[ClientMobileNo] = @ClientMobileNo
AND	[dbo].[Request].[IsAttended] = 1
GO
/****** Object:  StoredProcedure [dbo].[PR_Request_SelectByPK]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_Request_SelectByPK]
@RequestID INT
AS
SELECT
    [dbo].[Request].[RequestID],
    [dbo].[Request].[ServiceProviderID],
    [dbo].[Request].[ServiceProviderServicesID],
    [dbo].[Request].[ClientMobileNo],
    [dbo].[Request].[IsAttended],
    [dbo].[Request].[CreationDate],
    [dbo].[Request].[ModificationDate]
FROM
    [dbo].[Request]
WHERE
    [dbo].[Request].[RequestID] = @RequestID
GO
/****** Object:  StoredProcedure [dbo].[PR_Request_SelectByServiceProviderID]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_Request_SelectByServiceProviderID]
@ServiceProviderID INT
AS
SELECT
	[dbo].[Request].[RequestID],
	[dbo].[Request].[ServiceProviderID],
	[dbo].[Request].[ServiceProviderServicesID],
	[dbo].[Request].[ClientMobileNo],
	[dbo].[Request].[IsAttended],
	[dbo].[Request].[CreationDate],
	[dbo].[Request].[ModificationDate],
	[dbo].[Service].[ServiceName],
	[dbo].[ServiceProviderServices].[Specialist],
	[dbo].[ServiceProviderServices].[Description],
	[dbo].[ServiceProviderServices].[Rate]
FROM
	[dbo].[Request]

INNER JOIN [dbo].[ServiceProviderServices]
ON		[dbo].[ServiceProviderServices].[ServiceProviderServicesID] = [dbo].[Request].[ServiceProviderServicesID]

INNER JOIN [dbo].[Service]
ON		[dbo].[Service].[ServiceID] = [dbo].[ServiceProviderServices].[ServiceID]

WHERE
	[dbo].[Request].[ServiceProviderID] = @ServiceProviderID

ORDER BY [dbo].[Request].[CreationDate] DESC
GO
/****** Object:  StoredProcedure [dbo].[PR_Request_UpdateByPK]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_Request_UpdateByPK]
@RequestID INT,
@ServiceProviderID INT,
@ServiceProviderServicesID INT,
@ClientMobileNo VARCHAR(50),
@IsAttended BIT,
@CreationDate DATETIME,
@ModificationDate DATETIME
AS
UPDATE [dbo].[Request]
SET
    [dbo].[Request].[ServiceProviderID] = @ServiceProviderID,
    [dbo].[Request].[ServiceProviderServicesID] = @ServiceProviderServicesID,
    [dbo].[Request].[ClientMobileNo] = @ClientMobileNo,
    [dbo].[Request].[IsAttended] = @IsAttended,
    [dbo].[Request].[CreationDate] = @CreationDate,
    [dbo].[Request].[ModificationDate] = @ModificationDate
WHERE
    [dbo].[Request].[RequestID] = @RequestID
GO
/****** Object:  StoredProcedure [dbo].[PR_Request_UpdateIsAttended]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_Request_UpdateIsAttended]
@RequestID INT,
@IsAttended BIT
AS
UPDATE [dbo].[Request]
SET
    [dbo].[Request].[IsAttended] = @IsAttended
WHERE
    [dbo].[Request].[RequestID] = @RequestID
GO
/****** Object:  StoredProcedure [dbo].[PR_Service_DeleteByPKUserID]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_Service_DeleteByPKUserID]
@ServiceID INT,
@UserID INT
AS
DELETE FROM [dbo].[Service]
WHERE 
	[dbo].[Service].[ServiceID] = @ServiceID
AND
	[dbo].[Service].[UserID] = @UserID
GO
/****** Object:  StoredProcedure [dbo].[PR_Service_InsertByUserID]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_Service_InsertByUserID]
@ServiceID INT OUTPUT,
@ServiceName VARCHAR(100),
@ModifiedBy INT,
@UserID INT,
@CreationDate DATETIME,
@ModificationDate DATETIME
AS
INSERT INTO [dbo].[Service]
(
	[dbo].[Service].[ServiceName],
	[dbo].[Service].[ModifiedBy],
	[dbo].[Service].[UserID],
	[dbo].[Service].[CreationDate],
	[dbo].[Service].[ModificationDate]
)
VALUES
(
	@ServiceName,
	@ModifiedBy,
	@UserID,
	@CreationDate,
	@ModificationDate
)
SET @ServiceID = SCOPE_IDENTITY()
GO
/****** Object:  StoredProcedure [dbo].[PR_Service_SelectAll]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_Service_SelectAll]
AS
SELECT 
	[dbo].[Service].[ServiceID],
	[dbo].[Service].[ServiceName],
	[dbo].[Service].[ModifiedBy],
	[dbo].[Service].[UserID],
	CONVERT(VARCHAR,[dbo].[Service].[CreationDate],106) AS [CreationDate],
    CONVERT(VARCHAR,[dbo].[Service].[ModificationDate],106) AS [ModificationDate]
FROM
	[dbo].[Service]
GO
/****** Object:  StoredProcedure [dbo].[PR_Service_SelectByPK]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_Service_SelectByPK]
@ServiceID INT
AS
SELECT 
	[dbo].[Service].[ServiceID],
	[dbo].[Service].[ServiceName],
	[dbo].[Service].[ModifiedBy],
	[dbo].[Service].[UserID],
	CONVERT(VARCHAR,[dbo].[Service].[CreationDate],106) AS [CreationDate],
    CONVERT(VARCHAR,[dbo].[Service].[ModificationDate],106) AS [ModificationDate]
FROM
	[dbo].[Service]
WHERE 
	[dbo].[Service].[ServiceID] = @ServiceID
GO
/****** Object:  StoredProcedure [dbo].[PR_Service_SelectForDropdownList]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_Service_SelectForDropdownList]
AS
SELECT 
	[dbo].[Service].[ServiceID],
	[dbo].[Service].[ServiceName]
FROM
	[dbo].[Service]

GO
/****** Object:  StoredProcedure [dbo].[PR_Service_UpdateByPK]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_Service_UpdateByPK]
@ServiceID INT,
@ServiceName VARCHAR(100),
@ModifiedBy INT,
@ModificationDate DATETIME
AS
UPDATE [dbo].[Service]
SET
	[dbo].[Service].[ServiceName] = @ServiceName,
	[dbo].[Service].[ModifiedBy] = @ModifiedBy,
	[dbo].[Service].[ModificationDate] = @ModificationDate
WHERE
	[dbo].[Service].[ServiceID] = @ServiceID
GO
/****** Object:  StoredProcedure [dbo].[PR_ServiceProvider_DeleteByPKUserID]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_ServiceProvider_DeleteByPKUserID]
@ServiceProviderID INT,
@UserID INT
AS
DELETE FROM [dbo].[ServiceProvider]
WHERE 
	[dbo].[ServiceProvider].[ServiceProviderID] = @ServiceProviderID
AND
	[dbo].[ServiceProvider].[UserID] = @UserID
GO
/****** Object:  StoredProcedure [dbo].[PR_ServiceProvider_InsertByUserID]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
--Queries are here

--Insert Query
CREATE PROCEDURE [dbo].[PR_ServiceProvider_InsertByUserID]
@ServiceProviderID INT OUTPUT,
@UserName VARCHAR(100),
@Password VARCHAR(100),
@ServiceProviderName VARCHAR(100),
@MobileNo VARCHAR(10),
@DOB DATETIME,
@HomeAddress VARCHAR(250),
@HomePincode VARCHAR(10),
@HomeCountryID INT,
@HomeStateID INT,
@HomeCityID INT,
@WorkAddress VARCHAR(250),
@WorkPincode VARCHAR(10),
@WorkCountryID INT,
@WorkStateID INT,
@WorkCityID INT,
@AadharCard VARCHAR(50),
@PANCardNo VARCHAR(50),
@GSTNo VARCHAR(100),
@BankID INT,
@AccountNo VARCHAR(100),
@IFSCCode VARCHAR(50),
@ProfilePhotoPath VARCHAR(500),
@ModifiedBy INT,
@UserID INT,
@CreationDate DATETIME,
@ModificationDate DATETIME
AS
INSERT INTO [dbo].[ServiceProvider]
(
    [dbo].[ServiceProvider].[UserName],
    [dbo].[ServiceProvider].[Password],
    [dbo].[ServiceProvider].[ServiceProviderName],
    [dbo].[ServiceProvider].[MobileNo],
    [dbo].[ServiceProvider].[DOB],
    [dbo].[ServiceProvider].[HomeAddress],
    [dbo].[ServiceProvider].[HomePincode],
    [dbo].[ServiceProvider].[HomeCountryID],
    [dbo].[ServiceProvider].[HomeStateID],
    [dbo].[ServiceProvider].[HomeCityID],
    [dbo].[ServiceProvider].[WorkAddress],
    [dbo].[ServiceProvider].[WorkPincode],
    [dbo].[ServiceProvider].[WorkCountryID],
    [dbo].[ServiceProvider].[WorkStateID],
    [dbo].[ServiceProvider].[WorkCityID],
    [dbo].[ServiceProvider].[AadharCard],
    [dbo].[ServiceProvider].[PANCardNo],
    [dbo].[ServiceProvider].[GSTNo],
    [dbo].[ServiceProvider].[BankID],
    [dbo].[ServiceProvider].[AccountNo],
    [dbo].[ServiceProvider].[IFSCCode],
	[dbo].[ServiceProvider].[ProfilePhotoPath],
    [dbo].[ServiceProvider].[ModifiedBy],
    [dbo].[ServiceProvider].[UserID],
    [dbo].[ServiceProvider].[CreationDate],
    [dbo].[ServiceProvider].[ModificationDate]
)
VALUES
(
    @UserName,
    @Password,
    @ServiceProviderName,
    @MobileNo,
    @DOB,
    @HomeAddress,
    @HomePincode,
    @HomeCountryID,
    @HomeStateID,
    @HomeCityID,
    @WorkAddress,
    @WorkPincode,
    @WorkCountryID,
    @WorkStateID,
    @WorkCityID,
    @AadharCard,
    @PANCardNo,
    @GSTNo,
    @BankID,
    @AccountNo,
    @IFSCCode,
	@ProfilePhotoPath,
    @ModifiedBy,
    @UserID,
    @CreationDate,
	@ModificationDate
)
SET @ServiceProviderID = SCOPE_IDENTITY()
GO
/****** Object:  StoredProcedure [dbo].[PR_ServiceProvider_SelectAll]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_ServiceProvider_SelectAll]
AS
SELECT
    [dbo].[ServiceProvider].[ServiceProviderID],
    [dbo].[ServiceProvider].[UserName],
    [dbo].[ServiceProvider].[Password],
    [dbo].[ServiceProvider].[ServiceProviderName],
    [dbo].[ServiceProvider].[MobileNo],
    [dbo].[ServiceProvider].[DOB],
    [dbo].[ServiceProvider].[HomeAddress],
    [dbo].[ServiceProvider].[HomePincode],
    [dbo].[ServiceProvider].[HomeCountryID],
	[HomeCountry].[CountryName] As [HomeCountry],
    [dbo].[ServiceProvider].[HomeStateID],
	[HomeState].[StateName] AS [HomeState],
    [dbo].[ServiceProvider].[HomeCityID],
	[HomeCity].[CityName] AS [HomeCity],
    [dbo].[ServiceProvider].[WorkAddress],
    [dbo].[ServiceProvider].[WorkPincode],
    [dbo].[ServiceProvider].[WorkCountryID],
	[WorkCountry].[CountryName] AS [WorkCountry],
    [dbo].[ServiceProvider].[WorkStateID],
	[WorkState].[StateName] AS [WorkState],
    [dbo].[ServiceProvider].[WorkCityID],
	[WorkCity].[CityName] AS [WorkCity],
    [dbo].[ServiceProvider].[AadharCard],
    [dbo].[ServiceProvider].[PANCardNo],
    [dbo].[ServiceProvider].[GSTNo],
    [dbo].[ServiceProvider].[BankID],
	[dbo].[Bank].[BankName] As [Bank],
    [dbo].[ServiceProvider].[AccountNo],
    [dbo].[ServiceProvider].[IFSCCode],
	[dbo].[ServiceProvider].[ProfilePhotoPath],
    [dbo].[ServiceProvider].[ModifiedBy],
    [dbo].[ServiceProvider].[UserID],
    [dbo].[ServiceProvider].[CreationDate],
    [dbo].[ServiceProvider].[ModificationDate]
FROM
    [dbo].[ServiceProvider]

LEFT OUTER JOIN [dbo].[Country] as [HomeCountry]
ON [HomeCountry].[CountryID] = [dbo].[ServiceProvider].[HomeCountryID]

INNER JOIN [dbo].[Country] as [WorkCountry]
ON [WorkCountry].[CountryID] = [dbo].[ServiceProvider].[WorkCountryID]

LEFT OUTER JOIN [dbo].[State] as [HomeState]
ON [HomeState].[StateID] = [dbo].[ServiceProvider].[HomeStateID]

INNER JOIN [dbo].[State] as [WorkState]
ON [WorkState].[StateID] = [dbo].[ServiceProvider].[WorkStateID]

LEFT OUTER JOIN [dbo].[City] as [HomeCity]
ON [HomeCity].[CityID] = [dbo].[ServiceProvider].[HomeCityID]

INNER JOIN [dbo].[City] as [WorkCity]
ON [WorkCity].[CityID] = [dbo].[ServiceProvider].[WorkCityID]

LEFT OUTER JOIN [dbo].[Bank] 
ON [dbo].[Bank].[BankID] = [dbo].[ServiceProvider].[BankID]
GO
/****** Object:  StoredProcedure [dbo].[PR_ServiceProvider_SelectByPK]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_ServiceProvider_SelectByPK]
@ServiceProviderID INT
AS
SELECT
    [dbo].[ServiceProvider].[ServiceProviderID],
    [dbo].[ServiceProvider].[UserName],
    [dbo].[ServiceProvider].[Password],
    [dbo].[ServiceProvider].[ServiceProviderName],
    [dbo].[ServiceProvider].[MobileNo],
    [dbo].[ServiceProvider].[DOB],
    [dbo].[ServiceProvider].[HomeAddress],
    [dbo].[ServiceProvider].[HomePincode],
    [dbo].[ServiceProvider].[HomeCountryID],
    [dbo].[ServiceProvider].[HomeStateID],
    [dbo].[ServiceProvider].[HomeCityID],
    [dbo].[ServiceProvider].[WorkAddress],
    [dbo].[ServiceProvider].[WorkPincode],
    [dbo].[ServiceProvider].[WorkCountryID],
    [dbo].[ServiceProvider].[WorkStateID],
    [dbo].[ServiceProvider].[WorkCityID],
    [dbo].[ServiceProvider].[AadharCard],
    [dbo].[ServiceProvider].[PANCardNo],
    [dbo].[ServiceProvider].[GSTNo],
    [dbo].[ServiceProvider].[BankID],
    [dbo].[ServiceProvider].[AccountNo],
    [dbo].[ServiceProvider].[IFSCCode],
	[dbo].[ServiceProvider].[ProfilePhotoPath],
    [dbo].[ServiceProvider].[ModifiedBy],
    [dbo].[ServiceProvider].[UserID],
    CONVERT(VARCHAR,[dbo].[ServiceProvider].[CreationDate],106) AS [CreationDate],
    CONVERT(VARCHAR,[dbo].[ServiceProvider].[ModificationDate],106) AS [ModificationDate]
FROM
    [dbo].[ServiceProvider]
WHERE
    [dbo].[ServiceProvider].[ServiceProviderID] = @ServiceProviderID
GO
/****** Object:  StoredProcedure [dbo].[PR_ServiceProvider_SelectByServiceID]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_ServiceProvider_SelectByServiceID]
@ServiceID int
AS
SELECT
    [dbo].[ServiceProvider].[ServiceProviderID],
    [dbo].[ServiceProvider].[UserName],
    [dbo].[ServiceProvider].[Password],
    [dbo].[ServiceProvider].[ServiceProviderName],
    [dbo].[ServiceProvider].[MobileNo],
    [dbo].[ServiceProvider].[DOB],
    [dbo].[ServiceProvider].[HomeAddress],
    [dbo].[ServiceProvider].[HomePincode],
    [dbo].[ServiceProvider].[HomeCountryID],
	[HomeCountry].[CountryName] As [HomeCountry],
    [dbo].[ServiceProvider].[HomeStateID],
	[HomeState].[StateName] AS [HomeState],
    [dbo].[ServiceProvider].[HomeCityID],
	[HomeCity].[CityName] AS [HomeCity],
    [dbo].[ServiceProvider].[WorkAddress],
    [dbo].[ServiceProvider].[WorkPincode],
    [dbo].[ServiceProvider].[WorkCountryID],
	[WorkCountry].[CountryName] AS [WorkCountry],
    [dbo].[ServiceProvider].[WorkStateID],
	[WorkState].[StateName] AS [WorkState],
    [dbo].[ServiceProvider].[WorkCityID],
	[WorkCity].[CityName] AS [WorkCity],
    [dbo].[ServiceProvider].[AadharCard],
    [dbo].[ServiceProvider].[PANCardNo],
    [dbo].[ServiceProvider].[GSTNo],
    [dbo].[ServiceProvider].[BankID],
	[dbo].[Bank].[BankName] As [Bank],
    [dbo].[ServiceProvider].[AccountNo],
    [dbo].[ServiceProvider].[IFSCCode],
	[dbo].[ServiceProvider].[ProfilePhotoPath],
    [dbo].[ServiceProvider].[ModifiedBy],
    [dbo].[ServiceProvider].[UserID],
    [dbo].[ServiceProvider].[CreationDate],
    [dbo].[ServiceProvider].[ModificationDate],
	[dbo].[ServiceProviderServices].[Specialist],
	[dbo].[ServiceProviderServices].[ServiceProviderServicesID]

FROM
    [dbo].[ServiceProvider]

INNER JOIN [dbo].[Country] as [HomeCountry]
ON [HomeCountry].[CountryID] = [dbo].[ServiceProvider].[HomeCountryID]

INNER JOIN [dbo].[Country] as [WorkCountry]
ON [WorkCountry].[CountryID] = [dbo].[ServiceProvider].[HomeCountryID]

INNER JOIN [dbo].[State] as [HomeState]
ON [HomeState].[StateID] = [dbo].[ServiceProvider].[HomeStateID]

INNER JOIN [dbo].[State] as [WorkState]
ON [WorkState].[StateID] = [dbo].[ServiceProvider].[HomeStateID]

INNER JOIN [dbo].[City] as [HomeCity]
ON [HomeCity].[CityID] = [dbo].[ServiceProvider].[HomeCityID]

INNER JOIN [dbo].[City] as [WorkCity]
ON [WorkCity].[CityID] = [dbo].[ServiceProvider].[HomeCityID]

INNER JOIN [dbo].[Bank] 
ON [dbo].[Bank].[BankID] = [dbo].[ServiceProvider].[BankID]

INNER JOIN [dbo].[ServiceProviderServices]
ON [dbo].[ServiceProviderServices].[ServiceProviderID] = [dbo].[ServiceProvider].[ServiceProviderID]

WHERE [dbo].[ServiceProviderServices].[ServiceID] = @ServiceID
GO
/****** Object:  StoredProcedure [dbo].[PR_ServiceProvider_SelectByUserName]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_ServiceProvider_SelectByUserName]
@UserName VARCHAR(250)
AS
SELECT
	[dbo].[ServiceProvider].[ServiceProviderID],
	[dbo].[ServiceProvider].[UserName],
    [dbo].[ServiceProvider].[Password],
    [dbo].[ServiceProvider].[ServiceProviderName],
    [dbo].[ServiceProvider].[MobileNo],
    [dbo].[ServiceProvider].[DOB],
    [dbo].[ServiceProvider].[HomeAddress],
    [dbo].[ServiceProvider].[HomePincode],
    [dbo].[ServiceProvider].[HomeCountryID],
    [dbo].[ServiceProvider].[HomeStateID],
    [dbo].[ServiceProvider].[HomeCityID],
    [dbo].[ServiceProvider].[WorkAddress],
    [dbo].[ServiceProvider].[WorkPincode],
    [dbo].[ServiceProvider].[WorkCountryID],
    [dbo].[ServiceProvider].[WorkStateID],
    [dbo].[ServiceProvider].[WorkCityID],
    [dbo].[ServiceProvider].[AadharCard],
    [dbo].[ServiceProvider].[PANCardNo],
    [dbo].[ServiceProvider].[GSTNo],
    [dbo].[ServiceProvider].[BankID],
    [dbo].[ServiceProvider].[AccountNo],
    [dbo].[ServiceProvider].[IFSCCode],
	[dbo].[ServiceProvider].[ProfilePhotoPath],
    [dbo].[ServiceProvider].[ModifiedBy],
    [dbo].[ServiceProvider].[UserID],
    [dbo].[ServiceProvider].[CreationDate],
    [dbo].[ServiceProvider].[ModificationDate]

FROM [dbo].[ServiceProvider]
WHERE	[dbo].[ServiceProvider].[UserName] = @UserName 
GO
/****** Object:  StoredProcedure [dbo].[PR_ServiceProvider_SelectByUserNamePassword]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_ServiceProvider_SelectByUserNamePassword]
@UserName VARCHAR(250),
@Password VARCHAR(250)
AS
SELECT
	[dbo].[ServiceProvider].[ServiceProviderID],
	[dbo].[ServiceProvider].[UserName],
    [dbo].[ServiceProvider].[Password],
    [dbo].[ServiceProvider].[ServiceProviderName],
    [dbo].[ServiceProvider].[MobileNo],
    [dbo].[ServiceProvider].[DOB],
    [dbo].[ServiceProvider].[HomeAddress],
    [dbo].[ServiceProvider].[HomePincode],
    [dbo].[ServiceProvider].[HomeCountryID],
    [dbo].[ServiceProvider].[HomeStateID],
    [dbo].[ServiceProvider].[HomeCityID],
    [dbo].[ServiceProvider].[WorkAddress],
    [dbo].[ServiceProvider].[WorkPincode],
    [dbo].[ServiceProvider].[WorkCountryID],
    [dbo].[ServiceProvider].[WorkStateID],
    [dbo].[ServiceProvider].[WorkCityID],
    [dbo].[ServiceProvider].[AadharCard],
    [dbo].[ServiceProvider].[PANCardNo],
    [dbo].[ServiceProvider].[GSTNo],
    [dbo].[ServiceProvider].[BankID],
    [dbo].[ServiceProvider].[AccountNo],
    [dbo].[ServiceProvider].[IFSCCode],
	[dbo].[ServiceProvider].[ProfilePhotoPath],
    [dbo].[ServiceProvider].[ModifiedBy],
    [dbo].[ServiceProvider].[UserID],
    [dbo].[ServiceProvider].[CreationDate],
    [dbo].[ServiceProvider].[ModificationDate]

FROM [dbo].[ServiceProvider]
WHERE	[dbo].[ServiceProvider].[UserName] = @UserName 
AND		[dbo].[ServiceProvider].[Password] = @Password
GO
/****** Object:  StoredProcedure [dbo].[PR_ServiceProvider_SelectForDropdownList]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_ServiceProvider_SelectForDropdownList]
AS
SELECT 
	[dbo].[ServiceProvider].[ServiceProviderID],
	[dbo].[ServiceProvider].[UserName],
	[dbo].[ServiceProvider].[ServiceProviderName]
FROM	
	[dbo].[ServiceProvider]
GO
/****** Object:  StoredProcedure [dbo].[PR_ServiceProvider_SelectForProfileView]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_ServiceProvider_SelectForProfileView]
@ServiceProviderID INT
AS
SELECT
	[dbo].[ServiceProvider].[ServiceProviderID],
	[dbo].[ServiceProvider].[UserName],
    [dbo].[ServiceProvider].[Password],
    [dbo].[ServiceProvider].[ServiceProviderName],
    [dbo].[ServiceProvider].[MobileNo],
    [dbo].[ServiceProvider].[DOB],
    [dbo].[ServiceProvider].[HomeAddress],
    [dbo].[ServiceProvider].[HomePincode],
    [dbo].[ServiceProvider].[HomeCountryID],
	[HomeCountry].[CountryName] AS [HomeCountry],
    [dbo].[ServiceProvider].[HomeStateID],
	[HomeState].[StateName] AS [HomeState],
    [dbo].[ServiceProvider].[HomeCityID],
	[HomeCity].[CityName] AS [HomeCity],
    [dbo].[ServiceProvider].[WorkAddress],
    [dbo].[ServiceProvider].[WorkPincode],
    [dbo].[ServiceProvider].[WorkCountryID],
	[WorkCountry].[CountryName] AS [WorkCountry],
    [dbo].[ServiceProvider].[WorkStateID],
	[WorkState].[StateName] AS [WorkState],
    [dbo].[ServiceProvider].[WorkCityID],
	[WorkCity].[CityName] AS [WorkCity],
    [dbo].[ServiceProvider].[AadharCard],
    [dbo].[ServiceProvider].[PANCardNo],
    [dbo].[ServiceProvider].[GSTNo],
    [dbo].[ServiceProvider].[BankID],
	[dbo].[Bank].[BankName],
    [dbo].[ServiceProvider].[AccountNo],
    [dbo].[ServiceProvider].[IFSCCode],
	[dbo].[ServiceProvider].[ProfilePhotoPath],
    [dbo].[ServiceProvider].[ModifiedBy],
    [dbo].[ServiceProvider].[UserID],
	[dbo].[AdminUser].[UserName],
    [dbo].[ServiceProvider].[CreationDate],
    [dbo].[ServiceProvider].[ModificationDate]

FROM [dbo].[ServiceProvider]

INNER JOIN [dbo].[Country] AS [WorkCountry]
ON [WorkCountry].[CountryID] = [dbo].[ServiceProvider].[WorkCountryID]

INNER JOIN [dbo].[State] AS [WorkState]
ON [WorkState].[StateID] = [dbo].[ServiceProvider].[WorkStateID]

INNER JOIN [dbo].[City] AS [WorkCity]
ON [WorkCity].[CityID] = [dbo].[ServiceProvider].[WorkCityID]

INNER JOIN [dbo].[AdminUser]
ON [dbo].[AdminUser].[UserID] = [dbo].[ServiceProvider].[UserID]

LEFT OUTER JOIN [dbo].[Country] AS [HomeCountry]
ON [HomeCountry].[CountryID] = [dbo].[ServiceProvider].[HomeCountryID]

LEFT OUTER JOIN [dbo].[State] AS [HomeState]
ON [HomeState].[StateID] = [dbo].[ServiceProvider].[HomeStateID]

LEFT OUTER JOIN [dbo].[City] AS [HomeCity]
ON [HomeCity].[CityID] = [dbo].[ServiceProvider].[HomeCityID]

LEFT OUTER JOIN [dbo].[Bank]
ON [dbo].[Bank].[BankID] = [dbo].[ServiceProvider].[BankID]

WHERE	[dbo].[ServiceProvider].[ServiceProviderID] = @ServiceProviderID
GO
/****** Object:  StoredProcedure [dbo].[PR_ServiceProvider_UpdateByPK]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_ServiceProvider_UpdateByPK]
@ServiceProviderID INT,
@UserName VARCHAR(100),
@Password VARCHAR(100),
@ServiceProviderName VARCHAR(100),
@MobileNo VARCHAR(10),
@DOB DATETIME,
@HomeAddress VARCHAR(250),
@HomePincode VARCHAR(10),
@HomeCountryID INT,
@HomeStateID INT,
@HomeCityID INT,
@WorkAddress VARCHAR(250),
@WorkPincode VARCHAR(10),
@WorkCountryID INT,
@WorkStateID INT,
@WorkCityID INT,
@AadharCard VARCHAR(50),
@PANCardNo VARCHAR(50),
@GSTNo VARCHAR(100),
@BankID INT,
@AccountNo VARCHAR(100),
@IFSCCode VARCHAR(50),
@ProfilePhotoPath VARCHAR(500),
@ModifiedBy INT,
@ModificationDate DATETIME

AS
UPDATE [dbo].[ServiceProvider]
SET
    [dbo].[ServiceProvider].[UserName] = @UserName,
    [dbo].[ServiceProvider].[Password] = @Password,
    [dbo].[ServiceProvider].[ServiceProviderName] = @ServiceProviderName,
    [dbo].[ServiceProvider].[MobileNo] = @MobileNo,
    [dbo].[ServiceProvider].[DOB] = @DOB,
    [dbo].[ServiceProvider].[HomeAddress] = @HomeAddress,
    [dbo].[ServiceProvider].[HomePincode] = @HomePincode,
    [dbo].[ServiceProvider].[HomeCountryID] = @HomeCountryID,
    [dbo].[ServiceProvider].[HomeStateID] = @HomeStateID,
    [dbo].[ServiceProvider].[HomeCityID] = @HomeCityID,
    [dbo].[ServiceProvider].[WorkAddress] = @WorkAddress,
    [dbo].[ServiceProvider].[WorkPincode] = @WorkPincode,
    [dbo].[ServiceProvider].[WorkCountryID] = @WorkCountryID,
    [dbo].[ServiceProvider].[WorkStateID] = @WorkStateID,
    [dbo].[ServiceProvider].[WorkCityID] = @WorkCityID,
    [dbo].[ServiceProvider].[AadharCard] = @AadharCard,
    [dbo].[ServiceProvider].[PANCardNo] = @PANCardNo,
    [dbo].[ServiceProvider].[GSTNo] = @GSTNo,
    [dbo].[ServiceProvider].[BankID] = @BankID,
    [dbo].[ServiceProvider].[AccountNo] = @AccountNo,
    [dbo].[ServiceProvider].[IFSCCode] = @IFSCCode,
	[dbo].[ServiceProvider].[ProfilePhotoPath] = @ProfilePhotoPath,
    [dbo].[ServiceProvider].[ModifiedBy] = @ModifiedBy,
    [dbo].[ServiceProvider].[ModificationDate] = @ModificationDate
WHERE
    [dbo].[ServiceProvider].[ServiceProviderID] = @ServiceProviderID
GO
/****** Object:  StoredProcedure [dbo].[PR_ServiceProvider_UpdateByPKServiceProvider]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_ServiceProvider_UpdateByPKServiceProvider]
@ServiceProviderID INT,
@UserName VARCHAR(100),
@Password VARCHAR(100),
@ServiceProviderName VARCHAR(100),
@MobileNo VARCHAR(10),
@DOB DATETIME,
@HomeAddress VARCHAR(250),
@HomePincode VARCHAR(10),
@HomeCountryID INT,
@HomeStateID INT,
@HomeCityID INT,
@WorkAddress VARCHAR(250),
@WorkPincode VARCHAR(10),
@WorkCountryID INT,
@WorkStateID INT,
@WorkCityID INT,
@AadharCard VARCHAR(50),
@PANCardNo VARCHAR(50),
@GSTNo VARCHAR(100),
@BankID INT,
@AccountNo VARCHAR(100),
@IFSCCode VARCHAR(50),
@ProfilePhotoPath VARCHAR(500),
@ModifiedBy INT,
@ModificationDate DATETIME

AS
UPDATE [dbo].[ServiceProvider]
SET
    [dbo].[ServiceProvider].[UserName] = @UserName,
    [dbo].[ServiceProvider].[Password] = @Password,
    [dbo].[ServiceProvider].[ServiceProviderName] = @ServiceProviderName,
    [dbo].[ServiceProvider].[MobileNo] = @MobileNo,
    [dbo].[ServiceProvider].[DOB] = @DOB,
    [dbo].[ServiceProvider].[HomeAddress] = @HomeAddress,
    [dbo].[ServiceProvider].[HomePincode] = @HomePincode,
    [dbo].[ServiceProvider].[HomeCountryID] = @HomeCountryID,
    [dbo].[ServiceProvider].[HomeStateID] = @HomeStateID,
    [dbo].[ServiceProvider].[HomeCityID] = @HomeCityID,
    [dbo].[ServiceProvider].[WorkAddress] = @WorkAddress,
    [dbo].[ServiceProvider].[WorkPincode] = @WorkPincode,
    [dbo].[ServiceProvider].[WorkCountryID] = @WorkCountryID,
    [dbo].[ServiceProvider].[WorkStateID] = @WorkStateID,
    [dbo].[ServiceProvider].[WorkCityID] = @WorkCityID,
    [dbo].[ServiceProvider].[AadharCard] = @AadharCard,
    [dbo].[ServiceProvider].[PANCardNo] = @PANCardNo,
    [dbo].[ServiceProvider].[GSTNo] = @GSTNo,
    [dbo].[ServiceProvider].[BankID] = @BankID,
    [dbo].[ServiceProvider].[AccountNo] = @AccountNo,
    [dbo].[ServiceProvider].[IFSCCode] = @IFSCCode,
	[dbo].[ServiceProvider].[ProfilePhotoPath] = @ProfilePhotoPath
WHERE
    [dbo].[ServiceProvider].[ServiceProviderID] = @ServiceProviderID
GO
/****** Object:  StoredProcedure [dbo].[PR_ServiceProviderServices_DeleteByPK]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_ServiceProviderServices_DeleteByPK]
@ServiceProviderServicesID INT,
@UserID INT
AS
DELETE FROM [dbo].[ServiceProviderServices]
WHERE [dbo].[ServiceProviderServices].[ServiceProviderServicesID] = @ServiceProviderServicesID
AND [dbo].[ServiceProviderServices].[UserID] = @UserID
GO
/****** Object:  StoredProcedure [dbo].[PR_ServiceProviderServices_InsertByUserID]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
--Queries are here

--Insert Query
CREATE PROCEDURE [dbo].[PR_ServiceProviderServices_InsertByUserID]
@ServiceProviderServicesID INT OUTPUT,
@ServiceProviderID INT,
@ServiceID INT,
@Rate DECIMAL,
@Description VARCHAR(100),
@Specialist VARCHAR(500),
@ModifiedBy INT,
@UserID INT,
@CreationDate DATETIME,
@ModificationDate DATETIME
AS
INSERT INTO [dbo].[ServiceProviderServices]
(
    [dbo].[ServiceProviderServices].[ServiceProviderID],
    [dbo].[ServiceProviderServices].[ServiceID],
    [dbo].[ServiceProviderServices].[Rate],
    [dbo].[ServiceProviderServices].[Description],
    [dbo].[ServiceProviderServices].[Specialist],
    [dbo].[ServiceProviderServices].[ModifiedBy],
    [dbo].[ServiceProviderServices].[UserID],
    [dbo].[ServiceProviderServices].[CreationDate],
    [dbo].[ServiceProviderServices].[ModificationDate]
)
VALUES
(
    @ServiceProviderID,
    @ServiceID,
    @Rate,
    @Description,
    @Specialist,
    @ModifiedBy,
    @UserID,
    @CreationDate,
	@ModificationDate
)
SET @ServiceProviderServicesID = SCOPE_IDENTITY()
GO
/****** Object:  StoredProcedure [dbo].[PR_ServiceProviderServices_SelectAll]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_ServiceProviderServices_SelectAll]
AS
SELECT
    [dbo].[ServiceProviderServices].[ServiceProviderServicesID],
    [dbo].[ServiceProviderServices].[ServiceProviderID],
	[dbo].[ServiceProvider].[ServiceProviderName],
    [dbo].[ServiceProviderServices].[ServiceID],
	[dbo].[Service].[ServiceName],
    [dbo].[ServiceProviderServices].[Rate],
    [dbo].[ServiceProviderServices].[Description],
    [dbo].[ServiceProviderServices].[Specialist],
    [dbo].[ServiceProviderServices].[ModifiedBy],
    [dbo].[ServiceProviderServices].[UserID],
    [dbo].[ServiceProviderServices].[CreationDate],
    [dbo].[ServiceProviderServices].[ModificationDate]
FROM
    [dbo].[ServiceProviderServices]

INNER JOIN [dbo].[ServiceProvider]
ON [dbo].[ServiceProvider].[ServiceProviderID] = [dbo].[ServiceProviderServices].[ServiceProviderID]

INNER JOIN [dbo].[Service]
ON [dbo].[Service].[ServiceID] = [dbo].[ServiceProviderServices].[ServiceID]

ORDER BY [dbo].[ServiceProvider].[ServiceProviderName]
GO
/****** Object:  StoredProcedure [dbo].[PR_ServiceProviderServices_SelectByPK]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_ServiceProviderServices_SelectByPK]
@ServiceProviderServicesID INT
AS
SELECT
    [dbo].[ServiceProviderServices].[ServiceProviderServicesID],
    [dbo].[ServiceProviderServices].[ServiceProviderID],
    [dbo].[ServiceProviderServices].[ServiceID],
    [dbo].[ServiceProviderServices].[Rate],
    [dbo].[ServiceProviderServices].[Description],
    [dbo].[ServiceProviderServices].[Specialist],
    [dbo].[ServiceProviderServices].[ModifiedBy],
    [dbo].[ServiceProviderServices].[UserID],
    CONVERT(VARCHAR,[dbo].[ServiceProviderServices].[CreationDate],106) AS [CreationDate],
    CONVERT(VARCHAR,[dbo].[ServiceProviderServices].[ModificationDate],106) AS [ModificationDate]
FROM
    [dbo].[ServiceProviderServices]
WHERE
    [dbo].[ServiceProviderServices].[ServiceProviderServicesID] = @ServiceProviderServicesID
GO
/****** Object:  StoredProcedure [dbo].[PR_ServiceProviderServices_SelectByServiceID]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_ServiceProviderServices_SelectByServiceID]
@ServiceID int
AS
SELECT
	[dbo].[ServiceProviderServices].[ServiceProviderServicesID],
	[dbo].[ServiceProviderServices].[ServiceProviderID],
	[dbo].[ServiceProviderServices].[Specialist],
	[dbo].[ServiceProvider].[ServiceProviderName],
	[dbo].[ServiceProvider].[ProfilePhotoPath],
	[dbo].[ServiceProvider].[MobileNo],
	[dbo].[Service].[ServiceName]
FROM
	[dbo].[ServiceProviderServices]

INNER JOIN [dbo].[ServiceProvider]
ON [dbo].[ServiceProvider].[ServiceProviderID] = [dbo].[ServiceProviderServices].[ServiceProviderID]

INNER JOIN [dbo].[Service]
ON [dbo].[Service].[ServiceID] = [dbo].[ServiceProviderServices].[ServiceID]

WHERE [dbo].[ServiceProviderServices].[ServiceID] = @ServiceID
GO
/****** Object:  StoredProcedure [dbo].[PR_ServiceProviderServices_SelectByServiceProviderID]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- PR_ServiceProviderServices_SelectByServiceProviderID 3

CREATE PROCEDURE [dbo].[PR_ServiceProviderServices_SelectByServiceProviderID]
@ServiceProviderID INT
AS
SELECT 
	ROW_NUMBER() over(order by ServiceProviderServicesID) AS [Key],
	[dbo].[ServiceProviderServices].[ServiceProviderServicesID],
	[dbo].[ServiceProviderServices].[ServiceProviderID],
	[dbo].[ServiceProvider].[ServiceProviderName],
	[dbo].[ServiceProviderServices].[ServiceID],
	[dbo].[Service].[ServiceName],
	[dbo].[ServiceProviderServices].[Rate],
	[dbo].[ServiceProviderServices].[Specialist],
	[dbo].[ServiceProviderServices].[Description]

FROM [dbo].[ServiceProviderServices]

INNER JOIN [dbo].[ServiceProvider]
ON [dbo].[ServiceProvider].[ServiceProviderID] = [dbo].[ServiceProviderServices].[ServiceProviderID]

INNER JOIN [dbo].[Service]
ON [dbo].[Service].[ServiceID] = [dbo].[ServiceProviderServices].[ServiceID]

where [dbo].[ServiceProviderServices].[ServiceProviderID] = @ServiceProviderID
GO
/****** Object:  StoredProcedure [dbo].[PR_ServiceProviderServices_SelectForDropDownList]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_ServiceProviderServices_SelectForDropDownList]
AS
SELECT
    [dbo].[ServiceProviderServices].[ServiceProviderServicesID],
    [dbo].[ServiceProviderServices].[ServiceProviderID],
	[dbo].[Service].[ServiceName]
    
FROM
    [dbo].[ServiceProviderServices]

INNER JOIN [dbo].[Service]
ON [dbo].[Service].[ServiceID] = [dbo].[ServiceProviderServices].[ServiceID]

ORDER BY [dbo].[Service].[ServiceName]
GO
/****** Object:  StoredProcedure [dbo].[PR_ServiceProviderServices_SelectForDropDownListByServiceProviderID]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_ServiceProviderServices_SelectForDropDownListByServiceProviderID]
@ServiceProviderID INT
AS
SELECT
    [dbo].[ServiceProviderServices].[ServiceProviderServicesID],
    [dbo].[ServiceProviderServices].[ServiceProviderID],
	[dbo].[Service].[ServiceName]
    
FROM
    [dbo].[ServiceProviderServices]

INNER JOIN [dbo].[Service]
ON [dbo].[Service].[ServiceID] = [dbo].[ServiceProviderServices].[ServiceID]

WHERE [dbo].[ServiceProviderServices].[ServiceProviderID] = @ServiceProviderID

ORDER BY [dbo].[Service].[ServiceName]
GO
/****** Object:  StoredProcedure [dbo].[PR_ServiceProviderServices_SelectForEditByServiceProviderID]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- PR_ServiceProviderServices_SelectForEditByServiceProviderID 3

CREATE PROCEDURE [dbo].[PR_ServiceProviderServices_SelectForEditByServiceProviderID]
@ServiceProviderID INT
AS
SELECT 
	ROW_NUMBER() over(order by ServiceProviderServicesID) AS [Key],
	[dbo].[ServiceProviderServices].[ServiceID],
	[dbo].[Service].[ServiceName],
	[dbo].[ServiceProviderServices].[Rate],
	[dbo].[ServiceProviderServices].[Specialist],
	[dbo].[ServiceProviderServices].[Description]

FROM [dbo].[ServiceProviderServices]

INNER JOIN [dbo].[ServiceProvider]
ON [dbo].[ServiceProvider].[ServiceProviderID] = [dbo].[ServiceProviderServices].[ServiceProviderID]

INNER JOIN [dbo].[Service]
ON [dbo].[Service].[ServiceID] = [dbo].[ServiceProviderServices].[ServiceID]

where [dbo].[ServiceProviderServices].[ServiceProviderID] = @ServiceProviderID
GO
/****** Object:  StoredProcedure [dbo].[PR_ServiceProviderServices_UpdateByPK]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_ServiceProviderServices_UpdateByPK]
@ServiceProviderServicesID INT,
@ServiceProviderID INT,
@ServiceID INT,
@Rate DECIMAL,
@Description VARCHAR(100),
@Specialist VARCHAR(500),
@CreationDate DATETIME,
@ModificationDate DATETIME,
@ModifiedBy INT
AS
UPDATE [dbo].[ServiceProviderServices]
SET
    --[dbo].[ServiceProviderServices].[ServiceProviderID] = @ServiceProviderID,
    [dbo].[ServiceProviderServices].[ServiceID] = @ServiceID,
    [dbo].[ServiceProviderServices].[Rate] = @Rate,
    [dbo].[ServiceProviderServices].[Description] = @Description,
    [dbo].[ServiceProviderServices].[Specialist] = @Specialist,
    [dbo].[ServiceProviderServices].[ModifiedBy] = @ModifiedBy,
    [dbo].[ServiceProviderServices].[ModificationDate] = @ModificationDate
WHERE
    [dbo].[ServiceProviderServices].[ServiceProviderServicesID] = @ServiceProviderServicesID
GO
/****** Object:  StoredProcedure [dbo].[PR_State_DeleteByPKUserID]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_State_DeleteByPKUserID]
@StateID INT,
@UserID INT
AS
DELETE FROM [dbo].[State]
WHERE 
	[dbo].[State].[StateID] = @StateID
AND
	[dbo].[State].[UserID] = @UserID
GO
/****** Object:  StoredProcedure [dbo].[PR_State_InsertByUserID]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_State_InsertByUserID]
@StateID INT OUTPUT,
@StateName VARCHAR(100),
@CountryID INT,
@ModifiedBy INT,
@UserID INT,
@CreationDate DATETIME,
@ModificationDate DATETIME
AS
INSERT INTO [dbo].[State]
(
	[dbo].[State].[StateName],
	[dbo].[State].[CountryID],
	[dbo].[State].[ModifiedBy],
	[dbo].[State].[UserID],
	[dbo].[State].[CreationDate],
	[dbo].[State].[ModificationDate]
)
VALUES
(
	@StateName,
	@CountryID,
	@ModifiedBy,
	@UserID,
	@CreationDate,
	@ModificationDate
)
SET @StateID = SCOPE_IDENTITY()
GO
/****** Object:  StoredProcedure [dbo].[PR_State_SelectAll]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_State_SelectAll]
AS
SELECT 
	[dbo].[State].[StateID],
	[dbo].[State].[StateName],
	[dbo].[Country].[CountryName],
	CONVERT(VARCHAR,[dbo].[State].[CreationDate],106) AS [CreationDate],
    CONVERT(VARCHAR,[dbo].[State].[ModificationDate],106) AS [ModificationDate]
FROM 
	[dbo].[State]
LEFT OUTER JOIN 
	[dbo].[Country]
ON 
	[dbo].[State].[CountryID] = [dbo].[Country].[CountryID]
GO
/****** Object:  StoredProcedure [dbo].[PR_State_SelectByPK]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_State_SelectByPK]
@StateID INT
AS
SELECT 
	[dbo].[State].[StateID],
	[dbo].[State].[StateName],
	[dbo].[State].[CountryID],
	[dbo].[State].[ModifiedBy],
	[dbo].[State].[UserID],
	CONVERT(VARCHAR,[dbo].[State].[CreationDate],106) AS [CreationDate],
    CONVERT(VARCHAR,[dbo].[State].[ModificationDate],106) AS [ModificationDate]
FROM 
	[dbo].[State]
WHERE
	[dbo].[State].[StateID] = @StateID
GO
/****** Object:  StoredProcedure [dbo].[PR_State_SelectForDropdownList]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_State_SelectForDropdownList]
AS
SELECT 
	[dbo].[State].[StateID],
	[dbo].[State].[StateName],
	[dbo].[State].[CountryID]
FROM [dbo].[State]
GO
/****** Object:  StoredProcedure [dbo].[PR_State_SelectForDropdownListByCountryID]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_State_SelectForDropdownListByCountryID]
@CountryID INT
AS
SELECT 
	[dbo].[State].[StateID],
	[dbo].[State].[StateName],
	[dbo].[State].[CountryID]
FROM 
	[dbo].[State]
WHERE
	[dbo].[State].[CountryID] = @CountryID
GO
/****** Object:  StoredProcedure [dbo].[PR_State_UpdateByPK]    Script Date: 04-07-2022 07:59:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PR_State_UpdateByPK]
@StateID INT,
@StateName VARCHAR(100),
@CountryID INT,
@ModifiedBy INT
AS
UPDATE [dbo].[State]
SET
	[dbo].[State].[StateName] = @StateName,
	[dbo].[State].[CountryID] = @CountryID,
	[dbo].[State].[ModifiedBy] = @ModifiedBy,
	[dbo].[State].[ModificationDate] = GETDATE()
WHERE
	[dbo].[State].[StateID] = @StateID
GO
USE [master]
GO
ALTER DATABASE [HouseholdServiceBooking] SET  READ_WRITE 
GO
