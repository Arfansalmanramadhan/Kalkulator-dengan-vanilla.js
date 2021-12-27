function bersaing(angka) { // membuat angka dan operator
  document.getElementById("value").value = document.getElementById("value").value + angka; 
}
function hitung() { // menghitung angka
  let hitung = document.getElementById("value").value;
  if (hitung) {
    document.getElementById("value").value = eval(hitung);
  }
}
function jernih() {  // menghapus angka dan operator sekaligus
  document.getElementById("value").value = "";
}
function hapus() { // menghapus angka dan operator secara satu persatu
  let a = document.getElementById("value").value;
  document.getElementById("value").value = a.substring(0, a.length - 1);
}
