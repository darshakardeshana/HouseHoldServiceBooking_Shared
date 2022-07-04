<%@ Page Title="" Language="C#" MasterPageFile="~/Content/ServiceProviderPanel.master" AutoEventWireup="true" CodeFile="ProfileView.aspx.cs" Inherits="ServiceProviderPanel_Profile_View" %>

<asp:Content ID="Content1" ContentPlaceHolderID="cphPageHeaderText" runat="Server">
    My Profile
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="cphPageContent" runat="Server">
    <div class="row">
        <div class="col-md-3">
            <div class="card" style="width: 18rem;">
                <asp:Image ID="imgProfilePhotoPath" runat="server" CssClass="p-3 bg-light" />
                <div class="card-body">
                    <h5 class="card-title text-center">
                        <asp:Label runat="server" ID="lblServiceProviderName"></asp:Label>
                    </h5>
                    <h6 class="card-text text-center">
                        <asp:Label runat="server" ID="lblMobileNo"></asp:Label>
                    </h6>
                    <%--<h6 class="card-text text-center">
                        <asp:Label runat="server" ID="lblRating">Good</asp:Label>
                    </h6>--%>
                </div>
            </div>
        </div>
        <div class="col-md-9 p-2">
            <h3>Other Details</h3>
            <div class="table-responsive">
                <table class="font-weight-bold table table-hover table-borderedless">
                    <tr class="d-flex">
                        <td class="col-md-2">Username</td>
                        <td>:</td>
                        <td class="col-md-9">
                            <asp:Label runat="server" ID="lblUserName"></asp:Label></td>
                    </tr>
                    <tr class="d-flex">
                        <td class="col-md-2">DOB</td>
                        <td>:</td>
                        <td class="col-md-9">
                            <asp:Label runat="server" ID="lblDOB"></asp:Label></td>
                    </tr>
                    <tr class="d-flex text-center font-italic">
                        <td class="col-md-12">Home Address</td>
                    </tr>
                    <tr class="d-flex">
                        <td class="col-md-2">Address</td>
                        <td>:</td>
                        <td class="col-md-9">
                            <asp:Label runat="server" ID="lblHomeAddress"></asp:Label></td>
                    </tr>
                    <tr class="d-flex">
                        <td class="col-md-2">City</td>
                        <td>:</td>
                        <td class="col-md-3">
                            <asp:Label runat="server" ID="lblHomeCity"></asp:Label></td>
                        <td class="col-md-2">Pincode</td>
                        <td>:</td>
                        <td class="col-md-3">
                            <asp:Label runat="server" ID="lblHomePincode"></asp:Label></td>
                    </tr>

                    <tr class="d-flex">
                        <td class="col-md-2">State</td>
                        <td>:</td>
                        <td class="col-md-3">
                            <asp:Label runat="server" ID="lblHomeState"></asp:Label></td>
                        <td class="col-md-2">Country</td>
                        <td>:</td>
                        <td class="col-md-3">
                            <asp:Label runat="server" ID="lblHomeCountry"></asp:Label></td>
                    </tr>
                    <tr class="d-flex text-center font-italic">
                        <td class="col-md-12">Work Address</td>
                    </tr>
                    <tr class="d-flex">
                        <td class="col-md-2">Address</td>
                        <td>:</td>
                        <td class="col-md-9">
                            <asp:Label runat="server" ID="lblWorkAddress"></asp:Label></td>
                    </tr>
                    <tr class="d-flex">
                        <td class="col-md-2">City</td>
                        <td>:</td>
                        <td class="col-md-3">
                            <asp:Label runat="server" ID="lblWorkCity"></asp:Label></td>
                        <td class="col-md-2">Pincode</td>
                        <td>:</td>
                        <td class="col-md-3">
                            <asp:Label runat="server" ID="lblWorkPincode"></asp:Label></td>
                    </tr>

                    <tr class="d-flex">
                        <td class="col-md-2">State</td>
                        <td>:</td>
                        <td class="col-md-3">
                            <asp:Label runat="server" ID="lblWorkState"></asp:Label></td>
                        <td class="col-md-2">Country</td>
                        <td>:</td>
                        <td class="col-md-3">
                            <asp:Label runat="server" ID="lblWorkCountry"></asp:Label></td>
                    </tr>

                    <tr class="d-flex">
                        <td class="col-md-2">Aadhar Card No.</td>
                        <td>:</td>
                        <td class="col-md-9">
                            <asp:Label runat="server" ID="lblAadharCard"></asp:Label></td>
                    </tr>
                    <tr class="d-flex">
                        <td class="col-md-2">PAN Card No.</td>
                        <td>:</td>
                        <td class="col-md-9">
                            <asp:Label runat="server" ID="lblPANCardNo"></asp:Label></td>
                    </tr>
                    <tr class="d-flex">
                        <td class="col-md-2">GST No.</td>
                        <td>:</td>
                        <td class="col-md-9">
                            <asp:Label runat="server" ID="lblGSTNo"></asp:Label></td>
                    </tr>
                    <tr class="d-flex">
                        <td class="col-md-2">Bank Name</td>
                        <td>:</td>
                        <td class="col-md-9">
                            <asp:Label runat="server" ID="lblBank"></asp:Label></td>
                    </tr>
                    <tr class="d-flex">
                        <td class="col-md-2">Account No.</td>
                        <td>:</td>
                        <td class="col-md-9">
                            <asp:Label runat="server" ID="lblAccountNo"></asp:Label></td>
                    </tr>
                    <tr class="d-flex">
                        <td class="col-md-2">IFSC Code</td>
                        <td>:</td>
                        <td class="col-md-9">
                            <asp:Label runat="server" ID="lblIFSCCode"></asp:Label></td>
                    </tr>
                </table>
            </div>
            <div class="row">
                <div class="text-center col-md-12">
                    <asp:Button ID="btnEditProfile" runat="server" CssClass="btn btn-outline-info" Text="Edit Profile" OnClick="btnEditProfile_Click"></asp:Button>
                </div>
            </div>
        </div>
    </div>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="cphScriptBlock" runat="Server">
</asp:Content>

