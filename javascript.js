var images = document.getElementsByClassName("pic");
var next = document.getElementById("next");
var previous = document.getElementById("prev");
var close = document.getElementById("close");
var int = 0;

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("click", function(bool) {
    document.getElementById('dimmer').style.display = (bool?'block':'none');
    document.getElementById('next').style.display = (bool?'block':'none');
    document.getElementById('prev').style.display = (bool?'block':'none');
    document.getElementById('close').style.display = (bool?'block':'none');
    console.log("i : " + i);
    var num = images[i].id;
    int = parseInt(num);
    var img = document.getElementById(num).src;
    var x = document.createElement("IMG");
    x.setAttribute("src", img);
    x.setAttribute("id", "bigPic");
    x.setAttribute("width", "45%");
    x.setAttribute("alt", "Main Picture");
    document.body.append(x);

    //event listeners for next, previous, and close buttons
    next.addEventListener("click", nextImage);
    prev.addEventListener("click", prevImage);
  }, false);
}

function nextImage() {
  var x = document.getElementById('bigPic');
  x.remove();
  int++;
  if (int > 11) {
    int = 0;
  }
  var num = images[int].id;
  var img = document.getElementById(num).src;
  var x = document.createElement("IMG");
  x.setAttribute("src", img);
  x.setAttribute("id", "bigPic");
  x.setAttribute("width", "45%");
  x.setAttribute("alt", "Main Picture");
  document.body.append(x);

}

function prevImage() {
  var x = document.getElementById('bigPic');
  x.remove();
  int--;
  if (int < 0) {
    int = 11;
  }
  var num = images[int].id;
  var img = document.getElementById(num).src;
  var x = document.createElement("IMG");
  x.setAttribute("src", img);
  x.setAttribute("id", "bigPic");
  x.setAttribute("width", "45%");
  x.setAttribute("alt", "Main Picture");
  document.body.append(x);
}


function closeImage() {

  document.getElementById('dimmer').style.display = 'none';
  document.getElementById('next').style.display = 'none';
  document.getElementById('prev').style.display = 'none';
  document.getElementById('close').style.display = 'none';
  var x = document.getElementById('bigPic');
  x.remove();
}

close.addEventListener("click", closeImage);
