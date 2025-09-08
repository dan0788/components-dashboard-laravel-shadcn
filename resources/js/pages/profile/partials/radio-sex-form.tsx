"use client"

import { FormLabel } from '@/components/ui/form'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { FieldValues } from 'react-hook-form';
import { FieldData } from "@/types/layout";

export const RadioSexPage = <TFieldValues extends FieldValues>({ field }: FieldData<TFieldValues>) => {
  return (
    <RadioGroup
      onValueChange={field.onChange} // 💡 Conecta el onChange del campo al onValueChange del RadioGroup
      defaultValue={field.value}
      className="flex flex-col space-y-1"
    >
      <div className="flex items-center gap-3">
        <RadioGroupItem value="male" id="r1" />
        <FormLabel htmlFor="r1" className="pl-1 text-text">Male</FormLabel>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="female" id="r2" />
        <FormLabel htmlFor="r2" className="pl-1 text-text">Female</FormLabel>
      </div>
    </RadioGroup>
  )
}
