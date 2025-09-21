import { RadioGroupFormArrayProps } from "@/types/layout";
import { FieldData } from "@/types/layout";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { FormLabel } from "@/components/ui/form"
import { FieldValues } from "react-hook-form";

export function RadioGroupFormBoolean<TFieldValues extends FieldValues>({ field }: FieldData<TFieldValues>) {
  const valueAsString = field.value ? 'yes' : 'no';

  return (
    <RadioGroup
      onValueChange={(value) => field.onChange(value === 'yes')}
      defaultValue={valueAsString}
      className="flex flex-col space-y-1"
    >
      <div className="flex items-center gap-3">
        <RadioGroupItem value="yes" id="r1" />
        <FormLabel htmlFor="r1" className="pl-1 text-text">Yes</FormLabel>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="no" id="r2" />
        <FormLabel htmlFor="r2" className="pl-1 text-text">No</FormLabel>
      </div>
    </RadioGroup>
  )
}

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