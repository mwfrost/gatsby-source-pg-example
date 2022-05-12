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
    <h2 id="example1">Simple Aggregation in a Postgres View</h2>
    <p>Rendering key-value pairs as a description list </p>
    <dl>
      {data.postgres.casesByRegions.map(casesByRegion => (
        <React.Fragment key={casesByRegion.regionNam}>
        <dt >{casesByRegion.regionNam}</dt>
        <dd>{casesByRegion.count}</dd>
        </React.Fragment>
      ))}
      </dl>
    


    <h2 id="national1">National Summary</h2>
    <small>https://primis-stage.phmsa.dot.gov/comm/reports/enforce/EnfHome.html?nocache=4032</small>
    <p>Rendering summary stats in a table</p>
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

    <h2>Summary of Enforcement Actions</h2>
    <h3 id="national2a">Enforcement Cases Initiated</h3>
    <small>https://primis.phmsa.dot.gov/comm/reports/enforce/Actions_opid_0.html?nocache=8749#_TP_1_tab_1</small>
   
    <h3 id="national2b">Enforcement Orders Issued</h3>
    <small>https://primis-stage.phmsa.dot.gov/comm/reports/enforce/Actions_opid_0.html?nocache=4806#_TP_1_tab_2</small>

    <h3 id="national2c">Enforcement Cases Closed</h3>
    <small>https://primis-stage.phmsa.dot.gov/comm/reports/enforce/Actions_opid_0.html?nocache=4806#_TP_1_tab_2</small>


    <h1 id="caselist">Case List</h1>
    <p>Example of direct table query.</p>
    <div>
      {data.postgres.enfcases.map(enfcase => (
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
    casesByRegions: allCasesByRegionsList(orderBy: REGION_NAM_ASC) {
      regionNam
      count
    }
  }
}
`;

export default IndexPage;
