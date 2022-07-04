<%@ Page Title="" Language="C#" MasterPageFile="~/Content/AdminPanel.master" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="AdminPanel_Default" %>

<asp:Content ID="Content1" ContentPlaceHolderID="cphPageHeaderText" runat="Server">
    Dashboard
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="cphPageContent" runat="Server">
    <div class="row" style="border-bottom:2px solid cornflowerblue; margin-bottom:1em; margin-left:0.15em">
        <div class="col-md-2 text-center" style="background-color:cornflowerblue; color:white; font-size:1.25em;">Service Details</div>
    </div>
    <div class="row">
        <!-- Pending Requests Card Example -->
        <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-sm font-weight-bold text-primary text-uppercase mb-1">
                                Service
                            </div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">
                                <asp:Label ID="lblTotalServiceCount" runat="server">NA</asp:Label>
                            </div>
                        </div>
                        <div class="col-auto">
                            <i class="fas fa-tools fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-success shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-sm font-weight-bold text-success text-uppercase mb-1">
                                Service Provider
                            </div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">
                                <asp:Label ID="lblTotalServiceProviderCount" runat="server">NA</asp:Label>
                            </div>
                        </div>
                        <div class="col-auto">
                            <i class="fa fa-user-o fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-warning shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-sm font-weight-bold text-warning text-uppercase mb-1">
                                Total Rating
                            </div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">
                                <asp:Label ID="lblTotalRatingCount" runat="server">NA</asp:Label>
                            </div>
                        </div>
                        <div class="col-auto">
                            <i class="fa fa-star-o fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="row mt-5" style="border-bottom:2px solid cornflowerblue; margin-bottom:1em; margin-left:0.15em">
        <div class="col-md-2" style="background-color:cornflowerblue; color:white; font-size:1.25em;">Request Details</div>
    </div>
    <div class="row">
        <!-- Pending Requests Card Example -->
        <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-sm font-weight-bold text-primary text-uppercase mb-1">
                                Total Request
                            </div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">
                                <asp:Label ID="lblTotalRequestCount" runat="server">NA</asp:Label>
                            </div>
                        </div>
                        <div class="col-auto">
                            <i class="fas fa-comments fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-success shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-sm font-weight-bold text-success text-uppercase mb-1">
                                Last Month Request
                            </div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">
                                <asp:Label ID="lblLastMonthRequestCount" runat="server">NA</asp:Label>
                            </div>
                        </div>
                        <div class="col-auto">
                            <i class="fas fa-comments fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-warning shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-sm font-weight-bold text-warning text-uppercase mb-1">
                                Attended Request
                            </div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">
                                <asp:Label ID="lblTotalAttendedRequestCount" runat="server">NA</asp:Label>
                            </div>
                        </div>
                        <div class="col-auto">
                            <i class="fas fa-comments fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-info shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-sm font-weight-bold text-info text-uppercase mb-1">
                                Last Month Attended Request
                            </div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">
                                <asp:Label ID="lblLastMonthAttendedRequestCount" runat="server">NA</asp:Label>
                            </div>
                        </div>
                        <div class="col-auto">
                            <i class="fas fa-comments fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="row mt-5" style="border-bottom:2px solid cornflowerblue; margin-bottom:1em; margin-left:0.15em">
        <div class="col-md-2" style="background-color:cornflowerblue; color:white; font-size:1.25em;">Inquiry Details</div>
    </div>
    <div class="row">
        <!-- Pending Inquirys Card Example -->
        <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-sm font-weight-bold text-primary text-uppercase mb-1">
                                Total Inquiry
                            </div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">
                                <asp:Label ID="lblTotalInquiryCount" runat="server">NA</asp:Label>
                            </div>
                        </div>
                        <div class="col-auto">
                            <i class="fas fa-question fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-success shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-sm font-weight-bold text-success text-uppercase mb-1">
                                Total Monthly Inquiry
                            </div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">
                                <asp:Label ID="lblLastMonthInquiryCount" runat="server">NA</asp:Label>
                            </div>
                        </div>
                        <div class="col-auto">
                            <i class="fas fa-question fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-warning shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-sm font-weight-bold text-warning text-uppercase mb-1">
                                Attended Inquiry
                            </div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">
                                <asp:Label ID="lblTotalAttendedInquiryCount" runat="server">NA</asp:Label>
                            </div>
                        </div>
                        <div class="col-auto">
                            <i class="fas fa-question fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-info shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-sm font-weight-bold text-info text-uppercase mb-1">
                                Last Month Attended Inquiry
                            </div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">
                                <asp:Label ID="lblLastMonthAttendedInquiryCount" runat="server">NA</asp:Label>
                            </div>
                        </div>
                        <div class="col-auto">
                            <i class="fas fa-question fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="row mt-5" style="border-bottom:2px solid cornflowerblue; margin-bottom:1em; margin-left:0.15em">
        <div class="col-md-2" style="background-color:cornflowerblue; color:white; font-size:1.25em;">Basic Details</div>
    </div>
    <div class="row">
        <!-- Pending Inquirys Card Example -->
        <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-sm font-weight-bold text-primary text-uppercase mb-1">
                                Total Countries
                            </div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">
                                <asp:Label ID="lblTotalCountryCount" runat="server">NA</asp:Label>
                            </div>
                        </div>
                        <div class="col-auto">
                            <i class="fas fa-globe fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-success shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-sm font-weight-bold text-success text-uppercase mb-1">
                                Total States
                            </div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">
                                <asp:Label ID="lblTotalStateCount" runat="server">NA</asp:Label>
                            </div>
                        </div>
                        <div class="col-auto">
                            <i class="fas fa-map-marker-alt fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-warning shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-sm font-weight-bold text-warning text-uppercase mb-1">
                                Total Cities
                            </div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">
                                <asp:Label ID="lblTotalCityCount" runat="server">NA</asp:Label>
                            </div>
                        </div>
                        <div class="col-auto">
                            <i class="fa fa-building-o fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-info shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-sm font-weight-bold text-info text-uppercase mb-1">
                                Total Admin User
                            </div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">
                                <asp:Label ID="lblTotalAdminUserCount" runat="server">NA</asp:Label>
                            </div>
                        </div>
                        <div class="col-auto">
                            <i class="fa fa-user-o fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="cphScriptBlock" runat="Server">
</asp:Content>

