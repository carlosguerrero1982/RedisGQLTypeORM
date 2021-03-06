import {Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, BeforeInsert, BaseEntity} from "typeorm";

import  {uuid} from 'uuidv4';

@Entity("users")
export class User extends BaseEntity {

    @PrimaryColumn("uuid")
    id: string;

    @Column("varchar",{length: 255})
    email: string;

    @Column("text")
    password: string;

    @BeforeInsert()
    addId(){
        this.id = uuid();
    }
}
