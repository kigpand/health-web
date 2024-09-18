import ModalPortal from "@/ModalPortal";
import { useRoutineDetail } from "@/hook/quires/routine";
import { RecordType } from "@/types/RecordType";
import styled from "styled-components";

type Props = {
  record: RecordType;
  handleCloseModal: () => void;
};

export default function CheckRoutineListModal({
  record,
  handleCloseModal,
}: Props) {
  const { routineDetail } = useRoutineDetail(String(record.id));

  function getRoutineDate(date: string | undefined) {
    if (date) {
      const convert = new Date(date);
      const week = new Array("일", "월", "화", "수", "목", "금", "토");
      const year = convert.getFullYear();
      const month = convert.getMonth() + 1;
      const day = convert.getDate();
      const dayName = week[convert.getDay()];

      return `${year}-${month}-${day}(${dayName})`;
    }

    return "";
  }

  return (
    <ModalPortal
      component={
        <RoutineListModal>
          <DetailItem>
            <span>제목:</span>
            <span>{routineDetail?.title}</span>
          </DetailItem>
          <DetailItem>
            <span>날짜:</span>
            <span>{getRoutineDate(routineDetail?.date)}</span>
          </DetailItem>
          <DetailItem>
            <span>카테고리:</span>
            <span>{routineDetail?.category}</span>
          </DetailItem>
        </RoutineListModal>
      }
      handleCloseModal={handleCloseModal}
    />
  );
}

const RoutineListModal = styled.article`
  width: 250px;
  height: 150px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  gap: 10px;
`;

const DetailItem = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  padding-left: 10px;

  span:first-of-type {
    width: 80px;
  }
`;
