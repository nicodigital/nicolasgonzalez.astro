import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
    // kind: 'github',
    // repo: "nicodigital/nicolasgonzalez.astro"
  },
  collections: {
    posts: collection({
      label: 'Projects',
      slugField: 'title',
      path: 'src/content/projects/*/',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.markdoc({
          label: 'Content',
          options: {
            image: {
              directory: 'src/content/projects/{slug}/img',
              publicPath: './img/',
            },
          },
        }),
      },
    }),
  },
});
