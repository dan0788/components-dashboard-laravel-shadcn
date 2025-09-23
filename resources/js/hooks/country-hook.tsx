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

interface OnlyCountryData{
  countryName: {
    eng: string;
  }
}

interface FormOnlyCountryOption {
  value: string;
}

interface UseFetchOnlyCountriesResult {
  onlyCountries: FormOnlyCountryOption[];
  isLoading: boolean;
  error: string | null;
}

interface ProvinceData {
  id: number;
  name: string;
  capital: string;
}

interface FetchedCountryData {
  id: string;
  name: {
    eng: string;
    spa: string;
  };
  prefix: string;
  languages: string[];
  numberProvinces: number;
  capital: string;
  provinces: ProvinceData[];
}

interface FormOnlyStateOptionFinal {
  value: string;
}

interface UseFetchOnlyStatesResult {
  onlyStates: FormOnlyStateOptionFinal[];
  isLoading: boolean;
  error: string | null;
}

interface StatesProps extends UseFetchOnlyStatesResult{
  state: string
}

export const useFetchCountries = (): UseFetchCountriesResult => {
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

export const useFetchOnlyCountries = (): UseFetchOnlyCountriesResult => {
  const [onlyCountries, setOnlyCountries] = useState<FormOnlyCountryOption[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://raw.githubusercontent.com/dan0788/repocountries/main/countries.json");
        if (!response.ok) {
          throw new Error("Error al obtener los datos de países.");
        }
        const data: OnlyCountryData[] = await response.json();

        const formattedCountries: FormOnlyCountryOption[] = data.map(country => {
          return {
            value: country.countryName.eng,
          };
        }).sort((a, b) => a.value.localeCompare(b.value));

        setOnlyCountries(formattedCountries);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCountries();
  }, []);

  return { onlyCountries, isLoading, error };
};

export const useFetchOnlyStates = (countryName:string): UseFetchOnlyStatesResult => {
  const [onlyStates, setOnlyStates] = useState<FormOnlyStateOptionFinal[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await fetch(`https://raw.githubusercontent.com/dan0788/repocountries/main/${countryName}.json`);
        if (!response.ok) {
          throw new Error("Error al obtener los datos de estados.");
        }
        
        const data: FetchedCountryData = await response.json();

        const formattedStates: FormOnlyStateOptionFinal[] = data.provinces.map(province => {
          return {
            value: province.name,
          };
        }).sort((a, b) => a.value.localeCompare(b.value));

        setOnlyStates(formattedStates);
        
      } catch (err: any) {
        setError("Error: " + err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStates();
  }, [countryName]);

  return { onlyStates, isLoading, error };
};
