import type { GatsbyConfig, IPluginRefObject } from 'gatsby';
import type { OverrideProps } from '@cometjs/core';

import type { FileSystemOptions } from 'gatsby-source-filesystem'
import type { PluginOptions as TypegenPlugionOptions } from 'gatsby-plugin-typegen/types';

type PluginRef<Resolve extends string, Options = unknown> = OverrideProps<IPluginRefObject, {
  resolve: Resolve,
  options: Options,
}>;

type PluginConfig = (
  | string
  | PluginRef<'gatsby-plugin-manifest'>
  | PluginRef<'gatsby-source-filesystem', FileSystemOptions>
  | PluginRef<'gatsby-plugin-typegen', TypegenPlugionOptions>
  | PluginRef<'gatsby-source-graphql', object>
  | PluginRef<'gatsby-plugin-svgr', object>
  | PluginRef<'gatsby-plugin-styled-components', object>
);

export const siteMetadata: GatsbyConfig['siteMetadata'] = {
  title: 'Gatsby Github Profile',
  description: 'Github profile clone coding with gatsby & graphql',
};

export const plugins: Array<PluginConfig> = [
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: `${__dirname}/src/images`,
    },
  },
  'gatsby-transformer-sharp',
  'gatsby-plugin-sharp',
  'gatsby-plugin-pnpm',
  {
    resolve: 'gatsby-plugin-typegen',
    options: {
      emitSchema: {
        'src/__generated__/gatsby-schema.graphql': true,
        'src/__generated__/gatsby-schema.json': true,
      },
      emitPluginDocuments: {
        'src/__generated__/gatsby-plugin-documents.graphql': true,
      },
    },
  },
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: 'Gatsby TypeScript Workspace', short_name: 'GTW',
      start_url: '/',
      background_color: '#663399',
      theme_color: '#663399',
      display: 'minimal-ui',
      icon: 'src/images/gatsby-icon.png',
    },
  },
  {
    resolve: "gatsby-source-graphql",
    options: {
      typeName: "Github",
      fieldName: "github",
      url: "https://api.github.com/graphql",
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    }
  },
  {
    resolve: "gatsby-plugin-styled-components",
    options: {
      ssr: true
    }
  },
  "gatsby-plugin-svgr"
];
