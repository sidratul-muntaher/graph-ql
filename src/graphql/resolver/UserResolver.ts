import { Args, Int, Mutation, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { User } from "../model/User";
import { users } from "src/__mock__/userm";
import { UserSettings } from "../model/usersetting";
import { userSettings } from "src/__mock__/userSettings";

@Resolver(() => User)
export class UserResolver{
    
    @Query((re) => [User]) 
    getUsers(){
        return users
    }

    @Query(returns => User, {nullable:true})
    getUserById(@Args('id', {type: ()=> Int})id:number){
        return users.find(user => user.id === id)
    }

    @ResolveField((returns) => UserSettings, {name:'userSettings', nullable:true})
    getUserSettings(@Parent() user: User){
        console.log(user);
        return userSettings.find(se => se.userId === user.id)
    }

    @Mutation(() => User)
    createUser(@Args('username') name:string, @Args('name') username:string){
        const newUser = {
            id:0,
            name:name,
            username:username,
            age:23
        }
        users.push(newUser);

        return newUser;

    }
}