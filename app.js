function getres() {
  var a = document.getElementById("math").Value;
  var b = document.getElementById("physics").Value;
  var c = document.getElementById("chemistry").Value;
  var d = document.getElementById("english").Value;
  var e = document.getElementById("urdu").Value;
  if (a > 100 || b > 100 || c > 100 || d > 100 || e > 100) {
  } else {
    var obtained = a + b + c + d + e;
    document.getElementById("obt").innerHTML = obtained;
    var per = (obtained / 500) * 100;
    document.getElementById("per").innerHTML = per + "%";
    if (per < 50) {
      document.getElementById("grade").innerHTML = "F";
    } else if (per > 50 && per < 60) {
      document.getElementById("grade").innerHTML = "C";
    } else if (per > 60 && per < 70) {
      document.getElementById("grade").innerHTML = "B";
    } else if (per > 70 && per < 100) {
      document.getElementById("grade").innerHTML = "A";
    }
  }
}
