import HomeButtonHeader from "@/common/layout/HomeButtonHeader";
import CategoryFooter from "@components/category/CategoryFooter";
import CategoryList from "@components/category/CategoryList";

export default function Category() {
  return (
    <section className="page_layout">
      <HomeButtonHeader title="카테고리 편집" />
      <CategoryList />
      <CategoryFooter />
    </section>
  );
}
