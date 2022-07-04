<%@ Page Title="" Language="C#" MasterPageFile="~/ClientPanel/ClientPanel.master" AutoEventWireup="true" CodeFile="Rating.aspx.cs" Inherits="ClientPanel_Rating" %>

<asp:Content ID="Content1" ContentPlaceHolderID="cphHead" runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="cphBody" runat="Server">
    <asp:ScriptManager ID="sm" runat="server" EnablePageMethods="true"></asp:ScriptManager>
    <section class="page-banner " style="background-image: url(wp-content/uploads/2019/06/4-1.jpg);">
        <div class="auto-container">
            <div class="inner-container clearfix">
                <h1 id="demo">Rate Our Services</h1>
                <ul class="bread-crumb clearfix">
                    <li>
                        <a href="../index.html">Home</a>
                    </li>
                    <li>Services</li>
                </ul>
            </div>
        </div>
    </section>
    <section class="kc-elm kc-css-932547 kc_row">
        <div class="kc-row-container  kc-container">
            <div class="kc-wrap-columns">
                <div class="kc-elm kc-css-749461 kc_col-sm-12 kc_column kc_col-sm-12">
                    <div class="kc-col-container">
                        <asp:UpdatePanel ID="upServiceProvider" runat="server">
                            <ContentTemplate>
                                <section class="services-section-three pt-3">
                                    <div class="auto-container">
                                        <div class="row pb-3">
                                            <asp:Label ID="lblMobileNo" runat="server"></asp:Label>
                                            <asp:HiddenField ID="hfMobileNo" runat="server"/>
                                            <asp:Button ID="btnClick" runat="server" OnClick="btnClick_Click" />
                                        </div>
                                        <div class="row">
                                            <asp:Repeater ID="rpServiceProvider" runat="server" OnItemCommand="rpServiceProvider_ItemCommand" OnItemDataBound="rpServiceProvider_ItemDataBound">
                                                <ItemTemplate>
                                                    <div class="service-block-three col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                                                        <div class="inner-box">
                                                            <asp:Image ID="imgProfilePhoto" runat="server" Height="250px" ImageUrl='<%# Eval("ProfilePhotoPath") %>' />
                                                            <asp:HiddenField ID="hfServiceProviderServicesID" runat="server" Value='<%# Eval("ServiceProviderServicesID") %>' />
                                                            <asp:HiddenField ID="hfServiceProviderID" runat="server" Value='<%# Eval("ServiceProviderID") %>' />
                                                            <asp:HiddenField ID="hfReview" runat="server" Value='<%# Eval("Review") %>' />
                                                            <h4 class="pt-4">
                                                                <a href="#"><%# Eval("ServiceProviderName") %></a>
                                                            </h4>
                                                            <div class="text">
                                                                Mobile No.
                                                                <asp:Label ID="lblMobileNo" runat="server" Text='<%#Eval("MobileNo").ToString() == String.Empty ? " - " : Eval("MobileNo")%>'></asp:Label><br />
                                                                <%# Eval("Specialist") %><br />
                                                                <asp:LinkButton ID="lbtnStar1" runat="server" CommandArgument='<%# Eval("ServiceProviderServicesID") %>' CommandName="1" CssClass="star1 fa fa-star notchecked" Style="font-size: 25px; text-decoration: none;"></asp:LinkButton>
                                                                <asp:LinkButton ID="lbtnStar2" runat="server" CommandArgument='<%# Eval("ServiceProviderServicesID") %>' CommandName="2" CssClass="star2 fa fa-star notchecked" Style="font-size: 25px; text-decoration: none;"></asp:LinkButton>
                                                                <asp:LinkButton ID="lbtnStar3" runat="server" CommandArgument='<%# Eval("ServiceProviderServicesID") %>' CommandName="3" CssClass="star3 fa fa-star notchecked" Style="font-size: 25px; text-decoration: none;"></asp:LinkButton>
                                                                <asp:LinkButton ID="lbtnStar4" runat="server" CommandArgument='<%# Eval("ServiceProviderServicesID") %>' CommandName="4" CssClass="star4 fa fa-star notchecked" Style="font-size: 25px; text-decoration: none;"></asp:LinkButton>
                                                                <asp:LinkButton ID="lbtnStar5" runat="server" CommandArgument='<%# Eval("ServiceProviderServicesID") %>' CommandName="5" CssClass="star5 fa fa-star notchecked" Style="font-size: 25px; text-decoration: none;"></asp:LinkButton>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </ItemTemplate>
                                            </asp:Repeater>
                                        </div>
                                    </div>
                                </section>
                            </ContentTemplate>
                        </asp:UpdatePanel>
                    </div>
                </div>
            </div>
        </div>
    </section>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="cphScript" runat="Server">
    <script>
        function myFunction() {
            getMobileNo();
        }

        function getMobileNo() {
            Swal.fire({
                title: 'Enter Mobile Number',
                html: `<input type="text" id="MobileNo" class="swal2-input" placeholder="Mobile Number">`,
                confirmButtonText: 'Submit',
                focusConfirm: false,
                preConfirm: () => {
                    var p = "[0-9]{10}";
                    var reg = new RegExp(p);
                    var mobileNo = Swal.getPopup().querySelector('#MobileNo').value
                    if (!mobileNo || !reg.test(mobileNo)) {
                        Swal.showValidationMessage(`Please enter valid Mobile Number`)
                    }
                    SetName(mobileNo);
                    return { mobileNo: mobileNo }

                }
            })

        };
    </script>
    <script type="text/javascript">
        function SetName(MobNo) {
            var label = document.getElementById("<%=lblMobileNo.ClientID %>");
            label.innerHTML = MobNo;
            document.getElementById("<%=hfMobileNo.ClientID %>").value = label.innerHTML;
            document.getElementById("<%=btnClick.ClientID %>").click();
            label.style = "display:None";
        }
    </script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <style>
        .checked {
            color: orange;
        }
        .notchecked {
            color:#f7f7f7;
        }
    </style>
</asp:Content>

