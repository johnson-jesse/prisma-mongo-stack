import { ReactNode } from 'react';

import TitleBox from '@/app/components/TitleBox';
import { Title } from '@/app/components/Verbiage';

import { AddOwnerButton } from './create/AddOwnerButton';

export default function OwnersLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <TitleBox>
        <Title path="owners:title" />
        <AddOwnerButton />
      </TitleBox>
      {children}
    </>
  );
}
