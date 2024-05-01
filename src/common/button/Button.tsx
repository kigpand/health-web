import styled from "styled-components";

type Props = {
  type: "primary" | "secondary";
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
  background-color: #00d1b8;
  color: white;
`;
