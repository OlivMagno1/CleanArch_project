import { MongoHelper } from '@/external/repositories/mongodb/helper'
import { MongodbUserRepository } from '@/external/repositories/mongodb'

describe('MongoDB User repository', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    MongoHelper.clearCollection('users')
  })

  test('when user is added, it should exist', async () => {
    const userRepository = new MongodbUserRepository()
    const user = {
      name: 'Any Name',
      email: 'any@mail.com'
    }
    await userRepository.add(user)

    expect(await userRepository.exists(user)).toBeTruthy()
  })

  test('find all users should return all added users', async () => {
    const userRepository = new MongodbUserRepository()
    await userRepository.add({
      name: 'Any Name',
      email: 'any@mail.com'
    })
    await userRepository.add({
      name: 'Second Name',
      email: 'second@mail.com'
    })
    const users = await userRepository.findAllUsers()
    expect(users[0].name).toEqual('Any Name')
    expect(users[1].name).toEqual('Second Name')
  })
})
