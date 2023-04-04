function hello_world() {
    alert("Hello World!");
}

function toLower() {
    let input = document.getElementById("verifier");
    input.value = input.value.toLowerCase();
}

function toUpper() {
    let input = document.getElementById("verifier");
    input.value = input.value.toUpperCase();
}

function selectAll() {
    let checkboxes = document.getElementsByName("remember me");
    checkboxes[0].checked = true;
    checkboxes = document.getElementsByName("auto login");
    checkboxes[0].checked = true;
}

var bulb_status = false;
var img_src = "resources/img/";

function bulb_switch() {
    let light_bulb = document.getElementById("light_bulb");
    if (bulb_status) {
        bulb_status = false;
        light_bulb.src = img_src + "off.gif";
    } else {
        bulb_status = true;
        light_bulb.src = img_src + "on.gif";
    }
}