export const CalcReducer = (state, action) => {
  const { type, payload } = action;

  if (type === "GET_QUANTITY") {
    const { name, value } = payload.target;
    const getValues = { [name]: value };
    if (getValues.Flour >= 0) {
      return {
        ...state,
        Flour: parseInt(getValues.Flour).toFixed(),
        Water: parseInt((getValues.Flour * state.Hidration) / 100).toFixed(),
        Salt: parseInt(getValues.Flour * 0.02).toFixed(),
        Yeast: parseInt(getValues.Flour * 0.02).toFixed(),
        Hidration: state.Hidration,
      };
    }
    if (getValues.Water >= 0) {
      return {
        ...state,
        Water: getValues.Water,
        Hidration: parseInt((getValues.Water / state.Flour) * 100).toFixed(0),
      };
    }
    if (getValues.Hidration >= 0) {
      return {
        ...state,
        Hidration: getValues.Hidration,
        Water: parseInt((state.Flour * getValues.Hidration) / 100).toFixed(0),
      };
    }
  }

  if (type === "RESET_FIELDS") {
    return { ...state, ...payload };
  }
  return { ...state };
};
