'use client';

import AddIcon from '@mui/icons-material/Add';
import { IconButton } from '@mui/material';
import { useRouter } from 'next/navigation';

export function AddOwnerButton() {
  const router = useRouter();
  return (
    <IconButton aria-label="add owner" onClick={() => router.push('/owners/create')} size='small'>
      <AddIcon />
    </IconButton>
  );
}
