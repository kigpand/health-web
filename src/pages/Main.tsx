import MainHeader from "@components/main/MainHeader";
import MainBody from "@components/main/MainBody";
import MainFooter from "@components/main/MainFooter";
import { PageWrapper } from "@/styles/PageStyle";

const Main = () => {
  return (
    <PageWrapper>
      <MainHeader />
      <MainBody />
      <MainFooter />
    </PageWrapper>
  );
};

export default Main;
