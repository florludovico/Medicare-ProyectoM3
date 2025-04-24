import { Request, Response } from "express";
import { UserLoginDTO, UserLoginSuccessDTO, UserRegisterDTO } from "../dtos/UserDTO";
import {getUserByIdService,getUserService,loginUserService,registerUserService,} from "../services/userServices";
import { PostgresError } from "../interfaces/ErrorInterface";



export const getUsersController = async (req: Request, res: Response): Promise<void> => {
  try {
    const response = await getUserService();
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


export const getUserByIdController = async (req: Request<{ id: string }>,res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    const response =await getUserByIdService(id);
    res.status(200).json(response);

  } catch (error) {
    res.status(404).json({
      message: "Error en el servidor.",
      data: error instanceof Error ? error.message : "Error desconocido.",
    });
  }
};


export const registerUserController = async (req: Request<unknown, unknown, UserRegisterDTO>, res: Response): Promise<void> => {
  try {
    await registerUserService(req.body);
    res.status(201).json({
      message: "Usuario registrado con exito."
    });

  } catch (error) {
    const PostgresError = error as PostgresError
    res.status(400).json({
      message: "Error en el servidor.",
      data: PostgresError instanceof Error ? PostgresError.detail ? PostgresError.detail : PostgresError.message: "Error desconocido."
    });
  }
};


export const loginUserController = async(req: Request< unknown, unknown, UserLoginDTO>, res: Response): Promise<void> => {
 try {
   const response: UserLoginSuccessDTO | null = await loginUserService(req.body);
   res.status(200).json(response);

 } catch(error) {
  res.status(400).json({
    message: "Error en el servidor.",
      data: error instanceof Error ? error.message : "Error desconocido."
  })
 }
 
 
};
