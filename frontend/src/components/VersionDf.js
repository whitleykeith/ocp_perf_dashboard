import React from 'react';
import { Title, TitleSizes } from '@patternfly/react-core';
import { TableComposable, TableHeader, TableText, Thead, Tbody, Tr, Th, Td, Caption } from '@patternfly/react-table';

const VersionDf = (props) => {

  const colwidths = [25, 35]
  
  const columns = props.columns;

  const rows = props.data;

  const Colors = {
    'success': '#00800052',
    'warning': '#ffff00a1',
    'failure': '#ff000070',
    'N/A': '#00000000'
  }

  return (
    <>
      <Title headingLevel="h2" size={TitleSizes['3xl']} id={props.version}>
        {props.version}
      </Title>
      <TableComposable
        aria-label="Simple table"
        variant='compact'
        borders='compactBorderless'
      >
      <Thead>
        <Tr>
          {columns.map((column, columnIndex) => (
            <Th 
            key={columnIndex}
            width={columnIndex < 2 ? colwidths[columnIndex] : 13}
            // modifier="fitContent"
            >
              {column}
            </Th>
          ))}
        </Tr>
      </Thead>
      {rows.map((row, rowIndex) => {
        return (
          <Tbody key={rowIndex}>
            <>
              <Tr>
                {row.map((cell, cellIndex) => {
                  return (
                    <Td
                      key={`${rowIndex}_${cellIndex}`}
                      dataLabel={columns[cellIndex]}
                      component={cellIndex === 0 ? 'th' : 'td'}
                      style={{backgroundColor:Colors[cell], 
                        border:"1 px solid black"}}
                    >
                      <TableText
                        // modifier="fitContent"
                        // width={cellIndex < 2 ? colwidths[cellIndex] : 15}
                      >
                        {cell}
                      </TableText>
                    </Td>
                  );
                })}
              </Tr>
            </>
          </Tbody>
        );
      })}      
      </TableComposable>
    </>
  );
};

export default VersionDf