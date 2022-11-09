export const FLOUR = "flour";
export const WATER = "water";
export const SALT = "salt";
export const YEAST = "yeast";
export const HIDRATION = "hidration";
export const RESET_VALUES = "RESET_VALUES";
export const GET_VALUES = "GET_VALUES";

export const defaultState = {
  flour: 0,
  water: 0,
  salt: 0,
  yeast: 0,
  hidration: 0,
};

export const firstLetterUppercase = (name) => {
  const newArr = name.split("");
  return newArr[0].toUpperCase() + newArr.slice(1).join("");
};

export const maxValues = (name, value) =>
  name === FLOUR
    ? "2000"
    : name === WATER
    ? "1600"
    : name === HIDRATION
    ? value
    : name === YEAST
    ? "40"
    : name === SALT
    ? "40"
    : "0";
