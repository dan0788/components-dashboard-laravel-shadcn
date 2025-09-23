import { ControllerRenderProps, FieldValues } from "react-hook-form";
import { useFetchOnlyStates } from "@/hooks/country-hook";
import { GeneralComboboxPage } from "@/pages/components/GeneralCombobox";
import { on } from "events";
import { useEffect } from "react";

interface FieldData<TFieldValues extends FieldValues> extends ControllerRenderProps<TFieldValues> { }

interface StateComboboxPageProps<TFieldValues extends FieldValues> {
  field: FieldData<TFieldValues>;
  countryName: string;
}

export const StateComboboxPage = <TFieldValues extends FieldValues>({
  field,
  countryName,
}: StateComboboxPageProps<TFieldValues>) => {
  const { onlyStates, isLoading, error } = useFetchOnlyStates(countryName);
  useEffect(() => {
    
  }, [onlyStates]);

  console.log(countryName);
  console.log(onlyStates);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <GeneralComboboxPage field={field} data={onlyStates} />
  );
}