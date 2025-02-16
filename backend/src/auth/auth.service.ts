import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; // Assumes Prisma service is created
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from './dto/auth.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (user && bcrypt.compareSync(password, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(authDto: AuthDto) {
    const hashedPassword = bcrypt.hashSync(authDto.password, 10);
    const user = await this.prisma.user.create({
      data: {
        email: authDto.email,
        password: hashedPassword,
      },
    });
    return user;
  }
}
