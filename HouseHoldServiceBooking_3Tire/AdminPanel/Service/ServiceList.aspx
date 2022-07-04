<%@ Page Title="" Language="C#" MasterPageFile="~/Content/AdminPanel.master" AutoEventWireup="true" CodeFile="ServiceList.aspx.cs" Inherits="AdminPanel_Service_ServiceList" %>

<asp:Content ID="Content1" ContentPlaceHolderID="cphPageHeaderText" runat="Server">
    Service List
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="cphPageContent" runat="Server">
    <asp:ScriptManager runat="server" ID="sm"></asp:ScriptManager>
    <asp:UpdatePanel runat="server" ID="upServiceList">
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
                    <asp:HyperLink ID="hlServiceAddEdit" runat="server" NavigateUrl="~/AdminPanel/Service/ServiceAddEdit.aspx" CssClass="btn btn-outline-primary" Text="Add Service"></asp:HyperLink>
                </div>
            </div>

            <asp:GridView runat="server" ID="gvServiceList" HeaderStyle-CssClass="bg-gray-400" CssClass="table mytable" style="color:black;" AutoGenerateColumns="false" OnRowCommand="gvService_RowCommand">
                <Columns>
                    <asp:BoundField DataField="ServiceName" HeaderText="Service Name" />
                    <asp:TemplateField ItemStyle-CssClass="text-center" HeaderText="Action" HeaderStyle-CssClass="text-center" HeaderStyle-Width="150px">
                        <ItemTemplate>
                            <asp:LinkButton ID="btnDelete" CssClass="fas fa-trash-alt text-danger mr-2" CommandName="DeleteRecord" CommandArgument='<%# Eval("ServiceID") %>' runat="server" OnClientClick="if ( ! UserDeleteConfirmation()) return false;"></asp:LinkButton>
                            <asp:HyperLink ID="hlUpdate" NavigateUrl='<%# "~/AdminPanel/Service/ServiceAddEdit.aspx?ServiceID=" +Eval("ServiceID") %>' CssClass="fas fa-edit text-warning mr-2" runat="server"></asp:HyperLink>
                        </ItemTemplate>
                    </asp:TemplateField>
                </Columns>
            </asp:GridView>
        </ContentTemplate>
    </asp:UpdatePanel>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="cphScriptBlock" runat="Server">
</asp:Content>

