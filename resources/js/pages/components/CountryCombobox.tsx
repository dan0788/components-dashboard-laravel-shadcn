import { Head } from "@inertiajs/react";
import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { FieldValues } from "react-hook-form";
import { FieldData } from "@/types/layout";
import { useFetchOnlyCountries } from "@/hooks/country-hook";

export const CountryComboboxPage = <TFieldValues extends FieldValues>({ field }: FieldData<TFieldValues>) => {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")
    const { onlyCountries, isLoading, error } = useFetchOnlyCountries();
    if (isLoading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Error: {error}</p>;
    }
    return (
        <>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="w-64 justify-between"
                    >
                        {value
                            ? onlyCountries.find((country) => country.value === value)?.value
                            : field.value}
                        <ChevronsUpDown className="opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                    <Command>
                        <CommandInput placeholder="Search country..." className="h-9 w-128" />
                        <CommandList>
                            <CommandEmpty>No framework found.</CommandEmpty>
                            <CommandGroup>
                                {onlyCountries.map((country) => (
                                    <CommandItem
                                        key={country.value}
                                        value={country.value}
                                        onSelect={(currentValue) => {
                                            setValue(currentValue === value ? "" : currentValue)
                                            setOpen(false)
                                        }}
                                    >
                                        {country.value}
                                        <Check
                                            className={cn(
                                                "ml-auto",
                                                value === country.value ? "opacity-100" : "opacity-0"
                                            )}
                                        />
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>

        </>
    );
}