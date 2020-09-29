import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import { LANGUAGE_COLOR, OTHER_COLOR } from "../data/githubLanguageColors";
import { ReactComponent as StarIcon } from "./svgComponents/star.svg";
import { ReactComponent as ForkIcon } from "./svgComponents/fork.svg";

type RepositoryProps = {
    repository: GatsbyTypes.Repository_repositoryFragment,
}

type LanguageColorProps = {
    bgColor: string,
}

const RepositoryContainer = styled.div({
    padding: "16px 16px 8px 16px",
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

const LanguageColor = styled.span<LanguageColorProps>(props => ({
    top: 1,
    width: 12,
    height: 12,
    marginRight: 3,
    borderRadius: "50%",
    position: "relative",
    display: "inline-block",
    backgroundColor: props.bgColor,
}));

const FooterElement = styled.span({
    fontSize: 12,
    color: "#586069",
    verticalAlign: "middle",
    lineHeight: 1.5,
    "&:not(:first-child)": {
        marginLeft: 16,
    }
})

const Star = styled(StarIcon)({
    verticalAlign: "text-bottom",
})

const Fork = styled(ForkIcon)({
    verticalAlign: "text-bottom",
})

const Repository: React.FC<RepositoryProps> = ({
    repository,
}) => {
    return (
        <RepositoryContainer>
            <FlexContainer>
                <Title href={repository.url}>{repository.name}</Title>
                <Description>
                    {repository.description ? repository.description : ""}
                </Description>
                <RepositoryFooter>
                    {repository.primaryLanguage
                        && <FooterElement>
                                <LanguageColor 
                                    bgColor={
                                        LANGUAGE_COLOR[repository.primaryLanguage.name] ?? OTHER_COLOR
                                    } />
                                {repository.primaryLanguage.name}
                            </FooterElement>}
                    {repository.stargazers?.totalCount
                        ? (
                            <FooterElement>
                                <Star />
                                &nbsp;{repository.stargazers.totalCount}
                            </FooterElement>
                        )
                        : null}
                    {repository.forkCount
                        ? (
                            <FooterElement>
                                <Fork />
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