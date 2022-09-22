import { Injectable } from '@nestjs/common';
import { DbService } from '@nx-nest-next/api/data-access-db';
import { FindUniqueUserArgs, UserCreateInput, UserUpdateInput } from '@nx-nest-next/api/generated/db-types';

@Injectable()
export class UserService {
  constructor(private db: DbService) {}
  create(userCreateInput: UserCreateInput) {
    return this.db.user.create({data: userCreateInput});
  }

  findAll() {
    return this.db.user.findMany();
  }

  findOne(findUniqueUser: FindUniqueUserArgs) {
    return this.db.user.findUnique(findUniqueUser);
  }

  update(id: number, userUpdateInput: UserUpdateInput) {
    return `This action updates a #${userUpdateInput.email} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
