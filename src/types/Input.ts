import { ChangeEvent } from "react";

export type InputProps = {
  width: string;
  value?: string | number;
  placeholder: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
