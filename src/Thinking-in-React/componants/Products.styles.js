import styled from 'styled-components'

// Products Component
export const WrapperTable = styled.table`
  border: 2px solid;
`
export const TableRow = styled.tr`
  color: aliceblue;
  border: 2px solid;
`
export const TableHeading = styled.th`
  color: green;
  font-size: 1.5rem;
  border: 2px solid;
`
export const TableData = styled.td`
  color: ${({ color }) => color};
  background-color: rgba(0, 0, 0, 0.3);
  border: 2px solid;
  font-size: 1.5rem;
`
export const CategorySpan = styled.span`
  color: ${({ color }) => color};
  background-color: gold;
  /* border: 2px solid; */
  font-size: 1.5rem;
  width: 100%;
`
