import { PATH } from "@/enum/path";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TwoButtonModal from "./TwoButtonModal";

type Props = {
  id: string;
  handleCloseModal: () => void;
};

export default function TimerSetModal({ id, handleCloseModal }: Props) {
  const nav = useNavigate();
  const [timer, setTimer] = useState<number>(0);

  function handleStart() {
    if (timer <= 0) return alert("타이머는 0초 이상 설정해주세요");
    nav(`${PATH.routinePlay}?id=${id}&timer=${timer}`);
  }

  return (
    <TwoButtonModal
      component={
        <div className="flex flex-col gap-2 w-full">
          <label className="font-bold">타이머를 설정해주세요</label>
          <input
            className="h-[30px] border border-gray-400 outline-none"
            type="number"
            maxLength={1000}
            onChange={(e) => setTimer(Number(e.target.value))}
          />
        </div>
      }
      primaryText="시작"
      primaryEvent={handleStart}
      secondaryText="취소"
      secondaryEvent={handleCloseModal}
      handleCloseModal={handleCloseModal}
    />
  );
}
