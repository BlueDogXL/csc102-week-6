function start(){
    console.log("Started!");
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
}
function stop(){
    console.log("Stopped!");
    document.getElementById("stop").disabled = true;
    document.getElementById("start").disabled = false;
}