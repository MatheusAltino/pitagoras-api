import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Triangle } from "./Triangle";

@Entity()
export class User {

    constructor(name: string, email: string){
        this.name = name;
        this.email = email;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @OneToMany(() => Triangle, triangle => triangle.user)
    triangle: Triangle[];
}
