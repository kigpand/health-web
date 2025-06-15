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
}: Props) {
  return (
    <div className={cn("flex flex-col gap-1 w-full rounded-md", className)}>
      {label && (
        <label className={cn("text-sm font-medium", labelClassName)}>
          {label}
        </label>
      )}
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-full">
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
    </div>
  );
}
