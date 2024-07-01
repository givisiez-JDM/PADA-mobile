const rootReducer = (
  state: any = {
    id: "",
    name: "",
    email: "",
    photo: "",
    about: "",
    CRM: "",
    specialty: "",
  },
  action: any
) => {
  switch (action.type) {
    case "UPDATE_DOCTOR":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
