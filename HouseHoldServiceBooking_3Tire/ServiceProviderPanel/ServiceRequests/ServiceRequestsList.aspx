<%@ Page Title="" Language="C#" MasterPageFile="~/Content/ServiceProviderPanel.master" AutoEventWireup="true" CodeFile="ServiceRequestsList.aspx.cs" Inherits="ServiceProviderPanel_ServiceRequests_ServiceRequests" %>

<asp:Content ID="Content1" ContentPlaceHolderID="cphPageHeaderText" Runat="Server">
    Service Request
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="cphPageContent" Runat="Server">
    <asp:ScriptManager runat="server" ID="sm"></asp:ScriptManager>
    <asp:UpdatePanel runat="server" ID="upRequestList">
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
            <asp:GridView runat="server" ID="gvRequestList" CssClass="table mytable" style="color:black;" AutoGenerateColumns="false" HeaderStyle-CssClass="bg-gray-400" OnRowCommand="gvRequestList_RowCommand">
                <Columns>
                    <asp:BoundField DataField="RequestID" HeaderText="Unique no." />
                    <asp:BoundField DataField="ServiceName" HeaderText="Service Name" />
                    <asp:BoundField DataField="Rate" HeaderText="Rate" />
                    <asp:BoundField DataField="Specialist" HeaderText="Specialist" />
                    <asp:BoundField DataField="Description" HeaderText="Description" />
                    <asp:TemplateField HeaderText="Date" ItemStyle-CssClass="text-center" HeaderStyle-CssClass="text-center">
                        <ItemTemplate>
                            <asp:Label ID="lblDate" runat="server" Text='<%#Convert.ToDateTime(Eval("CreationDate")).ToString("dd-MM-yyyy")%>' ></asp:Label>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="Is Attended" ItemStyle-CssClass="text-center" HeaderStyle-CssClass="text-center">
                        <ItemTemplate>
                            <asp:Label ID="lblIsAttended" runat="server" CssClass='<%#Convert.ToBoolean(Eval("IsAttended")) == true ? "badge badge-pill badge-info" : "badge badge-pill badge-danger" %>' Text='<%#Convert.ToBoolean(Eval("IsAttended")) == true ? "Yes" : "No" %>' ></asp:Label>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField ItemStyle-CssClass="text-center" HeaderText="Action" HeaderStyle-CssClass="text-center" HeaderStyle-Width="150px">
                        <ItemTemplate>
                            <asp:LinkButton ID="lbtnAttended" runat="server" CommandArgument='<%#Eval("RequestID")%>' CommandName='<%#Convert.ToBoolean(Eval("IsAttended")) == true ? "NotAttended" : "Attended" %>' CssClass='<%#Convert.ToBoolean(Eval("IsAttended")) == true ? "fa fa-times text-danger" : "fa fa-check-square text-success" %>'></asp:LinkButton>
                        </ItemTemplate>
                    </asp:TemplateField>
                </Columns>
            </asp:GridView>
        </ContentTemplate>
    </asp:UpdatePanel>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="cphScriptBlock" Runat="Server">
</asp:Content>

