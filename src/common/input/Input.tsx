import { ChangeEvent } from "react";
import styled from "styled-components";

type Props = {
  width: string;
  placeholder: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({ width, placeholder, handleChange }: Props) {
  return (
    <InputWrapper
      placeholder={placeholder}
      onChange={handleChange}
      $width={width}
    />
  );
}

const InputWrapper = styled.input<{ $width: string }>`
  outline: none;
  border: 1px solid black;
  border-radius: 4px;
  background-color: white;
  height: 40px;
  width: ${(props) => props.$width};
`;
