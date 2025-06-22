import { RoutineListType } from "@/types/Routine";
import RoutineEditModal from "@components/modal/RoutineEditModal";
import { useState } from "react";

type Props = {
  item: RoutineListType;
};

export default function RoutineEditButton({ item }: Props) {
  const [editRoutine, setEditRoutine] = useState<RoutineListType | null>(null);

  return (
    <>
      <button
        className="bg-[#00b7ff] text-white py-2 px-3 rounded-xl outline-none border-none"
        onClick={() => setEditRoutine(item)}
      >
        편집
      </button>
      {editRoutine && (
        <RoutineEditModal
          routine={editRoutine}
          handleCloseModal={() => setEditRoutine(null)}
        />
      )}
    </>
  );
}
