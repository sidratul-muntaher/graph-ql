import { Field, Int, ObjectType } from "@nestjs/graphql";
import { UserSettings } from "./usersetting";

@ObjectType()
export class User{

    @Field((type) => Int)
    id:number;

    @Field()
    username:string;

    @Field({nullable:true})
    name?:string;

    @Field({nullable:true})
    userSettings?:UserSettings
}