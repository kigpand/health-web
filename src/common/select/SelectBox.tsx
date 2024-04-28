import { useState } from "react";
import styled from "styled-components";
import SelectBoxItem from "./SelectBoxItem";

type Props = {
  width: string;
  title: string;
  values: string[];
};

export default function SelectBox({ width, title, values }: Props) {
  const [placeholder, setPlaceholder] = useState<string>(title);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleSelectItem(value: string) {
    setPlaceholder(value);
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
  height: 40px;
  background-color: white;
  border-radius: 8px;
  border-bottom-left-radius: ${(props) => (props.$isOpen ? "0px" : "8px")};
  border-bottom-right-radius: ${(props) => (props.$isOpen ? "0px" : "8px")};
  display: flex;
  align-items: center;
  padding-left: 4px;
  color: ${({ theme }) => theme.colors.secondary};
`;

const ItemWrapper = styled.ul`
  position: absolute;
  top: 40px;
  left: 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  overflow: hidden;
`;
