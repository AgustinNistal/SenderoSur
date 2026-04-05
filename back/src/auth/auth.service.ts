import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/users.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async register(dto: { name: string; email: string; password: string }) {
  // Verificar si el email ya existe
  const existing = await this.usersService.findByEmail(dto.email);
  if (existing) {
    throw new UnauthorizedException('Email ya registrado');
  }

  // Hashear la contraseña
  const hashedPassword = await bcrypt.hash(dto.password, 10);

  // Crear el usuario en la base de datos
  const newUser = await this.usersService.create({
    ...dto,
    password: hashedPassword,
  });

  // Generar payload para el JWT
  const payload = { sub: newUser.id, email: newUser.email };

  // Devolver token y usuario sin contraseña
  return {
    access_token: this.jwtService.sign(payload),
    user: {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      avatar: newUser.avatar,
      phone: newUser.phone,
      reservations: newUser.reservations || [],
      comments: newUser.comments || [],
    },
  };
}

  async login(email: string, password: string) {
  // Buscar usuario por email
  const user = await this.usersService.findByEmail(email);
  if (!user) {
    throw new UnauthorizedException('Credenciales inválidas');
  }

  // Comparar contraseña hasheada
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new UnauthorizedException('Credenciales inválidas');
  }

  // Generar payload para el JWT
  const payload = { sub: user.id, email: user.email };

  // Devolver token y usuario sin contraseña
  return {
    access_token: this.jwtService.sign(payload),
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      phone: user.phone,
      reservations: user.reservations || [],
      comments: user.comments || [],
    },
  };
}
}