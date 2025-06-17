import * as React from "react";
import { cn } from "@components/lib/utils";
import { Input } from "../ui/input";

type InputFieldProps = {
  label?: string;
  error?: string;
  className?: string;
  labelClassName?: string;
  errorClassName?: string;
} & React.ComponentProps<"input">;

export function InputField({
  label,
  error,
  className,
  labelClassName,
  errorClassName,
  ...props
}: InputFieldProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className={cn("label_text", labelClassName)}>{label}</label>
      )}
      <Input {...props} className={className} aria-invalid={!!error} />
      <p className={cn("error_text mt-1 min-h-[20px]", errorClassName)}>
        {error || "\u00A0"}
      </p>
    </div>
  );
}
