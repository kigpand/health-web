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
  contentClassName?: string;
  itemClassName?: string;
};

export function SelectBox({
  value,
  options,
  onChange,
  placeholder = "선택",
  className,
  contentClassName,
  itemClassName,
}: Props) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className={cn("w-full", className)}>
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
  );
}
