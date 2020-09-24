import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components"
import Follwer from "../images/follwers.svg"
import Star from "../images/star.svg"

type ProfileProps = {
    user: GatsbyTypes.Profile_userFragment
}

const ProfileContainer = styled.div({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px 0",
})

const Avatar = styled.img({
    width: 150,
    height: 150,
    borderRadius: "100%",
})

const Username = styled.p({
    fontSize: 18,
    fontWeight: 500,
    margin: "8px 0 4px",
})

const Bio = styled.p({
    fontSize: 14,
    margin: "4px 0",
})

const TotalCountContainer = styled.div({
    display: "flex",
    color: "#586069",
    fontSize: 12,
    alignItems: "flex-end",
    margin: "4px 0",
})

const TotalCount = styled.span({
    fontSize: 14,
    color: "#24292e",
    margin: "0 4px",
    lineHeight: 1,
})

const Profile: React.FC<ProfileProps> = ({
    user
}) => {
    console.log(user)
    return (
        <ProfileContainer>
            <Avatar src={user.avatarUrl} />
            <Username>{user.name}</Username>
            <Bio>{user.bio}</Bio>
            <TotalCountContainer>
                <Follwer />
                <TotalCount>
                    {user.followers.totalCount}
                </TotalCount> followers ·
                <TotalCount>
                    {user.following.totalCount}
                </TotalCount> following ·
                <Star />
                <TotalCount>
                    {user.starredRepositories.totalCount}
                </TotalCount>
            </TotalCountContainer>
        </ProfileContainer>
    )
}

export default Profile;

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