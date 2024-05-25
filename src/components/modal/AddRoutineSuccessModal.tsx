import ModalPortal from "@/ModalPortal";
import Button from "@/common/button/Button";
import { PATH } from "@/enum/path";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function AddRoutineSuccessModal() {
  const nav = useNavigate();
  return (
    <ModalPortal
      component={
        <SuccessModal>
          <div>루틴 등록이 완료되었습니다.</div>
          <Button
            width="100px"
            text="확인"
            type="primary"
            handleClick={() => nav(PATH.routineMain)}
          />
        </SuccessModal>
      }
      handleCloseModal={() => nav(PATH.routineMain)}
    />
  );
}

const SuccessModal = styled.article`
  width: 300px;
  height: 200px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  gap: 80px;
  border-radius: 12px;
`;
