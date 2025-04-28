export const registerFormValidates = (input) =>{
    const errors ={};

    if (!input.name.trim()) errors.name = 'Debe completar el nombre';
    else if(!/^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/.test(input.name)) errors.name = 'Debe ser un nombre valido';

     if (!input.email.trim()) errors.email = 'Debe completar el correo';
    else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(input.email)) errors.email = 'Debe ser un correo valido';

    if (!input.birthdate) {
        errors.birthdate = 'Debe completar la fecha de nacimiento';
    } else {
        const birthDate = new Date(input.birthdate);
        const today = new Date();
        
        if (birthDate >= today) {
            errors.birthdate = 'La fecha debe ser anterior al dia actual';
        }
    }

    if (!input.nDni) errors.nDni = 'Debe completar el numero de dni';
    else if(!/^\d{7,8}$/.test(input.nDni)) errors.nDni = 'Debe ser un numero de dni valido, entre 7 y 8 digitos';

    if (!input.username.trim()) {
        errors.username = 'Debe completar el usuario';  
    } else if(!/^[a-zA-Z0-9]+$/.test(input.username)) {
      errors.username = 'Debe contener solo letras y numeros.'
    };

    if (!input.password.trim()) {
        errors.password = 'Debe completar el password';  
    } else if(input.password.length < 8) {
        errors.password = 'El password debe tener al menos 8 caracteres';
    } else if(!/[A-Z]/.test(input.password)) {
        errors.password = 'El password debe contener al menos una letra mayuscula';
    } else if(!/[0-9]/.test(input.password)) {
        errors.password = 'El password debe contener al menos un numero';
    } else if(!/[^A-Za-z0-9]/.test(input.password)) {
        errors.password = 'El password debe contener al menos un caracter especial';
    };


      return errors;
    
};

export const loginFormValidates = (input) =>{
    const errors ={};

if (!input.username.trim()) {
    errors.username = 'Debe completar el usuario';  
} else if(!/^[a-zA-Z0-9]+$/.test(input.username)) {
  errors.username = 'Debe contener solo letras y numeros.'
};

if (!input.password.trim()) {
    errors.password = 'Debe completar el password';  
} else if(input.password.length < 8) {
    errors.password = 'El password debe tener al menos 8 caracteres';
} else if(!/[A-Z]/.test(input.password)) {
    errors.password = 'El password debe contener al menos una letra mayuscula';
} else if(!/[0-9]/.test(input.password)) {
    errors.password = 'El password debe contener al menos un numero';
} else if(!/[^A-Za-z0-9]/.test(input.password)) {
    errors.password = 'El password debe contener al menos un caracter especial';
};


  return errors;
};