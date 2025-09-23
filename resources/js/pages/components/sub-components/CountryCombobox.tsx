import { ControllerRenderProps, FieldValues } from "react-hook-form";
import { useFetchOnlyCountries } from "@/hooks/country-hook";
import { GeneralComboboxPage } from "@/pages/components/GeneralCombobox";

interface FieldData<TFieldValues extends FieldValues> extends ControllerRenderProps<TFieldValues> { }

interface CountryComboboxPageProps<TFieldValues extends FieldValues> {
  field: FieldData<TFieldValues>;
}

export const CountryComboboxPage = <TFieldValues extends FieldValues>({
  field,
}: CountryComboboxPageProps<TFieldValues>) => {
  const { onlyCountries, isLoading, error } = useFetchOnlyCountries();
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <GeneralComboboxPage field={field} data={onlyCountries} />
  );
}