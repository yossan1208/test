const groupA = document.getElementById("a");
const groupB = document.getElementById("b");
const groupC = document.getElementById("c");

const groupFee = (adult, child) => {
  return (adult * 500 + child * 200);
};

groupA.textContent = `${groupFee(2, 1)}円です。`;
groupB.textContent = `${groupFee(1, 5)}円です。`;
groupC.textContent = `${groupFee(3, 7)}円です。`;