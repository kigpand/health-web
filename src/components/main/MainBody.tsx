import { useRoutineByCategory } from "@/hook/quires/routine";
import styled from "styled-components";
import MainBodyItem from "./MainBodyItem";
import { useState } from "react";
import { CategoryType } from "@/types/CategoryType";
import { Select } from "ji-design-system";

type Props = {
  category: CategoryType[];
};

export default function MainBody({ category }: Props) {
  const [selectCategory, setSelectCategory] = useState<string>(
    category[0].category
  );
  const { routineByCategory } = useRoutineByCategory(selectCategory);

  return (
    <BodyWrapper>
      <Select
        placeholder={category[0].category}
        values={category.map((item) => item.category)}
        handleChangeSelect={(select) => setSelectCategory(select)}
      />
      {routineByCategory?.map((routine) => {
        return <MainBodyItem key={routine._id} item={routine} />;
      })}
    </BodyWrapper>
  );
}

const BodyWrapper = styled.ul`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 24px 16px;
  overflow: auto;
`;
