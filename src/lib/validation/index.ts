import * as z from 'zod';

export const SignupValidation = z.object({
  name: z
    .string()
    .min(2, { message: 'Too Short' })
    .max(50, { message: 'Too Long' }),
  username: z.string().min(2, { message: 'Too Short' }),
  email: z.string().email({ message: 'Invalid Email' }),
  password: z
    .string()
    .min(8, { message: 'Password must to be at least 8 character' }),
});
