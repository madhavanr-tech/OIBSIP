function convertTemp() {
  const temp = document.getElementById("temperature").value;
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const result = document.getElementById("result");

  if (temp === "") {
    result.innerText = "Please enter a value ❗";
    return;
  }

  let converted;

  if (from === to) {
    converted = temp;
  } else if (from === "C" && to === "F") {
    converted = (temp * 9/5 + 32).toFixed(2);
  } else {
    converted = ((temp - 32) * 5/9).toFixed(2);
  }

  result.innerText = `${temp}° ${from} = ${converted}° ${to}`;
}
