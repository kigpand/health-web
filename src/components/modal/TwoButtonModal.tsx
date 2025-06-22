import ModalPortal from "@/ModalPortal";
import { Button } from "ji-design-system";
import React from "react";

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
        <article className="w-[300px] p-6 rounded-xl bg-white max-h-[700px]">
          {props.component}
          <footer className="mt-[30px] flex gap-2">
            <Button
              style={{ width: "100%" }}
              label={props.primaryText}
              func="primary"
              size="MD"
              onClick={props.primaryEvent}
            />
            <Button
              style={{ width: "100%" }}
              label={props.secondaryText}
              func="secondary"
              size="MD"
              onClick={props.secondaryEvent}
            />
          </footer>
        </article>
      }
      handleCloseModal={props.handleCloseModal}
    />
  );
}
