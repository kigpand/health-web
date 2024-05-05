import { ChangeEvent } from "react";

export type InputProps = {
  width: string;
  placeholder: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
