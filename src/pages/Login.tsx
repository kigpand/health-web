import { PATH } from "@/enum/path";
import useLogin from "@/hook/useLogin";
import { PageWrapper } from "@/styles/PageStyle";
import { Button, LabelInput } from "ji-design-system";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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
    <LoginWrapper>
      <Label>Login</Label>
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
      <ButtonWrapper>
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
      </ButtonWrapper>
    </LoginWrapper>
  );
};

export default Login;

const Label = styled.header`
  font-size: 30px;
  font-weight: bold;
  margin: 100px 0px 30px 0px;
`;

const LoginWrapper = styled(PageWrapper)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 24px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 30px;
`;
