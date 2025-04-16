import { Request, Response } from "express";
import { UserLoginDTO, UserRegisterDTO } from "../dtos/UserDTO";
import {getUserByIdService,getUserService,registerUserService,} from "../services/userServices";



export const getUsersController = (req: Request, res: Response): void => {
  try {
    const response = getUserService();
    res.status(200).json({
      message: "Obtener el listado de todos los usuarios.",
      data: response,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error en el servidor.",
      data: error instanceof Error ? error.message : "Error desconocido.",
    });
  }
};


export const getUserByIdController = (req: Request<{ id: string }>,res: Response): void => {
  const { id } = req.params;

  try {
    const response = getUserByIdService(id);
    res.status(200).json({
      message: "Obtener el detalle de un usuario especifico: " + id,
      data: response,
    });

  } catch (error) {
    res.status(400).json({
      message: "Error en el servidor.",
      data: error instanceof Error ? error.message : "Error desconocido.",
    });
  }
};


export const registerUserController = async (req: Request<unknown, unknown, UserRegisterDTO>, res: Response): Promise<void> => {
  try {
    const response = await registerUserService(req.body);
    res.status(201).json({
      message: "Registro de un nuevo usuario.",
      data: response,
    });

  } catch (error) {
    res.status(400).json({
      message: "Error en el servidor.",
      data: error instanceof Error ? error.message : "Error desconocido.",
    });
  }
};


export const loginUserController = (req: Request<unknown, unknown, UserLoginDTO>, res: Response): void => {
  res.status(201).json({
    message: "Login del usuario a la aplicacion.",
    data: req.body,
  });
};
