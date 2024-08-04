import ModalPortal from "@/ModalPortal";
import Button from "@/common/button/Button";
import React from "react";
import styled from "styled-components";

type Props = {
  component: React.ReactNode;
  primaryText: string;
  secondaryText: string;
  primaryEvent: () => void;
  secondaryEvent: () => void;
  handleCloseModal: () => void;
};

export default function TwoButtonModal(props: Props) {
  return (
    <ModalPortal
      component={
        <ModalContainer>
          {props.component}
          <ButtonWrapper>
            <Button
              width="100%"
              text={props.primaryText}
              type="primary"
              handleClick={props.primaryEvent}
            />
            <Button
              width="100%"
              text={props.secondaryText}
              type="secondary"
              handleClick={props.secondaryEvent}
            />
          </ButtonWrapper>
        </ModalContainer>
      }
      handleCloseModal={props.handleCloseModal}
    />
  );
}

const ModalContainer = styled.article`
  width: 300px;
  padding: 24px;
  border-radius: 8px;
  background-color: white;
  max-height: 700px;
`;

const ButtonWrapper = styled.footer`
  margin-top: 30px;
  display: flex;
  gap: 8px;
`;
