import React from 'react';
import { graphql, Link, PageProps } from 'gatsby';

import Repository from "../components/repository"
import Layout from '../components/layout';
import Gist from '../components/gist';

type IndexPageProps = PageProps<GatsbyTypes.RepositoryQuery>;

const IndexPage: React.FC<IndexPageProps> = ({
  data,
}) => {
  const { nodes } = data.github.viewer.pinnedItems;

  console.log(data)

  return (
    <Layout>
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