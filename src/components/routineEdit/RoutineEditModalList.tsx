import { RoutineDataType } from "@/types/Routine";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { MdAutoFixHigh } from "react-icons/md";

type Props = {
  routine: RoutineDataType[];
  handleAddRoutine: () => void;
  handleUpdateRoutine: (routineData: RoutineDataType) => void;
  deleteRoutineItem: (item: RoutineDataType) => void;
};

export default function RoutineEditModalList({
  routine,
  handleAddRoutine,
  handleUpdateRoutine,
  deleteRoutineItem,
}: Props) {
  return (
    <ul className="mt-5 py-1 border-t border-gray-300 flex flex-col">
      <header className="text-lg font-bold mt-2 mb-5 flex justify-between">
        <span>루틴 리스트</span>
        <div onClick={handleAddRoutine}>+</div>
      </header>
      {routine.map((item, i) => {
        return (
          <li key={i} className="flex mb-4 justify-between">
            <span>{item.title}</span>
            <div className="flex gap-1">
              <RiDeleteBin5Fill onClick={() => deleteRoutineItem(item)} />
              <MdAutoFixHigh onClick={() => handleUpdateRoutine(item)} />
            </div>
          </li>
        );
      })}
    </ul>
  );
}
