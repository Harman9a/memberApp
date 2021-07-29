interface iStateInter {
  searchForm: {
    ServiceDate: string;
    policyNumber: string;
    masterCardNumber: string;
  };
  searchResultType: string;
}

const iState: iStateInter = {
  searchForm: {
    ServiceDate: "",
    policyNumber: "",
    masterCardNumber: "",
  },
  searchResultType: "Default",
};

export const Reducer = (state = iState, actions: any) => {
  switch (actions.type) {
    case "SAVE_SEARCH_INPUT_DATA": {
      return {
        ...state,
        searchForm: {
          ServiceDate: actions.payload.date,
          policyNumber: actions.payload.pNumber,
          masterCardNumber: actions.payload.mcNumber,
        },
        searchResultType: actions.payload.searchType,
      };
    }
    case "SAVE_SEARCH_DATA": {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};
