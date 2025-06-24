import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

import { MemberIcon } from './MemberIcon';
import { Anyone } from '../library/type';

export function MemberTable({ rows }: { rows: Anyone[] }) {
  return (
    <TableContainer
      component={Paper}
      sx={{
        maxWidth: {
          xs: '95%', // Extra-small screens (mobile)
          sm: '80%', // Small screens
          md: '65%', // Medium screens
        },
        margin: 'auto',
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell>
                <MemberIcon role={row.role} />
              </TableCell>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
