function Convert(){
    let money=parseFloat(document.getElementById("Money").value);
    let fly=parseFloat(document.getElementById("Fly").value);
    let result;
    let sum=money-fly;
    if(isNaN(money)||isNaN(fly)){
        alert("Vui lòng kiểm tra dữ liệu nhập !");
    } else {
        if (sum > 0 && sum <= 5) {
            result = sum * 0.05;
        } else if (sum > 5 && sum <= 10) {
            result = (sum - 5) * 0.1 + (5 * 0.05);
        } else if (sum > 10 && sum <= 18) {
            result = (sum - 10) * 0.15 + (5 * 0.1) + (5 * 0.05);
        } else if (sum > 18 && sum <= 32) {
            result = (sum - 18) * 0.2 + (8 * 0.15) + (5 * 0.1) + (5 * 0.05);
        } else if (sum > 32 && sum <= 52) {
            result = (sum - 32) * 0.25 + (14 * 0.2) + (8 * 0.15) + (5 * 0.1) + (5 * 0.05);
        } else if (sum > 52 && sum <= 80) {
            result = (sum - 52) * 0.3 + (20 * 0.25) + (14 * 0.2) + (8 * 0.15) + (5 * 0.1) + (5 * 0.05);
        } else if (sum > 80) {
            result = (sum - 80) * 0.35 + (28 * 0.3) + (20 * 0.25) + (14 * 0.2) + (8 * 0.15) + (5 * 0.1) + (5 * 0.05);
        }
    }document.getElementById("Kq").innerHTML="Thuế TNCN phải nộp: "+result.toFixed(2)+" triệu đồng/tháng";
}