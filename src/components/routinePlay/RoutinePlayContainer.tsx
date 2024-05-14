import Button from "@/common/button/Button";
import { PATH } from "@/enum/path";
import { useRoutineDetail } from "@/hook/quires/routine";
import { HeaderWrapper, PageWrapper } from "@/styles/PageStyle";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

type Props = {
  id: string;
  timer: number;
};

export default function RoutinePlayContainer({ id, timer }: Props) {
  const nav = useNavigate();
  const { routineDetail } = useRoutineDetail(id);

  return (
    <PageWrapper>
      <HeaderWrapper>Play!</HeaderWrapper>
      <ContainerWrapper>
        <Title>
          선택한 루틴은
          <span style={{ color: "red" }}> {routineDetail?.title}</span>입니다.
        </Title>
        <ButtonWrapper>
          <Button
            width="100%"
            type="primary"
            text="시작!"
            handleClick={() => console.log("111")}
          />
          <Button
            width="100%"
            type="black"
            text="뒤로가기"
            handleClick={() => nav(PATH.home)}
          />
        </ButtonWrapper>
      </ContainerWrapper>
    </PageWrapper>
  );
}

const ContainerWrapper = styled.article`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: white;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 150px;
`;
