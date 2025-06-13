import { RoutineListType } from "@/types/Routine";
import RoutineDeleteModal from "@components/modal/RoutineDeleteModal";
import { useState } from "react";

type Props = {
  item: RoutineListType;
};

export default function RoutineEditDeleteButton({ item }: Props) {
  const [deleteRoutine, setDeleteRoutine] = useState<RoutineListType | null>(
    null
  );

  return (
    <>
      <button
        className="bg-red-500 text-white py-2 px-3 rounded-xl outline-none border-none"
        onClick={() => setDeleteRoutine(item)}
      >
        삭제
      </button>
      {deleteRoutine && (
        <RoutineDeleteModal
          routine={deleteRoutine}
          handleCloseModal={() => setDeleteRoutine(null)}
        />
      )}
    </>
  );
}
