import { PATH } from "@/enum/path";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { HeaderWrapper } from "./HeaderWrapper";

export default function HomeButtonHeader({ title }: { title: string }) {
  const nav = useNavigate();

  return (
    <HeaderWrapper>
      <span>{title}</span>
      <FaHome
        className="absolute right-[10px] text-xl"
        onClick={() => nav(PATH.home)}
      />
    </HeaderWrapper>
  );
}
