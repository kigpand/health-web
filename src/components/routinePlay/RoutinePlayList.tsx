import { RoutineListType } from "@/types/Routine";
import { useState } from "react";
import RoutinePlayListButton from "./RoutinePlayListButtons";
import RoutinePlayListWeightUpdate from "./RoutinePlayListWeightUpdate";
import RoutinePlayListLink from "./RoutinePlayListLink";

type Props = {
  currentRoutine: number;
  routineDetail: RoutineListType;
  timer: number;
  handleNextRoutine: () => void;
};

export default function RoutinePlayList({
  currentRoutine,
  routineDetail,
  timer,
  handleNextRoutine,
}: Props) {
  const [count, setCount] = useState<number>(0);

  return (
    <article className="grow flex flex-col items-center justify-center gap-2 text-white">
      <p className="text-center text-2xl font-bold mb-5 leading-8">
        이번 운동은
        <br /> {routineDetail.routine[currentRoutine].title}입니다.
      </p>
      <RoutinePlayListWeightUpdate
        currentRoutine={currentRoutine}
        routineDetail={routineDetail}
      />
      <div className="flex gap-2 text-xl">
        <label className="font-bold">세트:</label>{" "}
        {routineDetail.routine[currentRoutine].set}set
      </div>
      <div className="text-center leading-5 mt-5 text-sm font-bold">
        {count === routineDetail.routine[currentRoutine].set
          ? "완료하였습니다. 다음 루틴을 진행해주세요!"
          : `현재 ${count}세트 진행했습니다.`}
        <br />총 {routineDetail.routine[currentRoutine].set - count}세트
        남았습니다.
      </div>
      <RoutinePlayListLink
        currentRoutine={routineDetail.routine[currentRoutine]}
      />
      <RoutinePlayListButton
        count={count}
        timer={timer}
        routineDetail={routineDetail}
        currentRoutine={currentRoutine}
        handleNextRoutine={handleNextRoutine}
        handleCount={(num: number) => setCount(num)}
      />
    </article>
  );
}
