export const FLOUR = "flour";
export const WATER = "water";
export const SALT = "salt";
export const YEAST = "yeast";
export const HIDRATION = "hidration";
export const RESET_VALUES = "RESET_VALUES";
export const GET_VALUES = "GET_VALUES";
export const MAX_FLOUR = 2000;
export const MAX_WATER = 1600;
export const MAX_HIDRATION = 80;

export const defaultState = {
  flour: 0,
  water: 0,
  salt: 0,
  yeast: 0,
  hidration: 0,
};

export const firstLetterUppercase = (name) => {
  return name.charAt(0).toUpperCase() + name.substring(1);
};

export const maxValues = (name, value) => {
  const maxValues = {
    [FLOUR]: 2000,
    [WATER]: 1600,
    [HIDRATION]: value,
    [YEAST]: 40,
    [SALT]: 40,
  };
  return maxValues[name] || 0;
};
