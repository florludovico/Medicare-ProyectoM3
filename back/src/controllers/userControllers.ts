import { Request, Response } from "express"
import { UserLoginDTO, UserRegisterDTO } from "../dtos/UserDTO"

//ver si esta funcion esta bien planteada

export const getUsersController = async (req:Request, res:Response): Promise<void> =>{
    try{

        res.status(200).json({
            message: "Obtener el listado de todos los usuarios.",
            data: []
        })
    }catch(error){
        console.error("error al obtener usuario", error);
    }
}

export const getUserByIdController = (req: Request <{ id:string } >, res: Response): void => {

    const { id } = req.params

    res.status(200).json({
        message: "Obtener el detalle de un usuario especifico: " +id,
        data: {}
    })
}

export const registerUserController = (req: Request< unknown, unknown, UserRegisterDTO >, res: Response): void => {
    res.status(201).json({
        message:"Registro de un nuevo usuario.",
        data: req.body
    })
}

export const loginUserController = (req: Request < unknown, unknown, UserLoginDTO >, res: Response): void => {
    res.status(201).json({
        message:"Login del usuario a la aplicacion.",
        data: req.body
    })
}