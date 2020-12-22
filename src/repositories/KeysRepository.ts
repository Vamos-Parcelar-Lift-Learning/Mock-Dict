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
  // private ormRepository = getMongoRepository(KeySchema, 'mongo');
  // constructor() {
  //   this.ormRepository = getMongoRepository(KeySchema, 'mongo');
  // }

  public async all(): Promise<KeySchema[]> {
    const keysRepository = getMongoRepository(KeySchema, 'mongo');
    const allKeys = await keysRepository.find();
    return allKeys;
  }

  public async findByKey(Key: string): Promise<KeySchema | undefined> {
    const keysRepository = getMongoRepository(KeySchema, 'mongo');
    const keyFound = await keysRepository.findOne({ Key });
    return keyFound;
  }

  public async create({ Account, KeyType, Key, Owner }: Omit<KeyData, 'id'>) {
    const keysRepository = getMongoRepository(KeySchema, 'mongo');
    const key = {
      Account,
      KeyType,
      Key,
      Owner,
    };

    const keyFound = await keysRepository.findOne({ Key });
    if (keyFound) {
      return 'exists';
    }

    const keyResponse = await keysRepository.save(key);
    return keyResponse;
  }
}

export default KeysRepository;
