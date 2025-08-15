const answer1 = document.getElementById("circle-1");
const answer2 = document.getElementById("circle-2");
const answer3 = document.getElementById("circle-3");

const circleArea = (radius) => {
  const pi = 3.14;
  return (radius ** 2 * pi);
};

answer1.textContent = `${circleArea(5)} cm\u00B2`;
answer2.textContent = `${circleArea(7)} cm\u00B2`;
answer3.textContent = `${circleArea(10)} cm\u00B2`;