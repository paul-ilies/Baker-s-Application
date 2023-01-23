import {
  GET_VALUES,
  RESET_VALUES,
  MAX_FLOUR,
  MAX_WATER,
  MAX_HIDRATION,
} from "../utils/utils";

export const calcReducer = (state, action) => {
  const { type, payload } = action;

  if (type === GET_VALUES) {
    console.log(payload);
    const { name, value } = payload.target;
    const getValues = { [name]: parseInt(value) };
    const { flour, water, hidration } = getValues;
    const normalizeInputs = {
      flour: Math.min(flour, MAX_FLOUR),
      water: Math.min(water, MAX_WATER),
      hidration: Math.min(hidration, MAX_HIDRATION),
    };

    if (normalizeInputs.flour >= 0) {
      return {
        ...state,
        flour: normalizeInputs.flour,
        water: Math.round((normalizeInputs.flour * state.hidration) / 100),
        salt: Math.round(normalizeInputs.flour * 0.02),
        yeast: Math.round(normalizeInputs.flour * 0.02),
        hidration:
          state.flour > 0
            ? Math.round((state.water / normalizeInputs.flour) * 100)
            : 0,
      };
    }
    if (normalizeInputs.water >= 0) {
      return {
        ...state,
        water: normalizeInputs.water,
        hidration:
          state.flour > 0
            ? Math.round((normalizeInputs.water / state.flour) * 100)
            : 0,
      };
    }
    if (normalizeInputs.hidration >= 0) {
      return {
        ...state,
        hidration: normalizeInputs.hidration,
        water: Math.round((state.flour * normalizeInputs.hidration) / 100),
      };
    }
  }

  if (type === RESET_VALUES) {
    return { ...state, ...payload };
  }
  return { ...state };
};
