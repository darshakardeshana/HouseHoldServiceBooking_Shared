<%@ Page Title="" Language="C#" MasterPageFile="~/Content/AdminPanel.master" AutoEventWireup="true" CodeFile="RatingAddEdit.aspx.cs" Inherits="AdminPanel_Rating_RatingAddEdit" %>

<asp:Content ID="Content1" ContentPlaceHolderID="cphPageHeaderText" runat="Server">
    <asp:label runat="server" id="lblPageHeader"></asp:label>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="cphPageContent" runat="Server">
    <asp:scriptmanager runat="server" id="sm"></asp:scriptmanager>
    <asp:updatepanel runat="server" id="upRatingAddEdit">
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
                    Rating
                </div>
                <div class="col-md-4 col-sm-12">
                    <asp:LinkButton ID="Star1" runat="server" CssClass="star1 fa fa-star-o" Style="font-size: 25px; text-decoration: none;" OnClick="Star1_Click"></asp:LinkButton>
                    <asp:LinkButton ID="Star2" runat="server" CssClass="star2 fa fa-star-o" Style="font-size: 25px; text-decoration: none;" OnClick="Star2_Click"></asp:LinkButton>
                    <asp:LinkButton ID="Star3" runat="server" CssClass="star3 fa fa-star-o" Style="font-size: 25px; text-decoration: none;" OnClick="Star3_Click"></asp:LinkButton>
                    <asp:LinkButton ID="Star4" runat="server" CssClass="star4 fa fa-star-o" Style="font-size: 25px; text-decoration: none;" OnClick="Star4_Click"></asp:LinkButton>
                    <asp:LinkButton ID="Star5" runat="server" CssClass="star5 fa fa-star-o" Style="font-size: 25px; text-decoration: none;" OnClick="Star5_Click"></asp:LinkButton>
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-md-2 col-sm-12 text-md-right text-sm-left">
                    Service Provider 
                </div>
                <div class="col-md-4 col-sm-12">
                    <asp:DropDownList runat="server" ID="ddlServiceProviderID" OnSelectedIndexChanged="ddlServiceProviderID_SelectedIndexChanged" AutoPostBack="true" CssClass="form-control"></asp:DropDownList>
                    <asp:CompareValidator runat="server" ID="cvServiceProviderID" ControlToValidate="ddlServiceProviderID" ValueToCompare="-1" ValidationGroup="vgRating" Operator="NotEqual" ErrorMessage="Select Valid Service Provider"></asp:CompareValidator>
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-md-2 col-sm-12 text-md-right text-sm-left">
                    Service
                </div>
                <div class="col-md-4 col-sm-12">
                    <asp:DropDownList runat="server" ID="ddlServiceProviderServiceID" CssClass="form-control"></asp:DropDownList>
                    <asp:CompareValidator runat="server" ID="cvServiceProviderServiceID" ControlToValidate="ddlServiceProviderServiceID" ValueToCompare="-1" ValidationGroup="vgRating" Operator="NotEqual" ErrorMessage="Select Valid Service"></asp:CompareValidator>
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-md-2 col-sm-12 text-md-right text-sm-left">
                    Person Name
                </div>
                <div class="col-md-4 col-sm-12">
                    <asp:TextBox runat="server" ID="txtPersonName" CssClass="form-control" placeholder="Enter Person name"></asp:TextBox>
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-md-2 col-sm-12 text-md-right text-sm-left">
                    Comment
                </div>
                <div class="col-md-4 col-sm-12">
                    <asp:TextBox runat="server" ID="txtComment" CssClass="form-control" placeholder="Enter Comment" TextMode="MultiLine" Rows="2"></asp:TextBox>
                </div>
            </div>

            <div class="row mb-2 mt-4">
                <div class="col-md-2 col-sm-12 text-md-right text-sm-left">
                    <asp:Button runat="server" ID="btnAdd" OnClick="btnAdd_Click" Text="Add" ValidationGroup="vgRating" CssClass="btn btn-outline-success" />
                </div>
                <div class="col-md-4 col-sm-12">
                    <asp:HyperLink runat="server" ID="hlCancel" NavigateUrl="~/AdminPanel/Rating/RatingList.aspx" Text="Cancel" CssClass="btn btn-outline-danger" />
                </div>
            </div>
        </ContentTemplate>
    </asp:updatepanel>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="cphScriptBlock" runat="Server">
</asp:Content>

