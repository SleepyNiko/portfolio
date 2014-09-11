$(document).ready(function() {
    $(".error").hide();
    $("#MainResult").hide();
    $(".flp-response").hide();
    $(".errResults").hide();
    
    $(".submit").click(function() {
        function r(e) {
            var t = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
            return t.test(e)
        }

        var e = $("#fname").val();
        var f = $("#lname").val();
        var t = $("#email").val();
        var n = $("#phone").val();
        var province = $("select[name=province]").val();
        var invest = $("select[name=invest]").val();
        
        if (e == "") {
            $("#fnameLb .error").show();
            return false
        }
        
        if (f == "") {
            $("#lnameLb .error").show();
            return false
        }

        if (!r(t)) {
            $("#emailLb .error").show();
            return false
        }

        if (n == "") {
            $("#phoneLb .error").show();
            return false
        }
        
        if (invest == "Select investment capital") {
            $("#investLb .error").show();
            return false
        }

        var u = "postFName=" + e + "&postLName=" + f + "&postEmail=" + t + "&postPhone=" + n + "&postProvince=" + province + "&postInvest=" + invest;
        
        // If all feilds contain info fade in "Processing message"
        if (! u) { 
            $(".sub-msg").hide();
        } else {
            // $(".sub-msg").fadeIn("slow");
        
            $("#MainResult").fadeIn("slow");
            $(".flp-response").fadeIn("slow");
            $("#MainContent").hide();   

            // INSERT CONVERSION PIXELS ON SUCCESSFULL SUBMISSION:
            $("body").append('<script src="http://acuityplatform.com/Adserver/pxlj/3030784892998861640?" type="text/javascript" async ></script>');
            $("body").append('<img src="https://secure.adnxs.com/px?id=231940&t=2" width="1" height="1" />');
        }

        // Form Processing
        jQuery.ajax({            
            type: "POST",
            url: "assets/includes/ajaxprocess.php",
            dataType: "html",
            data: u,
            success: function(e) {
               // $("#MainResult").fadeIn("slow");
               // $(".flp-response").fadeIn("slow");
               // $("#MainContent").hide();                 
            },
            error: function(e) {
                $(".errResults").fadeIn("slow");
            }
        });
        return false
    });
});