import { MemberTable } from '@/app/components/MemberTable';
import TitleBox from '@/app/components/TitleBox';
import { Title } from '@/app/components/Verbiage';

import { getContractors } from './contractors.service';

export default async function Page() {
  const contractors = await getContractors();

  return (
    <>
      <TitleBox>
        <Title path="contractors:title" gutterBottom={false} />
      </TitleBox>
      <MemberTable rows={contractors} />
    </>
  );
}
