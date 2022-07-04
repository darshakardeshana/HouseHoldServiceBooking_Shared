<%@ Page Title="" Language="C#" MasterPageFile="~/Content/AdminPanel.master" AutoEventWireup="true" CodeFile="CityList.aspx.cs" Inherits="AdminPanel_City_CityList" %>

<asp:Content ID="Content1" ContentPlaceHolderID="cphPageHeaderText" runat="Server">
    City List
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="cphPageContent" runat="Server">
    <asp:ScriptManager runat="server"></asp:ScriptManager>
    <asp:UpdatePanel runat="server" ID="upCityAddEdit">
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
            <div class="row text-right">
                <div class="col-md-12 mb-3">
                    <asp:HyperLink runat="server" ID="hlCityAddEdit" NavigateUrl="~/AdminPanel/City/CityAddEdit.aspx" Text="Add City" CssClass="btn btn-outline-primary"></asp:HyperLink>
                </div>
            </div>
            <asp:GridView ID="gvCityList" HeaderStyle-CssClass="bg-gray-400" CssClass="table mytable" style="color:black;" runat="server" OnRowCommand="gvCityList_RowCommand" AutoGenerateColumns="false">

                <Columns>
                    <asp:BoundField DataField="CityName" HeaderText="City Name" />
                    <asp:BoundField DataField="StateName" HeaderText="State Name" />
                    <asp:BoundField DataField="CountryName" HeaderText="Country Name" />
                    <asp:TemplateField ItemStyle-CssClass="text-center" HeaderText="Action" HeaderStyle-CssClass="text-center" HeaderStyle-Width="150px">
                        <ItemTemplate>
                            <asp:LinkButton ID="btnDelete" CssClass="fas fa-trash-alt text-danger mr-2" CommandName="DeleteRecord" CommandArgument='<%# Eval("CityID") %>' runat="server" OnClientClick="if ( ! UserDeleteConfirmation()) return false;"></asp:LinkButton>
                            <asp:HyperLink ID="hlUpdate" NavigateUrl='<%# "~/AdminPanel/City/CityAddEdit.aspx?CityID=" +Eval("CityID") %>' CssClass="fas fa-edit text-warning mr-2" runat="server"></asp:HyperLink>
                        </ItemTemplate>
                    </asp:TemplateField>
                </Columns>
            </asp:GridView>
        </ContentTemplate>
    </asp:UpdatePanel>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="cphScriptBlock" runat="Server">
</asp:Content>

