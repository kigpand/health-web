import { useRoutineDelete } from "@/hook/quires/routine";
import { RoutineListType } from "@/types/Routine";
import TwoButtonModal from "./TwoButtonModal";

type Props = {
  routine: RoutineListType;
  handleCloseModal: () => void;
};

export default function RoutineDeleteModal({
  routine,
  handleCloseModal,
}: Props) {
  const { deleteRoutine } = useRoutineDelete();

  function handleDeleteButton(id: number) {
    deleteRoutine(id);
    handleCloseModal();
  }

  return (
    <TwoButtonModal
      component={
        <label className="font-bold mb-7 text-lg">
          {routine.title} 루틴을 삭제하시겠습니까?
        </label>
      }
      primaryText="예"
      primaryEvent={() => handleDeleteButton(routine.id)}
      secondaryText="아니요"
      secondaryEvent={handleCloseModal}
      handleCloseModal={handleCloseModal}
    />
  );
}
