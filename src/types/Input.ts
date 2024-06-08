import { ChangeEvent } from "react";

export type InputProps = {
  width: string;
  defaultValue?: string | number;
  placeholder: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
