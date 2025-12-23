import { z } from 'zod';
import {
  REGEX_NON_EMPTY_STRING,
  REGEX_ONLY_LETTERS_WITH_INNERS_PACES,
} from '../constants/regex';
import { required } from 'zod/v4/core/util.cjs';

export const SignUpSchema = z.object({
  name: z
    .string()
    .nonempty({ message: 'Nome é obrigatório' })
    .regex(REGEX_ONLY_LETTERS_WITH_INNERS_PACES, {
      message: 'Apenas letras são permitidas',
    })
    .min(4, 'O nome deve ter no mínimo 2 caracteres'),
  email: z.string().email('Digite um e-mail válido'),
  password: z
    .string()
    .nonempty({ message: 'Senha é obrigatória' })
    .regex(REGEX_NON_EMPTY_STRING, {
      message: 'Não pode conter apenas espaços',
    })
    .min(6, 'A senha deve ter no mínimo 6 caracteres'),

  accountType: z.enum(['ceramista', 'comprador'], { message: 'Tipo de conta inválido' }),

  termsOfUse: z
    .boolean()
    .optional()
    .refine((val) => val === true, {
      message: 'Você deve aceitar os termos de uso',
    }),
});

export type SignUpSchemaType = z.infer<typeof SignUpSchema>;
