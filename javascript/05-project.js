   $(document).ready(function () {
        $(".fa-bars").click(function () {
          $(".home").animate({
            height: "toggle",
          });
        });

        // login , register page
        $(".fa-user-circle").click(function () {
          $(".formm").animate({
            width: "toggle",
          });
          $(".formm1").hide();
        });

        $(".fa-registered").click(function () {
          $(".formm1").animate({
            width: "toggle",
          });
          $(".formm").hide();
        });
      });
      function form1() {
        var user = document.getElementById("user").value;
        var password = document.getElementById("pass").value;

        if (user == "") {
          document.getElementById("UserEror").innerHTML =
            "**Plese enter user id";
          return false;
        }

        if (password == "") {
          document.getElementById("passEror").innerHTML =
            "**Plese enter your password";
          return false;
        }
        if ((password.length <= 3) & (password.length <= 10)) {
          document.getElementById("passEror").innerHTML =
            "**Password length must be between 3  & 10";
          return false;
        }
      }

      // registation form validation
      function regis() {
        var fname1 = document.getElementById("fname").value;
        var lname1 = document.getElementById("lname").value;
        var father1 = document.getElementById("father").value;
        var mobile1 = document.getElementById("mobile").value;
        var email1 = document.getElementById("email").value;
        var ocupation1 = document.getElementById("ocupation").value;
        var createpass1 = document.getElementById("createpass").value;
        var confpass1 = document.getElementById("confpass").value;

        if (fname1 == "") {
          document.getElementById("fnameError").innerHTML =
            "**Please enter first name";
          return false;
        }
        if (lname1 == "") {
          document.getElementById("lnameError").innerHTML =
            "**Please enter last name";
          return false;
        }
        if (father1 == "") {
          document.getElementById("fatherError").innerHTML =
            "**Please enter father's name";
          return false;
        }
        if (mobile1 == "") {
          document.getElementById("mobileError").innerHTML =
            "**Please enter mobile number";
          return false;
        }
        if (email1 == "") {
          document.getElementById("emailError").innerHTML =
            "**Please enter your email";
          return false;
        }
        if (ocupation1 == "") {
          document.getElementById("ocupationError").innerHTML =
            "**Please enter your ocupation";
          return false;
        }
        if (createpass1 == "") {
          document.getElementById("createError").innerHTML =
            "**Create password";
          return false;
        }
        if (confpass1 == "") {
          document.getElementById("confpassError").innerHTML =
            "**Enter conform password";
          return false;
        }
        if (createpass1 != confpass1) {
          document.getElementById("confpassError").innerHTML =
            "**Password is note match";
          return false;
        }
        if ((createpass1.length <= 2) & (createpass1.length <= 10)) {
          document.getElementById("createError").innerHTML =
            "****Password length must be between 3  & 10";
          return false;
        }
      }
