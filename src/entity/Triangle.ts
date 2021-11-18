import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Triangle {

    constructor(cateto1: number, cateto2: number, user: User){
        this.cateto1 = cateto1;
        this.cateto2 = cateto2;
        this.user = user;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'float'})
    cateto1: number;

    @Column({type: 'float'})
    cateto2: number;

    @Column({type: 'float'})
    hipotenusa: number

    @ManyToOne(() => User)
    user: User;
}