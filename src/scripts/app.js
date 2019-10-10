(function __init__() {
})();

function aandharMode() {
    var tempArr = document.querySelector("html").classList;
    document.querySelector("html").classList.toggle("dark");

    if (Object.values(tempArr).includes("dark")) {
        __setDark();
    } else {
        __setLight();
    }
}

function __setLight() {
    document.getElementById("paragraph").innerHTML = "Be A Vegan For Climatic Change";
    document.getElementById("icon").className = "fas fa-moon";
}

function __setDark() {
    document.getElementById("paragraph").innerHTML = "Be A Vegan For Climatic Change";
    document.getElementById("icon").className = "fas fa-sun";
}


