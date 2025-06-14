import FooterWrapper from "@/common/layout/FooterWrapper";
import AddCategoryModal from "@components/modal/AddCategoryModal";
import { useState } from "react";

export default function CategoryFooter() {
  const [isAddCategory, setIsAddCategory] = useState<boolean>(false);
  return (
    <FooterWrapper className="py-3">
      <button
        className="outline-none border-none bg-white py-2 w-4/5 rounded-xl cursor-pointer font-bold"
        onClick={() => setIsAddCategory(true)}
      >
        카테고리 추가
      </button>
      {isAddCategory && (
        <AddCategoryModal handleCloseModal={() => setIsAddCategory(false)} />
      )}
    </FooterWrapper>
  );
}
