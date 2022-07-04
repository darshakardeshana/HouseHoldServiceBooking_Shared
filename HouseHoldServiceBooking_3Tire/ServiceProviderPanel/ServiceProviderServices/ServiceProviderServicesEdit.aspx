<%@ Page Title="" Language="C#" MasterPageFile="~/Content/ServiceProviderPanel.master" AutoEventWireup="true" CodeFile="ServiceProviderServicesEdit.aspx.cs" Inherits="ServiceProviderPanel_ServiceProviderServices_ServiceProviderServicesEdit" %>

<asp:Content ID="Content1" ContentPlaceHolderID="cphPageHeaderText" runat="Server">
    <asp:Label runat="server" ID="lblPageHeader"></asp:Label>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="cphPageContent" runat="Server">
    <asp:ScriptManager runat="server" ID="sm"></asp:ScriptManager>
    <asp:UpdatePanel runat="server" ID="upServiceProviderServicesAddEdit">

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
                    <span class="text-danger">*</span> Service
                </div>
                <div class="col-md-4 col-sm-12">
                    <asp:DropDownList ID="ddlServiceID" runat="server" CssClass="form-control"></asp:DropDownList>
                    <asp:CompareValidator ID="cvServiceID" runat="server" ControlToValidate="ddlServiceID" ValueToCompare="-1" Operator="NotEqual" ValidationGroup="vgServiceProviderServices" ErrorMessage="Select Valid Service"></asp:CompareValidator>
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-md-2 col-sm-12 text-md-right text-sm-left">
                    <span class="text-danger">*</span> Rate
                </div>
                <div class="col-md-4 col-sm-12">
                    <asp:TextBox runat="server" ID="txtRate" CssClass="form-control" placeholder="Enter Rate"></asp:TextBox>
                    <asp:RequiredFieldValidator runat="server" ID="rfvRate" CssClass="text-danger" Display="Dynamic" ErrorMessage="Enter Valid Rate" ValidationGroup="vgServiceProviderServices" ControlToValidate="txtRate"></asp:RequiredFieldValidator>
                    <asp:RegularExpressionValidator ID="revRate" runat="server" ErrorMessage="Enter Valid Rate" ValidationExpression="[0-9.]*" ControlToValidate="txtRate"></asp:RegularExpressionValidator>
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-md-2 col-sm-12 text-md-right text-sm-left">
                    Description
                </div>
                <div class="col-md-4 col-sm-12">
                    <asp:TextBox runat="server" TextMode="MultiLine" Rows="3" ID="txtDescription" placeholder="Enter Description" CssClass="form-control"></asp:TextBox>
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-md-2 col-sm-12 text-md-right text-sm-left">
                    Specialist
                </div>
                <div class="col-md-4 col-sm-12">
                    <asp:TextBox runat="server" ID="txtSpecialist" TextMode="MultiLine" Rows="3" CssClass="form-control" placeholder="Enter Specialist"></asp:TextBox>
                </div>
            </div>
            <div class="row mb-2 mt-4">
                <div class="col-md-2 col-sm-12 text-md-right text-sm-left">
                    <asp:Button runat="server" ID="btnAdd" Text="Add" OnClick="btnAdd_Click" ValidationGroup="vgServiceProviderServices" CssClass="btn btn-outline-success" />
                </div>
                <div class="col-md-4 col-sm-12">
                    <asp:HyperLink runat="server" ID="hlCancel" NavigateUrl="~/AdminPanel/ServiceProviderServices/ServiceProviderServicesList.aspx" Text="Cancel" CssClass="btn btn-outline-danger" />
                </div>
            </div>
        </ContentTemplate>
    </asp:UpdatePanel>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="cphScriptBlock" runat="Server">
</asp:Content>

