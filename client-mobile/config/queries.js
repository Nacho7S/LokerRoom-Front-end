import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation Mutation($registerDetails: registerDetails) {
    register(registerDetails: $registerDetails) {
      message
    }
  }
`;

export const LOGIN_USER = gql`
  mutation Mutation($loginCredentials: loginCredentials) {
    login(loginCredentials: $loginCredentials) {
      access_token
      userId
    }
  }
`;

export const GET_JOBS = gql`
  query JobPostings(
    $gender: Gender
    $maxAge: Int
    $categoryId: Int
    $educationId: Int
    $location: String
    $isUrgent: Boolean
    $pageNumber: Int
  ) {
    jobPostings(
      gender: $gender
      maxAge: $maxAge
      categoryId: $categoryId
      educationId: $educationId
      location: $location
      isUrgent: $isUrgent
      pageNumber: $pageNumber
    ) {
      numPages
      data {
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
  }
`;

export const GET_CATEGORIES_AND_EDUCATION_LEVELS = gql`
  query Query {
    categories {
      id
      name
    }
    educationLevels {
      id
      education
    }
  }
`;

// export const GET_JOBS_CATEGORIES = gql`
//   query Query(
//     $gender: Gender,
//     $maxAge: Int,
//     $categoryId: Int,
//     $educationId: Int,
//     $location: String,
//     $isUrgent: Boolean,
//     $pageNumber: Int
//   ) {
//     categories {
//       id
//       name
//     }
//     jobPostings(
//       gender: $gender,
//       maxAge: $maxAge,
//       categoryId: $categoryId,
//       educationId: $educationId,
//       location: $location,
//       isUrgent: $isUrgent,
//       pageNumber: $pageNumber
//     ) {
//       id
//       title
//       address
//       category {
//         name
//       }
//       isUrgent
//       maxAge
//       minSalary
//       maxSalary
//       requiredGender
//       status
//     }
//   }
// `;

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
        education
        id
      }
      receivedReviews {
        rating
        id
        employer {
          name
        }
        content
        jobPosting {
          title
        }
        user {
          name
        }
      }
    }
  }
`;

export const EDIT_USER = gql`
  mutation Mutation($userDetails: userDetails) {
    editUserDetails(userDetails: $userDetails) {
      message
    }
  }
`;

export const EDIT_JOB = gql`
  mutation EditJobPosting($jobPostingId: Int!, $jobPosting: newJobPosting) {
    editJobPosting(jobPostingId: $jobPostingId, jobPosting: $jobPosting) {
      message
    }
  }
`;
