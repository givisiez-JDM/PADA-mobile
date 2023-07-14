const complexityOptions = {
  min: 8,
  max: 30,
  lowerCase: 1,
  upperCase: 1,
  numeric: 1,
  symbol: 1,
  requirementCount: 4,
};

const checkPassword = (password: string) => {
  if (
    password.length < complexityOptions.min ||
    password.length > complexityOptions.max
  ) {
    return false;
  }
  let requirementCount = 0;

  // Verifica a presença de caracteres minúsculos
  if (/[a-z]/.test(password)) {
    requirementCount++;
  }

  // Verifica a presença de caracteres maiúsculos
  if (/[A-Z]/.test(password)) {
    requirementCount++;
  }

  // Verifica a presença de caracteres numéricos
  if (/[0-9]/.test(password)) {
    requirementCount++;
  }

  // Verifica a presença de caracteres especiais
  if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    requirementCount++;
  }

  // Verifica se a contagem de requisitos atende ao requirementCount
  return requirementCount >= complexityOptions.requirementCount ? true : false;
};

export const validarLogin = (
  mail: string,
  pass: string,
  setErrorMail: React.Dispatch<React.SetStateAction<string>>,
  setErrorPass: React.Dispatch<React.SetStateAction<string>>
) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let error = false;
  if (mail === "") {
    setErrorMail("Preencha o campo do email.");
    error = true;
  }
  if (!regex.test(mail)) {
    setErrorMail(
      "Preencha o campo do email de forma correta. (Ex: exemplo@gmail.com)"
    );
    error = true;
  }
  if (pass === "") {
    setErrorPass("Preencha o campo da senha.");
    error = true;
  }
  if (checkPassword(pass) === false) {
    setErrorPass(
      "Preencha os requisitos da senha:\n 1. Mínimo de 8 caracteres.\n 2. Máximo de 30 caracteres. \n 3. Possuir pelo menos 1 letra minúscula e 1 maíscula. \n 4. Possuir pelo menos 1 número e 1 caracter especial."
    );
    error = true;
  }
  return error;
};

export const validar = (value: any, err: any) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let error = false;
  if (value.name === "") {
    err.setErrorName("Preencha o campo do nome.");
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
  if (checkPassword(value.pass) === false) {
    err.setErrorPass(
      "Preencha os requisitos da senha:\n 1. Mínimo de 8 caracteres.\n 2. Máximo de 30 caracteres. \n 3. Possuir pelo menos 1 letra minúscula e 1 maíscula. \n 4. Possuir pelo menos 1 número e 1 caracter especial.(Ex: ! @ # $ % & *)"
    );
    error = true;
  }
  if (value.repeatPass === "") {
    err.setErrorRepeatPass("Preencha o campo igual ao da senha.");
    error = true;
  }

  return !error;
};
