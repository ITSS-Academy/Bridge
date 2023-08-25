import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthAccountDto } from './create-auth-account.dto';

export class UpdateAuthAccountDto extends PartialType(CreateAuthAccountDto) {
    email?: string;
    firstName?: string;
    lastName?: string;
    hash_password?: string;
}
