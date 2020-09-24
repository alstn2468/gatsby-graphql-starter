import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components"
import { ReactComponent as FollowerIcon } from "./svgComponents/follower.svg"
import { ReactComponent as StarIcon } from "./svgComponents/star.svg"

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
    fontSize: 14,
    alignItems: "flex-end",
    margin: "4px 0",
    lineHeight: 1,
})

const TotalCount = styled.span({
    fontWeight: 600,
    color: "#24292e",
    marginRight: 4,
})

const Seperator = styled.span({
    margin: "0 5px",
})

const Star = styled(StarIcon)({
    marginRight: 4,
    fill: "#586069",
})

const Follower = styled(FollowerIcon)({
    marginRight: 4,
    fill: "#586069",
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
                <Follower />
                <TotalCount>
                    {user.followers.totalCount}
                </TotalCount> followers
                <Seperator>
                    ·
                </Seperator>
                <TotalCount>
                    {user.following.totalCount}
                </TotalCount> following
                <Seperator>
                    ·
                </Seperator>
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