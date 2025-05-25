import { PATH } from "@/enum/path";
import { useNavigate } from "react-router-dom";
import LOGO from "@/assets/logo.png";

export default function Home() {
  const nav = useNavigate();

  return (
    <div className="page_layout items-center gap-3">
      <img
        src={LOGO}
        alt="logo"
        className="h-[150px] object-contain mt-[100px] mb-[30px]"
      />
      <HomeButton
        text="운동하기"
        handleButtonClick={() => nav(PATH.routineMain)}
      />
      <HomeButton
        text="최근 루틴 조회"
        handleButtonClick={() => nav(PATH.checkRoutine)}
      />
      <HomeButton
        text="루틴 편집"
        handleButtonClick={() => nav(PATH.routineEdit)}
      />
      <HomeButton
        text="카테고리 편집"
        handleButtonClick={() => nav(PATH.category)}
      />
    </div>
  );
}

type ButtonProps = {
  text: string;
  handleButtonClick: () => void;
};

function HomeButton({ text, handleButtonClick }: ButtonProps) {
  return (
    <button
      className="w-[90%] py-4 font-bold text-lg border-none outline-none rounded-2xl bg-white"
      onClick={handleButtonClick}
    >
      {text}
    </button>
  );
}
