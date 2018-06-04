window.addEventListener("load", function(){
    var load_screen = document.getElementById("load_screen");
    document.body.removeChild(load_screen);
});

function searchFunction() {
            var a = document.getElementById('myinputsearch');
            var e = document.getElementById('click');
            var c = a.value.toLowerCase();
            if (c === 'bca') {
                e.href = 'https://getyourresume.github.io/fresher/bca.html';
                e.click();
            }
            if (c === 'bscit') {
                e.href = 'https://getyourresume.github.io/fresher/bscit.html';
                e.click();
            }
            if (c === 'bba') {
                e.href = 'https://getyourresume.github.io/fresher/bba.html';
                e.click();
            }
            if (c === 'bhm') {
                e.href = 'https://getyourresume.github.io/fresher/bhm.html';
                e.click();
            }
            if (c === 'mca') {
                e.href = 'https://getyourresume.github.io/fresher/mca.html';
                e.click();
            }
            if (c === 'mscit') {
                e.href = 'https://getyourresume.github.io/fresher/mscit.html';
                e.click();
            }
            if (c === 'mba') {
                e.href = 'https://getyourresume.github.io/fresher/mba.html';
                e.click();
            }
            if (c === 'chm') {
                e.href = 'https://getyourresume.github.io/fresher/chm.html';
                e.click();
            }
            else {
                alert('No Search Result ');
            }
        }