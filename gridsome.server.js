const slugify = require('@sindresorhus/slugify');
const _ = require('lodash');
const path = require('path');
const fs = require('fs');

module.exports = function (api) {

  const slugReplacement = {
    replacement: '-', // replace spaces with replacement
    remove: /[^\w\s-]/g, // regex to remove characters
    lower: true
  };

  /**
   * Manipulates the given excerpt
   */
  api.loadSource(({
    addSchemaResolvers
  }) => {

    addSchemaResolvers({
      Article: {
        excerpt(obj) {
          var longText = (obj.excerpt.length > 200) ? '...' : '';
          return obj.excerpt.replace(/^(.{200}[^\s]*).*/, "$1" + longText);
        }
      },
      News: {
        excerpt(obj) {
          var longText = (obj.excerpt.length > 200) ? '...' : '';
          return obj.excerpt.replace(/^(.{200}[^\s]*).*/, "$1" + longText);
        }
      }
    });

  });

  /**
   * Some node customizations
   * * ensure that the tags are always saved as an array
   *   this allows us to use `tag1, tag2` and `['tag1', 'tag2']` as syntax in the md files
   * 
   * * generates the slug (maybe obsolet, but needed for the dynamic pages)
   * 
   * * adds the `typeName` to each node
   */
  api.onCreateNode(options => {
    if (options.internal.typeName === 'Article') {
      options.recordType = options.internal.typeName;
      options.tags = (typeof options.tags === 'string') ? options.tags.split(',').map(string => string.trim()) : options.tags;
      options.slug = slugify(options.title, slugReplacement);
      return {
        ...options
      };
    }

    if (options.internal.typeName === 'News') {
      options.recordType = options.internal.typeName;
      options.tags = (typeof options.tags === 'string') ? options.tags.split(',').map(string => string.trim()) : options.tags;
      options.slug = slugify(options.title, slugReplacement);
      return {
        ...options
      };
    }

    if (options.internal.typeName === 'Tag') {
      options.recordType = options.internal.typeName;
      options.slug = slugify(options.title, slugReplacement);
      return {
        ...options
      };
    }

    if (options.internal.typeName === 'Resource') {
      options.recordType = options.internal.typeName;
      options.type = (typeof options.type === 'string') ? options.type.split(',').map(string => string.trim()) : options.type;
      options.tags = (typeof options.tags === 'string') ? options.tags.split(',').map(string => string.trim()) : options.tags;
      return {
        ...options
      };
    }

    if (options.internal.typeName === 'CustomPage') {
      options.recordType = options.internal.typeName;
      options.sidebar = (options.sidebar) ? true : false;
      return {
        ...options
      };
    }

  });

  /**
   * Creates the article details pages
   * we're using this way, because we want to pass
   * some values to the page context
   * 
   * this is required to enable the "related posts" functionality
   */
  api.createPages(async ({
    graphql,
    createPage
  }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api
    const {
      data
    } = await graphql(`{
      allArticle {
        edges {
          node {
            id
            slug
            path
            tags {
              title
            }
          }
        }
      }
    }`);

    data.allArticle.edges.forEach(({
      node
    }) => {

      //without the map, you will get an 500 error
      //because the graphql filter requires an array
      //not an object
      var tags = _.map(node.tags, function (tag) {
        return tag.title;
      });

      createPage({
        path: `/articles/${node.slug}`,
        component: './src/templates/ArticleEntry.vue',
        context: {
          recordId: node.id,
          tags: tags,
        }
      });

    });
  });


  /**
   * Generates the search file
   * which will be used to enable the fulltext search
   */
  api.beforeBuild((
        context
      ) => {

      

      const collectionArticle = context._app.store.getCollection('Article')._collection;

      const articles = collectionArticle.data.map(record => {
        return _.pick(record, ['title', 'path', 'excerpt', 'content', 'tags', 'recordType']);
      });

      const collectionNews = context._app.store.getCollection('News')._collection;

      const news = collectionNews.data.map(record => {
        return _.pick(record, ['title', 'path', 'excerpt', 'content', 'tags', 'recordType']);
      });

      const output = {
        dir: './static',
        name: 'search.json'
      };

      const records = _.merge(articles, news);

      const outputPath = path.resolve(process.cwd(), output.dir);
      const outputPathExists = fs.existsSync(outputPath);
      const fileName = output.name.endsWith('.json') ? output.name : `${output.name}.json`;

      if (outputPathExists) {
        fs.writeFileSync(path.resolve(process.cwd(), output.dir, fileName), JSON.stringify(records));
      } else {
        fs.mkdirSync(outputPath);
        fs.writeFileSync(path.resolve(process.cwd(), output.dir, fileName), JSON.stringify(records));
      }

    });
  
};