import ModalPortal from "@/ModalPortal";
import { PATH } from "@/enum/path";
import { Button } from "ji-design-system";
import { useNavigate } from "react-router-dom";

export default function AddRoutineSuccessModal() {
  const nav = useNavigate();
  return (
    <ModalPortal
      component={
        <article className="w-[300px] h-[200px] bg-white flex flex-col items-center justify-center text-xl font-bold gap-[80px] rounded-lg">
          <div>루틴 등록이 완료되었습니다.</div>
          <Button
            style={{ width: "100px " }}
            label="확인"
            func="primary"
            size="MD"
            onClick={() => nav(PATH.routineMain)}
          />
        </article>
      }
      handleCloseModal={() => nav(PATH.routineMain)}
    />
  );
}
