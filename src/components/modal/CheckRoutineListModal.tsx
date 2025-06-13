import ModalPortal from "@/ModalPortal";
import { RecordType } from "@/types/RecordType";

type Props = {
  record: RecordType;
  handleCloseModal: () => void;
};

export default function CheckRoutineListModal({
  record,
  handleCloseModal,
}: Props) {
  function getRoutineDate(date: string | undefined) {
    if (date) {
      const convert = new Date(date);
      const week = ["일", "월", "화", "수", "목", "금", "토"];
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
        <article className="w-[250px] h-[150px] rounded-2xl flex flex-col items-center justify-center bg-white gap-2">
          <div className="w-full flex gap-3 pl-3">
            <span className="w-20 font-bold">제목:</span>
            <span>{record.title}</span>
          </div>
          <div className="w-full flex gap-3 pl-3">
            <span className="w-20 font-bold">날짜:</span>
            <span>{getRoutineDate(record.date)}</span>
          </div>
          <div className="w-full flex gap-3 pl-3">
            <span className="w-20 font-bold">카테고리:</span>
            <span>{record.category}</span>
          </div>
        </article>
      }
      handleCloseModal={handleCloseModal}
    />
  );
}
