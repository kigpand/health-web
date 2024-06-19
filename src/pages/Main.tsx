import MainBody from "@components/main/MainBody";
import MainFooter from "@components/main/MainFooter";
import { PageWrapper } from "@/styles/PageStyle";
import HomeButtonHeader from "@/common/layout/HomeButtonHeader";

const Main = () => {
  return (
    <PageWrapper>
      <HomeButtonHeader title="오늘의 운동은?" />
      <MainBody />
      <MainFooter />
    </PageWrapper>
  );
};

export default Main;
