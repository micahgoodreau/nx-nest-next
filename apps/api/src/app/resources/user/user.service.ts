import { Injectable } from '@nestjs/common';
import { DbService } from '@nx-nest-next/api/data-access-db';
import { UserCreateInput, UserUpdateInput } from '@nx-nest-next/api/generated/db-types';

@Injectable()
export class UserService {
  constructor(private db: DbService) {}
  create(userCreateInput: UserCreateInput) {
    return this.db.user.create({data: userCreateInput});
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, userUpdateInput: UserUpdateInput) {
    return `This action updates a #${userUpdateInput.email} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
