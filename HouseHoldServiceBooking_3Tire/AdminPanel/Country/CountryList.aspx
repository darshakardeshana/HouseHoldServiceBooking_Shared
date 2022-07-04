<%@ Page Title="" Language="C#" MasterPageFile="~/Content/AdminPanel.master" AutoEventWireup="true" CodeFile="CountryList.aspx.cs" Inherits="AdminPanel_Country_CountryList" %>

<asp:Content ID="Content1" ContentPlaceHolderID="cphPageHeaderText" runat="Server">
    Country List
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="cphPageContent" runat="Server">
    <style>
        .table{
            border-top:none !important;
        }
    </style>
    <asp:ScriptManager runat="server" ID="sm"></asp:ScriptManager>
    <asp:UpdatePanel runat="server" ID="upCountryList">
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
                    <asp:HyperLink ID="hlCountryAddEdit" runat="server" NavigateUrl="~/AdminPanel/Country/CountryAddEdit.aspx" CssClass="btn btn-outline-primary" Text="Add Country"></asp:HyperLink>
                </div>
            </div>

            <%--<div class="row bg-light">
                <div class="col-md-12">
                    <div class="table-responsive">
                        <table id="dataTable" class="table table-hover table-bordered">
                            <thead>
                                <tr>
                                    <th width="40%">Name</th>
                                    <th width="40%">Code</th>
                                    <th width="10%">Delete</th>
                                    <th width="10%">Update</th>
                                </tr>
                            </thead>
                            <tbody>
                                <asp:Repeater ID="rpData" runat="server">
                                    <ItemTemplate>
                                        <tr>
                                            <td>
                                                <%# Eval("CountryName") %>
                                            </td>
                                            <td>
                                                <%# Eval("CountryCode") %>
                                            </td>
                                            <td class="text-center">
                                                <asp:LinkButton ID="btnDelete" Text="<i class='fas fa-trash-alt'></i> Delete" CssClass="btn btn-outline-danger" CommandName="DeleteRecord" CommandArgument='<%# Eval("CountryID") %>' runat="server" OnClientClick="if ( ! UserDeleteConfirmation()) return false;"></asp:LinkButton>
                                            </td>
                                            <td class="text-center">
                                                <asp:HyperLink ID="hlUpdate" NavigateUrl='<%# "~/AdminPanel/Country/CountryAddEdit.aspx?CountryID=" +Eval("CountryID") %>' CssClass=" btn btn-outline-warning" runat="server"><i class='fas fa-edit'></i> Update</asp:HyperLink>
                                            </td>
                                        </tr>
                                    </ItemTemplate>
                                </asp:Repeater>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>--%>
            <div>
                <asp:GridView runat="server" ID="gvCountryList" HeaderStyle-CssClass="bg-gray-400" CssClass="table mytable" style="color:black;" AutoGenerateColumns="false" OnRowCommand="gvCountryList_RowCommand">
                    <Columns>
                        <asp:BoundField DataField="CountryName" HeaderText="Name" />
                        <asp:BoundField DataField="CountryCode" HeaderText="Code" />
                        <asp:TemplateField ItemStyle-CssClass="text-center" HeaderText="Action" HeaderStyle-CssClass="text-center" HeaderStyle-Width="150px">
                            <ItemTemplate>
                                <asp:LinkButton ID="btnDelete" CssClass="fas fa-trash-alt text-danger mr-2" CommandName="DeleteRecord" CommandArgument='<%# Eval("CountryID") %>' runat="server" OnClientClick="if ( ! UserDeleteConfirmation()) return false;"></asp:LinkButton>
                                <asp:HyperLink ID="hlUpdate" NavigateUrl='<%# "~/AdminPanel/Country/CountryAddEdit.aspx?CountryID=" +Eval("CountryID") %>' CssClass="fas fa-edit text-warning mr-2" runat="server"></asp:HyperLink>
                            </ItemTemplate>
                        </asp:TemplateField>
                    </Columns>
                </asp:GridView>
            </div>
        </ContentTemplate>
    </asp:UpdatePanel>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="cphScriptBlock" runat="Server">
</asp:Content>

