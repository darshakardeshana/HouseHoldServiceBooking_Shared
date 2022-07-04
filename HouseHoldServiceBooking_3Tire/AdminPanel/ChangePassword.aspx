<%@ Page Title="" Language="C#" MasterPageFile="~/Content/AdminPanel.master" AutoEventWireup="true" CodeFile="ChangePassword.aspx.cs" Inherits="AdminPanel_ChangePassword" %>

<asp:Content ID="Content1" ContentPlaceHolderID="cphPageHeaderText" runat="Server">
    Change Password
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="cphPageContent" runat="Server">
    <asp:ScriptManager runat="server" ID="sm"></asp:ScriptManager>
    <asp:UpdatePanel runat="server" ID="upChangePasswordAddEdit">
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
                    <span class="text-danger">*</span> Old Password
                </div>
                <div class="col-md-4 col-sm-12">
                    <asp:TextBox runat="server" ID="txtOldPassword" CssClass="form-control"></asp:TextBox>
                    <asp:RequiredFieldValidator runat="server" ID="rfvOldPassword" CssClass="text-danger" ControlToValidate="txtOldPassword" Display="Dynamic" ErrorMessage="Enter Valid Old Password" Font-Italic="True" Font-Bold="True" ValidationGroup="vgChangePassword"></asp:RequiredFieldValidator>
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-md-2 col-sm-12 text-md-right text-sm-left">
                    <span class="text-danger">*</span> New Password
                </div>
                <div class="col-md-4 col-sm-12">
                    <asp:TextBox runat="server" ID="txtNewPassword" CssClass="form-control"></asp:TextBox>
                    <asp:RequiredFieldValidator runat="server" ID="rfvNewPassword" CssClass="text-danger" ControlToValidate="txtNewPassword" Display="Dynamic" ErrorMessage="Enter Valid New Password" Font-Italic="True" Font-Bold="True" ValidationGroup="vgChangePassword"></asp:RequiredFieldValidator>
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-md-2 col-sm-12 text-md-right text-sm-left">
                    <span class="text-danger">*</span> Re-Type New Password
                </div>
                <div class="col-md-4 col-sm-12">
                    <asp:TextBox runat="server" ID="txtReTypePassword" CssClass="form-control"></asp:TextBox>
                    <asp:RequiredFieldValidator runat="server" ID="rfvReTypePassword" CssClass="text-danger" ControlToValidate="txtReTypePassword" Display="Dynamic" ErrorMessage="Enter Valid Re-Type Password" Font-Italic="True" Font-Bold="True" ValidationGroup="vgChangePassword"></asp:RequiredFieldValidator>
                    <asp:CompareValidator ID="cvReTypePassword" runat="server" ErrorMessage="Password Do not Match" CssClass="text-danger" ControlToValidate="txtReTypePassword" ControlToCompare="txtNewPassword" Display="Dynamic" ValidationGroup="vgChangePassword"></asp:CompareValidator>
                </div>
            </div>
            <div class="row mb-2 mt-4">
                <div class="offset-md-2 col-md-12 col-sm-12">
                    <asp:Button runat="server" ID="btnChangePassword" Text="Change Password" OnClick="btnChangePassword_Click" ValidationGroup="vgChangePassword" CssClass="btn btn-outline-success" />
                    <asp:HyperLink runat="server" ID="hlCancel" NavigateUrl="~/AdminPanel/Default.aspx" Text="Cancel" CssClass="btn btn-outline-danger" />
                </div>
            </div>
        </ContentTemplate>
    </asp:UpdatePanel>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="cphScriptBlock" runat="Server">
</asp:Content>