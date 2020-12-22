// Owner: yup.object().shape({
//     Name: yup.string().required(),
//     TaxIdNumber: yup.number().required(),
//     Type: yup.string().required(),
//     tradeName: yup.string().required(),
//   }),
import { Column } from 'typeorm';

class Account {
    @Column()
    nome: string;

    @Column()
    taxId: number;

    @Column()
    tipo: string;

    @Column()
    nomeComercial: string;
}

export default Account;