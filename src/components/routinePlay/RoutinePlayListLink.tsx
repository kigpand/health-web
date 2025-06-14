import RoutinePlayListLinkNone from "./RoutinePlayListLinkNone";
import { RoutineDataType } from "@/types/Routine";

type Props = {
  currentRoutine: RoutineDataType;
};

export default function RoutinePlayListLink({ currentRoutine }: Props) {
  return currentRoutine.link ? (
    <div className="mt-5 mb-2 flex flex-col items-center gap-2">
      <header className="font-bold">참조 영상</header>
      <a
        className="font-bold text-blue-400 underline"
        href={currentRoutine.link}
        target="_blank"
      >
        {currentRoutine.link}
      </a>
    </div>
  ) : (
    <RoutinePlayListLinkNone />
  );
}
