import { uuid } from 'uuidv4';
import { getMongoRepository, MongoRepository } from 'typeorm';
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

  // private ormRepository = getMongoRepository(KeySchema, 'mongo');
  // private ormRepository: KeyData[] = [];

  // constructor() {
  //   this.ormRepository = getMongoRepository(KeySchema, 'mongo');
  // }

  public async all(): Promise<KeySchema[]> {
    const keysRepository = getMongoRepository(KeySchema, 'mongo');
    // const allKeys = await this.ormRepository.find();
    const allKeys = await keysRepository.find();
    return allKeys;
  }

  public async findByKey(Key: string): Promise<KeySchema | undefined> {
    const keysRepository = getMongoRepository(KeySchema, 'mongo');
    // const allKeys = await this.ormRepository.find();
    const keyFound = await keysRepository.findOne({ Key });
    return keyFound;
  }

  public async create({ Account, KeyType, Key, Owner }: Omit<KeyData, 'id'>) {
    // public async create({ Account, KeyType, Key, Owner }: Promise<Ke | undefined>) {
    const keysRepository = getMongoRepository(KeySchema, 'mongo');
    const key = {
      Account,
      KeyType,
      Key,
      Owner,
      // id: uuid(),
    };
    console.log('key', key);

    // const response = await this.ormRepository.save(key);
    const response = await keysRepository.save(key);
    // console.log('resp', response);
    const keyResponse = {};
    return key;
  }
}

export default KeysRepository;
