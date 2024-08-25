import ModalPortal from "@/ModalPortal";
import { PATH } from "@/enum/path";
import { Button } from "ji-design-system";
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
            style={{ width: "100px " }}
            label="확인"
            func="primary"
            size="MD"
            onClick={() => nav(PATH.routineMain)}
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
