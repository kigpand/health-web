import { ChangeEvent } from "react";

export type InputProps = {
  type: "text" | "number";
  width: string;
  defaultValue?: string | number;
  placeholder: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
