import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components"

type RepositoryProps = {
    repository: GatsbyTypes.Repository_repositoryFragment,
}

const RepositoryContainer = styled.div({
    width: 356,
    height: 108,
    padding: 10,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: 5,
    display: "inline-block",
    margin: "17px 10px",
})

const Title = styled.a({
    fontSize: 18,
    width: "100%",
    display: "inline-block",
})

const Description = styled.p({
    fontSize: 16,
    height: 40,
    width: "100%",
    display: "inline-block",
})

const RepositoryFooter = styled.div({
    display: "flex",
    width: "100%",
})

const FooterElement = styled.span({
    fontSize: 12,
    "&:not(:last-child)": {
        marginRight: 46,
    }
})

const Repository: React.FC<RepositoryProps> = ({
    repository,
}) => {
    return (
        <RepositoryContainer>
            <Title>{repository.name}</Title>
            {repository.description
                && <Description>{repository.description}</Description>}
            <RepositoryFooter>
                {repository.primaryLanguage
                    && <FooterElement>{repository.primaryLanguage.name}</FooterElement>}
                {repository.stargazers?.totalCount
                    ? <FooterElement>STAR :{repository.stargazers.totalCount}</FooterElement>
                    : null}
                {repository.forkCount
                    ? <FooterElement>FORK :{repository.forkCount}</FooterElement>
                    : null}
            </RepositoryFooter>
        </RepositoryContainer>
    )
}

export default Repository;

export const query = graphql`
    fragment Repository_repository on Github_Repository {
        name
        url
        description
        primaryLanguage {
            name
        }
        stargazers {
            totalCount
        }
        forkCount
    }
`;