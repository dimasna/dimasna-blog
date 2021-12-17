import { request, gql } from "graphql-request";
const graphcmdEndPoint = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
export const getPosts = async () => {
    const query = gql`
    query MyQuery {
        postsConnection {
          edges {
            node {
              category {
                name
                slug
              }
              slug
              technologies {
                name
                slug
              }
              title
              description
              createdAt
              featuredImage {
                url
              }
            }
          }
        }
      }      
    `

    const results = await request(graphcmdEndPoint, query);
    return results.postsConnection.edges;

}