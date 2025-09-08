import { useState, useEffect } from 'react';

interface CountryData {
  name: {
    common: string;
  };
  idd: {
    root: string;
    suffixes?: string[];
  };
  flags: {
    svg: string;
    png: string;
  };
}

interface FormCountryOption {
  value: string;
  label: string;
  prefix: string;
  flagUrl: string;
}

interface UseFetchCountriesResult {
  countries: FormCountryOption[];
  isLoading: boolean;
  error: string | null;
}

const useFetchCountries = (): UseFetchCountriesResult => {
  const [countries, setCountries] = useState<FormCountryOption[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all?fields=name,idd,flags");
        if (!response.ok) {
          throw new Error("Error al obtener los datos de países.");
        }
        const data: CountryData[] = await response.json();

        const formattedCountries: FormCountryOption[] = data.map(country => {
          const prefix = country.idd.root + (country.idd.suffixes ? country.idd.suffixes[0] : '');
          return {
            value: country.name.common,
            label: country.name.common,
            prefix: prefix,
            flagUrl: country.flags.png || "🏳️",
          };
        }).sort((a, b) => a.label.localeCompare(b.label));

        setCountries(formattedCountries);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCountries();
  }, []);

  return { countries, isLoading, error };
};

export default useFetchCountries;

/* const countries = [
  { value: "us", label: "Estados Unidos", prefix: "+1", flag: "🇺🇸" },
  { value: "mx", label: "México", prefix: "+52", flag: "🇲🇽" },
  { value: "ec", label: "Ecuador", prefix: "+593", flag: "🇪🇨" },
]; */