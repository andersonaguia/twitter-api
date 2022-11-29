import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "users"})
export class UserEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 100})
    nome:string;

    @Column({length: 255, unique: true})
    email: string;

    @Column({length: 50})
    usuario: string;

    @Column({default: () => true})
    ativo: boolean;
}