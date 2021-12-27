import { gql } from '@apollo/client'
export const GET_ALL_POSTS = gql`
      query GetAllPosts {
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
export const GET_ALL_SLUG = gql`
      query GetAllSlug {
          posts {
            slug
          }
        }      
      `
export const GET_POST_DETAILS = gql`
      query GetPostDetails($slug: String!) {
        post(where: {slug: $slug}){
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
                content
              }
            }      
      `
