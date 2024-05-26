import SelectBox from "@/common/select/SelectBox";
import { PATH } from "@/enum/path";
import { useRoutineCount } from "@/hook/quires/routine";
import { FooterWrapper, HeaderWrapper, PageWrapper } from "@/styles/PageStyle";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function CheckRoutine() {
  const nav = useNavigate();
  const [count, setCount] = useState<number>(3);
  const { routineCount } = useRoutineCount(count);

  return (
    <CheckRoutineWrapper>
      <HeaderWrapper>
        <span>최근 루틴 조회</span>
        <HomeButton onClick={() => nav(PATH.home)}>홈</HomeButton>
      </HeaderWrapper>
      <CheckBodyStyled>
        <SelectBox
          width="100%"
          title="루틴 개수를 설정해주세요"
          values={["3", "5", "7", "10"]}
          handleChangeSelect={(value) => setCount(Number(value))}
        />
        <BodyHeader>최근 {count}일간 루틴</BodyHeader>
        <ListWrapper>
          {routineCount?.map((item) => {
            return <ListStyled key={item._id}>{item.title}</ListStyled>;
          })}
        </ListWrapper>
      </CheckBodyStyled>
      <CheckFooter>
        <button>분석하기</button>
      </CheckFooter>
    </CheckRoutineWrapper>
  );
}

const CheckRoutineWrapper = styled(PageWrapper)`
  display: flex;
  flex-direction: column;
`;

const HomeButton = styled.div`
  position: absolute;
  right: 10px;
  font-size: 12px;
`;

const CheckBodyStyled = styled.article`
  flex-grow: 1;
  padding: 16px;
`;

const BodyHeader = styled.header`
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  margin: 30px 0px 20px 0px;
`;

const ListWrapper = styled.ul`
  width: 100%;
  gap: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ListStyled = styled.li`
  width: 100%;
  padding: 16px 0px;
  font-weight: bold;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const CheckFooter = styled(FooterWrapper)`
  padding: 16px;

  button {
    background-color: #2cc3ff;
    padding: 14px;
    border: none;
    outline: none;
    color: white;
    border-radius: 12px;
  }
`;
