import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation Mutation($registerDetails: registerDetails) {
    register(registerDetails: $registerDetails) {
      message
    }
  }
`;

export const LOGIN_USER = gql`
  mutation Login($loginCredentials: loginCredentials) {
    login(loginCredentials: $loginCredentials) {
      access_token
    }
  }
`;

export const GET_JOBS = gql`
  query JobPostings {
    jobPostings {
      id
      title
      description
      address
      category {
        name
      }
      minSalary
      maxSalary
      requiredGender
      maxAge
      status
      isUrgent
    }
  }
`;

export const GET_CATEGORIES = gql`
  query Categories {
    categories {
      name
      id
    }
  }
`;

export const GET_JOBS_CATEGORIES = gql`
  query Query {
    jobPostings {
      data {
        address
        category {
          name
        }
        isUrgent
        maxAge
        minSalary
        maxSalary
        requiredGender
        status
        title
        id
      }
    }
    categories {
      name
      id
    }
  }
`;

// export const GET_MOVIES = gql`
//   query movies {
//     movies {
//       id
//       title
//       imgUrl
//       Genre {
//         name
//       }
//     }
//   }
// `;

// export const GET_MOVIE_BY_ID = gql`
//   query Movie($movieId: ID) {
//     movie(id: $movieId) {
//       id
//       title
//       synopsis
//       imgUrl
//       rating
//       trailerUrl
//       Casts {
//         id
//         name
//         profilePict
//       }
//       author {
//         username
//         _id
//       }
//     }
//   }
// `;
