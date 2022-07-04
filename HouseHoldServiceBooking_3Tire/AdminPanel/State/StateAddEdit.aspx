<%@ Page Title="" Language="C#" MasterPageFile="~/Content/AdminPanel.master" AutoEventWireup="true" CodeFile="StateAddEdit.aspx.cs" Inherits="AdminPanel_State_StateAddEdit" %>

<asp:Content ID="Content1" ContentPlaceHolderID="cphPageHeaderText" runat="Server">
    <asp:Label runat="server" ID="lblPageHeaderText"></asp:Label>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="cphPageContent" runat="Server">
    <asp:ScriptManager runat="server"></asp:ScriptManager>
    <asp:UpdatePanel runat="server" ID="upStateAddEdit">
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
                    <span class="text-danger">*</span> State Name
                </div>
                <div class="col-md-4 col-sm-12">
                    <asp:TextBox runat="server" ID="txtStateName" CssClass="form-control"></asp:TextBox>
                    <asp:RequiredFieldValidator runat="server" ID="rfvStateName" CssClass="text-danger" ControlToValidate="txtStateName" Display="Dynamic" ErrorMessage="Enter Proper StateName" Font-Italic="true" Font-Bold="true" ValidationGroup="vgState"></asp:RequiredFieldValidator>
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-md-2 col-sm-12 text-md-right text-sm-left">
                    <span class="text-danger">*</span> Country Name
                </div>
                <div class="col-md-4 col-sm-12">
                    <asp:DropDownList runat="server" ID="ddlCountryID" CssClass="form-control"></asp:DropDownList>
                    <asp:CompareValidator runat="server" CssClass="text-danger" Display="Dynamic" ErrorMessage="Choose Proper Country" Font-Bold="True" Font-Italic="True" ControlToValidate="ddlCountryID" ValidationGroup="vgState" ValueToCompare="-1" Operator="NotEqual"></asp:CompareValidator>
                </div>
            </div>
            <div class="row mb-2 mt-4">
                <div class="col-md-2 col-sm-12 text-md-right text-sm-left">
                    <asp:Button runat="server" ID="btnAdd" Text="Add" OnClick="btnAdd_Click" ValidationGroup="vgState" CssClass="btn btn-outline-success" />
                </div>
                <div class="col-md-4 col-sm-12">
                    <asp:HyperLink runat="server" NavigateUrl="~/AdminPanel/State/StateList.aspx" ID="hlCancel" Text="Cancel" CssClass="btn btn-outline-danger" />
                </div>
            </div>
        </ContentTemplate>
    </asp:UpdatePanel>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="cphScriptBlock" runat="Server">
</asp:Content>

