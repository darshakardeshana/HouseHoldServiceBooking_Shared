<%@ Page Title="" Language="C#" MasterPageFile="~/Content/AdminPanel.master" AutoEventWireup="true" CodeFile="ServiceProviderList.aspx.cs" Inherits="AdminPanel_ServiceProvider_ServiceProviderList" %>

<asp:Content ID="Content1" ContentPlaceHolderID="cphPageHeaderText" runat="Server">
    Service Provider List
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="cphPageContent" runat="Server">
    <asp:ScriptManager runat="server" ID="sm"></asp:ScriptManager>
    <asp:UpdatePanel runat="server" ID="upServiceProviderList">
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
                    <asp:HyperLink ID="hlServiceProviderAddEdit" runat="server" NavigateUrl="~/AdminPanel/ServiceProvider/ServiceProviderAddEdit.aspx" CssClass="btn btn-outline-primary" Text="Add ServiceProvider"></asp:HyperLink>
                </div>
            </div>
            <div class="table-responsive">
                <asp:GridView runat="server" ID="gvServiceProviderList" HeaderStyle-CssClass="bg-gray-400" CssClass="table mytable" Style="color: black;" AutoGenerateColumns="false" OnRowCommand="gvServiceProviderList_RowCommand">
                    <Columns>
                        <asp:BoundField DataField="ServiceProviderName" HeaderText="Name" />
                        <asp:BoundField DataField="MobileNo" HeaderText="Number" />
                        <asp:BoundField DataField="DOB" HeaderText="Birth Date" DataFormatString="{0:dd/MM/yyyy}" ControlStyle-CssClass="text-nowrap" ItemStyle-Width="120px" />
                        <asp:BoundField DataField="Password" HeaderText="Password" />
                        <asp:BoundField DataField="UserName" HeaderText="UserName" />
                        <%--<asp:BoundField DataField="HomeAddress" HeaderText="Home Address" />
                <asp:BoundField DataField="WorkAddress" HeaderText="Work Address" />
                <asp:BoundField DataField="HomeCountry" HeaderText="Home Country" />
                <asp:BoundField DataField="WorkCountry" HeaderText="Work Country" />
                <asp:BoundField DataField="HomeState" HeaderText="Home State" />
                <asp:BoundField DataField="WorkCity" HeaderText="Work City" />
                <asp:BoundField DataField="HomeCity" HeaderText="Home City" />
                <asp:BoundField DataField="AadharCard" HeaderText="AadharCard" />
                <asp:BoundField DataField="PANCardNo" HeaderText="PANCardNo" />
                <asp:BoundField DataField="GSTNo" HeaderText="GSTNo" />
                <asp:BoundField DataField="Bank" HeaderText="Bank" />
                <asp:BoundField DataField="AccountNo" HeaderText=" Acc no" />
                <asp:BoundField DataField="IFSCCode" HeaderText="IFSC Code" />--%>
                        <asp:TemplateField ItemStyle-CssClass="text-center" HeaderText="Action" HeaderStyle-CssClass="text-center" HeaderStyle-Width="150px">
                            <ItemTemplate>
                                <asp:LinkButton ID="btnVeiw" CssClass="fas fa-eye text-primary mr-2" CommandName="ViewRecord" CommandArgument='<%# Eval("ServiceProviderID") %>' runat="server"></asp:LinkButton>
                                <asp:LinkButton ID="btnDelete" CssClass="fas fa-trash-alt text-danger mr-2" CommandName="DeleteRecord" CommandArgument='<%# Eval("ServiceProviderID") %>' runat="server" OnClientClick="if ( ! UserDeleteConfirmation()) return false;"></asp:LinkButton>
                                <asp:HyperLink ID="hlUpdate" NavigateUrl='<%# "~/AdminPanel/ServiceProvider/ServiceProviderAddEdit.aspx?ServiceProviderID=" +Eval("ServiceProviderID") %>' CssClass="fas fa-edit text-warning mr-2" runat="server"></asp:HyperLink>
                            </ItemTemplate>
                        </asp:TemplateField>
                    </Columns>
                </asp:GridView>
            </div>

            <div class="modal fade bd-example-modal-lg" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg bg-white" role="document">
                    <div class="modal-content">
                        <div class="modal-header .bg-grey-600">
                            <h5 class="modal-title" id="exampleModalLabel">Service Provider Details</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body bg.white">
                            <div class="row">
                                <div class="col-md-4 p-3 text-center">
                                    <asp:Image ID="imgProfilePhotoPath" runat="server" Height="250" Width="200" Style="border-radius: 50px" CssClass="img-fluid bg-light" />
                                </div>
                                <div class="col-md-8 p-3">
                                    <div class="card mb-3">
                                        <div class="card-header bg-gray-400">Personal Details</div>
                                        <div class="card-body pt-0">
                                            <table class="card-text table-borderless table text-gray-900" cellpadding="10px" style="padding-top: 0px">
                                                <tr>
                                                    <td>Username</td>
                                                    <td>:</td>
                                                    <th>
                                                        <asp:Label runat="server" ID="lblUserName"></asp:Label>
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <td>Service Provider Name</td>
                                                    <td>:</td>
                                                    <th>
                                                        <asp:Label runat="server" ToolTip="hello" ID="lblServiceProviderName"></asp:Label>
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <td>DOB</td>
                                                    <td>:</td>
                                                    <th>
                                                        <asp:Label runat="server" ID="lblDOB"></asp:Label>
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <td>Mobile No.</td>
                                                    <td>:</td>
                                                    <th>
                                                        <asp:Label runat="server" ID="lblMobileNo"></asp:Label>
                                                    </th>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="card mb-3">
                                        <div class="card-header bg-gray-400">Home Address</div>
                                        <div class="card-body pt-0">
                                            <table class="card-text table-borderless table text-gray-900" cellpadding="10px" style="padding-top: 0px">
                                                <tr>
                                                    <td>Address</td>
                                                    <td>:</td>
                                                    <td>
                                                        <asp:Label runat="server" ID="lblHomeAddress"></asp:Label>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>City</td>
                                                    <td>:</td>
                                                    <td>
                                                        <asp:Label runat="server" ID="lblHomeCity"></asp:Label>
                                                    </td>

                                                </tr>
                                                <tr>
                                                    <td>Pincode</td>
                                                    <td>:</td>
                                                    <td>
                                                        <asp:Label runat="server" ID="lblHomePincode"></asp:Label>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>State</td>
                                                    <td>:</td>
                                                    <td>
                                                        <asp:Label runat="server" ID="lblHomeState"></asp:Label>
                                                    </td>

                                                </tr>
                                                <tr>
                                                    <td>Country</td>
                                                    <td>:</td>
                                                    <td>
                                                        <asp:Label runat="server" ID="lblHomeCountry"></asp:Label>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="card mb-3">
                                        <div class="card-header bg-gray-400">Work Address</div>
                                        <div class="card-body pt-0">
                                            <table class="card-text table-borderless table text-gray-900" cellpadding="10px" style="padding-top: 0px">
                                                <tr>
                                                    <td>Address</td>
                                                    <td>:</td>
                                                    <td>
                                                        <asp:Label runat="server" ID="lblWorkAddress"></asp:Label>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>City</td>
                                                    <td>:</td>
                                                    <td>
                                                        <asp:Label runat="server" ID="lblWorkCity"></asp:Label>
                                                    </td>

                                                </tr>
                                                <tr>
                                                    <td>Pincode</td>
                                                    <td>:</td>
                                                    <td>
                                                        <asp:Label runat="server" ID="lblWorkPincode"></asp:Label>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>State</td>
                                                    <td>:</td>
                                                    <td>
                                                        <asp:Label runat="server" ID="lblWorkState"></asp:Label>
                                                    </td>

                                                </tr>
                                                <tr>
                                                    <td>Country</td>
                                                    <td>:</td>
                                                    <td>
                                                        <asp:Label runat="server" ID="lblWorkCountry"></asp:Label>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="card mb-3">
                                        <div class="card-header bg-gray-400">Other Details</div>
                                        <div class="card-body pt-0">
                                            <table class="card-text table-borderless table text-gray-900" cellpadding="10px" style="padding-top: 0px">
                                                <tr>
                                                    <td>Aadhar Card No.</td>
                                                    <td>:</td>
                                                    <td>
                                                        <asp:Label runat="server" ID="lblAadharCard"></asp:Label></td>
                                                    <td>PAN Card No.</td>
                                                    <td>:</td>
                                                    <td>
                                                        <asp:Label runat="server" ID="lblPANCardNo"></asp:Label></td>
                                                </tr>
                                                <tr>
                                                    <td>GST No.</td>
                                                    <td>:</td>
                                                    <td>
                                                        <asp:Label runat="server" ID="lblGSTNo"></asp:Label></td>
                                                </tr>
                                                <tr>
                                                    <td>Bank Name</td>
                                                    <td>:</td>
                                                    <td>
                                                        <asp:Label runat="server" ID="lblBank"></asp:Label></td>
                                                </tr>
                                                <tr>
                                                    <td>Account No.</td>
                                                    <td>:</td>
                                                    <td>
                                                        <asp:Label runat="server" ID="lblAccountNo"></asp:Label></td>
                                                    <td>IFSC Code</td>
                                                    <td>:</td>
                                                    <td>
                                                        <asp:Label runat="server" ID="lblIFSCCode"></asp:Label>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </ContentTemplate>
    </asp:UpdatePanel>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="cphScriptBlock" runat="Server">
</asp:Content>

