import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components"

type GistProps = {
    gist: GatsbyTypes.Gist_gistFragment
}

const GistContainer = styled.div({
    width: 444,
    height: "auto",
    padding: 16,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    border: "1px solid #e1e4e8",
    borderRadius: 6,
    display: "block",
    gridAutoFlow: "row",
    alignContent: "stretch",
})

const Title = styled.a({
    fontSize: 18,
    width: "100%",
    display: "inline-block",
    color: "#0366d6",
    fontWeight: 600,
    padding: 0,
    paddingBottom: 16,
    textDecoration: "none",
})

const Text = styled.pre({
    fontSize: 11,
    backgroundColor: "#f6f8fa",
    padding: "8px 16px",
    margin: 0,
    fontFamily: "SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace",
})

const Gist: React.FC<GistProps> = ({
    gist,
}) => {
    return (
        <GistContainer>
            <Title href={gist.url}>{gist.files[0].name}</Title>
            <Text>{gist.files[0].text}</Text>
        </GistContainer>
    )
}

export default Gist;

export const query = graphql`
    fragment Gist_gist on Github_Gist {
        url
        files {
            text
            name
        }
    }
`;