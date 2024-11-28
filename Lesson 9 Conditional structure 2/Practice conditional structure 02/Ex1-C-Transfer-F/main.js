function Check() {
    let num = parseInt(document.getElementById("Done").value);
    let resultt = (num * (9 / 5)) + 32;
    document.getElementById("Kq").innerHTML = resultt + " F";
}