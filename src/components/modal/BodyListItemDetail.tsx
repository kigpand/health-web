import ModalPortal from "@/ModalPortal";
import styled from "styled-components";

type Props = {
  title: string;
  kg: number;
  set: number;
  handleCloseModal: () => void;
};

export default function BodyListItemDetail(props: Props) {
  return (
    <ModalPortal
      component={
        <DetailWrapper>
          <DetailItem>
            <span>제목:</span>
            <span>{props.title}</span>
          </DetailItem>
          <DetailItem>
            <span>무게:</span>
            <span>{props.kg}kg</span>
          </DetailItem>
          <DetailItem>
            <span>세트:</span>
            <span>{props.set}set</span>
          </DetailItem>
        </DetailWrapper>
      }
      handleCloseModal={props.handleCloseModal}
    />
  );
}

const DetailWrapper = styled.article`
  width: 300px;
  height: 200px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  gap: 20px;
  border-radius: 12px;
  padding: 20px;
`;

const DetailItem = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
`;
