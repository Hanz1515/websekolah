  /* Beralih antara menambahkan dan menghapus kelas "responsif" ke topnav saat pengguna mengklik ikon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }