function handleSlide(ui, event) {
    radius = ui.value;
    setPlaneScale(ui.value);
}

function sendR(obj){
    radius = $(obj).val();
    setPlaneScale($(obj).val());
}