import MainBody from "@components/main/MainBody";
import MainFooter from "@components/main/MainFooter";
import { PageWrapper } from "@/styles/PageStyle";
import HomeButtonHeader from "@/common/layout/HomeButtonHeader";
import { useCategory } from "@/hook/quires/category";

const Main = () => {
  const { category } = useCategory();

  return (
    <PageWrapper>
      <HomeButtonHeader title="오늘의 운동은?" />
      {category && <MainBody category={category} />}
      <MainFooter />
    </PageWrapper>
  );
};

export default Main;
