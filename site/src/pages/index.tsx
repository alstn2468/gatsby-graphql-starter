import React from 'react';
import { graphql, Link, PageProps } from 'gatsby';

import Repository from "../components/repository"
import Layout from '../components/layout';

type IndexPageProps = PageProps<GatsbyTypes.RepositoryQuery>;

const IndexPage: React.FC<IndexPageProps> = ({
  data,
}) => {
  const { nodes } = data.github.viewer.pinnedItems;

  return (
    <Layout>
      {nodes?.map((node) => {
        switch (node?.__typename) {
          case 'Github_Repository':
            return <Repository key={node.id} repository={node} />;
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
        pinnedItems(first: 4) {
          nodes {
            ...Repository_repository
            ...on Github_Repository {
              id
            }
          }
        }
      }
    }
  }
`;