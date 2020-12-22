import {
    Column,
    Entity,
    ObjectIdColumn,
    ObjectID
  } from 'typeorm';

  import Account from './Account';
  import Owner from './Owner';

  @Entity('keys')
  class KeySchema {
    @ObjectIdColumn()
    id: ObjectID;
  
    @Column()
    Account: Account;
  
    @Column()
    KeyType: string;
  
    @Column()
    Key: string;
  
    @Column()
    Owner: Owner;
  }
  
  export default KeySchema;
  
  // conta: Account,
  // tipoConta : KeyType,
  // chave: Key,
  // proprietario: Owner,