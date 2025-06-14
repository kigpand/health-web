import { PATH } from "@/enum/path";
import useLogin from "@/hook/useLogin";
import { Button, LabelInput } from "ji-design-system";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { changeLoginState } = useLogin();
  const [id, setId] = useState<string>("");
  const [pw, setPw] = useState<string>("");
  const nav = useNavigate();

  async function onButtonClick() {
    if (
      id === import.meta.env.VITE_API_ID &&
      pw === import.meta.env.VITE_API_PW
    ) {
      changeLoginState(false);
      localStorage.setItem("loginState", "login");
      nav(-1);
    } else {
      alert("로그인 정보가 틀립니다.");
    }
  }

  return (
    <section className="page_layout gap-2 p-6 items-center">
      <label className="text-3xl font-bold mt-[100px] mb-[30px]">Login</label>
      <LabelInput
        label="id"
        $width="100%"
        onChange={(e) => setId(e.target.value)}
      />
      <LabelInput
        label="pw"
        $width="100%"
        type="password"
        onChange={(e) => setPw(e.target.value)}
      />
      <div className="flex gap-2 mt-[30px]">
        <Button
          style={{ width: "150px" }}
          func="primary"
          label="login"
          onClick={onButtonClick}
          size="MD"
        />
        <Button
          style={{ width: "150px" }}
          func="secondary"
          label="home"
          onClick={() => nav(PATH.home)}
          size="MD"
        />
      </div>
    </section>
  );
};

export default Login;
