<%@ Page Title="" Language="C#" MasterPageFile="~/Content/AdminPanel.master" AutoEventWireup="true" CodeFile="ServiceProviderAddEdit.aspx.cs" Inherits="AdminPanel_ServiceProvider_ServiceProviderAddEdit" %>

<asp:Content ID="Content1" ContentPlaceHolderID="cphPageHeaderText" runat="Server">
    <asp:Label runat="server" ID="lblPageHeader"></asp:Label>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="cphPageContent" runat="Server">
    <asp:ScriptManager runat="server" ID="sm"></asp:ScriptManager>
    <asp:UpdatePanel runat="server" ID="upCountryAddEdit">
        <Triggers>
            <asp:PostBackTrigger ControlID="btnAdd" />
        </Triggers>
        <ContentTemplate>
            <div class="container p-5" style="background: white; border: 1px dotted black">
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

                <div class="row">
                    <div class="col">
                        <h5><span class="label label-primary">Personal Details</span></h5>
                    </div>
                </div>
                <div class="row mb-2">
                    <div class="col-md-8 offset-md-2">
                        <span class="text-danger">*</span>
                        <asp:Label ID="lblUserName" runat="server">UserName</asp:Label>
                        <asp:TextBox ID="txtUserName" runat="server" CssClass="form-control" placeholder="Enter Username"></asp:TextBox>
                        <asp:RequiredFieldValidator ID="rfvUserName" runat="server" ControlToValidate="txtUserName" SetFocusOnError="true" ErrorMessage="Enter Valid Username" ValidationGroup="vgServiceProvider"></asp:RequiredFieldValidator>
                    </div>
                </div>

                <div class="row mb-2">
                    <div class="col-md-4 offset-md-2">
                        <span class="text-danger">*</span>
                        <asp:Label ID="lblPassword" runat="server">Password</asp:Label>
                        <asp:TextBox ID="txtPassword" runat="server" CssClass="form-control" placeholder="Enter Password" type="password"></asp:TextBox>
                        <asp:RequiredFieldValidator ID="rfvPassword" runat="server" ControlToValidate="txtPassword" SetFocusOnError="true" ErrorMessage="Enter Valid Password" ValidationGroup="vgServiceProvider"></asp:RequiredFieldValidator>
                    </div>
                    <div class="col-md-4">
                        <span class="text-danger">*</span>
                        <asp:Label ID="lblReTypePassword" runat="server">Re-Type Password</asp:Label>
                        <asp:TextBox ID="txtReTypePassword" runat="server" CssClass="form-control" placeholder="Re-Type Password" type="password"></asp:TextBox>
                        <asp:RequiredFieldValidator ID="rfvReTypePassword" runat="server" ControlToValidate="txtReTypePassword" SetFocusOnError="true" ErrorMessage="Re-Type Password" ValidationGroup="vgServiceProvider"></asp:RequiredFieldValidator>
                        <asp:CompareValidator ID="cvPassword" runat="server" ControlToValidate="txtReTypePassword" ControlToCompare="txtPassword" Operator="Equal" ErrorMessage="Password do not match" ValidationGroup="vgServiceProvider"></asp:CompareValidator>
                    </div>
                </div>

                <div class="row mb-2">
                    <div class="col-md-8 offset-md-2">
                        <span class="text-danger">*</span>
                        <asp:Label ID="lblServiceProviderName" runat="server">Name</asp:Label>
                        <asp:TextBox ID="txtServiceProviderName" runat="server" CssClass="form-control" placeholder="Enter Name"></asp:TextBox>
                        <asp:RequiredFieldValidator ID="rfvServiceProviderName" runat="server" ControlToValidate="txtServiceProviderName" SetFocusOnError="true" ErrorMessage="Enter Valid Name" ValidationGroup="vgServiceProvider"></asp:RequiredFieldValidator>
                        <asp:RegularExpressionValidator ID="revServiceProviderName" runat="server" ControlToValidate="txtServiceProviderName" ValidationExpression="[a-zA-Z ]*" ErrorMessage="Enter Valid Name" ValidationGroup="vgServiceProvider"></asp:RegularExpressionValidator>
                    </div>
                </div>

                <div class="row mb-2">
                    <div class="col-md-4 offset-md-2">
                        <asp:Label ID="lblMobileNo" runat="server">Mobile Number</asp:Label>
                        <asp:TextBox ID="txtMobileNo" runat="server" CssClass="form-control" placeholder="Enter Mobile "></asp:TextBox>
                        <asp:RegularExpressionValidator ID="revMobileNo" runat="server" ControlToValidate="txtMobileNo" ValidationExpression="[0-9]{10}" ErrorMessage="Enter Valid Mobile Number" ValidationGroup="vgServiceProvider"></asp:RegularExpressionValidator>
                    </div>
                    <div class="col-md-4">
                        <asp:Label ID="lblDOB" runat="server">Birthdate</asp:Label>
                        <asp:TextBox ID="txtDOB" runat="server" CssClass="form-control" placeholder="DD-MM-YYYY" type="date"></asp:TextBox>
                        <asp:CompareValidator ID="cvDOB" runat="server" ControlToValidate="txtDOB" Operator="DataTypeCheck" Type="Date" ErrorMessage="Enter Valid Date" ValidationGroup="vgServiceProvider"></asp:CompareValidator>
                    </div>
                </div>
                <hr />
                <div class="row">
                    <div class="col">
                        <h5><span class="label label-primary">Home Address</span></h5>
                    </div>
                </div>
                <div class="row mb-2">
                    <div class="col-md-8 offset-md-2">
                        <asp:Label ID="lblHomeAddress" runat="server">Home Address</asp:Label>
                        <asp:TextBox ID="txtHomeAddress" runat="server" CssClass="form-control" placeholder="Enter Home Address"></asp:TextBox>
                    </div>
                </div>

                <div class="row mb-2">
                    <div class="col-md-4 offset-md-2">
                        <asp:Label ID="lblHomeCountry" runat="server">Country</asp:Label>
                        <asp:DropDownList ID="ddlHomeCountryID" runat="server" CssClass="form-control" AutoPostBack="true" OnSelectedIndexChanged="ddlHomeCountryID_SelectedIndexChanged"></asp:DropDownList>
                    </div>
                    <div class="col-md-4">
                        <asp:Label ID="lblHomeState" runat="server">State</asp:Label>
                        <asp:DropDownList ID="ddlHomeStateID" runat="server" CssClass="form-control" AutoPostBack="true" OnSelectedIndexChanged="ddlHomeStateID_SelectedIndexChanged"></asp:DropDownList>
                    </div>
                </div>

                <div class="row mb-2">
                    <div class="col-md-4 offset-md-2">
                        <asp:Label ID="lblHomeCity" runat="server">City</asp:Label>
                        <asp:DropDownList ID="ddlHomeCityID" runat="server" CssClass="form-control"></asp:DropDownList>
                    </div>
                    <div class="col-md-4">
                        <asp:Label ID="lblHomePincode" runat="server">Pincode</asp:Label>
                        <asp:TextBox ID="txtHomePincode" runat="server" CssClass="form-control" placeholder="Enter Pincode"></asp:TextBox>
                    </div>
                </div>
                <hr />
                <div class="row">
                    <div class="col">
                        <h5><span class="label label-primary">Work Address</span></h5>
                    </div>
                </div>
                <div class="row mb-2">
                    <div class="col-md-8 offset-md-2">
                        <asp:CheckBox ID="cbCopyAddress" runat="server" AutoPostBack="true" OnCheckedChanged="cbCopyAddress_CheckedChanged" Text="&nbsp; Copy Home Address" />
                    </div>
                </div>
                <div class="row mb-2">
                    <div class="col-md-8 offset-md-2">
                        <span class="text-danger">*</span>
                        <asp:Label ID="lblWorkAddress" runat="server">Work Address</asp:Label>
                        <asp:TextBox ID="txtWorkAddress" runat="server" CssClass="form-control" placeholder="Enter Work Address"></asp:TextBox>
                        <asp:RequiredFieldValidator ID="rfvWorkAddress" ControlToValidate="txtWorkAddress" runat="server" ValidationGroup="vgServiceProvider" ErrorMessage="Enter Valid Address"></asp:RequiredFieldValidator>
                    </div>
                </div>

                <div class="row mb-2">
                    <div class="col-md-4 offset-md-2">
                        <span class="text-danger">*</span>
                        <asp:Label ID="lblWorkCountry" runat="server">Country</asp:Label>
                        <asp:DropDownList ID="ddlWorkCountryID" runat="server" CssClass="form-control" AutoPostBack="true" OnSelectedIndexChanged="ddlWorkCountryID_SelectedIndexChanged"></asp:DropDownList>
                        <asp:CompareValidator ID="cvWorkCountryID" runat="server" ControlToValidate="ddlWorkCountryID" Operator="NotEqual" ValidationGroup="vgServiceProvider" ValueToCompare="-1" ErrorMessage="Select Valid Country"></asp:CompareValidator>
                    </div>
                    <div class="col-md-4">
                        <span class="text-danger">*</span>
                        <asp:Label ID="lblWorkState" runat="server">State</asp:Label>
                        <asp:DropDownList ID="ddlWorkStateID" runat="server" CssClass="form-control" AutoPostBack="true" OnSelectedIndexChanged="ddlWorkStateID_SelectedIndexChanged"></asp:DropDownList>
                        <asp:CompareValidator ID="cvWorkStateID" runat="server" ControlToValidate="ddlWorkStateID" Operator="NotEqual" ValidationGroup="vgServiceProvider" ValueToCompare="-1" ErrorMessage="Select Valid State"></asp:CompareValidator>
                    </div>
                </div>

                <div class="row mb-2">
                    <div class="col-md-4 offset-md-2">
                        <span class="text-danger">*</span>
                        <asp:Label ID="lblWorkCity" runat="server">City</asp:Label>
                        <asp:DropDownList ID="ddlWorkCityID" runat="server" CssClass="form-control"></asp:DropDownList>
                        <asp:CompareValidator ID="cvWorkCityID" runat="server" ControlToValidate="ddlWorkCityID" Operator="NotEqual" ValidationGroup="vgServiceProvider" ValueToCompare="-1" ErrorMessage="Select Valid City"></asp:CompareValidator>
                    </div>
                    <div class="col-md-4">
                        <span class="text-danger">*</span>
                        <asp:Label ID="lblWorkPincode" runat="server">Pincode</asp:Label>
                        <asp:TextBox ID="txtWorkPincode" runat="server" CssClass="form-control" placeholder="Enter Pincode"></asp:TextBox>
                        <asp:RequiredFieldValidator ID="rfvWorkPincode" runat="server" ControlToValidate="txtWorkPincode" ErrorMessage="Enter Valid Pincode" ValidationGroup="vgServiceProvider"></asp:RequiredFieldValidator>
                        <asp:RegularExpressionValidator ID="revWorkPincode" runat="server" ControlToValidate="txtWorkPincode" ErrorMessage="Enter Valid Pincode" ValidationExpression="[0-9]+"></asp:RegularExpressionValidator>
                    </div>
                </div>
                <hr />
                <div class="row">
                    <div class="col">
                        <h5><span class="label label-primary">Other Details</span></h5>
                    </div>
                </div>
                <div class="row mb-2">
                    <div class="col-md-8 offset-md-2">
                        <asp:Label ID="lblAadharCard" runat="server">Aadhar Card</asp:Label>
                        <asp:TextBox ID="txtAadharCard" runat="server" CssClass="form-control" placeholder="Enter Aadhar No."></asp:TextBox>
                        <asp:RegularExpressionValidator ID="revAadharCard" runat="server" ControlToValidate="txtAadharCard" ErrorMessage="Enter Valid Aadhar Card No." ValidationExpression="[0-9]{12}"></asp:RegularExpressionValidator>
                    </div>
                </div>

                <div class="row mb-2">
                    <div class="col-md-8 offset-md-2">
                        <asp:Label ID="lblPANCardNo" runat="server">PAN Card</asp:Label>
                        <asp:TextBox ID="txtPANCardNo" runat="server" CssClass="form-control" placeholder="Enter PAN Card No."></asp:TextBox>
                        <asp:RegularExpressionValidator ID="revPANCardNo" runat="server" ControlToValidate="txtPANCardNo" ErrorMessage="Enter Valid PAN Card No." ValidationExpression="[A_Z]{5}[0-9]{4}[A_Z]{1}" ValidationGroup="vgServiceProvider"></asp:RegularExpressionValidator>
                    </div>
                </div>

                <div class="row mb-2">
                    <div class="col-md-8 offset-md-2">
                        <asp:Label ID="lblGSTNo" runat="server">GST No.</asp:Label>
                        <asp:TextBox ID="txtGSTNo" runat="server" CssClass="form-control" placeholder="Enter GST No."></asp:TextBox>
                        <asp:RegularExpressionValidator ID="revGSTNo" runat="server" ControlToValidate="txtGSTNo" ErrorMessage="Enter Valid GST No." ValidationExpression="[0-9]{2}[A-Z0-9]{11}[Z]{1}[A-Z0-9]{1}" ValidationGroup="vgServiceProvider"></asp:RegularExpressionValidator>
                    </div>
                </div>

                <div class="row mb-2">
                    <div class="col-md-8 offset-md-2">
                        <asp:Label ID="lblBank" runat="server">Bank</asp:Label>
                        <asp:DropDownList ID="ddlBankID" runat="server" OnSelectedIndexChanged="ddlBankID_SelectedIndexChanged" AutoPostBack="true" CssClass="form-control"></asp:DropDownList>
                    </div>
                </div>

                <div class="row mb-2">
                    <div class="col-md-4 offset-md-2">
                        <asp:Label ID="lblAccountNo" runat="server">Account No.</asp:Label>
                        <asp:TextBox ID="txtAccountNo" runat="server" CssClass="form-control" placeholder="Enter Account No." Enabled="false"></asp:TextBox>
                        <asp:RegularExpressionValidator ID="revAccountNo" runat="server" ControlToValidate="txtAccountNo" ErrorMessage="Enter Valid Account No." ValidationExpression="[0-9]*" ValidationGroup="vgServiceProvider"></asp:RegularExpressionValidator>
                    </div>
                    <div class="col-md-4">
                        <asp:Label ID="lblIFSCCode" runat="server">IFSC Code</asp:Label>
                        <asp:TextBox ID="txtIFSCCode" runat="server" CssClass="form-control" placeholder="Enter IFSC Code" Enabled="false"></asp:TextBox>
                        <asp:RegularExpressionValidator ID="revIFSCCode" runat="server" ControlToValidate="txtIFSCCode" ErrorMessage="Enter Valid IFSC Code" ValidationExpression="^[A-Z]{4}0[A-Z0-9]{6}$" ValidationGroup="vgServiceProvider"></asp:RegularExpressionValidator>
                    </div>
                </div>

                <div class="row mb-2">
                    <div class="col-md-8 offset-md-2">
                        <asp:Label ID="lblProfilePhotoPath" runat="server">Choose Your ProilePicture (Optional)</asp:Label>.
                <asp:FileUpload ID="fuProfilePhotoPath" runat="server" CssClass="form-control" />
                        <asp:RegularExpressionValidator ID="revFileUpload" runat="server" ErrorMessage="Upload Only (.jpeg or .png) File" ValidationExpression="([a-zA-Z0-9\s_\\.\-:])+(.png|.PNG|.jpg|.JPG|.jpeg|.JPEG)$" ForeColor="Red" Display="Dynamic" ValidationGroup="vgServiceProvider" ControlToValidate="fuProfilePhotoPath"></asp:RegularExpressionValidator>
                    </div>
                </div>

                <hr />
                <div class="row mb-2">
                    <div class="col-md-12">
                        <asp:CheckBox ID="cbTermsAndCondition" runat="server" /><asp:Label ID="lblTermsAndCondition" runat="server" CssClass="ml-2" Text="I here Agree to Terms and Condition of House Hold Service Booking"></asp:Label>
                    </div>
                </div>
                <div class="row mb-2">
                    <div class="col-md-12">
                        <asp:Button ID="btnAdd" runat="server" CssClass="btn btn-outline-success mr-3" OnClick="btnAdd_Click" Text="Add" />
                        <asp:HyperLink ID="hlCancel" runat="server" CssClass="btn btn-outline-danger" NavigateUrl="~/AdminPanel/ServiceProvider/ServiceProviderList.aspx" Text="Cancel"></asp:HyperLink>
                    </div>
                </div>
            </div>
        </ContentTemplate>
    </asp:UpdatePanel>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="cphScriptBlock" runat="Server">
</asp:Content>


