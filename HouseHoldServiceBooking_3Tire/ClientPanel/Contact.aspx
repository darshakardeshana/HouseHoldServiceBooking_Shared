<%@ Page Title="" Language="C#" MasterPageFile="~/ClientPanel/ClientPanel.master" AutoEventWireup="true" CodeFile="Contact.aspx.cs" Inherits="ClientPanel_Contact" %>

<asp:Content ID="Content1" ContentPlaceHolderID="cphHead" runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="cphBody" runat="Server">
    <section class="page-banner style-two" style="background-image: url(wp-content/uploads/2019/06/4-1.jpg);">
        <div class="auto-container">
            <div class="inner-container clearfix">
                <h1>Contact</h1>
                <ul class="bread-crumb clearfix">
                    <li>
                        <a href="../index.html">Home</a>
                    </li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    </section>
    <section class="kc-elm kc-css-363688 kc_row">
        <div class="kc-row-container">
            <div class="kc-wrap-columns">
                <div class="kc-elm kc-css-126594 kc_col-sm-12 kc_column kc_col-sm-12">
                    <div class="kc-col-container">
                        <section class="contact-map-section">
                            <div class="map-outer">
                                <div class="map-canvas">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4417.492621047759!2d70.78234253539937!3d22.43168001510091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c7a3ba783351%3A0x28dc6eea8324e9d2!2sDarshan%20Institute%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1618488959133!5m2!1sen!2sin"></iframe>
                                    <%--<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d805184.6331292129!2d144.49266890254142!3d-37.97123689954809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne+VIC%2C+Australia!5e0!3m2!1sen!2s!4v1562139577798!5m2!1sen!2s" allowfullscreen></iframe>--%>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="kc-elm kc-css-917761 kc_row">
        <div class="kc-row-container  kc-container">
            <div class="kc-wrap-columns">
                <div class="kc-elm kc-css-210892 kc_col-sm-12 kc_column kc_col-sm-12">
                    <div class="kc-col-container">
                        <section class="contact-page-section">
                            <div class="auto-container">
                                <div class="row clearfix">
                                    <div class="form-column col-lg-8 col-md-12 col-sm-12">
                                        <div class="inner-column wow fadeInRight" data-wow-delay="0ms">
                                            <div class="sec-title">
                                                <div class="title">
                                                    Home Comfort Company
                                                </div>
                                                <h2>Send a Message</h2>
                                                <%--<div class="text">
                                                    Exercitation ullamco laboris nisi ut aliquip exa aute irure dolor reprehenderit
                                                    <br>
                                                    in sed ipsum voluptate velit esse cillum.
                                                </div>--%>
                                            </div>
                                            <asp:ScriptManager runat="server" ID="sm"></asp:ScriptManager>
                                            <asp:UpdatePanel runat="server" ID="upInquiry">
                                                <Triggers>
                                                    <asp:AsyncPostBackTrigger ControlID="btnSubmit" EventName="click" />
                                                </Triggers>
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
                                                    <div class="contact-form">
                                                        <div id="contact-form">
                                                            <div role="form" class="wpcf7" id="wpcf7-f451-p446-o1" lang="en-US" dir="ltr">
                                                                <div class="screen-reader-response">
                                                                </div>
                                                                <form action="http://php7.commonsupport.com/smartman/contact/#wpcf7-f451-p446-o1" method="post" class="wpcf7-form" novalidate="novalidate">
                                                                    <div style="display: none;">
                                                                        <input type="hidden" name="_wpcf7" value="451" />
                                                                        <input type="hidden" name="_wpcf7_version" value="5.1.3" />
                                                                        <input type="hidden" name="_wpcf7_locale" value="en_US" />
                                                                        <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f451-p446-o1" />
                                                                        <input type="hidden" name="_wpcf7_container_post" value="446" />
                                                                    </div>
                                                                    <div class="row clearfix">
                                                                        <div class="col-lg-6 col-md-6 col-sm-12 form-group">
                                                                            <span class="wpcf7-form-control-wrap your-name">
                                                                                <asp:TextBox ID="txtName" runat="server" CssClass="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" placeholder="* Enter Name"></asp:TextBox>
                                                                                <%--<input type="text" name="your-name" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Your Name *" />--%>
                                                                            </span>
                                                                        </div>
                                                                        <div class="col-lg-6 col-md-6 col-sm-12 form-group">
                                                                            <span class="wpcf7-form-control-wrap your-email">
                                                                                <asp:TextBox ID="txtEmail" runat="server" CssClass="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" placeholder="* Enter Email"></asp:TextBox>
                                                                                <%--<input type="email" name="your-email" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" aria-required="true" aria-invalid="false" placeholder="Email *" />--%>
                                                                            </span>
                                                                        </div>
                                                                        <div class="col-lg-6 col-md-6 col-sm-12 form-group">
                                                                            <span class="wpcf7-form-control-wrap your-phone">
                                                                                <asp:TextBox ID="txtMobileNo" runat="server" CssClass="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" placeholder="Enter Mobile No."></asp:TextBox>
                                                                                <%--<input type="text" name="your-phone" value="" size="40" class="wpcf7-form-control wpcf7-text" aria-invalid="false" placeholder="Phone No." />--%>
                                                                            </span>
                                                                        </div>
                                                                        <div class="col-lg-6 col-md-6 col-sm-12 form-group">
                                                                            <span class="wpcf7-form-control-wrap your-location">
                                                                                <asp:TextBox ID="txtLocation" runat="server" CssClass="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" placeholder="Enter Location"></asp:TextBox>
                                                                                <%--<input type="text" name="your-location" value="" size="40" class="wpcf7-form-control wpcf7-text" aria-invalid="false" placeholder="Location" />--%>
                                                                            </span>
                                                                        </div>
                                                                        <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                                                                            <span class="wpcf7-form-control-wrap your-subject">
                                                                                <asp:TextBox ID="txtSubject" runat="server" CssClass="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" placeholder="Enter Message"></asp:TextBox>
                                                                                <%--<input type="text" name="your-subject" value="" size="40" class="wpcf7-form-control wpcf7-text" aria-invalid="false" placeholder="Subject" />--%>
                                                                            </span>
                                                                        </div>

                                                                        <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                                                                            <asp:Button ID="btnSubmit" runat="server" Text="Submit" CssClass="wpcf7-form-control wpcf7-submit theme-btn btn-style-one" OnClick="btnSubmit_Click" />
                                                                            <%--<input type="submit" value="send message" class="wpcf7-form-control wpcf7-submit theme-btn btn-style-one" />--%>
                                                                        </div>
                                                                    </div>
                                                                    <div class="wpcf7-response-output wpcf7-display-none">
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </ContentTemplate>
                                            </asp:UpdatePanel>
                                        </div>
                                    </div>
                                    <div class="info-column col-lg-4 col-md-12 col-sm-12">
                                        <div class="inner-column wow fadeInLeft" data-wow-delay="0ms">
                                            <ul class="contact-info-list">
                                                <li>
                                                    <strong>Address</strong>
                                                    26 Main Ringer House, NewYork, 58920 NY, United States</li>
                                                <li>
                                                    <strong>Phone</strong>
                                                    <a href="tel:+12334159872">+1 (233) 415 9872</a>
                                                    <a href="tel:080012345">Helpline: 0800 12345</a>
                                                </li>
                                                <li>
                                                    <strong>Email</strong>
                                                    <a href="mailto:info@example.com">info@example.com</a>
                                                </li>
                                                <li>
                                                    <strong>Working Hours</strong>
                                                    Mon to Sat: 9am to 6pm</li>
                                            </ul>
                                            <ul class="social-icon-one">
                                                <li>
                                                    <a href="https://twitter.com/">
                                                        <span class="fab fab-twitter"></span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://facebook.com/">
                                                        <span class="fab fab-facebook-f"></span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://linkedin.com/">
                                                        <span class="fab fab-linkedin-in"></span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://plus.google.com/">
                                                        <span class="fab fab-google-plus-g"></span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://youtube.com/">
                                                        <span class="fab fab-youtube"></span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </section>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="cphScript" runat="Server">
</asp:Content>

