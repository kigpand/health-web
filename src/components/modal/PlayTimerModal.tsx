import ModalPortal from "@/ModalPortal";
import Button from "@/common/button/Button";
import styled from "styled-components";

type Props = {
  time: number;
  handleCloseModal: () => void;
};

export default function PlayTimerModal({ time, handleCloseModal }: Props) {
  return (
    <ModalPortal
      component={
        <TimeModalWrapper>
          <TimeStyled>
            <header>휴식 시간</header>
            <span>{time}초 남았습니다!</span>
          </TimeStyled>
          {time === 0 && (
            <Button
              width="100px"
              type="primary"
              text="다음 운동!"
              handleClick={handleCloseModal}
            />
          )}
        </TimeModalWrapper>
      }
    />
  );
}

const TimeModalWrapper = styled.article`
  width: 250px;
  height: 150px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  gap: 30px;
`;

const TimeStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;

  header {
    font-weight: bold;
  }

  span {
    font-size: 14px;
  }
`;
