import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components"

type GistProps = {
    gist: GatsbyTypes.Gist_gistFragment
}

const GistContainer = styled.div({
    padding: 16,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    border: "1px solid #e1e4e8",
    borderRadius: 6,
    display: "grid",
})

const Title = styled.a({
    fontSize: 18,
    color: "#0366d6",
    fontWeight: 600,
    padding: 0,
    paddingBottom: 16,
    textDecoration: "none",
})

const Text = styled.pre({
    width: "100%",
    backgroundColor: "#f6f8fa",
    fontSize: 11,
    overflowX: "scroll",
    margin: 0,
    padding: "8px 16px",
    boxSizing: "border-box",
    fontFamily: "SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace"
})

const Gist: React.FC<GistProps> = ({
    gist,
}) => {
    return (
        <GistContainer>
            {gist.files && gist.files[0]?.name
                ? (
                    <Title href={gist.url}>
                        {gist.files[0].name}
                    </Title>
                )
                : null}
            {gist.files && gist.files[0]?.text
                ? (
                    <Text>
                        {gist.files[0].text}
                    </Text>
                )
                : null}
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