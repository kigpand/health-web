import ModalPortal from "@/ModalPortal";
import { Button } from "ji-design-system";
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
              style={{ width: "100% " }}
              label={props.primaryText}
              func="primary"
              size="MD"
              onClick={props.primaryEvent}
            />
            <Button
              style={{ width: "100% " }}
              label={props.secondaryText}
              func="secondary"
              size="MD"
              onClick={props.secondaryEvent}
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
