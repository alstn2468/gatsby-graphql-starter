import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components"
import { ReactComponent as Star } from "./svgComponents/star.svg"
import { ReactComponent as Fork } from "./svgComponents/fork.svg"

type RepositoryProps = {
    repository: GatsbyTypes.Repository_repositoryFragment,
}

const RepositoryContainer = styled.div({
    padding: 16,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    border: "1px solid #e1e4e8",
    borderRadius: 6,
})

const FlexContainer = styled.div({
    display: "flex",
    flexDirection: "column",
    height: "100%",
})

const Title = styled.a({
    fontSize: 18,
    display: "inline-block",
    color: "#0366d6",
    fontWeight: 600,
    textDecoration: "none",
})

const Description = styled.p({
    fontSize: 12,
    width: "100%",
    flex: "1 0 auto",
    marginBottom: 16,
    marginTop: 8,
})

const RepositoryFooter = styled.div({
    display: "flex",
    width: "100%",
})

const FooterElement = styled.span({
    fontSize: 12,
    color: "#586069",
    verticalAlign: "middle",
    lineHeight: 1.5,
    "&:not(:first-child)": {
        marginLeft: 16,
    }
})

const Repository: React.FC<RepositoryProps> = ({
    repository,
}) => {
    return (
        <RepositoryContainer>
            <FlexContainer>
                <Title href={repository.url}>{repository.name}</Title>
                {repository.description
                    && <Description>{repository.description}</Description>}
                <RepositoryFooter>
                    {repository.primaryLanguage
                        && <FooterElement>{repository.primaryLanguage.name}</FooterElement>}
                    {repository.stargazers?.totalCount
                        ? (
                            <FooterElement>
                                <Star style={{
                                    verticalAlign: "text-bottom",
                                }} />
                            &nbsp;{repository.stargazers.totalCount}
                            </FooterElement>
                        )
                        : null}
                    {repository.forkCount
                        ? (
                            <FooterElement>
                                <Fork style={{ verticalAlign: "text-bottom" }} />
                            &nbsp;{repository.forkCount}
                            </FooterElement>
                        )
                        : null}
                </RepositoryFooter>
            </FlexContainer>
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