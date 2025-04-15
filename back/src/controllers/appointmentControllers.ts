import { Request, Response } from "express";
import { AppointmentRegisterDTO } from "../dtos/AppointmentDTO";

export const getAppointmentsController =  ( req: Request, res: Response): void => {
    res.status(200).json({
        message:"Obtener el listado de todos los turnos de todos los usuarios",
        data: []
    })
}

export const getAppointmentByIdController =  ( req: Request< { id: string} >, res: Response): void => {
   
    const {id} = req.params
    res.status(200).json({
        message:"Obtener el detalle de un turno especifico: "+id,
        data: {}
    })
}

export const registerAppointmentController =  ( req: Request<unknown, unknown, AppointmentRegisterDTO >, res: Response): void => {
    res.status(201).json({
        message:"Agendar un nuevo turno",
        data: req.body
    })
}

export const cancelStatusAppointmentController =  ( req: Request< { id: string} >, res: Response): void => {
   
    const {id} = req.params
    res.status(200).json({
        message:"Cambiar el status de un turno a 'cancelled':"+id,
        data: {}
    })
}