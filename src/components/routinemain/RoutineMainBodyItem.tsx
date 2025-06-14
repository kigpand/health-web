import { PATH } from "@/enum/path";
import { RoutineListType } from "@/types/Routine";
import { useNavigate } from "react-router-dom";

type Props = {
  item: RoutineListType;
};

export default function RoutineMainBodyItem({ item }: Props) {
  const nav = useNavigate();

  function handleMoveToDetail() {
    nav(`${PATH.routineDetail}?id=${item.id}`);
  }

  return (
    <li
      className="w-full py-4 bg-white text-black rounded-2xl font-bold text-center"
      onClick={handleMoveToDetail}
    >
      {item.title}
    </li>
  );
}
