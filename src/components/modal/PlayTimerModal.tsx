import { useTimer } from "@/hook/useTimer";
import ModalPortal from "@/ModalPortal";
import Button from "@/common/button/Button";
import styled from "styled-components";

type Props = {
  timer: number;
  handleCloseModal: () => void;
};

export default function PlayTimerModal({ timer, handleCloseModal }: Props) {
  const { time } = useTimer({ timer });
  return (
    <ModalPortal
      component={
        <TimeModalWrapper>
          <TimeStyled>{time}</TimeStyled>
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
      handleCloseModal={handleCloseModal}
    />
  );
}

const TimeModalWrapper = styled.article``;

const TimeStyled = styled.div``;
