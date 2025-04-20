import { Request, response, Response } from "express";
import { AppointmentRegisterDTO } from "../dtos/AppointmentDTO";
import {getAppointmentByIdService, getAppointmentService, registerAppointmentService, cancelStatusAppointmentService,} from "../services/appointmentServices";

export const getAppointmentsController = (req: Request, res: Response): void => {
  try {
    const response = getAppointmentService();
    res.status(200).json({
      message: "Obtener el listado de todos los turnos de todos los usuarios",
      data: response,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error en el servidor.",
      data: error instanceof Error ? error.message : "Error desconocido.",
    });
  }
};

export const getAppointmentByIdController = (req: Request<{ id: string }>, res: Response): void => {
  const { id } = req.params;

  try {
    const response = getAppointmentByIdService(id);
    res.status(200).json({
      message: "Obtener el detalle de un turno especifico: " + id,
      data: response,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error en el servidor.",
      data: error instanceof Error ? error.message : "Error desconocido.",
    });
  }
};

export const registerAppointmentController = (req: Request<unknown, unknown, AppointmentRegisterDTO>, res: Response): void => {
  try {
    const response = registerAppointmentService(req.body);
    res.status(201).json({
      message: "Agendar un nuevo turno",
      data: response,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error en el servidor.",
      data: error instanceof Error ? error.message : "Error desconocido.",
    });
  }
};


export const cancelStatusAppointmentController = (req: Request<{ id: string }>, res: Response): void => {
  const { id } = req.params;

  try {
    const response = cancelStatusAppointmentService(id);
    res.status(200).json({
      message: "Cambiar el status de un turno a 'cancelled':" + id,
      data: response,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error en el servidor.",
      data: error instanceof Error ? error.message : "Error desconocido.",
    });
  }
};
