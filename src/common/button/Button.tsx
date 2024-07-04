import styled from "styled-components";

type Props = {
  type: "primary" | "secondary" | "black" | "skyblue";
  width: string;
  text: string;
  handleClick: () => void;
};

export default function Button(props: Props) {
  if (props.type === "primary") {
    return (
      <PrimaryButton $width={props.width} onClick={props.handleClick}>
        {props.text}
      </PrimaryButton>
    );
  }
  if (props.type === "secondary") {
    return (
      <SecondaryButton $width={props.width} onClick={props.handleClick}>
        {props.text}
      </SecondaryButton>
    );
  }
  if (props.type === "black") {
    return (
      <BlackButton $width={props.width} onClick={props.handleClick}>
        {props.text}
      </BlackButton>
    );
  }
  if (props.type === "skyblue") {
    return (
      <SkyBlueButton $width={props.width} onClick={props.handleClick}>
        {props.text}
      </SkyBlueButton>
    );
  }
  return <ButtonWrapper $width={props.width}>{props.text}</ButtonWrapper>;
}

type ButtonProps = {
  $width: string;
};

const ButtonWrapper = styled.button<ButtonProps>`
  width: ${(props) => props.$width};
  outline: none;
  border: none;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0px;
`;

const PrimaryButton = styled(ButtonWrapper)`
  background-color: #4287ff;
  color: white;
`;

const SecondaryButton = styled(ButtonWrapper)`
  background-color: #ff3459;
  color: white;
`;

const BlackButton = styled(ButtonWrapper)`
  background-color: #000000;
  color: white;
`;

const SkyBlueButton = styled(ButtonWrapper)`
  background-color: #5dd1ff;
  color: white;
`;
