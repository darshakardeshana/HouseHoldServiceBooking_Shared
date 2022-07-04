<%@ Page Title="" Language="C#" MasterPageFile="~/ClientPanel/ClientPanel.master" AutoEventWireup="true" CodeFile="Service.aspx.cs" Inherits="ClientPanel_Service" %>

<asp:Content ID="Content1" ContentPlaceHolderID="cphHead" runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="cphBody" runat="Server">
    <asp:ScriptManager ID="sm" runat="server"></asp:ScriptManager>
    <section class="page-banner " style="background-image: url(wp-content/uploads/2019/06/4-1.jpg);">
        <div class="auto-container">
            <div class="inner-container clearfix">
                <h1 id="demo">Our Services</h1>
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
                                            <asp:HiddenField ID="hfMobileNo" runat="server" />
                                            <asp:DropDownList ID="ddlServiceID" runat="server" CssClass="form-control" AutoPostBack="true" OnSelectedIndexChanged="ddlServiceID_SelectedIndexChanged">
                                                <asp:ListItem>Select Service</asp:ListItem>
                                            </asp:DropDownList>
                                        </div>
                                        <div class="row">
                                            <asp:Repeater ID="rpServiceProvider" runat="server" OnItemCommand="rpServiceProvider_ItemCommand">
                                                <ItemTemplate>
                                                    <div class="service-block-three col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                                                        <div class="inner-box">
                                                            <asp:Image ID="imgProfilePhoto" runat="server" Height="250px" ImageUrl='<%# Eval("ProfilePhotoPath") %>' />
                                                            <h4 class="pt-4">
                                                                <a href="#"><%# Eval("ServiceProviderName") %></a>
                                                            </h4>
                                                            <div class="text">
                                                                Mobile No.
                                                        <asp:Label ID="lblMobileNo" runat="server" Text='<%#Eval("MobileNo").ToString() == String.Empty ? " - " : Eval("MobileNo")%>'></asp:Label><br />
                                                                <%# Eval("Specialist") %><br />
                                                                <asp:LinkButton ID="lbtnIsSent" runat="server" CssClass='<%#Eval("IsSent").ToString() == "0"? "btn btn-outline-primary" : "btn btn-outline-primary disabled" %>' Text='<%#Eval("IsSent").ToString() == "0"? "Send Request" : "Sent <i class=\"fa fa-check\"></i>" %>' CommandArgument='<%# Eval("ServiceProviderServicesID") %>' CommandName="SendRequest" />
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
            }).then((result) => {
                Swal.fire(`
                Mobile No : ${result.value.mobileNo}
              `.trim())
            })
        };
    </script>
    <script type="text/javascript">
        function SetName(MobNo) {
            var label = document.getElementById("<%=lblMobileNo.ClientID %>");
            label.innerHTML = MobNo;
            document.getElementById("<%=hfMobileNo.ClientID %>").value = label.innerHTML;
            label.style = "display:None";
        }
    </script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
</asp:Content>

