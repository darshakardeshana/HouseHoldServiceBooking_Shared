<%@ Page Title="" Language="C#" MasterPageFile="~/Content/AdminPanel.master" AutoEventWireup="true" CodeFile="InquiryList.aspx.cs" Inherits="AdminPanel_Inquiry_InquiryList" %>

<asp:Content ID="Content1" ContentPlaceHolderID="cphPageHeaderText" runat="Server">
    Inquiry List
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="cphPageContent" runat="Server">
    <style>
        .table {
            border-top: none !important;
        }
    </style>
    <asp:ScriptManager runat="server" ID="sm"></asp:ScriptManager>
    <asp:UpdatePanel runat="server" ID="upInquiryList">
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
                    <%--<asp:HyperLink ID="hlInquiryAddEdit" runat="server" NavigateUrl="~/AdminPanel/Inquiry/InquiryAddEdit.aspx" CssClass="btn btn-outline-primary" Text="Add Inquiry"></asp:HyperLink>--%>
                </div>
            </div>
            <div>
                <asp:GridView runat="server" ID="gvInquiryList" HeaderStyle-CssClass="bg-gray-400" CssClass="table mytable" Style="color: black;" AutoGenerateColumns="false" OnRowCommand="gvInquiryList_RowCommand">
                    <Columns>
                        <asp:BoundField DataField="Name" HeaderText="Name" />
                        <asp:BoundField DataField="Email" HeaderText="Email" />
                        <asp:BoundField DataField="MobileNo" HeaderText="Mobile No." />
                        <asp:BoundField DataField="Location" HeaderText="Location" />
                        <asp:BoundField DataField="Subject" HeaderText="Message" />
                        <asp:TemplateField HeaderText="Date" ItemStyle-CssClass="text-center" HeaderStyle-CssClass="text-center">
                            <ItemTemplate>
                                <asp:Label ID="lblDate" runat="server" Text='<%#Convert.ToDateTime(Eval("CreationDate")).ToString("dd-MM-yyyy")%>'></asp:Label>
                            </ItemTemplate>
                        </asp:TemplateField>
                        <asp:TemplateField HeaderText="Is Attended" ItemStyle-CssClass="text-center" HeaderStyle-CssClass="text-center">
                            <ItemTemplate>
                                <asp:Label ID="lblIsAttended" runat="server" CssClass='<%#Convert.ToBoolean(Eval("IsAttended")) == true ? "badge badge-pill badge-info" : "badge badge-pill badge-danger" %>' Text='<%#Convert.ToBoolean(Eval("IsAttended")) == true ? "Yes" : "No" %>'></asp:Label>
                            </ItemTemplate>
                        </asp:TemplateField>
                        <asp:TemplateField ItemStyle-CssClass="text-center" HeaderText="Action" HeaderStyle-CssClass="text-center" HeaderStyle-Width="150px">
                            <ItemTemplate>
                                <asp:LinkButton ID="lbtnAttended" runat="server" CommandArgument='<%#Eval("InquiryID")%>' CommandName='<%#Convert.ToBoolean(Eval("IsAttended")) == true ? "NotAttended" : "Attended" %>' CssClass='<%#Convert.ToBoolean(Eval("IsAttended")) == true ? "fa fa-times text-danger" : "fa fa-check-square text-success" %>'></asp:LinkButton>
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
