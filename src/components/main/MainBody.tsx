import { useRoutine } from "@/hook/quires/routine";
import styled from "styled-components";
import MainBodyItem from "./MainBodyItem";
import { useCategory } from "@/hook/quires/category";
import SelectBox from "@/common/select/SelectBox";

export default function MainBody() {
  const { routine } = useRoutine();
  const { category } = useCategory();

  return (
    <BodyWrapper>
      {category && (
        <SelectBox
          width="100%"
          title="카테고리"
          values={category.map((item) => item.category)}
          handleChangeSelect={(select) => console.log(select)}
        />
      )}
      {routine?.map((routine) => {
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
