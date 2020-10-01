$(document).ready(function() { 
        
    let idx = 0; 
    let max_idx = $('.slider-img').length; 

    $('.slider-img').css("display", "none"); 
    $('.slider-img').eq(idx).css("display", "block");
    var current = $(".numbers").text();

    function next() {
        $('.slider-img').css("display", "none");

        if(idx < max_idx - 1){
            idx++;
        }
        else{
            idx = 0;
        }
        current = parseInt(current) + parseInt(1);
        if(current > 4){
            current = 1;
        }
        $(".numbers").text(current);

        $('.slider-img').eq(idx).fadeIn(350);
        $('.slider-img').eq(idx).css("display", "block");
    }
    setInterval(next,7000);
    function prev() {
        $('.slider-img').css("display", "none");
        
        if(idx > 0){
            idx--;
        }
        else{
            idx = max_idx - 1;
        }
        current = current - 1;
        if(current < 1){
            current = 4;
        }
        $(".numbers").text(current);

        $('.slider-img').eq(idx).fadeIn(350); 
        $('.slider-img').eq(idx).css("display", "block");
    }

    $('#next-btn').click(next); 
    $('#prev-btn').click(prev);

    $("#container1").hide();
    $("#container2").hide();
    $("#container3").hide();
    $(".hide").click(function(){
        $("#container1").hide();
        $("#container2").hide();
        $("#container3").hide(); 
    });
    $("#showBank").click(function(){
        $("#container1").show();
    });
    $("#showBorder").click(function(){
        $("#container2").show();
    });
    $("#showChalet").click(function(){
        $("#container3").show();
    });


    $(".main-weapon").mouseenter(function(){
        $(".item-1").slideDown(500);      
    })
    $(".main-weapon").mouseleave(function(){
      $(".item-1").hide();      
    })
    $(".secondary-weapon").mouseenter(function(){
        $(".item-2").slideDown(500);      
    })
    $(".secondary-weapon").mouseleave(function(){
        $(".item-2").hide();      
    })
    $(".gadget").mouseenter(function(){
        $(".item-3").slideDown(500);      
    })
    $(".gadget").mouseleave(function(){
        $(".item-3").hide();      
    })
    $(".unique-ability").mouseenter(function(){
        $(".item-4").slideDown(500);      
    })
    $(".unique-ability").mouseleave(function(){
        $(".item-4").hide();      
    })

    $("#iana").click(function(){
        $(".container-detail-iana").show();
        $(".container-detail-iana").css("display", "block");
        $(".container-detail-oryx").hide();
        $(".container-detail-wamai").hide();
        $(".container-detail-amaru").hide();
        $(".container-detail-goyo").hide();
    })
    $("#oryx").click(function(){
        $(".container-detail-oryx").show();
        $(".container-detail-oryx").css("display", "block");
        $(".container-detail-iana").hide();
        $(".container-detail-wamai").hide();
        $(".container-detail-amaru").hide();
        $(".container-detail-goyo").hide();
    })
    $("#wamai").click(function(){
        $(".container-detail-wamai").show();
        $(".container-detail-wamai").css("display", "block");
        $(".container-detail-iana").hide();
        $(".container-detail-oryx").hide();
        $(".container-detail-amaru").hide();
        $(".container-detail-goyo").hide();
    })
    $("#amaru").click(function(){
        $(".container-detail-amaru").show();
        $(".container-detail-amaru").css("display", "block");
        $(".container-detail-iana").hide();
        $(".container-detail-oryx").hide();
        $(".container-detail-wamai").hide();
        $(".container-detail-goyo").hide();
    })
    $("#goyo").click(function(){
        $(".container-detail-goyo").show();
        $(".container-detail-goyo").css("display", "block");
        $(".container-detail-iana").hide();
        $(".container-detail-oryx").hide();
        $(".container-detail-wamai").hide();
        $(".container-detail-amaru").hide();
    })
    $("#iana, #oryx, #wamai, #amaru, #goyo").click(function(){
        $(".hide-button").show();
    })
    $(".hide-button button").click(function(){
        $(".container-detail-goyo").hide();
        $(".container-detail-iana").hide();
        $(".container-detail-oryx").hide();
        $(".container-detail-wamai").hide();
        $(".container-detail-amaru").hide();
        $(".hide-button").hide();
    })


    $("#video").hide();
    $("#video2").hide();
    $("#video3").hide();
    $(".ability-video-thumbnail").click(function(){
        $("#video").show();
        $("#ability-video")[0].src += "?autoplay=1&enablejsapi=1&version=3&playerapiid=ytplayer";
    });
    $(".ability-video-thumbnail2").click(function(){
        $("#video2").show();
        $("#ability-video2")[0].src += "?autoplay=1&enablejsapi=1&version=3&playerapiid=ytplayer";
    });
    $(".ability-video-thumbnail3").click(function(){
        $("#video3").show();
        $("#ability-video3")[0].src += "?autoplay=1&enablejsapi=1&version=3&playerapiid=ytplayer";
    });
    $(".close").click(function(){
        $('#ability-video, #ability-video2, #ability-video3').each(function(){
            this.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
        });
        $("#video, #video2, #video3").hide();
    });
    $('#ability-video, #ability-video2, #ability-video3').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px' });

    $(window).resize(function(){
        $('#ability-video, #ability-video2, #ability-video3').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px' });
    });

    $(".log").click(function(e){
        e.preventDefault();
        $(".login-bg").slideDown();
        $(".login-bg").css("display", "flex");
    })
    $(".reg").click(function(e){
        e.preventDefault();
        $(".regis-bg").slideDown();
        $(".regis-bg").css("display", "flex");
    })
    $(".close-login").click(function(){
        $(".login-bg").slideUp();
    })
    $(".close-regis").click(function(){
        $(".regis-bg").slideUp();
    })

    $('[type="submit"]').on('click', function (e) {
        if($("#form-name").hasClass("invalid") || $("#form-password").hasClass("invalid") || $("#form-email").hasClass("invalid") || $("#form-address").hasClass("invalid") || $("#form-copies").hasClass("invalid") || $("#form-list").hasClass("invalid") || $("#form-checkbox").hasClass("invalid")){
            alert("Please fill all the form correctly");
            e.preventDefault();
        }else{
            if($("#platform-pc").hasClass("valid")){
                alert("Success to pre-order the game in PC platform");
            }else if($("#platform-ps4").hasClass("valid")){
                alert("Success to pre-order the game in PS4 platform");
            }else if($("#platform-xbox").hasClass("valid")){
                alert("Success to pre-order the game in XBOX platform");
            }else{
                alert("You need to choose the platform");
                e.preventDefault();
            }
        }

    });
    $(".filterDiv").show();
    $(".btn").click(function(){
        if($("#btn-all").hasClass("active")){
            $(".filterDiv").show();
        }
        if($("#btn-ranked").hasClass("active")){
            $(".filterDiv").hide();
            $("#mybank").show();
            $("#myborder").show();
        }
        if($("#btn-quickmatch").hasClass("active")){
            $(".filterDiv").hide();
            $("#mychalet").show();
            $("#myborder").show();
        }
    })

    $("#platform-pc").click(function(){
        $("#platform-pc").css("background-color", "lightblue");
        $("#pc").css("filter", "invert(0)");
        $("#platform-xbox").css("background-color", "");
        $("#xbox").css("filter", "invert(0)");
        $("#platform-ps4").css("background-color", "");
        $("#ps4").css("filter", "invert(0)");
    })
    $("#platform-ps4").click(function(){
        $("#platform-ps4").css("background-color", "lightblue");
        $("#ps4").css("filter", "invert(1)");
        $("#platform-xbox").css("background-color", "");
        $("#xbox").css("filter", "invert(0)");
        $("#platform-pc").css("background-color", "");
        $("#pc").css("filter", "invert(1)");
    })
    $("#platform-xbox").click(function(){
        $("#platform-xbox").css("background-color", "lightblue");
        $("#xbox").css("filter", "invert(1)");
        $("#platform-ps4").css("background-color", "");
        $("#ps4").css("filter", "invert(0)");
        $("#platform-pc").css("background-color", "");
        $("#pc").css("filter", "invert(1)");
    })

    var modalImg = document.getElementById("img01");
    $("#quarantine-img-1").click(function(){
        $("#myModal").css("display", "block");
        modalImg.src = this.src;
    })
    $("#quarantine-img-2").click(function(){
        $("#myModal").css("display", "block");
        modalImg.src = this.src;
    })
    $("#quarantine-img-3").click(function(){
        $("#myModal").css("display", "block");
        modalImg.src = this.src;
    })
    $("#quarantine-img-4").click(function(){
        $("#myModal").css("display", "block");
        modalImg.src = this.src;
    })
    $(".close").click(function(){
        $("#myModal").css("display", "none");
    })

    $(".dropdownicon").mouseenter(function(){
        $(".icon img").css({
            "filter": "invert(1)",
            "transform": "rotate(180deg)",
            "transition": "0.3s"
        });
    })
    $(".dropdownicon").mouseleave(function(){
        $(".icon img").css({
            "filter": "invert(0)",
            "transform": "rotate(0deg)",
            "transition": "0.3s"
        });
    })
    $(".uldd").mouseenter(function(){
        $(".icon img").css("filter", "invert(0)")
    })
    $(".uldd").mouseleave(function(){
        $(".icon img").css("filter", "invert(1)")
    })

    $(".dropdowniconX").mouseenter(function(){
        $(".iconX img").css({
            "filter": "invert(0)",
            "transform": "rotate(180deg)",
            "transition": "0.3s"
        });
    })
    $(".dropdowniconX").mouseleave(function(){
        $(".iconX img").css({
            "filter": "invert(1)",
            "transform": "rotate(0deg)",
            "transition": "0.3s"
        });
    })
    $(".ulddX").mouseenter(function(){
        $(".iconX img").css("filter", "invert(1)")
    })
    $(".ulddX").mouseleave(function(){
        $(".iconX img").css("filter", "invert(0)")
    })

});

function cekClickButtonMaps(clickedId){
    var all = document.getElementById("btn-all");
    var ranked = document.getElementById("btn-ranked");
    var quickmatch = document.getElementById("btn-quickmatch");

    if(clickedId == "all"){
        all.classList.add("active");
        all.classList.remove("inactive");
        ranked.classList.remove("active");
        quickmatch.classList.remove("active");
    }
    if(clickedId == "ranked"){
        ranked.classList.add("active");
        ranked.classList.remove("inactive");
        quickmatch.classList.remove("active");
        all.classList.remove("active");
    }
    if(clickedId == "quickmatch"){
        quickmatch.classList.add("active");
        quickmatch.classList.remove("inactive");
        all.classList.remove("active");
        ranked.classList.remove("active");
    }
}
function cekClickPlatform(clickedId){
    var platformPc = document.getElementById("platform-pc");
    var platformPs4 = document.getElementById("platform-ps4");
    var platformXbox = document.getElementById("platform-xbox");

    if(clickedId == "platform-pc"){
        platformPc.classList.add("valid");
        platformPc.classList.remove("invalid");
        platformXbox.classList.remove("valid");
        platformPs4.classList.remove("valid");
    }
    if(clickedId == "platform-xbox"){
        platformXbox.classList.add("valid");
        platformXbox.classList.remove("invalid");
        platformPc.classList.remove("valid");
        platformPs4.classList.remove("valid");
    }
    if(clickedId == "platform-ps4"){
        platformPs4.classList.add("valid");
        platformPs4.classList.remove("invalid");
        platformXbox.classList.remove("valid");
        platformPc.classList.remove("valid");
    }
}
function validateCheckbox(){
    var formcheckbox = document.getElementById("form-checkbox");
    if(document.getElementById("checkbox").checked == true){
        formcheckbox.classList.add("valid");
        formcheckbox.classList.remove("invalid");
        return true;
    }
    formcheckbox.classList.add("invalid");
    formcheckbox.classList.remove("valid");
    return false;
}
function validateList(){
    var formlist = document.getElementById("form-list");
    var listgame = document.getElementById("list-game").value;
    if(listgame == 1 || listgame == 2){
        formlist.classList.add("valid");
        formlist.classList.remove("invalid");
        return true;
    }
    formlist.classList.add("invalid");
    formlist.classList.remove("valid");
    return false;
}
function validationName(){
    var invalidChar = new Array ("/","!", "@", "#","$","%","%","^","&","*","(",")","_","+","=","-","`","~",";","<",">",".","?","[","]","{","}",",");
    var formname = document.getElementById("form-name");
    var name = document.getElementById("name").value;
    var nameErrorMsg = document.getElementById("error-msg-name");
    for(var i=0;i<invalidChar.length;i++){
        if(name.indexOf(invalidChar[i])!=-1 || name.length<5 || name.length>19){
            formname.classList.add("invalid");
            formname.classList.remove("valid");
            nameErrorMsg.innerHTML = "Your username is not valid";
            nameErrorMsg.style.color = "red";
            break;
        }
        formname.classList.add("valid");
        formname.classList.remove("invalid");
        nameErrorMsg.innerHTML = "Your username is valid";
        nameErrorMsg.style.color = "green";
    }
    if(name == ""){
        formname.classList.remove("invalid");
        formname.classList.remove("valid");
        nameErrorMsg.innerHTML = "";
        nameErrorMsg.style.color = "red";
    }
}
function validationEmail(){
    var email = document.getElementById("email").value;
    var formemail = document.getElementById("form-email");
    var emailErrorMsg = document.getElementById("error-msg-email");
    var emailat = email.indexOf('@');
    var emaildot = email.indexOf(".");

    if(emailat < 1 || emaildot < emailat){
        formemail.classList.add("invalid");
        formemail.classList.remove("valid");
        emailErrorMsg.innerHTML = "Your name is not valid";
        emailErrorMsg.style.color = "red";
    }else{
        formemail.classList.add("valid");
        formemail.classList.remove("invalid");
        emailErrorMsg.innerHTML = "Your name is valid";
        emailErrorMsg.style.color = "green";
    }
    if(email == ""){
        formemail.classList.remove("invalid");
        formemail.classList.remove("valid");
        emailErrorMsg.innerHTML = "";
        emailErrorMsg.style.color = "red";
    }
}
function validationPassword(){
    var password = document.getElementById("password").value;
    var formpassword = document.getElementById("form-password");
    var passwordErrorMsg = document.getElementById("error-msg-password");
    if(password.length >= 8 && password.length <= 20){
        formpassword.classList.add("valid");
        formpassword.classList.remove("invalid");
        passwordErrorMsg.innerHTML = "Your password is valid";
        passwordErrorMsg.style.color = "green";
    }else{
        formpassword.classList.add("invalid");
        formpassword.classList.remove("valid");
        passwordErrorMsg.innerHTML = "Your password is not valid";
        passwordErrorMsg.style.color = "red";
    }
    if(password == ""){
        formpassword.classList.remove("invalid");
        formpassword.classList.remove("valid");
        passwordErrorMsg.innerHTML = "";
        passwordErrorMsg.style.color = "red";
    }
}
function validationAddress(){
    var address = document.getElementById("address").value;
    var formaddress = document.getElementById("form-address");
    var addressErrorMsg = document.getElementById("error-msg-address");
    var invalidChar = new Array ("/","!", "@", "#","$","%","%","^","&","*","(",")","_","+","=","-","`","~",";","<",">","?","[","]","{","}",",");
    
    for(var i=0;i<invalidChar.length;i++){
        if(address.indexOf(invalidChar[i])!=-1){
            formaddress.classList.add("invalid");
            formaddress.classList.remove("valid");
            addressErrorMsg.innerHTML = "Your address is not valid";
            addressErrorMsg.style.color = "red";
            break;
        }else{
            formaddress.classList.add("valid");
            formaddress.classList.remove("invalid");
            addressErrorMsg.innerHTML = "Your address is valid";
            addressErrorMsg.style.color = "green";
            continue;
        }
    }
    if(address == ""){
        formaddress.classList.remove("invalid");
        formaddress.classList.remove("valid");
        addressErrorMsg.innerHTML = "";
        addressErrorMsg.style.color = "red";
    }
}
function validationCopies(){
    var copies = document.getElementById("copies").value;
    var formcopies = document.getElementById("form-copies");
    var copiesErrorMsg = document.getElementById("error-msg-copies");
    var validChar = new Array ("1","2","3","4","5","6","7","8","9","0");

    for(var i=0;i<validChar.length;i++){
        if(copies > 0 && copies <= 99 && copies.indexOf(validChar[i])!=-1 ){
            formcopies.classList.add("valid");
            formcopies.classList.remove("invalid");
            copiesErrorMsg.innerHTML = "Your number of copies is valid";
            copiesErrorMsg.style.color = "green";
            break;
        }else{
            formcopies.classList.add("invalid");
            formcopies.classList.remove("valid");
            copiesErrorMsg.innerHTML = "Your number of copies is not valid";
            copiesErrorMsg.style.color = "red";
            continue;
        }
    }

    if(copies == ""){
        formcopies.classList.remove("invalid");
        formcopies.classList.remove("valid");
        copiesErrorMsg.innerHTML = "";
    }
}

