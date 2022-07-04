<%@ Page Title="" Language="C#" MasterPageFile="~/Content/AdminPanel.master" AutoEventWireup="true" CodeFile="BankList.aspx.cs" Inherits="AdminPanel_Bank_BankList" %>

<asp:Content ID="Content1" ContentPlaceHolderID="cphPageHeaderText" runat="Server">
    Bank List
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="cphPageContent" runat="Server">
    <asp:ScriptManager runat="server"></asp:ScriptManager>
    <asp:UpdatePanel runat="server" ID="upBankAddEdit">
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
                    <asp:HyperLink runat="server" ID="hlBankAddEdit" NavigateUrl="~/AdminPanel/Bank/BankAddEdit.aspx" Text="Add Bank" CssClass="btn btn-outline-primary"></asp:HyperLink>
                </div>
            </div>
            <asp:GridView runat="server" HeaderStyle-CssClass="bg-gray-400" ID="gvBankList" CssClass="table mytable" style="color:black;" AutoGenerateColumns="false" OnRowCommand="gvBankList_RowCommand">
                <Columns>
                    <asp:BoundField DataField="BankName" HeaderText="Name" />
                    <asp:TemplateField ItemStyle-CssClass="text-center" HeaderText="Action" HeaderStyle-CssClass="text-center" HeaderStyle-Width="150px">
                        <ItemTemplate>
                            <asp:LinkButton ID="btnDelete" CssClass="fas fa-trash-alt text-danger mr-2" CommandName="DeleteRecord" CommandArgument='<%# Eval("BankID") %>' runat="server" OnClientClick="if ( ! UserDeleteConfirmation()) return false;"></asp:LinkButton>
                            <asp:HyperLink ID="hlUpdate" NavigateUrl='<%# "~/AdminPanel/Bank/BankAddEdit.aspx?BankID=" +Eval("BankID") %>' CssClass="fas fa-edit text-warning mr-2" runat="server"></asp:HyperLink>
                        </ItemTemplate>
                    </asp:TemplateField>
                </Columns>
            </asp:GridView>
        </ContentTemplate>
    </asp:UpdatePanel>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="cphScriptBlock" runat="Server">
</asp:Content>

