import ModalPortal from "@/ModalPortal";
import { useAddCategory } from "@/hook/quires/category";
import { getDuplCategory } from "@/service/category";
import { Button, Input } from "ji-design-system";
import { useState } from "react";

type Props = {
  handleCloseModal: () => void;
};

export default function AddCategoryModal({ handleCloseModal }: Props) {
  const [category, setCategory] = useState<string>("");
  const { addCategoryMutate } = useAddCategory();

  async function handleAddCategory() {
    if (category === "") return;
    const dupl = await getDuplCategory(category);
    if (dupl.category === "empty") {
      addCategoryMutate({ category });
      handleCloseModal();
    } else {
      alert("카테고리가 중복되었습니다.");
    }
  }

  return (
    <ModalPortal
      component={
        <article className="w-[300px] p-6 bg-white rounded-xl flex flex-col gap-5">
          <div className="font-bold">추가할 카테고리를 입력해주세요</div>
          <Input
            type="text"
            $width="100%"
            placeholder="카테고리..."
            onChange={(e) => setCategory(e.target.value)}
          />
          <Button
            style={{ width: "100%" }}
            func="primary"
            label="추가"
            size="MD"
            onClick={handleAddCategory}
          />
        </article>
      }
      handleCloseModal={handleCloseModal}
    />
  );
}
