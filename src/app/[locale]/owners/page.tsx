import { getOwners } from './owners.service';
import { MemberTable } from '../../components/MemberTable';

export default async function Page() {
  const owners = await getOwners()

  return (
    <>
      <MemberTable rows={owners} />
    </>
  );
}
