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
import { ControllerRenderProps, FieldValues } from "react-hook-form";

interface ComboBoxDataItem {
  value: string;
}

interface CountryComboboxPageProps<TFieldValues extends FieldValues> {
  field: ControllerRenderProps<TFieldValues>;
  data: ComboBoxDataItem[];
}

export const GeneralComboboxPage = <TFieldValues extends FieldValues>({
  field,
  data,
}: CountryComboboxPageProps<TFieldValues>) => {
  const [open, setOpen] = React.useState(false)

  const isInitialMount = React.useRef(true);

  React.useEffect(() => {
    // Si es la primera vez que se carga el componente,
    // actualizamos el ref a `false` y no hacemos nada más.
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    // Esta parte del código solo se ejecutará después de la carga inicial,
    // cuando la prop 'data' cambie.
    if (data && data.length > 0) {
      const firstItemValue = data[0].value;
      field.onChange(firstItemValue);
    }
  }, [data, field.onChange]);

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
            {field.value
              ? data.find((item) => item.value === field.value)?.value
              : "Select a country..."}
            <ChevronsUpDown className="opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0">
          <Command>
            <CommandInput placeholder="Search country..." className="h-9 w-128" />
            <CommandList>
              <CommandEmpty>No data found.</CommandEmpty>
              <CommandGroup>
                {data.map((item) => (
                  <CommandItem
                    key={item.value}
                    value={item.value}
                    onSelect={(currentValue) => {
                      field.onChange(currentValue === field.value ? "" : currentValue)
                      setOpen(false)
                    }}
                  >
                    {item.value}
                    <Check
                      className={cn(
                        "ml-auto",
                        field.value === item.value ? "opacity-100" : "opacity-0"
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