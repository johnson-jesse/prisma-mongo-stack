import TitleBox from '@/app/components/TitleBox';
import { Title, Verbiage } from '@/app/components/Verbiage';

export default function Page() {
  return (
    <>
      <TitleBox>
        <Title path="activity:title" />
      </TitleBox>
      <Verbiage path="activity:message" />
    </>
  );
}
