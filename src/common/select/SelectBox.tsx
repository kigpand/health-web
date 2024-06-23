import { useState } from "react";
import styled from "styled-components";
import SelectBoxItem from "./SelectBoxItem";
import { SelectBoxProps } from "@/types/SelectType";

export default function SelectBox({
  width,
  title,
  values,
  handleChangeSelect,
}: SelectBoxProps) {
  const [placeholder, setPlaceholder] = useState<string>(title);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleSelectItem(value: string) {
    setPlaceholder(value);
    handleChangeSelect(value);
    setIsOpen(false);
  }

  return (
    <SelectBoxWrapper $width={width}>
      <Container $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        {placeholder}
      </Container>
      {isOpen && (
        <ItemWrapper>
          {values.map((value) => {
            return (
              <SelectBoxItem
                key={value}
                value={value}
                handleSelectItem={handleSelectItem}
              />
            );
          })}
        </ItemWrapper>
      )}
    </SelectBoxWrapper>
  );
}

type StyledProps = {
  $width: string;
};

const SelectBoxWrapper = styled.div<StyledProps>`
  width: ${(props) => props.$width};
  position: relative;
`;

type ContainerProps = {
  $isOpen: boolean;
};

const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 35px;
  background-color: white;
  border-radius: 4px;
  border-bottom-left-radius: ${(props) => (props.$isOpen ? "0px" : "4px")};
  border-bottom-right-radius: ${(props) => (props.$isOpen ? "0px" : "4px")};
  border: 1px solid gray;
  display: flex;
  align-items: center;
  padding-left: 4px;
  color: gray;
`;

const ItemWrapper = styled.ul`
  position: absolute;
  top: 40px;
  left: 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  overflow: hidden;
  border: 1px solid gray;
`;
