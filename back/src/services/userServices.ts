import { AppDataSource, UserModel } from "../config/data.source";
import { UserDTO, UserRegisterDTO } from "../dtos/UserDTO";
import { Credential } from "../entities/Credentials.entity";
import { User } from "../entities/User.entity";
//import { User } from "../interfaces/UserInterface";
import { createCredentialService } from "./credentialServices";


export const getUserService = async (): Promise<UserDTO[]> => {
  const users : User[] = await UserModel.find()
  return users;
};


export const getUserByIdService = async (id: string): Promise<UserDTO> => {
 
  const userFound = await UserModel.findOne({
   where: {
    id: parseInt(id, 10)
   },
   relations: ["credentials"]
  });

  if (!userFound) throw new Error(`El usuario con id ${id} no existe`);
  else return userFound;
};

export const registerUserService = async (user: UserRegisterDTO): Promise<User> => {
 
  
 const result = await AppDataSource.transaction(async (entityManager)=> {
    const userCredentials: Credential = await createCredentialService( entityManager, user.username, user.password );
    const newUser: User = entityManager.create(User, {
      name: user.name,
      birthdate: user.birthdate,
      email: user.email,
      nDni: user.nDni,
      credentials: userCredentials,
    });

    return await entityManager.save(newUser)
  })
  

 return result;
 
 
 
};
