//Navbar
$(document).ready(function() {
            $("#m_home").click(function() {
                $("#main").animate({opacity: "0",filter: "alpha(opacity=0)"}, 400, function () {
                    $("#main").load("startseite.html", function () {
                        $("#main").animate({opacity: "1", filter: "alpha(opacity=100)"}, 400);
            
                    });
                });
            });    
            $("#m_kontakt").click(function() {
                $("#main").animate({opacity: "0",filter: "alpha(opacity=0)"}, 400, function () {
                    $("#main").load("kontakt.html", function () {
                        $("#main").animate({opacity: "1", filter: "alpha(opacity=100)"}, 400);
            
                    });
                });
            });
            $("#m_about").click(function() {
                $("#main").animate({opacity: "0",filter: "alpha(opacity=0)"}, 400, function () {
                    $("#main").load("überuns.html", function () {
                        $("#main").animate({opacity: "1", filter: "alpha(opacity=100)"}, 400);
            
                    });
                });
            }); 
            $("#m_locations").click(function() {
                $("#main").animate({opacity: "0",filter: "alpha(opacity=0)"}, 400, function () {
                    $("#main").load("drehorte.html", function () {
                        $("#main").animate({opacity: "1", filter: "alpha(opacity=100)"}, 400);
            
                    });
                });
            });  
    
        });   





//Verlinkungen
$(document).ready(function() {
            $("#s_hobbingen").click(function() {
                $("#main").animate({opacity: "0",filter: "alpha(opacity=0)"}, 400, function () {
                    $("#main").load("hobbingen2.html", function () {
                        $("#main").animate({opacity: "1", filter: "alpha(opacity=100)"}, 400);
            
                    });
                });
            });   
    $("#s_eintragen").click(function() {
                $("#main").animate({opacity: "0",filter: "alpha(opacity=0)"}, 400, function () {
                    $("#main").load("eintragen.html", function () {
                        $("#main").animate({opacity: "1", filter: "alpha(opacity=100)"}, 400);
            
                    });
                });
            }); 
    $("#s_bearbeiten").click(function() {
                $("#main").animate({opacity: "0",filter: "alpha(opacity=0)"}, 400, function () {
                    $("#main").load("bearbeiten.html", function () {
                        $("#main").animate({opacity: "1", filter: "alpha(opacity=100)"}, 400);
            
                    });
                });
            }); 
        });  





//  Footer
$(document).ready(function() {
            $("#f_impressum").click(function() {
                $("#main").animate({opacity: "0",filter: "alpha(opacity=0)"}, 400, function () {
                    $("#main").load("impressum.html", function () {
                        $("#main").animate({opacity: "1", filter: "alpha(opacity=100)"}, 400);
            
                    });
                });
            });    
            $("#f_kontakt").click(function() {
                $("#main").animate({opacity: "0",filter: "alpha(opacity=0)"}, 400, function () {
                    $("#main").load("kontakt.html", function () {
                        $("#main").animate({opacity: "1", filter: "alpha(opacity=100)"}, 400);
            
                    });
                });
            });
            $("#f_about").click(function() {
                $("#main").animate({opacity: "0",filter: "alpha(opacity=0)"}, 400, function () {
                    $("#main").load("überuns.html", function () {
                        $("#main").animate({opacity: "1", filter: "alpha(opacity=100)"}, 400);
            
                    });
                });
            }); 
    
     }); 
