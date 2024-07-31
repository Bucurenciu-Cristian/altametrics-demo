import { z } from 'zod';
import { ApiProperty } from '@nestjs/swagger';

export const AuthDto = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export type AuthDto = z.infer<typeof AuthDto>;

export class AuthDtoClass {
  @ApiProperty({ example: 'user@example.com' })
  email: string;

  @ApiProperty({ example: 'password' })
  password: string;
}
