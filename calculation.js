function updateInputs() {
    let shape = document.getElementById("shape").value;
    let inputDiv = document.getElementById("inputs");
    inputDiv.innerHTML = "";
    if (shape === "rectangle") {
        inputDiv.innerHTML = '<input id="length" placeholder="Chiều dài">' +
                             '<input id="width" placeholder="Chiều rộng">';
    } else if (shape === "circle") {
        inputDiv.innerHTML = '<input id="radius" placeholder="Bán kính">';
    } else {
        inputDiv.innerHTML = '<input id="a" placeholder="Cạnh a">' +
                             '<input id="b" placeholder="Cạnh b">' +
                             '<input id="c" placeholder="Cạnh c">';
    }
}

function calculate() {
    let shape = document.getElementById("shape").value;
    let resultDiv = document.getElementById("result");
    let area = 0, perimeter = 0;
    if (shape === "rectangle") {
        let length = parseFloat(document.getElementById("length").value);
        let width = parseFloat(document.getElementById("width").value);
        if (length > 0 && width > 0) {
            area = length * width;
            perimeter = 2 * (length + width);
        }
    } else if (shape === "circle") {
        let radius = parseFloat(document.getElementById("radius").value);
        if (radius > 0) {
            area = Math.PI * radius * radius;
            perimeter = 2 * Math.PI * radius;
        }
    } else {
        let a = parseFloat(document.getElementById("a").value);
        let b = parseFloat(document.getElementById("b").value);
        let c = parseFloat(document.getElementById("c").value);
        if (a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && b + c > a) {
            let s = (a + b + c) / 2;
            area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
            perimeter = a + b + c;
        }
    }
    resultDiv.innerHTML = area > 0 ? `Diện tích: ${area.toFixed(2)}, Chu vi: ${perimeter.toFixed(2)}` : "Dữ liệu không hợp lệ!";
}
updateInputs();
