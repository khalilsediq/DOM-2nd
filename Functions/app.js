const getTriangle = document.querySelector("#getTriangle");
getTriangle.addEventListener("click", () => {
  const side1 = prompt("Enter Your First Side");
  const side2 = prompt("Enter Your Second Side");
  const side3 = prompt("Enter Your Third Side");

  if (side1 === side2 && side2 === side3) {
    alert("Equilateral");
  } else if (side1 === side2 || side2 === side3 || side1 === side3) {
    alert("Isosceles");
  } else {
    alert("Scalene");
  }
});
