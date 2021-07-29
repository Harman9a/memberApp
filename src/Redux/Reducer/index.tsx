interface iStateInter {
  searchForm: {
    ServiceDate: string;
    policyNumber: string;
    masterCardNumber: string;
  };
  searchResult: Boolean;
}

const iState: iStateInter = {
  searchForm: {
    ServiceDate: "",
    policyNumber: "",
    masterCardNumber: "",
  },
  searchResult: true,
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
