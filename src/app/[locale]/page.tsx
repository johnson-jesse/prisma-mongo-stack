import TitleBox from '../components/TitleBox';
import { Title, Verbiage } from '../components/Verbiage';

export default function Page() {
  return (
    <>
      <TitleBox>
        <Title path="root:title" />
      </TitleBox>
      <Verbiage path="root:message" />
    </>
  );
}
