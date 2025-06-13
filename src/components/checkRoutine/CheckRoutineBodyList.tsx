import { RecordType } from "@/types/RecordType";
import CheckRoutineListModal from "@components/modal/CheckRoutineListModal";
import { useState } from "react";

type Props = {
  record: RecordType;
};

export default function CheckRoutineBodyList({ record }: Props) {
  const [isDetail, setIsDetail] = useState<boolean>(false);
  return (
    <>
      {isDetail && (
        <CheckRoutineListModal
          record={record}
          handleCloseModal={() => setIsDetail(false)}
        />
      )}
      <li
        className="w-full py-4 font-bold rounded-xl flex items-center justify-center bg-white"
        onClick={() => setIsDetail(true)}
      >
        {record.title}
      </li>
    </>
  );
}
