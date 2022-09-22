import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FindUniqueUserArgs, User, UserCreateInput, UserUpdateInput } from '@nx-nest-next/api/generated/db-types';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  createUser(@Args('createUserInput') userCreateInput: UserCreateInput) {
    return this.userService.create(userCreateInput);
  }

  @Query(() => [User], { name: 'users' })
  findAll() {
    return this.userService.findAll();
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args() findUniqueUserArgs: FindUniqueUserArgs) {
    return this.userService.findOne(findUniqueUserArgs);
  }

  @Mutation(() => User)
  updateUser(@Args('updateUserInput') updateUserInput: UserUpdateInput) {
    return this.userService.update(1, updateUserInput);
  }

  @Mutation(() => User)
  removeUser(@Args('id', { type: () => Int }) id: number) {
    return this.userService.remove(id);
  }
}
