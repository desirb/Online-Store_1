
function register(){
    var code = $("#txtCode").val();
    var title = $("#txtTitle").val();
    var category = $("#txtCategory").val();
    var price = $("#txtPrice").val();
    var img = $("#txtImg").val();

    console.log(code, title, category, price, img);
}



function init(){
    //hook events
    $("#btnSave").click(register);
}

window.onload = init;