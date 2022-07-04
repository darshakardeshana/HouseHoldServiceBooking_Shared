<%@ Page Title="" Language="C#" MasterPageFile="~/Content/AdminPanel.master" AutoEventWireup="true" CodeFile="RatingList.aspx.cs" Inherits="AdminPanel_Rating_RatingList" %>

<asp:Content ID="Content1" ContentPlaceHolderID="cphPageHeaderText" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="cphPageContent" Runat="Server">
    <asp:ScriptManager runat="server" ID="sm"></asp:ScriptManager>
    <asp:UpdatePanel runat="server" ID="upRatingList">
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
                    <asp:HyperLink ID="hlRatingAddEdit" runat="server" NavigateUrl="~/AdminPanel/Rating/RatingAddEdit.aspx" CssClass="btn btn-outline-primary" Text="Add Rating"></asp:HyperLink>
                </div>
            </div>

            <asp:GridView runat="server" ID="gvRatingList" HeaderStyle-CssClass="bg-gray-400" CssClass="table mytable" style="color:black;" AutoGenerateColumns="false" OnRowCommand="gvRatingList_RowCommand">
                <Columns>
                    <asp:BoundField DataField="Review" HeaderText="Stars" />
                    <asp:BoundField DataField="RatingDate" HeaderText="Date" />
                    <asp:BoundField DataField="ServiceProviderName" HeaderText="Service Provider Name" />
                    <asp:BoundField DataField="ServiceName" HeaderText="Service Name" />
                    <asp:BoundField DataField="PersonName" HeaderText="Person Name" />
                    <asp:BoundField DataField="Comment" HeaderText="Comment" />

                    <asp:TemplateField ItemStyle-CssClass="text-center" HeaderText="Action" HeaderStyle-CssClass="text-center" HeaderStyle-Width="150px">
                        <ItemTemplate>
                            <asp:LinkButton ID="btnDelete" CssClass="fas fa-trash-alt text-danger mr-2" CommandName="DeleteRecord" CommandArgument='<%# Eval("RatingID") %>' runat="server" OnClientClick="if ( ! UserDeleteConfirmation()) return false;"></asp:LinkButton>
                            <asp:HyperLink ID="hlUpdate" NavigateUrl='<%# "~/AdminPanel/Rating/RatingAddEdit.aspx?RatingID=" +Eval("RatingID") %>' CssClass="fas fa-edit text-warning mr-2" runat="server"></asp:HyperLink>
                        </ItemTemplate>
                    </asp:TemplateField>
                </Columns>
            </asp:GridView>
        </ContentTemplate>
    </asp:UpdatePanel>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="cphScriptBlock" Runat="Server">
</asp:Content>

