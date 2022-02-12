const randomizer = (values) => {
  let i,
    pickedValue,
    randomNr = Math.random(),
    threshold = 0;

  for (i = 0; i < values.length; i++) {
    if (values[i].probability === "*") {
      continue;
    }

    threshold += values[i].probability;
    if (threshold > randomNr) {
      pickedValue = values[i];
      break;
    }

    if (!pickedValue) {
      //nothing found based on probability value, so pick element marked with wildcard
      pickedValue = values.find((value) => value.probability === "*");
    }
  }

  return pickedValue.value;
};

let testValues = [
  {
    value: "Hands up",
    probability: 0.08,
  },
  {
    value: "Boys drink",
    probability: 0.07,
  },
  {
    value: "Girls drink",
    probability: 0.07,
  },
  {
    value: "Kings Cocktail",
    probability: 0.05,
  },
  {
    value: "All drink",
    probability: 0.08,
  },
  {
    value: "You drink",
    probability: 0.08,
  },
  {
    value: "New Rule",
    probability: 0.07,
  },
  {
    value: "Hands downs",
    probability: 0.08,
  },
  {
    value: "Category",
    probability: 0.06,
  },
  {
    value: "Drink Buddy",
    probability: 0.08,
  },
  {
    value: "distribute 4 shoots",
    probability: 0.08,
  },
  {
    value: "Hand to Face",
    probability: 0.08,
  },
  {
    value: "Blue eyes drink",
    probability: 0.03,
  },
  {
    value: "Brown eyes drink",
    probability: 0.03,
  },
  {
    value: "Green eyes drink",
    probability: 0.02,
  },
  {
    value: "Take a shot for every pet!",
    probability: 0.02,
  },
  {
    value: "Blond hair",
    probability: 0.03,
  },
  {
    value: "Brown hair",
    probability: 0.03,
  },
  {
    value: "Black hair",
    probability: 0.02,
  },
  {
    value: "Smartest person drinks",
    probability: 0.02,
  },
];

randomizer(testValues); // will return "aaa" in 10% calls,
//"bbb" in 30% calls, and "ccc" in 60% calls;
const kingscup = () => {
  document.getElementById("answer").innerHTML = randomizer(testValues);
};
