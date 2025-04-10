## US-01 REGISTRO DE USUARIOS
Como usuario:
✅ Registrarse mediante correo y contraseña con datos: nombre, apellido, fecha nacimiento, email, teléfono.
✅Criterios de aceptación: 
	El usuario tiene que poder registrarse con mail y contraseña
	El usuario solo podrá reservar turno una vez registrado.


## US-02 CONFIRMACION DE REGISTRO POR EMAIL AL CREAR LA CUENTA
Como usuario:
✅Recibir un correo electrónico al instante posterior al registro, donde se confirme el registro para el usuario.
✅Criterios de aceptación:
	El usuario debe recibir al correo electrónico proporcionado un email de confirmación de registro.


## US-03 SOLICITUD DE TURNO
Como usuario:
✅Poder solicitar turno en fecha y horario elegido, con el profesional de preferencia , dentro del horario de atención del centro médico (8-18hs) de lunes a viernes.
✅Criterios de aceptación:
	El usuario no puede solicitar dos turnos a la misma hora
	El turno solo puede ser solicitado dentro de los horarios permitidos, caso contrario dar mensaje de error.

### US-04 CANCELACION DE TURNOS
Como usuario:
✅Poder cancelar los turnos ya asignados las veces que sea necesario. 
✅Criterios de aceptación:
	El usuario debe poder cancelar los turnos hasta 24hs antes 
	No podrá cancelar el turno el mismo día.
	El turno desaparece de la lista de turnos una vez cancelado.

## US-05 VISTA DE TURNOS RESERVADOS 
Como usuario:
✅El usuario debe poder visualizar en pantalla los turnos agendados.
✅Criterios de aceptación:
	El usuario debe poder visualizar los turnos próximos y  pasados con hora, fecha y profesional detallados.
	Cada turno debe mostrar el estado (activo – cancelado)
	Cada turno debe mostrar la opción cancelar turno hasta 24 hs antes del turno.

## US-06 RESTRICCION PARA TURNOS FUERA DE HORARIO DE ATENCION
Como usuario: 
✅El usuario no debe poder solicitar turnos los fines de semana (no deben aparecer como disponibles), ni fuera del horario de atención estipulado.
✅Criterios de aceptación:
	Los días correspondientes al fin de semana deben estar bloqueados para solicitud de turno.
	Los horarios fuera del rango deben estar bloqueados, o devolver una alerta de error al intentar solicitar.

### US-07 CONFIRMACION DE SOLICITUD/CANCELACION DE TURNO POR EMAIL
Como usuario:
✅El usuario debe recibir un correo de confirmación luego de solicitado el turno. 
✅Criterios de aceptación:
	El usuario debe recibir un correo de confirmación del turno reservado a su email registrado 
	El correo debe especificar fecha hora y profesional del turno.
	El usuario debe recibir un correo de confirmación de cancelación de turno, indicando que ha sido eliminado.
