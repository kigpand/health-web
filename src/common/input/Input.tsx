import { InputProps } from "@/types/Input";
import styled from "styled-components";

export default function Input({
  width,
  defaultValue,
  placeholder,
  type,
  handleChange,
}: InputProps) {
  return (
    <InputWrapper
      type={type}
      placeholder={placeholder}
      onChange={handleChange}
      defaultValue={defaultValue ?? undefined}
      $width={width}
    />
  );
}

const InputWrapper = styled.input<{ $width: string }>`
  outline: none;
  border: 1px solid gray;
  border-radius: 4px;
  background-color: white;
  height: 35px;
  width: ${(props) => props.$width};
`;
