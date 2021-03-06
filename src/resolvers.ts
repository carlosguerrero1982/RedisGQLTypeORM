import { ResolverMap } from './types/graphql-util';
import * as bcrypt from 'bcryptjs'
import { User } from './entity/User';

export const resolvers:ResolverMap = {
    Query: {
      hello: (_: any, { name }: GQL.IHelloOnQueryArguments) => `Bye ${name || 'World'}`,
    },

    Mutation :{
      register:async(_: any,{email,password}: GQL.IRegisterOnMutationArguments)=>{

        const hashPassword= await bcrypt.hash(password,10)

       const user = User.create({
         email,
         password: hashPassword
       });

       await user.save();

        console.log(user)
      return true
      }
    }
  }