import ModalPortal from "@/ModalPortal";
import { Button } from "ji-design-system";

type Props = {
  time: number;
  handleCloseModal: () => void;
};

export default function PlayTimerModal({ time, handleCloseModal }: Props) {
  return (
    <ModalPortal
      component={
        <article className="w-[250px] h-[150px] rounded-xl flex flex-col items-center justify-center bg-white gap-[30px]">
          <div className="flex flex-col items-center gap-3">
            <header className="font-bold">휴식 시간</header>
            <span className="text-sm">{time}초 남았습니다!</span>
          </div>
          {time === 0 && (
            <Button
              style={{ fontSize: "14px" }}
              size="MD"
              func="primary"
              label="다음 운동!"
              onClick={handleCloseModal}
            />
          )}
        </article>
      }
    />
  );
}
