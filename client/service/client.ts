import { ApolloClient, InMemoryCache } from '@apollo/client'

const baseUrl = process.env.NEXT_PUBLIC_SERVICE_URL || 'http://localhost:4000'

/* Apollo se encarga de hacer el requester al momento en que
  creamos el cliente, por defecto usa fetch API. Esto se puede
  personalizar para que Apollo use Axios o cualquier otra librería */
const client = new ApolloClient({
  uri: `${baseUrl}/graphql`,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          avo: {
            read(_, { args, toReference }) {
              return toReference({
                __typename: 'Avocado',
                id: args?.id,
              })
            },
          },
        },
      },
    },
  }),
})

export default client
