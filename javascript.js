window.addEventListener("load",function(){
    var preload = document.getElementById("preload");
    document.body.removeChild(preload);
});
                       
function searchFunction_exp() {
    var a = document.getElementById('myinputsearch').value.toLowerCase();
    if (a === 'bca' || a === 'mca' || a === 'bscit' || a === 'mscit' || a === 'bba' || a === 'mba' || a === 'bhm' || a === 'chm') {
        var b = document.getElementById('serch');
        b.href ='expericened/' + a + '.html';
        b.click();
    }
    else {
            alert('This course is not available ');
        }
}

function searchFunction_frh() {
    var a = document.getElementById('myinputsearch').value.toLowerCase();
    if (a === 'bca' || a === 'mca' || a === 'bscit' || a === 'mscit' || a === 'bba' || a === 'mba' || a === 'bhm' || a === 'chm') {
        var b = document.getElementById('serch');
        b.href ='fresher/' + a + '.html';
        b.click();
    }
    else {
            alert('This course is not available ');
        }
}

