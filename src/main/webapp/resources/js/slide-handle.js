function handleSlide(ui, event) {
    radius = ui.value;
    setPlaneScale(ui.value);
}

function sendR(obj){
    radius = $(obj).val();
    setPlaneScale($(obj).val());
}

function sendX(obj){
    let xval = document.getElementById("x-coordinate");
    alert($(obj).val());
    xval.setAttribute("value", $(obj).val());
}