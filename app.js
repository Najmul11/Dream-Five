// -------select button handler----------------
let count = 0;
function buttonHandle(id1, id2, id3) {
  if (count < 5) {
    const getName = document.getElementById(id1);
    const nameText = getName.innerText;
    const ol = document.getElementById(id2);
    const setName = document.createElement("li");
    setName.classList.add("px-3", "py-1");
    setName.innerText = nameText;
    ol.appendChild(setName);
    const btn = document.getElementById(id3);
    btn.disabled = true;
    btn.style.backgroundColor = "gray";
    btn.style.border = "none";
    count++;
  } else {
    alert("Already 5 players selected");
  }
}

//-------- calcultetion handler------------

// shared functions-------
const getInputValue = (id) => {
  const inputField = document.getElementById(id);
  const inputValue = parseFloat(inputField.value);
  inputField.value = "";
  return inputValue;
};
const setTotal = (id, amount) => {
  const element = document.getElementById(id);
  element.innerText = amount;
};
// events--------------
const calculateBtn = document.getElementById("calculate-btn");
calculateBtn.addEventListener("click", () => {
  const perPlayerPrice = getInputValue("price-input");
  if (perPlayerPrice > 0) {
    const playersTotalExpense = perPlayerPrice * count;
    if (playersTotalExpense !== 0) {
      const playersTotal = setTotal("players-total", playersTotalExpense);
    } else {
      alert("select atleast one player");
    }
  } else {
    alert("invalid input");
  }
});

const totalCalc = document.getElementById("total-calc");
totalCalc.addEventListener("click", () => {
  const managerCost = getInputValue("manager-cost");
  const coachCost = getInputValue("coach-cost");
  if (managerCost >= 0 && coachCost >= 0) {
    const element = document.getElementById("players-total");
    const elementText = parseFloat(element.innerText);
    const totalCost = elementText + managerCost + coachCost;
    const playersTotal = setTotal("total-expense", totalCost);
  } else {
    alert("invalid input");
  }
});
