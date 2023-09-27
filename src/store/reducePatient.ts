const rootPatient = (
  state: any = {
    id: "",
    name: "",
    telefone:"",
    email: "",
    data_nascimento: "",
    dosagem:"",
    alergias:"",
    periodicidade:"",
    metodo:"",
    inicio:"",
    fim:""
  },
  action: any
) => {
  switch (action.type) {
    case "UPDATE_PATIENT":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};


export default rootPatient