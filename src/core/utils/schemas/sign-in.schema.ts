import { z } from 'zod';
import { REGEX_NON_EMPTY_STRING } from '../constants/regex';

export const SignInSchema = z.object({
  email: z.string().email('Digite um e-mail válido'),
  password: z
    .string()
    .regex(REGEX_NON_EMPTY_STRING, {
      message: 'Não pode conter apenas espaços',
    })
    .min(6, 'A senha deve ter no mínimo 6 caracteres'),
});

export type SignInSchemaType = z.infer<typeof SignInSchema>;
