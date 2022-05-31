import React from "react";

import {Grid, ColumnWrapper} from "../components/Grid"
import Sidebar from "../components/Sidebar";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";


const IndexPage = ({ data }) => (
  <Layout>
  <Grid columns={8} style={{ gridColumnGap: "32px", marginBottom: 100 }}>
  <Sidebar></Sidebar>
   <ColumnWrapper style={{ gridColumn: "span 6"}}>
   <p><a href="/___graphql">GraphQL IDE</a></p>
    <h2 id="example1">Cases by Region: </h2>
    <p>In this example, the aggregation has been performed in a Postgres view, 
      and Gatsby accesses the auto-generated <code>allCasesByRegionsList</code> GraphQL endpoint. The resulting 
      key-value pairs are rendered as a description list </p>
    <dl>
      {data.postgres.casesByRegions.map(casesByRegion => (
        <React.Fragment key={casesByRegion.regionNam}>
        <dt >{casesByRegion.regionNam}</dt>
        <dd>{casesByRegion.count}</dd>
        </React.Fragment>
      ))}
      </dl>
    
    <h2 id="example2">National Summary</h2>
    <small>https://primis-stage.phmsa.dot.gov/comm/reports/enforce/EnfHome.html?nocache=4032</small>
    <p>In this example, the aggregation has been performed in a Postgres view, 
      and Gatsby accesses the auto-generated <code>allCasesByYearsList</code> GraphQL endpoint. The resulting 
      key-value pairs are rendered as table rows. </p>
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

    <h1 id="caselist">Case List</h1>
    <p>In this example, Gatsby queries the auto-generated <code>allScCasesList</code> endpoint and renders the returned records.</p>
    <div>
      {data.postgres.sc_cases.map(enfcase => (
        <div class="row" key={enfcase.enforceId}> 
          {enfcase.enforceId}<br/>{enfcase.cpfNum} <br/>
          <em>{enfcase.operatorN}</em>
        </div>
      ))}
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    </ColumnWrapper>
    </Grid>

  </Layout>
);

export const query = graphql`
{
  postgres {
    sc_cases: allScCasesList(first: 10) {
      enforceId
      cpfNum
      operatorN
    }
    casesByYears: allCasesByYearsList {
      year
      openedCount
      closedCount
    }
    casesByRegions: allCasesByRegionsList(orderBy: REGION_NAM_ASC) {
      regionNam
      count
    }
  }
}
`;

export default IndexPage;
