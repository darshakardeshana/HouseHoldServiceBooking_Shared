<%@ Page Title="" Language="C#" MasterPageFile="~/Content/ServiceProviderPanel.master" AutoEventWireup="true" CodeFile="ServiceProviderServicesAddEdit.aspx.cs" Inherits="ServiceProviderPanel_ServiceProviderServices_ServiceProviderServicesAddEdit" %>

<asp:Content ID="Content1" ContentPlaceHolderID="cphPageHeaderText" runat="Server">
    <asp:Label runat="server" ID="lblPageHeader"></asp:Label>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="cphPageContent" runat="Server">
    <asp:ScriptManager runat="server" ID="sm"></asp:ScriptManager>
    <asp:UpdatePanel runat="server" ID="upCountryAddEdit">
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
                    Provider Username
                </div>
                <div class="col-md-4 col-sm-12">
                    <asp:DropDownList ID="ddlServiceProviderID" runat="server" OnSelectedIndexChanged="ddlServiceProviderID_SelectedIndexChanged" AutoPostBack="true" CssClass="form-control"></asp:DropDownList>
                </div>
            </div>

            <div id="divService" runat="server" visible="false">
                <hr />
                <div class="row mb-2">
                    <div class="col-md-12">
                        <h5>Add Services</h5>
                    </div>
                </div>
                <div class="row mb-2">
                    <div class="col-md-1 offset-1 col-sm-12 text-md-right text-sm-left">
                        Service
                    </div>
                    <div class="col-md-4 col-sm-12">
                        <asp:DropDownList ID="ddlServiceID" runat="server" CssClass="form-control"></asp:DropDownList>
                        <asp:CompareValidator ID="cvServiceID" runat="server" ControlToValidate="ddlServiceID" ValueToCompare="-1" Operator="NotEqual" ValidationGroup="vgService" ErrorMessage="Select Valid Service"></asp:CompareValidator>
                    </div>

                    <div class="col-md-1 col-sm-12 text-md-right text-sm-left">
                        Rate
                    </div>
                    <div class="col-md-4 col-sm-12">
                        <asp:TextBox runat="server" ID="txtRate" CssClass="form-control" placeholder="Enter Rate"></asp:TextBox>
                        <asp:RequiredFieldValidator runat="server" ID="rfvRate" CssClass="text-danger" Display="Dynamic" ErrorMessage="Enter Valid ok Rate" ValidationGroup="vgService" ControlToValidate="txtRate"></asp:RequiredFieldValidator>
                        <asp:RegularExpressionValidator ID="revRate" runat="server" ErrorMessage="Enter Valid Rate" ValidationExpression="[0-9.]*" ControlToValidate="txtRate"></asp:RegularExpressionValidator>
                    </div>
                </div>
                <div class="row mb-1">
                    <div class="col-md-1 offset-1 col-sm-12 text-md-right text-sm-left">
                        Description
                    </div>
                    <div class="col-md-4 col-sm-12">
                        <asp:TextBox runat="server" TextMode="MultiLine" Rows="3" ID="txtDescription" placeholder="Enter Description" CssClass="form-control"></asp:TextBox>
                    </div>

                    <div class="col-md-1 col-sm-12 text-md-right text-sm-left">
                        Specialist
                    </div>
                    <div class="col-md-4 col-sm-12">
                        <asp:TextBox runat="server" ID="txtSpecialist" TextMode="MultiLine" Rows="3" CssClass="form-control" placeholder="Enter Specialist"></asp:TextBox>
                    </div>
                </div>
                <div class="row mb-1">
                    <div class="col-md-11 text-right">
                        <asp:Button ID="btnAdd" runat="server" CssClass="btn btn-outline-primary mt-2 mb-2" OnClick="btnAdd_Click" Text="Add" ValidationGroup="vgService" />
                    </div>
                </div>

                <div class="row" id="divDataTable" runat="server" visible="false">
                    <div class="col-md-12 table-responsive">
                        <table class="table table-hover table-bordered">
                            <thead class="bg-light">
                                <asp:HiddenField ID="hfKey" runat="server" Value="" />
                                <th>Sr no.</th>
                                <th>Service Name</th>
                                <th>Rate</th>
                                <th>Description</th>
                                <th>Specialist</th>
                                <th class="text-center">Action</th>
                            </thead>
                            <tbody>
                                <asp:Repeater ID="rpData1" runat="server" OnItemCommand="rpData_ItemCommand">
                                    <ItemTemplate>
                                        <tr>
                                            <td>
                                                <asp:HiddenField ID="hfServiceID" runat="server" Value='<%#Eval("ServiceID") %>' />
                                                <%#Eval("Key") %>
                                            </td>
                                            <td>
                                                <%#Eval("ServiceName") %>
                                            </td>
                                            <td>
                                                <%#Eval("Rate") %>
                                            </td>
                                            <td>
                                                <%#Eval("Description") %>
                                            </td>
                                            <td>
                                                <%#Eval("Specialist") %>
                                            </td>
                                            <td class="text-center">
                                                <asp:LinkButton ID="lbtnLock" runat="server" CssClass="fas fa-lock text-danger" ToolTip="Edit/Delete from List Page"></asp:LinkButton>
                                            </td>
                                        </tr>
                                    </ItemTemplate>
                                </asp:Repeater>
                                <asp:Repeater ID="rpData" runat="server" OnItemCommand="rpData_ItemCommand">
                                    <ItemTemplate>
                                        <tr>
                                            <td>
                                                <asp:HiddenField ID="hfServiceID" runat="server" Value='<%#Eval("ServiceID") %>' />
                                                <%#Eval("Key") %>
                                            </td>
                                            <td>
                                                <%#Eval("ServiceName") %>
                                            </td>
                                            <td>
                                                <%#Eval("Rate") %>
                                            </td>
                                            <td>
                                                <%#Eval("Description") %>
                                            </td>
                                            <td>
                                                <%#Eval("Specialist") %>
                                            </td>
                                            <td class="text-center">
                                                <asp:LinkButton ID="lbtnEdit" runat="server" CssClass="fas fa-edit text-warning mr-2" CommandArgument='<%#Eval("Key") %>' CommandName="EditRecord"></asp:LinkButton>
                                                <asp:LinkButton ID="lbtnDelete" runat="server" CssClass="fas fa-trash-alt text-danger" CommandArgument='<%#Eval("Key") %>' CommandName="DeleteRecord"></asp:LinkButton>
                                            </td>
                                        </tr>
                                    </ItemTemplate>
                                </asp:Repeater>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="row mb-2 mt-4">
                <div class="col-md-2 col-sm-12 text-md-right text-sm-left">
                    <asp:Button runat="server" ID="btnSave" Text="Save" OnClick="btnSave_Click" CssClass="btn btn-outline-success" />
                </div>
                <div class="col-md-4 col-sm-12">
                    <asp:HyperLink runat="server" ID="hlCancel" NavigateUrl="~/ServiceProviderPanel/ServiceProviderServices/ServiceProviderServicesList.aspx" Text="Cancel" CssClass="btn btn-outline-danger" />
                </div>
            </div>
        </ContentTemplate>
    </asp:UpdatePanel>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="cphScriptBlock" runat="Server">
</asp:Content>


