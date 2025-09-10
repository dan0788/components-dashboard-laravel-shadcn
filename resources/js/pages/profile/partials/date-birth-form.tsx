"use client"

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { FormLabel } from '@/components/ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ChevronDownIcon } from 'lucide-react';
import React from 'react'
import { FieldValues } from 'react-hook-form';
import { FieldData } from "@/types/layout";

export const DateBirthPage = <TFieldValues extends FieldValues>({ field }: FieldData<TFieldValues>) => {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="flex flex-col gap-3">
      <FormLabel /* htmlFor={field.name} */ className="pl-1 text-text">Date of birth</FormLabel>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>

          <Button
            variant="outline"
            id={field.name}
            className="w-48 justify-between font-normal"
          >
            {field.value ? field.value.toLocaleDateString() : "Select date"}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={field.value}
            captionLayout="dropdown"
            onSelect={(date) => {
              field.onChange(date);
              setOpen(false);
            }}
            fromYear={1950}
            toYear={new Date().getFullYear() - 18}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}