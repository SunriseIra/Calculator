let resultElements = document.querySelector(".result");

resultElements.addEventListener("click", function () {
  let firstNum = Number(document.querySelector("#num1").value);
  let secondNum = Number(document.querySelector("#num2").value);
  let sign = document.querySelector("#sign").value;

  // console.log(typeof sign);

  // let a = "test";

  let result = resultFinish(firstNum, sign, secondNum);

  let answer = document.querySelector("#answer");
  answer.textContent = result;
});

function resultFinish(num1, sign, num2) {
  if (sign == "Add") {
    return num1 + num2;
  } else if (sign == "Subtract") {
    return num1 - num2;
  } else if (sign == "Multiply") {
    return num1 * num2;
  } else if (sign == "Divide") {
    return num1 / num2;
  }
}

//   function validate(value) {
//     if (value == null || value == "") {
//       alert("Required Field");
//       return 0;
//     } else if (isNaN(value)) {
//       alert("Must be a Number Field");
//       return 0;
//     } else return value;
//   }

// function test(a = 5555, b = 125) {
//   // console.log(a + b);

//   return a + b;
// }
// // test(5, 10);
// let abcd = test(50, 60);
// console.log(abcd);
