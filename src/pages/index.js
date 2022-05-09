import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";


const IndexPage = ({ data }) => (
  <Layout>
    <p><a href="/___graphql">GraphQL IDE</a></p>
    <h1>Cases by Year</h1>
    <small>https://primis-stage.phmsa.dot.gov/comm/reports/enforce/EnfHome.html?nocache=5904</small>
    <table>
    <thead><tr><th>Year</th><th>Opened</th><th >Closed</th></tr></thead>
    <tbody>
      {data.postgres.casesByYears.map(casesByYear => (
        <tr class="row" key={casesByYear.year}> 
          <td>{casesByYear.year}</td>
          <td><Link to="/">{casesByYear.openedCount}</Link></td>
          <td><Link to="/">{casesByYear.closedCount}</Link></td>
        </tr>
      ))}
    </tbody>
    </table>

    <h1>Case List</h1>
    <div>
      {data.postgres.enfcases.map(enfcase => (
        <div class="row" key={enfcase.enforceId}> 
          {enfcase.enforceId}<br/>{enfcase.cpfNum} <br/>
          <em>{enfcase.operatorN}</em>
        </div>
      ))}
    </div>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export const query = graphql`
{
  postgres {
    enfcases: allEnfcasesList(first: 10) {
      enforceId
      cpfNum
      operatorN
    }
    casesByYears: allCasesByYearsList {
      year
      openedCount
      closedCount
    }
  }
}
`;

export default IndexPage;
