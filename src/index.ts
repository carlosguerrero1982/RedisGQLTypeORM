import "reflect-metadata";
import {resolvers} from './resolvers'
import { GraphQLServer } from 'graphql-yoga'
import { importSchema } from 'graphql-import'
import { User } from "./entity/User";
import { createConnection} from "typeorm";

const typeDefs = importSchema('src/schema.graphql'); 



createConnection().then(async connection => { 
   
    const server = new GraphQLServer({ typeDefs, resolvers })
    server.start(() => console.log('Server is running on localhost:4000'))
    
 }).catch(error => console.log(error));
 


