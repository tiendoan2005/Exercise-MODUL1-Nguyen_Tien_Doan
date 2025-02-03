function Convert() {
    let height = parseFloat(document.getElementById("height").value);
    if(!height||height<=0){
        alert("Vui lòng nhập đúng chiều cao của ban !");
        return;
    }else {
        let feet = height * 3.2808;
        document.getElementById("Kq").innerHTML = feet.toFixed(4)+" feet";

    }
    }