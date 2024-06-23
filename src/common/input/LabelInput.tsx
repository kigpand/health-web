import { InputProps } from "@/types/Input";
import styled from "styled-components";
import Input from "./Input";

type Props = {
  label: string;
} & InputProps;

export default function LabelInput({
  label,
  width,
  type,
  defaultValue,
  placeholder,
  handleChange,
}: Props) {
  return (
    <LabelInputWrapper $width={width}>
      <label>{label}</label>
      <Input
        type={type}
        width="100%"
        defaultValue={defaultValue ?? undefined}
        placeholder={placeholder}
        handleChange={handleChange}
      />
    </LabelInputWrapper>
  );
}

const LabelInputWrapper = styled.div<{ $width: string }>`
  width: ${(props) => props.$width};
  display: flex;
  flex-direction: column;
  gap: 4px;

  label {
    font-size: 12px;
    font-weight: bold;
  }
`;
