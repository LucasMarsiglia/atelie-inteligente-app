import { z } from 'zod';
import { REGEX_ONLY_LETTERS_WITH_INNERS_PACES, REGEX_NUMBER_DECIMAL } from '../constants/regex';

const dimensions = z.object({
  width: z
    .string()
    .nonempty('Informe a largura')
    .regex(REGEX_NUMBER_DECIMAL, 'Apenas números são permitidos'),

  height: z
    .string()
    .nonempty('Informe a altura')
    .regex(REGEX_NUMBER_DECIMAL, 'Apenas números são permitidos'),

  depth: z
    .string()
    .nonempty('Informe a profundidade')
    .regex(REGEX_NUMBER_DECIMAL, 'Apenas números são permitidos'),
});

const financial = z.object({
  price: z.string().nonempty('Informe o preço'),
  stocks: z.string().nonempty('Informe a quantidade em estoque'),
  delivery_time: z.string().nonempty('Informe o prazo de entrega'),
});

const piece_image = z.object({
  photo_url: z.string(),
  upload_method: z.string(),
});

export const pieceSchema = z.object({
  name: z
    .string()
    .nonempty('Informe o nome da peça')
    .regex(REGEX_ONLY_LETTERS_WITH_INNERS_PACES, 'Apenas letras e espaços são permitidos')
    .min(6, 'O nome deve ter no mínimo 6 caracteres'),

  dimensions: dimensions,

  material: z
    .string()
    .nonempty('Informe o material')
    .regex(REGEX_ONLY_LETTERS_WITH_INNERS_PACES, 'Apenas letras e espaços são permitidos')
    .min(4, 'O material deve ter no mínimo 4 caracteres'),

  finish: z
    .string()
    .nonempty('Informe o acabamento')
    .regex(REGEX_ONLY_LETTERS_WITH_INNERS_PACES, 'Apenas letras e espaços são permitidos')
    .min(4, 'O acabamento deve ter no mínimo 4 caracteres'),

  availability: z.string().nonempty('Informe a disponibilidade'),

  financial: financial,

  pieces_images: z.array(piece_image.optional()).optional(),
});

export type PieceSchemaType = z.infer<typeof pieceSchema>;
