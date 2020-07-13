import { IResolvers } from 'graphql-tools'

const resolveMap: IResolvers = {
  Query: {
    helloWorld(_: void, args: void): string {
      return `👋 hello world 👋`
    }
  }
}

export default resolveMap