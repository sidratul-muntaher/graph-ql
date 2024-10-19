import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UserResolver } from './graphql/resolver/UserResolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver:ApolloDriver,
      playground:{
        settings:{
        'editor.reuseHeaders':false  
        }
      },
      introspection: true,
      autoSchemaFile:'src/schema.gql'
    })
  ],
  providers:[UserResolver]
})
export class AppModule {}
