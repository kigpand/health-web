import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../ui/select";
import { cn } from "../../lib/utils";

type Option = {
  label: string;
  value: string;
};

type Props = {
  value?: string;
  options: Option[];
  onChange: (val: string) => void;
  placeholder?: string;
  className?: string;
  label?: string;
  labelClassName?: string;
  contentClassName?: string;
  itemClassName?: string;
  triggerClassName?: string;
  error?: string;
};

export function SelectBox({
  label,
  value,
  options,
  onChange,
  placeholder = "선택",
  className,
  labelClassName,
  contentClassName,
  itemClassName,
  triggerClassName,
  error,
}: Props) {
  return (
    <div className={cn("flex flex-col gap-1 w-full rounded-md", className)}>
      {label && (
        <label className={cn("text-xs font-bold", labelClassName)}>
          {label}
        </label>
      )}
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className={cn("w-full", triggerClassName)}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className={contentClassName}>
          {options.map((opt) => (
            <SelectItem
              key={opt.value}
              value={opt.value}
              className={itemClassName}
            >
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <p className="error_text mt-1 min-h-[20px]">
        {error ? error : "\u00A0" /* 공백으로 자리유지 */}
      </p>
    </div>
  );
}
