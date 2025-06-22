import { useRoutineUpdate } from "@/hook/quires/routine";
import { RoutineListType } from "@/types/Routine";
import { useState } from "react";
import TwoButtonModal from "./TwoButtonModal";
import { InputField } from "@components/components/common/InputField";

type Props = {
  currentRoutine: number;
  routineDetail: RoutineListType;
  handleCloseModal: () => void;
};

export default function RoutinePlayListWeightUpdateModal({
  currentRoutine,
  routineDetail,
  handleCloseModal,
}: Props) {
  const [kg, setKg] = useState<number>(0);
  const { updateRoutine } = useRoutineUpdate();

  function handleUpdateWeightButton() {
    const newRoutine = routineDetail.routine[currentRoutine];
    newRoutine.kg = kg;
    routineDetail.routine[currentRoutine] = newRoutine;
    updateRoutine(routineDetail);
    handleCloseModal();
  }

  return (
    <TwoButtonModal
      component={
        <div className="flex flex-col gap-4">
          <header className="text-lg font-bold">
            변경할 무게를 입력하세요.
          </header>
          <InputField
            type="number"
            placeholder="무게"
            onChange={(e) => setKg(Number(e.target.value))}
          />
        </div>
      }
      primaryText="등록"
      primaryEvent={handleUpdateWeightButton}
      secondaryText="취소"
      secondaryEvent={handleCloseModal}
      handleCloseModal={handleCloseModal}
    />
  );
}
