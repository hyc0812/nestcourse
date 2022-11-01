import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
    get() {
        return {name: 'Yongchang He', email:'yongchanghe8@gmail.com'};
    }

    create(createUserDto: CreateUserDto){
        return createUserDto;
    }

    update(updateUserDto: UpdateUserDto, param: {userId: number}) {
        return {body: updateUserDto, param};
    }

    show(param: {userId: number}) {
        return param;
    }

    delete(param: {userId: number}) {
        return param;
    }
}
