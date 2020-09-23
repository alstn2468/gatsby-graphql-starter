import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components"

export const query = graphql`
    fragment Profile_user on Github_User {
        bio
        avatarUrl
        company
        email
        followers {
            totalCount
        }
        following {
            totalCount
        }
        name
        websiteUrl
        location
        starredRepositories {
            totalCount
        }
    }
`;