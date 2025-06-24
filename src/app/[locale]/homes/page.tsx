import TitleBox from '@/app/components/TitleBox';
import { Title, Verbiage } from '@/app/components/Verbiage';

export default function Page() {
  return (
    <>
      <TitleBox>
        <Title path="homes:title" />
      </TitleBox>
      <Verbiage path="homes:message" />
    </>
  );
}
