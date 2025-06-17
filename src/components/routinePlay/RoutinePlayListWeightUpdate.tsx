import { RoutineListType } from "@/types/Routine";
import RoutinePlayListWeightUpdateModal from "@components/modal/RoutinePlayListWeightUpdateModal";
import { useState } from "react";

type Props = {
  currentRoutine: number;
  routineDetail: RoutineListType;
};

export default function RoutinePlayListWeightUpdate({
  currentRoutine,
  routineDetail,
}: Props) {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <div className="flex gap-2 text-xl">
      <label className="font-bold">무게:</label>
      <span
        className="text-xl font-bold text-[#655fff]"
        onClick={() => setOpenModal(true)}
      >
        {routineDetail.routine[currentRoutine].kg}kg
      </span>
      {openModal && (
        <RoutinePlayListWeightUpdateModal
          currentRoutine={currentRoutine}
          routineDetail={routineDetail}
          handleCloseModal={() => setOpenModal(false)}
        />
      )}
    </div>
  );
}
