export const validar = (value: any, err: any) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let error = false;
  if (value.name === "") {
    err.setErrorName("Preencha o campo do nome.");
    error = true;
  }
  if (value.mail === "") {
    err.setErrorMail("Preencha o campo do email.");
    error = true;
  }
  if (!regex.test(value.mail)) {
    err.setErrorMail(
      "Preencha o campo do email de forma correta. (Ex: exemplo@gmail.com)"
    );
    error = true;
  }
  if (value.pass === "") {
    err.setErrorPass("Preencha o campo da senha.");
    error = true;
  }
  if (value.repeatPass === "") {
    err.setErrorRepeatPass("Preencha o campo da senha.");
    error = true;
  }

  return !error;
};
