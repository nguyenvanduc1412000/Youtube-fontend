var menu_icons=document.querySelector(".menu-icon");
var sidebar=document.querySelector(".sidebar");
var container=document.querySelector(".container");

menu_icons.onclick=function(){
        sidebar.classList.toggle("small-sidebar");
        container.classList.toggle("large-container");
}