import React from 'react';
import styled from 'styled-components';

const GridWrapper = styled.section`
  display: grid;
  grid-template-columns: ${props => `repeat(${props.columns}, 1fr)`};
`
const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
`

const Grid = ({columns, children, style}) => {
  return (
    <GridWrapper columns={columns} style={style}>
      {children}
    </GridWrapper>
  ) 
}

export { Grid, ColumnWrapper};