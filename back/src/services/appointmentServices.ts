import { AppointmentRegisterDTO } from "../dtos/AppointmentDTO";
import { Appointment, Status } from "../interfaces/AppointmentInterface";
import { getUserByIdService } from "./userServices";

const appointmentList: Appointment[] = [];

let id: number = 1;

export const registerAppointmentService = (appointment: AppointmentRegisterDTO) => {
  
    getUserByIdService(appointment.userId.toString());

  const appointmentObject: Appointment = {
    id: id++,
    date: appointment.date,
    time: appointment.time,
    status: Status.Active,
    userId: appointment.userId,
  };

  appointmentList.push(appointmentObject);

  return appointmentObject;
};


export const getAppointmentService = (): Appointment[] => {
  return appointmentList;
};


export const getAppointmentByIdService = (id: string): Appointment => {
  const appointmentFound = appointmentList.find((appointment) => appointment.id === parseInt(id, 10));
  if (!appointmentFound)
    throw new Error(`La cita con id ${id} no fue encontrada`);
  return appointmentFound;
};


export const cancelStatusAppointmentService = (id: string): Appointment => {
  const appointmentFound = appointmentList.find((appointment) => appointment.id === parseInt(id, 10));
  if (!appointmentFound)
    throw new Error(`La cita con id ${id} no fue encontrada`);
  appointmentFound.status = Status.Cancelled;
  return appointmentFound;
};
