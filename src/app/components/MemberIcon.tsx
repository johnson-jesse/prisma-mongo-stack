import HomeIcon from '@mui/icons-material/Home';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';

import { User } from '@/prisma/client';

export function MemberIcon({ role }: { role: User['role'] }) {
  switch (role) {
    case 'OWNER':
      return <HomeIcon color="disabled" />;
    case 'CONTRACTOR':
      return <HomeRepairServiceIcon color="disabled" />;
  }
}
