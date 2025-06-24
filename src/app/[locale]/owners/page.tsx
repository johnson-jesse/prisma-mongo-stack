import { MemberTable } from '@/app/components/MemberTable';

import { getOwners } from './owners.service';

export default async function Page() {
  const owners = await getOwners()

  return (
    <>
      <MemberTable rows={owners} />
    </>
  );
}
