function bersaing(angka) {
  let menampilkan = document.getElementById("value").value;
  if (menampilkan == "0") {
    menampilkan = angka;
  } else {
    menampilkan += angka;
  }
  document.getElementById("value").value = menampilkan;
}
function hitung() {
  let hitung = document.getElementById("value").value;
  if (hitung) {
    document.getElementById("value").value = eval(hitung);
  }
}
function jernih() {
  document.getElementById("value").value = "";
}
function hapus() {
  let a = document.getElementById("value").value;
  document.getElementById("value").value = a.substring(0, a.length - 1);
}
