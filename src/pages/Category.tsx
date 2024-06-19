import HomeButtonHeader from "@/common/layout/HomeButtonHeader";
import { PageWrapper } from "@/styles/PageStyle";
import CategoryFooter from "@components/category/CategoryFooter";
import CategoryList from "@components/category/CategoryList";

export default function Category() {
  return (
    <PageWrapper>
      <HomeButtonHeader title="카테고리 편집" />
      <CategoryList />
      <CategoryFooter />
    </PageWrapper>
  );
}
