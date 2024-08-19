import { User } from "../interfaces/user.interface";
import { Auth } from "../interfaces/auth.interface";
import { PrismaClient } from "@prisma/client";
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

const prisma = new PrismaClient();

const registerUser = async ({ email, password, name,lastname }: User) => {
  const checkIs = await prisma.user.findFirst({
    where: {
      email,
    },
  });
  if (checkIs) return "ALREADY_USERS";
  const passwordHash = await encrypt(password);
  const registerNewUser = await prisma.user.create({
    data: {
      email,
      password: passwordHash,
      name,
      lastname
    },
  });
  return registerNewUser;
};

const loginUser = async ({ email, password }: Auth) => {
  const checkIs = await prisma.user.findFirst({
    where: {
      email,
    },
  });
  if (!checkIs) return "NOT_FOUND_USER";
  const passwordHash = checkIs.password;
  const isCorrect = await verified(password, passwordHash);
  if (!isCorrect) return "PASSWORD_INCORRECT";
  const token = generateToken(checkIs.email);
  const data = [token, checkIs];
  return data;
};

export { registerUser, loginUser };
