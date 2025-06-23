import { Typography } from '@mui/material';

import { CreateUser } from './CreateOwner';

export default function Page() {
  return (
    <>
      <Typography variant="h1" gutterBottom>Owners</Typography>
      <CreateUser />
    </>
  );
}
