import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Bootcamp {
@PrimaryGeneratedColumn()
id: number;
@Column()
phone: number;
@Column()
nombre: string;
@Column()
adress: string;
@Column()
topics: string;
@Column({name:"average_reting"})
averageReting: string;
@Column()
createAt: string;

}
