//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
$(document).ready(function () {$("body").css({backgroundColor:"#FFFFFF"});
var tabs=$("#maddalunoardoraTabs").tabs();$("#maddalunoardoraTabs").tabs({heightStyle:"fill",beforeActivate: function(event, ui) {var iframe = ui.newPanel.find("iframe");if (!iframe.attr("src") && iframe.data("src")) {iframe.attr("src", iframe.data("src"));}}});
$(window).on("resize", function () {tabs.tabs("refresh");});
});
function initAct(){
if (tiAval){parent.iniciaActividade()}
}
function randomSort(){
}
function isCorrect(){
}
function goTime(){clearInterval(timeInterval);showMessage("Time");}
function showSol(oldTypeGame){ 
}
function paintBack(){}
