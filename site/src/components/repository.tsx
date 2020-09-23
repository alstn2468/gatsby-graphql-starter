import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components"

type RepositoryProps = {
    repository: GatsbyTypes.Repository_repositoryFragment,
}

const RepositoryContainer = styled.div({
    width: 444,
    height: "auto",
    padding: 16,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    border: "1px solid #e1e4e8",
    borderRadius: 6,
    display: "flex",
    flexDirection: "column",
    gridAutoFlow: "row",
    alignContent: "stretch",
})

const Title = styled.a({
    fontSize: 18,
    width: "100%",
    display: "inline-block",
    color: "#0366d6",
    fontWeight: 600,
    textDecoration: "none",
})

const Description = styled.p({
    fontSize: 12,
    width: "100%",
    display: "block",
    flex: "1 0 auto",
    marginBottom: 16,
    marginTop: 8,
})

const RepositoryFooter = styled.div({
    display: "flex",
    width: "100%",
    color: "#586069",
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
            <Title href={repository.url}>{repository.name}</Title>
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