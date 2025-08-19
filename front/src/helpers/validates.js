import moment from 'moment';

export const registerFormValidates = (input) => {
  const errors = {};

  if (!input.name.trim()) errors.name = "Debe completar el nombre";
  else if (!/^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/.test(input.name))
    errors.name = "Debe ser un nombre valido";

  if (!input.email.trim()) errors.email = "Debe completar el correo";
  else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(input.email))
    errors.email = "Debe ser un correo valido";

  if (!input.birthdate) {
    errors.birthdate = "Debe completar la fecha de nacimiento";
  } else {
    const birthDate = new Date(input.birthdate);
    const today = new Date();

    if (birthDate >= today) {
      errors.birthdate = "La fecha debe ser anterior al dia actual";
    }
  }

  if (!input.nDni) errors.nDni = "Debe completar el numero de dni";
  else if (!/^\d{7,8}$/.test(input.nDni))
    errors.nDni = "Debe ser un numero de dni valido, entre 7 y 8 digitos";

  if (!input.username.trim()) {
    errors.username = "Debe completar el usuario";
  } else if (!/^[a-zA-Z0-9]+$/.test(input.username)) {
    errors.username = "Debe contener solo letras y numeros.";
  }

  if (!input.password.trim()) {
    errors.password = "Debe completar el password";
  } else if (input.password.length < 8) {
    errors.password = "El password debe tener al menos 8 caracteres";
  } else if (!/[A-Z]/.test(input.password)) {
    errors.password = "El password debe contener al menos una letra mayuscula";
  } else if (!/[0-9]/.test(input.password)) {
    errors.password = "El password debe contener al menos un numero";
  } else if (!/[^A-Za-z0-9]/.test(input.password)) {
    errors.password = "El password debe contener al menos un caracter especial";
  }

  return errors;
};

export const loginFormValidates = (input) => {
  const errors = {};

  if (!input.username.trim()) {
    errors.username = "Debe completar el usuario";
  } else if (!/^[a-zA-Z0-9]+$/.test(input.username)) {
    errors.username = "Debe contener solo letras y numeros.";
  }

  if (!input.password.trim()) {
    errors.password = "Debe completar el password";
  } else if (input.password.length < 8) {
    errors.password = "El password debe tener al menos 8 caracteres";
  } else if (!/[A-Z]/.test(input.password)) {
    errors.password = "El password debe contener al menos una letra mayuscula";
  } else if (!/[0-9]/.test(input.password)) {
    errors.password = "El password debe contener al menos un numero";
  } else if (!/[^A-Za-z0-9]/.test(input.password)) {
    errors.password = "El password debe contener al menos un caracter especial";
  }

  return errors;
};


const isValidTime = (time) => {
  const format = "HH:mm";
  const parsedTime = moment(time, format, true); 

  if (!parsedTime.isValid()) return false;

  const start = moment("08:00", format);
  const end = moment("18:00", format);

  return parsedTime.isBetween(start, end, undefined, "[)");
};

export const dateTimeValidates = (input) => {
  const errors = {};
  const { date, time } = input;

  const dateTimeFormat = "YYYY-MM-DDTHH:mm";
  const selectedDateTime = moment(`${date}T${time}`, dateTimeFormat, true);
  const now = moment();
  const twentyFourHoursLater = now.clone().add(24, "hours");

  if (!date) {
    errors.date = "La fecha es obligatoria";
  } else if (!selectedDateTime.isValid()) {
    errors.date = "Formato de fecha u hora inválido";
  } else if (selectedDateTime.isBefore(now)) {
    errors.date = "No es posible agendar citas para fechas pasadas";
  } else if (selectedDateTime.isBefore(twentyFourHoursLater)) {
    errors.date = "Por favor, seleccionar una fecha con al menos 24 horas de antelación";
  } else if ([0, 6].includes(selectedDateTime.day())) {
    errors.date = "No es posible agendar citas los fines de semana";
  }

  if (!time) {
    errors.time = "La hora es obligatoria";
  } else if (!isValidTime(time)) {
    errors.time = "La hora debe estar entre las 8 y las 18 hs";
  }

  return errors;
};

