<%@ Page Title="" Language="C#" MasterPageFile="~/Content/ServiceProviderPanel.master" AutoEventWireup="true" CodeFile="ServiceProviderServicesList.aspx.cs" Inherits="AdminPanel_ServiceProviderServices_ServiceProviderServicesList" %>

<asp:Content ID="Content1" ContentPlaceHolderID="cphPageHeaderText" Runat="Server">
    Service Provider Services List
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="cphPageContent" Runat="Server">
    <asp:ScriptManager runat="server" ID="sm"></asp:ScriptManager>
    <asp:UpdatePanel runat="server" ID="upServiceProviderServicesList">
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
            <div class="row text-right mb-3">
                <div class="col-md-12">
                    <asp:HyperLink ID="hlServiceProviderServicesAddEdit" runat="server" NavigateUrl="~/ServiceProviderPanel/ServiceProviderServices/ServiceProviderServicesAddEdit.aspx" CssClass="btn btn-outline-primary" Text="Add ServiceProviderServices"></asp:HyperLink>
                </div>
            </div>
            <asp:GridView runat="server" ID="gvServiceProviderServicesList" CssClass="table mytable" style="color:black;" AutoGenerateColumns="false" HeaderStyle-CssClass="bg-gray-400" OnRowCommand="gvServiceProviderServicesList_RowCommand">
                <Columns>
                    <asp:BoundField DataField="ServiceName" HeaderText="Service Name" />
                    <asp:BoundField DataField="Rate" HeaderText="Rate" />
                    <asp:BoundField DataField="Specialist" HeaderText="Specialist" />
                    <asp:BoundField DataField="Description" HeaderText="Description" />
                    <asp:TemplateField ItemStyle-CssClass="text-center" HeaderText="Action" HeaderStyle-CssClass="text-center" HeaderStyle-Width="150px">
                        <ItemTemplate>
                            <asp:LinkButton ID="btnDelete" CssClass="fas fa-trash-alt text-danger mr-2" CommandName="DeleteRecord" CommandArgument='<%# Eval("ServiceProviderServicesID") %>' runat="server"></asp:LinkButton>
                            <asp:HyperLink ID="hlUpdate" NavigateUrl='<%# "~/ServiceProviderPanel/ServiceProviderServices/ServiceProviderServicesEdit.aspx?ServiceProviderServicesID=" +Eval("ServiceProviderServicesID") %>' CssClass="fas fa-edit text-warning mr-2" runat="server"></asp:HyperLink>
                        </ItemTemplate>
                    </asp:TemplateField>
                </Columns>
            </asp:GridView>
        </ContentTemplate>
    </asp:UpdatePanel>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="cphScriptBlock" Runat="Server">
</asp:Content>

