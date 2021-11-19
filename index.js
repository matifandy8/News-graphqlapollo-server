//graphql apollo server channels
const { ApolloServer, gql } = require('apollo-server');


// Construct a schema, using GraphQL schema language
const typeDefs = gql`
    type Channel {
        id: String
        name: String           
        image: String
    }
    type Query {
        channels: [Channel]
    }
`;


// Provide resolver functions for your schema fields
const resolvers = {
    Query: {
        channels: () => [
            {
                "id": "1",
                "name": "Fox News",
                "image": "https://static.javatpoint.com/top10-technologies/images/top-10-news-channels-in-the-world1.png"
              },
              {
                "id": "2",
                "name": "MSNBC News",
                "image": "https://static.javatpoint.com/top10-technologies/images/top-10-news-channels-in-the-world2.png"
              },
              {
                "id": "3",
                "name": "BBC News",
                "image": "https://static.javatpoint.com/top10-technologies/images/top-10-news-channels-in-the-world3.png"
              },
              {
                "id": "4",
                "name": "Sky news",
                "image": "https://static.javatpoint.com/top10-technologies/images/top-10-news-channels-in-the-world4.jpg"
              },
              {
                "id": "5",
                "name": "CNN news",
                "image": "https://static.javatpoint.com/top10-technologies/images/top-10-news-channels-in-the-world5.png"
              },
              {
                "id": "6",
                "name": "Al Arabiya",
                "image": "https://static.javatpoint.com/top10-technologies/images/top-10-news-channels-in-the-world6.png"
              },
              {
                "id": "7",
                "name": "Al Jazeera",
                "image": "https://static.javatpoint.com/top10-technologies/images/top-10-news-channels-in-the-world7.jpg"
              },
              {
                "id": "8",
                "name": "Euro news",
                "image": "https://static.javatpoint.com/top10-technologies/images/top-10-news-channels-in-the-world8.png"
              },
              {
                "id": "9",
                "name": "NDTV News",
                "image": "https://static.javatpoint.com/top10-technologies/images/top-10-news-channels-in-the-world9.png"
              },
              {
                "id": "10",
                "name": "Geo News",
                "image": "https://static.javatpoint.com/top10-technologies/images/top-10-news-channels-in-the-world10.png"
              }
        ],
    },
};


// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });


// The `listen` method launches a web server.
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
}
);





