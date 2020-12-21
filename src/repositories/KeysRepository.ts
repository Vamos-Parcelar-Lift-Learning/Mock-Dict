import { uuid } from 'uuidv4';
import { getMongoRepository, Double } from 'typeorm';
import KeySchema from '../schemas/KeySchema';

interface KeyData {
  id: string;
  Account: object;
  KeyType: string;
  Key: string;
  Owner: object;
}



class KeysRepository {
  private keys: KeyData[] = [];

  // constructor() {
  //   this.keys = [];
  // }

  // public async all(): KeyData[] {
    public async all() {
      const keysRepository = getMongoRepository(KeySchema, 'mongo');
      const allKeys = await keysRepository.find();
      return allKeys;
  }

  public async create({ Account, KeyType, Key, Owner }: Omit<KeyData, 'id'>) {
    const keysRepository = getMongoRepository(KeySchema, 'mongo');
    const key = {
      Account,
      KeyType,
      Key,
      Owner,
      // id: uuid(),
    };
    console.log('key', key)

    const response = await keysRepository.save(key);
    console.log('resp', response)
    const keyResponse = {
    }
    return key;
  }
}

export default KeysRepository;
