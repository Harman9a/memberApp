export const saveSearchInputData = (data: any) => {
  return {
    type: "SAVE_SEARCH_INPUT_DATA",
    payload: data,
  };
};

export const saveSearchData = (data: any) => {
  return {
    type: "SAVE_SEARCH_DATA",
    payload: data,
  };
};
