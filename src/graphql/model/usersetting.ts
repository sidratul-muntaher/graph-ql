import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class UserSettings{
    @Field(type=>Int)
    userId:number

    @Field({defaultValue:false})
    receiveNotification:boolean;

    @Field({defaultValue:false})
    receiveEmail:boolean;

        
}