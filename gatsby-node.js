/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path");
const slugifyPost = require("./slugifyPost");

const axios = require('axios');

const get = endpoint => axios.get(`http://localhost:3000/${endpoint}`);

const getEnforcementData = endpoints =>
  Promise.all(
    endpoints.map(async endpoint => {
      const { data: exhibit } = await get(`${endpoint}`);
      return { ...exhibit };
    })
  );

exports.createPages = async ({ graphql, actions: { createPage } }) => {

    // REST API
    //
    // Create the pages for the summary endpoints
    const casesByYearAndType = await getEnforcementData(['cases_by_year_and_type']);
    createPage({
      path: `/cases_by_year_and_type`,
      component: require.resolve('./src/templates/enforcement-summary.js'),
      context: { casesByYearAndType }
    });

    const casesByYear = await getEnforcementData(['cases_by_year']);
    createPage({
      path: `/cases_by_year`,
      component: require.resolve('./src/templates/enforcement-summary.js'),
      context: { casesByYear }
    });

  // GraphQL
  //
  // 
  const result = await graphql(`
    {
      postgres {
        sc_cases: allScCasesList {
          caseType
          caseStatu
          openedDt
          closedDt
          operatorN
          regionNam
          cpfNum
          enforceId
        }
      }
    }
  `);

  result.data.postgres.sc_cases.forEach((sc_case) => {
    createPage({
      path: `/case/${sc_case.enforceId}`  ,
      component: path.resolve("./src/templates/case-detail.js"),
      context: {
        enforceId: sc_case.enforceId,
      },
    });
  });
};
