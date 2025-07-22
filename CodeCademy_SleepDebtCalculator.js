const getSleepHours = (day) => {
  switch (day) {
    case "Monday":
      return 8;
      break;
    case "Tuesday":
      return 5;
      break;
    case "Wednesday":
      return 8;
      break;
    case "Thursday":
      return 6;
      break;
    case "Friday":
      return 7;
      break;
    case "Saturday":
      return 11;
      break;
    case "Sunday":
      return 10;
      break;
    default:
      return "Enter a day";
  }
  return day;
};

const getActualSleepHours = () =>
  getSleepHours("Monday") +
  getSleepHours("Tuesday") +
  getSleepHours("Wednesday") +
  getSleepHours("Thursday") +
  getSleepHours("Friday") +
  getSleepHours("Saturday") +
  getSleepHours("Sunday");

console.log(getSleepHours("Monday"));
console.log(getActualSleepHours());

const getIdealSleepHours = () => {
  let idealHours = 7;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log("You've got the perfect amount of sleep.");
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      "You got " +
        (actualSleepHours - idealSleepHours) +
        " hours more sleep then needed."
    );
  } else if (actualSleepHours < idealSleepHours) {
    console.log(
      "You need " + (idealSleepHours - actualSleepHours) + " hours more sleep"
    );
  } else {
    console.log("Error!");
  }
};

calculateSleepDebt();
