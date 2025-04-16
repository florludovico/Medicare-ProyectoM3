import { UserDTO, UserRegisterDTO } from "../dtos/UserDTO";
import { User } from "../interfaces/UserInterface";
import { createCredentialService } from "./credentialServices";

const userList: User[] = [];

let id: number = 1;

export const getUserService = (): UserDTO[] => {
  return userList.map((user) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
    };
  });
};

export const getUserByIdService = (id: string): UserDTO => {
  const userFound: User | undefined = userList.find((user) => user.id === parseInt(id, 10));

  if (!userFound) throw new Error(`El usuario con id ${id} no existe`);
  else
    return {
      id: userFound.id,
      name: userFound.name,
      email: userFound.email,
    };
};

export const registerUserService = async (user: UserRegisterDTO): Promise<User> => {
  const idCredentialUser: number = await createCredentialService(
    user.username,
    user.password
  );

  const userObject: User = {
    id: id++,
    name: user.name,
    birthdate: user.birthdate,
    email: user.email,
    nDni: user.nDni,
    credentialsId: idCredentialUser,
  };
  userList.push(userObject);

  return userObject;
};
