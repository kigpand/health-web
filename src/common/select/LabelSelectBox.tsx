import { SelectBoxProps } from "@/types/SelectType";
import styled from "styled-components";
import SelectBox from "./SelectBox";

type Props = {
  label: string;
} & SelectBoxProps;

export default function LabelSelectBox({
  label,
  width,
  title,
  values,
  handleChangeSelect,
}: Props) {
  return (
    <BoxWrapper $width={width}>
      <label>{label}</label>
      <SelectBox
        width="100%"
        title={title}
        values={values}
        handleChangeSelect={handleChangeSelect}
      />
    </BoxWrapper>
  );
}

const BoxWrapper = styled.div<{ $width: string }>`
  width: ${(props) => props.$width};
  display: flex;
  flex-direction: column;
  gap: 4px;

  label {
    font-size: 12px;
    font-weight: bold;
  }
`;
