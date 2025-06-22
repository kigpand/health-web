import { PATH } from "@/enum/path";
import { useNavigate } from "react-router-dom";
import LOGO from "../assets/logo.png";

const ROUTE_ACTIONS = {
  운동하기: PATH.routineMain,
  "최근 루틴 조회": PATH.checkRoutine,
  "루틴 편집": PATH.routineEdit,
  "카테고리 편집": PATH.category,
} as const;

export default function Home() {
  const nav = useNavigate();

  const handleNavClick = (label: keyof typeof ROUTE_ACTIONS) => {
    nav(ROUTE_ACTIONS[label]);
  };

  return (
    <div className="page_layout items-center gap-3">
      <img
        src={LOGO}
        alt="logo"
        className="h-[150px] object-contain mt-[100px] mb-[30px]"
      />
      {Object.entries(ROUTE_ACTIONS).map(([text]) => (
        <HomeButton
          key={text}
          text={text}
          handleButtonClick={() =>
            handleNavClick(text as keyof typeof ROUTE_ACTIONS)
          }
        />
      ))}
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
