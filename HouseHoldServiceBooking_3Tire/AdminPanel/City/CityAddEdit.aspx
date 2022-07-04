<%@ Page Title="" Language="C#" MasterPageFile="~/Content/AdminPanel.master" AutoEventWireup="true" CodeFile="CityAddEdit.aspx.cs" Inherits="AdminPanel_City_CityAddEdit" %>

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
                    <span class="text-danger">*</span> City Name
                </div>
                <div class="col-md-4 col-sm-12">
                    <asp:TextBox runat="server" ID="txtCityName" CssClass="form-control"></asp:TextBox>
                    <asp:RequiredFieldValidator runat="server" ID="rfvCityName" CssClass="text-danger" Display="Dynamic" Font-Bold="True" Font-Italic="True" ControlToValidate="txtCityName" ValidationGroup="vgCity" ErrorMessage="Enter Valid City"></asp:RequiredFieldValidator>
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-md-2 col-sm-12 text-md-right text-sm-left">
                    <span class="text-danger">*</span> Country Name
                </div>
                <div class="col-md-4 col-sm-12">
                    <asp:DropDownList runat="server" ID="ddlCountryID" OnSelectedIndexChanged="ddlCountryID_SelectedIndexChanged" AutoPostBack="true" CssClass="form-control"></asp:DropDownList>
                    <asp:CompareValidator ID="cvCountryID" runat="server" ErrorMessage="Choose Valid Country" Display="Dynamic" CssClass="text-danger" Font-Bold="True" Font-Italic="True" ControlToValidate="ddlCountryID" ValidationGroup="vgCity" ValueToCompare="-1" Operator="NotEqual"></asp:CompareValidator>
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-md-2 col-sm-12 text-md-right text-sm-left">
                    <span class="text-danger">*</span> State Name
                </div>
                <div class="col-md-4 col-sm-12">
                    <asp:DropDownList runat="server" ID="ddlStateID" CssClass="form-control"></asp:DropDownList>
                    <asp:CompareValidator runat="server" ID="cvStateID" ControlToValidate="ddlStateID" CssClass="text-danger" Font-Bold="True" Font-Italic="True" ErrorMessage="Enter Valid State" Display="Dynamic" ValueToCompare="-1" Operator="NotEqual" ValidationGroup="vgCity"></asp:CompareValidator>
                </div>
            </div>
            <div class="row mb-2 mt-4">
                <div class="col-md-2 col-sm-6 text-md-right mb-1 text-sm-left">
                    <asp:Button runat="server" ID="btnAdd" ValidationGroup="vgCity" Text="Add" OnClick="btnAdd_Click" CssClass="btn btn-outline-success" />
                </div>
                <div class="col-md-4 col-sm-6">
                    <asp:HyperLink runat="server" ID="btnCancel" NavigateUrl="~/AdminPanel/City/CityList.aspx" Text="Cancel" CssClass="btn btn-outline-danger" />
                </div>
            </div>

        </ContentTemplate>
    </asp:UpdatePanel>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="cphScriptBlock" runat="Server">
</asp:Content>

