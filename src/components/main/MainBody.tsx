import { useRoutineByCategory } from "@/hook/quires/routine";
import MainBodyItem from "./MainBodyItem";
import { useState } from "react";
import { CategoryType } from "@/types/CategoryType";
import { SelectBox } from "@components/components/common/Selectbox";

type Props = {
  category: CategoryType[];
};

export default function MainBody({ category }: Props) {
  const [selectCategory, setSelectCategory] = useState<string>(
    category[0].category
  );
  const { routineByCategory } = useRoutineByCategory(selectCategory);

  return (
    <ul className="grow flex flex-col items-center gap-4 px-4 py-6 overflow-auto">
      <SelectBox
        className="bg-white"
        value={selectCategory}
        options={category.map((item) => {
          return { label: item.category, value: item.category };
        })}
        onChange={(select) => setSelectCategory(select)}
      />
      {routineByCategory?.map((routine) => {
        return <MainBodyItem key={routine._id} item={routine} />;
      })}
    </ul>
  );
}
