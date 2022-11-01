import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class ProfileController {

    @UseGuards(AuthGuard('jwt'))
    @Get('profile')
    profile(@Request() req) {
        //return { message: 'I am protected route' };
        return req.user;
    }
}
