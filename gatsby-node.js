/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path");
const slugifyPost = require("./slugifyPost");

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const result = await graphql(`
    {
      postgres {
        sc_cases: allScCasesList {
          enforceId
          cpfNum
          operatorN
        }
      }
    }
  `);
};
