const rootPatient = (
  state: any = {
    id: "",
    name: "",
    telephone: "",
    email: "",
    photo: "",
    birthDate: "",
    doctorId: "",
    dosage: "",
    frequency: "",
    startTreatment: "",
    endTreatment: "",
    allergies: [],
    method: "",
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

export default rootPatient;
