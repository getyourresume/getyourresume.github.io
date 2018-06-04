window.addEventListener("load", function(){
    var load_screen = document.getElementById("load_screen");
    document.body.removeChild(load_screen);
});

function searchFunction(url){
    var input,filter;
    input = document.getElementById('myinputsearch');
    filter = input.value.toLowerCase();

}