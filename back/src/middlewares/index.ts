import { NextFunction, Request, Response } from "express";
import { UserRegisterDTO } from "../dtos/UserDTO";
import { AppointmentRegisterDTO } from "../dtos/AppointmentDTO";

export const validateUserRegisterData = (req: Request<unknown, unknown, UserRegisterDTO>, res: Response, next: NextFunction): void => {
  const { name, email, birthdate, nDni, username, password } = req.body;
  if (!name || !email || !birthdate || !nDni || !username || !password) {
    res.status(400).json({
      message: "Informacion incompleta para registar el usuario",
    });
  } else next();
};



export const validateAppointmentRegisterData = (req:Request< unknown, unknown, AppointmentRegisterDTO >, res: Response, next: NextFunction): void =>{
    const{ date, time, userId } = req.body;
    if (!date || !time || !userId) {
      res.status(400).json({
        message: "Informacion incompleta para registrar el turno",
      });
    } else next();
  };
