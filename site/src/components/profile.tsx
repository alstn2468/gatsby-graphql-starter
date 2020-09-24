import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components"
import { ReactComponent as FollowerIcon } from "./svgComponents/follower.svg"
import { ReactComponent as StarIcon } from "./svgComponents/star.svg"
import { ReactComponent as CompanyIcon } from "./svgComponents/company.svg"
import { ReactComponent as EmailIcon } from "./svgComponents/email.svg"
import { ReactComponent as LocationIcon } from "./svgComponents/location.svg"
import { ReactComponent as LinkIcon } from "./svgComponents/link.svg"

type ProfileProps = {
    user: GatsbyTypes.Profile_userFragment
}

const ProfileContainer = styled.div({
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px 0",
    margin: "5px 0",
})

const ProfileLeftContainer = styled.div({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 35,
})

const Avatar = styled.img({
    width: 180,
    height: 180,
    borderRadius: "100%",
})

const Username = styled.p({
    fontSize: 18,
    fontWeight: 500,
    margin: 0,
})

const Bio = styled.p({
    fontSize: 14,
    margin: 0,
    marginBottom: 4,
})

const TotalCountContainer = styled.div({
    display: "flex",
    color: "#586069",
    fontSize: 14,
    alignItems: "flex-end",
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

const HorizontalBar = styled.hr({
    margin: "8px 0",
    borderTop: "1px solid #e1e4e8",
})

const Star = styled(StarIcon)({
    marginRight: 4,
    fill: "#586069",
})

const Follower = styled(FollowerIcon)({
    marginRight: 4,
    fill: "#586069",
})

const UserInfo = styled.div({
    marginTop: 4,
    fontSize: 14,
    display: "flex",
    alignItems: "baseline",
})

const Company = styled(CompanyIcon)({
    marginRight: 6,
})

const Email = styled(EmailIcon)({
    marginRight: 6,
})

const Location = styled(LocationIcon)({
    marginRight: 6,
})

const Link = styled(LinkIcon)({
    marginRight: 6,
})

const Profile: React.FC<ProfileProps> = ({
    user
}) => {
    console.log(user)
    return (
        <ProfileContainer>
            <ProfileLeftContainer>
                <Avatar src={user.avatarUrl} />
            </ProfileLeftContainer>
            <div>
                <Username>{user.name}</Username>
                <Bio>{user.bio}</Bio>
                <TotalCountContainer>
                    <Follower />
                    <TotalCount>
                        {user.followers.totalCount}
                    </TotalCount> followers
                    <Seperator>·</Seperator>
                    <TotalCount>
                        {user.following.totalCount}
                    </TotalCount> following
                    <Seperator>·</Seperator>
                    <Star />
                    <TotalCount>
                        {user.starredRepositories.totalCount}
                    </TotalCount>
                </TotalCountContainer>
                <HorizontalBar />
                <UserInfo>
                    <Company />
                    {user.company}
                </UserInfo>
                <UserInfo>
                    <Location />
                    {user.location}
                </UserInfo>
                <UserInfo>
                    <Email />
                    {user.email}
                </UserInfo>
                <UserInfo>
                    <Link />
                    {user.websiteUrl}
                </UserInfo>
            </div>
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