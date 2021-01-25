function responsive_menu(){
    var e = document.getElementById("mytopnav");
    if(e.className === "topnav"){
        e.className += " responsive";
    }else{
        e.className = "topnav";
    }
}