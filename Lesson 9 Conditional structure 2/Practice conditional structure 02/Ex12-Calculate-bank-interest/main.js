function Convert() {
    let send = parseFloat(document.getElementById("Send").value);
    let interest = parseFloat(document.getElementById("Interest").value);
    let num = parseFloat(document.getElementById("Num").value);
    let a;
    if (isNaN(send) || isNaN(interest) || isNaN(num)) {
        alert("Kiểm tra dữ liệu nhập!")
    } else {
        a =Math.round( send * (1 + interest) ** num);
        document.getElementById("Kq").innerHTML = "Số tiền sau " + num + " tháng (bao gồm cả vốn lẫn lãi): " + a.toLocaleString("vi-VN") + " VND"
    }
}