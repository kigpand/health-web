import { useRoutine } from "@/hook/quires/routine";
import styled from "styled-components";
import MainBodyItem from "./MainBodyItem";

export default function MainBody() {
  const { routine } = useRoutine();

  return (
    <BodyWrapper>
      {routine?.map((routine) => {
        return <MainBodyItem key={routine._id} item={routine} />;
      })}
    </BodyWrapper>
  );
}

const BodyWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 24px 16px;
`;
