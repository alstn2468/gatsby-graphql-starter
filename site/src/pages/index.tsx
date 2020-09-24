import React from 'react';
import styled from "styled-components"
import { graphql, PageProps } from 'gatsby';

import Repository from "../components/repository"
import Layout from '../components/layout';
import Gist from '../components/gist';
import Profile from '../components/profile';

type IndexPageProps = PageProps<GatsbyTypes.RepositoryQuery>;

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
  const { nodes } = data.github.viewer.pinnedItems;
  const { user } = data.github;

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
  query Repository {
    github {
      viewer {
        pinnedItems(first: 6) {
          nodes {
            ...Repository_repository
            ...on Github_Repository {
              id
            }
            ...Gist_gist
            ...on Github_Gist {
              id
            }
          }
        }
      }
      user(login: "alstn2468") {
          ...Profile_user
      }
    }
  }
`;