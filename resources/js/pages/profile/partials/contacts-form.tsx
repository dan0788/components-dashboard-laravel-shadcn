"use client"

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Check, ChevronsUpDown, Phone, Smartphone } from "lucide-react";
import { FieldData } from "@/types/layout";
import { FieldValues } from "react-hook-form";
import React, { useRef } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { FormLabel } from "@/components/ui/form";
import useFetchCountries from "@/hooks/country-hook"

export const ContactsPage = <TFieldValues extends FieldValues>({ field }: FieldData<TFieldValues>) => {
  const [openPhone, setOpenPhone] = React.useState(false)
  const { countries, isLoading, error } = useFetchCountries();
  const commandRef = useRef<HTMLDivElement>(null);
  
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="flex-col-1 gap-3">
      <div className="flex justify-start">
        <FormLabel htmlFor="sex" className="pl-1 text-text">Contact</FormLabel>
      </div>
      <div className="flex justify-start mt-3">

        {/* Toggle Group para el tipo de teléfono */}
        <ToggleGroup
          type="single"
          value={field.value.type}
          onValueChange={(value) => field.onChange({ ...field.value, type: value })}
        >
          <ToggleGroupItem value="cellphone" aria-label="Cellphone">
            <Smartphone className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="landphone" aria-label="Landphone">
            <Phone className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>

        {/* Input con el Combobox de país */}
        <div className="flex w-fit px-3">
          <div className="w-fit">
            <Popover open={openPhone} onOpenChange={setOpenPhone}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  className="w-max justify-between rounded-r-none"
                >
                  {field.value.country ? (
                    <>
                      {countries.find((country) => country.value === field.value.country)?.flagUrl && (
                        <img
                          src={countries.find((country) => country.value === field.value.country)?.flagUrl}
                          alt={`Bandera de ${countries.find((c) => c.value === field.value.country)?.label}`}
                          className="inline-block h-4 w-6 mr-2"
                        />
                      )}{" "}
                      {countries.find((country) => country.value === field.value.country)?.prefix}
                    </>
                  ) : (
                    "Choose your country"
                  )}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-64 p-0">
                <Command>
                  <CommandInput placeholder="Find country..." />
                  <CommandEmpty>Country not found</CommandEmpty>
                  <CommandGroup
                    ref={commandRef}
                    // Agrega un manejador de eventos para evitar que el scroll se propague
                    onWheel={(e) => {
                      e.stopPropagation();
                    }}
                    className="max-h-64 overflow-y-auto">
                    {countries.map((country) => (
                      <CommandItem
                        className="p-1"
                        key={country.value}
                        value={country.value}
                        onSelect={(currentValue) => {
                          const selectedCountry = countries.find((country) => country.value === currentValue);
                          field.onChange({
                            ...field.value,
                            country: currentValue,
                            prefix: selectedCountry ? selectedCountry.prefix : '',
                          });
                          setOpenPhone(false);
                        }}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            field.value.country === country.value
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                        <img
                          src={country.flagUrl}
                          alt={`Bandera de ${country.label}`}
                          className="inline-block h-4 w-6 mr-2" />
                        {country.label} ({country.prefix})
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
          <Input
            className="flex-grow rounded-l-none"
            id="number"
            type="tel"
            placeholder="Phone number"
            value={field.value.number}
            onChange={(e) => field.onChange({ ...field.value, number: e.target.value })}
          />
        </div>
      </div>
    </div>
  )
}
