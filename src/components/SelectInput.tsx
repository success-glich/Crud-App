import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChangeEvent } from "react";

interface ISelectInputProps {
  name: string;
  options: { value: string; label: string }[];
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  selectedValue: string;
  placeholder?: string;
}
const SelectInput: React.FC<ISelectInputProps> = ({
  name,
  options,
  onChange,
  selectedValue,
}) => {
  const handleSelect = (value: string) => {
    onChange({
      target: { name, value: value },
    } as React.ChangeEvent<HTMLSelectElement>);
  };
  return (
    <Select
      onValueChange={(value: string) => {
        handleSelect(value);
      }}
    >
      <SelectTrigger>
        <SelectValue placeholder={selectedValue} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option: { value: string; label: string }) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SelectInput;
