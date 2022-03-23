document.getElementById("click").disabled = true;
setTimeout(function(){document.getElementById("click").disabled = false}, 6100);
document.getElementById("click").onclick = function () {
    location.href = "./Home.html";
};