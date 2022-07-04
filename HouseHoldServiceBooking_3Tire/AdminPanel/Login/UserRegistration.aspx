<%@ Page Language="C#" AutoEventWireup="true" CodeFile="UserRegistration.aspx.cs" Inherits="Login_LoginPage" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <link rel="icon" type="image/png" href="~/AdminPanel/Login/assets/images/icons/favicon.ico" />
    <link rel="stylesheet" type="text/css" href="~/AdminPanel/Login/assets/vendor/bootstrap/css/bootstrap.min.css" />
    <link rel="stylesheet" type="text/css" href="~/AdminPanel/Login/assets/css/util.css" />
    <link rel="stylesheet" type="text/css" href="~/AdminPanel/Login/assets/css/main.css" />

</head>
<body>
    <div class="limiter">
        <div class="container-login100">
            <div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
                
                <form id="Form1" runat="server" class="login100-form validate-form">
                    <h2 class="text-center">HouseHold Service Booking <br /><br /></h2>
                    <span class="login100-form-title">Account Sign Up
                    </span>
                    <asp:Label ID="lblErrorMessage" CssClass="form-control text-center border-0 text-danger" runat="server"></asp:Label>
                    <asp:Label ID="lblSuccessMessage" CssClass="form-control text-center border-0 text-success" runat="server"></asp:Label>
                    <div class="wrap-input100 validate-input">
                        <asp:TextBox runat="server" ID="txtUserName" AutoPostBack="true" OnTextChanged="txtUserName_TextChanged" CssClass="input100" placeholder="UserName"></asp:TextBox>
                        <span class="focus-input100-1"></span>
                        <span class="focus-input100-2"></span>
                        <asp:RequiredFieldValidator ID="rfvUserName" runat="server" CssClass="text-danger" Display="Dynamic" ErrorMessage="UserName" ValidationGroup="vgSignUp" ControlToValidate="txtUserName"></asp:RequiredFieldValidator>
                    </div>

                    <div class="wrap-input100 validate-input">
                        <asp:TextBox runat="server" ID="txtDisplayName" CssClass="input100" placeholder="Display Name"></asp:TextBox>
                        <span class="focus-input100-1"></span>
                        <span class="focus-input100-2"></span>
                        <asp:RequiredFieldValidator ID="rfvDisplayName" runat="server" CssClass="text-danger" Display="Dynamic" ErrorMessage="Enter the Username" ValidationGroup="vgSignUp" ControlToValidate="txtDisplayName"></asp:RequiredFieldValidator>
                    </div>

                    <div class="wrap-input100 validate-input">
                        <asp:TextBox runat="server" ID="txtMobileNo" CssClass="input100" placeholder="Mobile Number"></asp:TextBox>
                        <span class="focus-input100-1"></span>
                        <span class="focus-input100-2"></span>
                        <asp:RegularExpressionValidator ID="revMobileNo" runat="server" ErrorMessage="Enter Proper Number" ControlToValidate="txtMobileNo" CssClass="text-danger" Display="Dynamic" ValidationExpression="[0-9]{10}"></asp:RegularExpressionValidator>
                    </div>

                    <div class="wrap-input100 validate-input">
                        <asp:TextBox runat="server" ID="txtEmail" CssClass="input100" placeholder="Email"></asp:TextBox>
                        <span class="focus-input100-1"></span>
                        <span class="focus-input100-2"></span>
                    </div>
                    
                    <div class="wrap-input100 validate-input">
                        <asp:TextBox runat="server" ID="txtDesignation" CssClass="input100" placeholder="Designation"></asp:TextBox>
                        <span class="focus-input100-1"></span>
                        <span class="focus-input100-2"></span>
                    </div>

                    <div class="wrap-input100 rs1 validate-input" data-validate="Password is required">
                        <asp:TextBox runat="server" CssClass="input100" type="password" ID="txtPassword" placeholder="Password"></asp:TextBox>
                        <span class="focus-input100-1"></span>
                        <span class="focus-input100-2"></span>
                        <asp:RequiredFieldValidator ID="rfvPassword" runat="server" CssClass="text-danger" Display="Dynamic" ErrorMessage="Enter the Password" ValidationGroup="vgSignUp" ControlToValidate="txtPassword"></asp:RequiredFieldValidator>
                    </div>
                    <div class="wrap-input100 rs1 validate-input" data-validate="Password is required">
                        <asp:TextBox runat="server" CssClass="input100" type="Password" ID="txtRePassword" placeholder="ReType Password"></asp:TextBox>
                        <span class="focus-input100-1"></span>
                        <span class="focus-input100-2"></span>
                        <asp:CompareValidator ID="cvRePassword" runat="server" ErrorMessage="Password Do not Match" CssClass="text-danger" ControlToValidate="txtRePassword" ControlToCompare="txtPassword" Display="Dynamic" ValidationGroup="vgSignUp"></asp:CompareValidator>
                    </div>

                    <div class="container-login100-form-btn m-t-20">
                        <asp:Button runat="server" ValidationGroup="vgSignUp" CssClass="login100-form-btn" OnClick="btnSignUp_Click" Text="Sign Up" ID="btnSignUp" />
                    </div>

                    <div class="text-center p-t-45 p-b-4">
                        <asp:LinkButton runat="server" Enabled="false" CssClass="txt1" Text="Had an account?"></asp:LinkButton>
                        <asp:LinkButton runat="server" Enabled="true" OnClick="lbLogin_Click" ID="lbLogin" CssClass="txt2 hov1" Text="Login"></asp:LinkButton>
                    </div>
                </form>
                
            </div>
        </div>
    </div>
</body>
</html>
