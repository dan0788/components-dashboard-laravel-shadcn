import { RadioGroupFormArrayProps } from "@/types/layout";
import { FieldData } from "@/types/layout";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { FormLabel } from "@/components/ui/form"
import { FieldValues } from "react-hook-form";

export function RadioGroupFormArray<TFieldValues extends FieldValues>({
  field,
  references,
  radioNames,
}: RadioGroupFormArrayProps<TFieldValues>) {

  const valueFromBackend = field.value;
  const transformedValue = valueFromBackend.toLowerCase().replace(/\s/g, '_');

  return (
    <RadioGroup
      onValueChange={field.onChange}
      defaultValue={transformedValue}
      className="flex flex-col space-y-1"
    >
      {references.map((reference, index) => (
        <div key={reference} className="flex items-center gap-3">
          <RadioGroupItem value={reference} id={reference} />
          <FormLabel htmlFor={reference} className="pl-1 text-text">{radioNames[index]}</FormLabel>
        </div>
      ))}

    </RadioGroup>
  )
}