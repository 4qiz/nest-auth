import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common'
import { Recaptcha } from '@nestlab/google-recaptcha'

import { AuthService } from './auth.service'
import { RegisterDto } from './dto/register.dto'

@Controller('auth')
export class AuthController {
	public constructor(private readonly authService: AuthService) {}

	//@Recaptcha()
	@Post('register')
	@HttpCode(HttpStatus.OK)
	public async register(@Body() dto: RegisterDto) {
		return this.authService.register(dto)
	}
}
