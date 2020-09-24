import React from 'react';
import styled from "styled-components"
import { graphql, PageProps } from 'gatsby';
import Repository from "../components/repository"
import Gist from '../components/gist';
import Layout from '../components/layout';
import Profile from '../components/profile';

type IndexPageProps = PageProps<GatsbyTypes.GithubProfileQuery>;

const GridSection = styled.section({
  display: "grid",
  gridTemplateColumns: "repeat(1, 1fr)",
  "@media (min-width: 640px)": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  gap: "15px",
});

const IndexPage: React.FC<IndexPageProps> = ({
  data,
}) => {
  const user = data.github.user;
  const nodes = user?.pinnableItems.nodes;

  return (
    <Layout>
      {user && <Profile user={user} />}
      <GridSection>
        {nodes?.map((node) => {
          switch (node?.__typename) {
            case 'Github_Repository':
              return <Repository key={node.id} repository={node} />;
            case 'Github_Gist':
              return <Gist key={node.id} gist={node} />;
            default:
              return null;
          }
        })}
      </GridSection>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query GithubProfile($login: String = "alstn2468") {
    github {
      user(login: $login) {
        ...Profile_user
        pinnableItems(first:6) {
          nodes {
            ...Repository_repository
            ... on Github_Repository {
              id
            }
            ...Gist_gist
            ... on Github_Gist {
              id
            }
          }
        }
      }
    }
  }
`;