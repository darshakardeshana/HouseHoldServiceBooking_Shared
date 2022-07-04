<%@ Page Title="" Language="C#" MasterPageFile="~/Content/AdminPanel.master" AutoEventWireup="true" CodeFile="BankAddEdit.aspx.cs" Inherits="AdminPanel_Bank_BankAddEdit" %>

<asp:Content ID="Content1" ContentPlaceHolderID="cphPageHeaderText" runat="Server">
    <asp:Label runat="server" ID="lblPageHeaderText"></asp:Label>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="cphPageContent" runat="Server">
    <asp:ScriptManager runat="server"></asp:ScriptManager>
    <asp:UpdatePanel runat="server" ID="upBankAddEdit">
        <ContentTemplate>
            <div class="container">
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
                    <div class="col-md-2 text-right  align-middle">
                        <asp:Label runat="server" Text="Bank Name" ID="lblBankName"></asp:Label>
                    </div>
                    <div class="col-md-4">
                        <asp:TextBox ValidationGroup="Bank" ID="txtBankName" CssClass="form-control" runat="server"></asp:TextBox>
                        <asp:RequiredFieldValidator ValidationGroup="vgBank" ID="rfvBank" runat="server" ErrorMessage="Enter Bank Name" CssClass="text-danger" Display="Dynamic" ControlToValidate="txtBankName"></asp:RequiredFieldValidator>
                    </div>
                </div>
                <div class="row mb-2">
                    <div class="offset-md-2 col-md-4">

                        <asp:Button ID="btnAdd" runat="server" ValidationGroup="vgBank" Text="Add" CssClass="btn btn-outline-primary" OnClick="btnAdd_Click" />
                        &ensp;
                <asp:Button ID="btnCancel" CssClass="btn btn-outline-danger" OnClick="btnBankList_Click" Text="Cancel" runat="server" />
                    </div>
                </div>
            </div>
        </ContentTemplate>
    </asp:UpdatePanel>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="cphScriptBlock" runat="Server">
</asp:Content>

