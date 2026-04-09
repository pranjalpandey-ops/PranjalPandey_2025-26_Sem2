function revNumber() {
    let n = document.getElementById("num").value;

    if (n === "") {
        document.getElementById("result").innerHTML = "Please enter a number";
        return;
    }

    let num = Number(n);
    let reversed = 0;
    while (num > 0) {
        let digit = num % 10;
        reversed = reversed * 10 + digit;
        num = Math.floor(num / 10);
    }

    document.getElementById("result").innerHTML =
        "Reversed Number: " + reversed;
}
