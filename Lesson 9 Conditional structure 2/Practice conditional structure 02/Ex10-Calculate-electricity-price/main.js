function Convert(){
    let bac=parseInt(document.getElementById("Bac").value);
    let Sum;
    if (bac >= 0 && bac <= 50) {
        Sum = bac * 1.806;
    } else if (bac >= 51 && bac <= 100) {
        Sum = bac * 1.866;
    } else if (bac >= 101 && bac <= 200) {
        Sum = bac * 2.167;
    } else if (bac >= 201 && bac <= 300) {
        Sum = bac * 2.729;
    } else if (bac >= 301 && bac <= 400) {
        Sum = bac * 3.050;
    } else if (bac >= 401) {
        Sum = bac * 3.151;
    }
    document.getElementById("Kq").innerHTML = "Số tiền điện của bạn : "+ Sum.toFixed(3) +" đồng";
}