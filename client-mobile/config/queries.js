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

export const GET_JOB = gql`
  query JobPosting($jobPostingId: Int!) {
    jobPosting(jobPostingId: $jobPostingId) {
      id
      title
      description
      address
      category {
        id
        name
      }
      minSalary
      maxSalary
      author {
        name
        telephone
        imgUrl
      }
      requiredGender
      maxAge
      requiredEducation {
        education
        priority
        id
      }
      status
      isUrgent
    }
  }
`;

export const ADD_JOB = gql`
  mutation AddNewJobPosting($jobPosting: newJobPosting) {
    addNewJobPosting(jobPosting: $jobPosting) {
      message
    }
  }
`;

export const GET_USER = gql`
  query Query($userId: Int!) {
    user(userId: $userId) {
      id
      name
      telephone
      email
      address
      imgUrl
      gender
      dateOfBirth
      profileDescription
      educationLevel {
        id
        education
        priority
      }
      receivedReviews {
        rating
        jobPosting {
          title
        }
        employer {
          name
        }
        id
        user {
          name
        }
        content
      }
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
