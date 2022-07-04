<%@ Page Title="" Language="C#" MasterPageFile="~/Content/AdminPanel.master" AutoEventWireup="true" CodeFile="AdminUserAddEdit.aspx.cs" Inherits="AdminPanel_AdminUser_AdminUserAddEdit" %>

<asp:Content ID="Content1" ContentPlaceHolderID="cphPageHeaderText" runat="Server">
    <asp:Label runat="server" ID="lblPageHeader"></asp:Label>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="cphPageContent" runat="Server">
    <asp:ScriptManager runat="server" ID="sm"></asp:ScriptManager>
    <asp:UpdatePanel runat="server" ID="upAdminUserAddEdit">
        <ContentTemplate>
            <div class="row">
                <div class="col-md-12 alert alert-danger" id="divError" visible="false" runat="server">
                    <asp:Label ID="lblErrorMessage" runat="server" Text=""></asp:Label>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 alert alert-success" id="divSuccess" visible="false" runat="server">
                    <asp:Label ID="lblSuccessMessage" runat="server" Text=""></asp:Label>
                </div>
            </div>

            <div class="row mb-2">
                <div class="col-md-2 col-sm-12 text-md-right text-sm-left">
                    <span class="text-danger">*</span> UserName
                </div>
                <div class="col-md-4 col-sm-12">
                    <asp:TextBox runat="server" ID="txtUserName" AutoPostBack="true" OnTextChanged="txtUserName_TextChanged" CssClass="form-control" placeholder="UserName"></asp:TextBox>
                    <asp:RequiredFieldValidator runat="server" ID="rfvUserName" CssClass="text-danger" ControlToValidate="txtUserName" Display="Dynamic" ErrorMessage="Enter Valid AdminUser Name" Font-Italic="True" Font-Bold="True" ValidationGroup="vgAdminUser"></asp:RequiredFieldValidator>
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-md-2 col-sm-12 text-md-right text-sm-left">
                    <span class="text-danger">*</span> Display Name
                </div>
                <div class="col-md-4 col-sm-12">
                    <asp:TextBox runat="server" ID="txtDisplayName" CssClass="form-control" placeholder="Display Name"></asp:TextBox>
                    <asp:RequiredFieldValidator runat="server" ID="rfvDisplayName" CssClass="text-danger" Display="Dynamic" ErrorMessage="Enter Valid AdminUser Code" ValidationGroup="vgAdminUser" ControlToValidate="txtDisplayName" Font-Bold="True" Font-Italic="True"></asp:RequiredFieldValidator>
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-md-2 col-sm-12 text-md-right text-sm-left">
                    <span class="text-danger">*</span> Mobile No.
                </div>
                <div class="col-md-4 col-sm-12">
                    <asp:TextBox runat="server" ID="txtMobileNo" CssClass="form-control" placeholder="Mobile Number"></asp:TextBox>
                    <asp:RequiredFieldValidator runat="server" ID="rfvMobileNo" CssClass="text-danger" Display="Dynamic" ErrorMessage="Enter Valid AdminUser Code" ValidationGroup="vgAdminUser" ControlToValidate="txtMobileNo" Font-Bold="True" Font-Italic="True"></asp:RequiredFieldValidator>
                    <asp:RegularExpressionValidator ID="revMobileNo" runat="server" ErrorMessage="Enter Proper Number" ControlToValidate="txtMobileNo" CssClass="text-danger" Display="Dynamic" ValidationExpression="[0-9]{10}"></asp:RegularExpressionValidator>
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-md-2 col-sm-12 text-md-right text-sm-left">
                    Email
                </div>
                <div class="col-md-4 col-sm-12">
                    <asp:TextBox runat="server" ID="txtEmail" CssClass="form-control" placeholder="Email"></asp:TextBox>
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-md-2 col-sm-12 text-md-right text-sm-left">
                    Designation
                </div>
                <div class="col-md-4 col-sm-12">
                    <asp:TextBox runat="server" ID="txtDesignation" CssClass="form-control" placeholder="Designation"></asp:TextBox>
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-md-2 col-sm-12 text-md-right text-sm-left">
                    <span class="text-danger">*</span> Password
                </div>
                <div class="col-md-4 col-sm-12">
                    <asp:TextBox runat="server" CssClass="form-control" type="password" ID="txtPassword" placeholder="Password"></asp:TextBox>
                    <asp:RequiredFieldValidator ID="rfvPassword" runat="server" CssClass="text-danger" Display="Dynamic" ErrorMessage="Enter the Password" ValidationGroup="vgAdminUser" ControlToValidate="txtPassword"></asp:RequiredFieldValidator>
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-md-2 col-sm-12 text-md-right text-sm-left">
                    Re-Type Password
                </div>
                <div class="col-md-4 col-sm-12">
                    <asp:TextBox runat="server" CssClass="form-control" type="Password" ID="txtRePassword" placeholder="ReType Password"></asp:TextBox>
                    <asp:CompareValidator ID="cvRePassword" runat="server" ErrorMessage="Password Do not Match" CssClass="text-danger" ControlToValidate="txtRePassword" ControlToCompare="txtPassword" Display="Dynamic" ValidationGroup="vgAdminUser"></asp:CompareValidator>
                </div>
            </div>

            <div class="row mb-2 mt-4">
                <div class="col-md-2 col-sm-12 text-md-right text-sm-left">
                    <asp:Button runat="server" ID="btnAdd" Text="Add" OnClick="btnAdd_Click" ValidationGroup="vgAdminUser" CssClass="btn btn-outline-success" />
                </div>
                <div class="col-md-4 col-sm-12">
                    <asp:HyperLink runat="server" ID="hlCancel" NavigateUrl="~/AdminPanel/AdminUser/AdminUserList.aspx" Text="Cancel" CssClass="btn btn-outline-danger" />
                </div>
            </div>
        </ContentTemplate>
    </asp:UpdatePanel>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="cphScriptBlock" runat="Server">
</asp:Content>

