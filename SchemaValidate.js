import { z } from "zod";

export const Register_Login = z.object({
  name: z.string().min(1).max(18),
  email: z.string().email(),
  password: z.string().min(1).max(18),
});
