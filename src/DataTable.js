import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React from 'react';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor:'#15ABFFFF',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
// A functional component that accepts data as props
const DataTable = ({ data }) => {
    if (!data || data.length === 0) return <p>No data available</p>;

    // Get the headers from the keys of the first object
    const headers = Object.keys(data[0]);

    return (
      <TableContainer component={Paper}> 
        <Table sx={{ minWidth: 700, marginTop: 2, maxHeight:400, overflowX:'auto',overflowY:'scroll'}} aria-label="customized table">
            <TableHead>
                <TableRow>
             
                    {headers.map((header) => (
                        <StyledTableCell  key={header}>{header}</StyledTableCell>
                    ))}

                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((row, index) => (
                    <StyledTableRow key={index}>
                        {headers.map((header) => (
                            <StyledTableCell key={header}>{row[header]}</StyledTableCell>
                        ))}
                    </StyledTableRow>
                ))}
            </TableBody>
        </Table>
        </TableContainer>
    );
};

export default DataTable;
