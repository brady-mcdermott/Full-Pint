$(document).ready(function () {
    var styleElem = document.head.appendChild(document.createElement("style"));

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 580) {
            $(".navlink").css("color", "black");

            $('.navlink').addClass("black");
        }

        else {
            $(".navlink").css("color", "#fff");
            $('.navlink').removeClass("black");
        }
    });

    
});

window.moreinfo = function moreinfo(beer) {
    var overlay = document.getElementById("overlay");
    var popupwrap = document.getElementById("beerpopupwrapper");
    var popupimage = document.getElementById("popupimage");
    var beertitle = document.getElementById(beer+"title");
    var beertext = document.getElementById(beer+"text");
    var beerpercent = document.getElementById(beer+"percent");
    var beerog = document.getElementById(beer+"og");
    var beeribu = document.getElementById(beer+"ibu");
    var close = document.getElementById("close"+beer);
    

    overlay.className = "show";
    popupwrap.className = "show";
    beertitle.className = "show";
    beertext.className = "show";
    beerpercent.className = "show";
    beerog.className = "show";
    beeribu.className = "show";
    close.className = "show";
    popupimage.src = "./Images/"+beer+".png";
}

window.popupclose = function popupclose() {
    var overlay = document.getElementById("overlay");
    var popupwrap = document.getElementById("beerpopupwrapper");

    overlay.className = "";
    popupwrap.className = "";
}

window.canhover = function canhover(element, beer) {
    element.src = "./Images/"+beer+".gif";
}

window.cannohover = function cannohover(element, beer) {
    element.src = "./Images/"+beer+".png";
}
