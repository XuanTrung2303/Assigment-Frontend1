var images = [];
var index = 1;
for (var i = 1; i < 6; i++) {
    images[i] = new Image();
    images[i].src = "../img/" + i + ".jpg";

}
function prev() {
    index--;
    if (index < 1) {
        index = images.length-1;

    }
    document.getElementById("Anh").src = images[index].src;


}

function next() {
    index++;
    if (index > images.length-1) {
        index = 1;

    }
    document.getElementById("Anh").src = images[index].src;


}
