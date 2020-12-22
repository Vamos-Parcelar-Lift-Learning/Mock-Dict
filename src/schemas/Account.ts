import { Column } from 'typeorm';

class Account {
    @Column()
    numeroDaConta: string;

    @Column()
    tipoDaConta: string;

    @Column()
    ramo: string;

    @Column()
    dataAbertura: string;

    @Column()
    participante: number;
}

export default Account;