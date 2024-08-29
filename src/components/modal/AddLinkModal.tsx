import ModalPortal from "@/ModalPortal";
import styled from "styled-components";

type Props = {
  handleCloseModal: () => void;
};

export default function AddLinkModal({ handleCloseModal }: Props) {
  return (
    <ModalPortal
      component={<ModalWrapper>유튜브 링크 추가</ModalWrapper>}
      handleCloseModal={handleCloseModal}
    />
  );
}

const ModalWrapper = styled.article`
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
