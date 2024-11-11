var fullimgcon = document.getElementById("img1");
var fullimg = document.getElementById("imgclick");
var currentIndex = 0;
var currentColumn = 0;
var columns = document.querySelectorAll(".gallery");
function openimg(pic, index, column) {
    fullimgcon.style.display = "flex";
    fullimg.src = pic;
    currentIndex = index;
    currentColumn = column;
    document.querySelector('.container .images').style.display = 'none'; 
    document.querySelector('.container .heading').style.display = 'none'; 
    document.querySelector('.container .but1').style.display = 'none'; 

}

function closeimg() {
    fullimgcon.style.display = "none";
    document.querySelector('.container .images').style.display = 'flex'; 
    document.querySelector('.container .heading').style.display = 'block'; 
    document.querySelector('.container .but1').style.display = 'block'; 
}

function changeImg(direction) {
    var rows = columns[0].querySelectorAll("img").length;
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = rows - 1;
        currentColumn--;
        if (currentColumn < 0) {
            currentColumn = columns.length - 1;
        }
    } else if (currentIndex >= rows) {
        currentIndex = 0;
        currentColumn++;
        if (currentColumn >= columns.length) {
            currentColumn = 0;
        }
    }

    var newImage = columns[currentColumn].querySelectorAll("img")[currentIndex];
    fullimg.src = newImage.src;
}
