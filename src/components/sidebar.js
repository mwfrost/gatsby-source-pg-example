import * as React from 'react'
import {ColumnWrapper} from "../components/Grid"
import {Link} from "gatsby";

const Sidebar = ( children ) => {
  return (
    <ColumnWrapper style={{ gridColumn: "span 2"}}>
        <h2>Sidebar Header</h2>
        <Link to = "#example1">Simple Aggregation in a Postgres View</Link>
        <ul>
            <li>
                <a href="#national1">National Summary</a>
            </li>
            <li>
                <a href="#national2">Enforcement Actions</a>
            </li>
        </ul>
        <h4>Summary of Enforcement Actions</h4>
        <ul>
            <li>
                <a href="#summary2">Enforcement Cases Initiated</a>
            </li>
            <li>
                <a href="#summary3">Enforcement Orders Issued</a>
            </li>
        </ul>
        <li>
        <Link to="#caselist">Case List</Link>
        </li>
    </ColumnWrapper>

  )
}

export default Sidebar