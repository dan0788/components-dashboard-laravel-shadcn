import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import React, { useMemo } from 'react'
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Pie,
  PieChart,
  RadialBar,
  RadialBarChart,
  Bar,
  BarChart
} from "recharts"

interface TypeAccesibilityChartProps {
  interactiveAreaChartData?: {
    accessibility: string; // La clave que siempre existe
    [companyType: string]: number | string; // Las series que se convierten en los valores
  }[];
  interactiveAreaChartConfig: ChartConfig;
}

export function TypeAccesibilityAreaChart({ interactiveAreaChartData, interactiveAreaChartConfig }: TypeAccesibilityChartProps) {
  /* console.log(interactiveAreaChartData);
  console.log(interactiveAreaChartConfig); */

  const chartConfig = useMemo(() => {
    // Si la configuración ya es un objeto, la usa directamente (Opción 1 de Laravel).
    if (!Array.isArray(interactiveAreaChartConfig)) {
      return interactiveAreaChartConfig;
    }

    // Si es un array de objetos (Opción 2 de Laravel), lo aplanamos.
    return interactiveAreaChartConfig.reduce((acc, current) => {
      // current es { "Entertainment": { ... } }
      return { ...acc, ...current };
    }, {});
  }, [interactiveAreaChartConfig]);

  const seriesKeys = useMemo(() => {
    // Usamos la variable chartConfig transformada (o la original si ya era un objeto)
    return Object.keys(chartConfig).filter(key => key !== 'accessibility');
  }, [chartConfig]);
  // Función para formatear el texto del eje X (pasa de 'braille_language' a 'Braille Language')
  const formatAccessibilityLabel = (value: string): string => {
    if (typeof value !== 'string') return '';
    const formatted = value.charAt(0).toUpperCase() + value.slice(1).replace(/_/g, ' ');
    const formattedCase = formatted.split(' ').map((word: string) =>
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ').slice(0, 7);
    return formattedCase
  };

  const formatAccessibilityTooltip = (value: string): string => {
    if (typeof value !== 'string') return '';
    const formatted = value.charAt(0).toUpperCase() + value.slice(1).replace(/_/g, ' ');
    const formattedCase = formatted.split(' ').map((word: string) =>
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
    return formattedCase
  };

  return (
    <Card className="pt-0 w-full">
      <CardHeader className="flex flex-col items-start gap-2 space-y-0 sm:flex-row sm:items-center sm:justify-between">
        <div className="grid flex-1 gap-1">
          <CardTitle>Area Chart - Interactive</CardTitle>
          <CardDescription>
            Showing total companies of each type that have an accessibility
          </CardDescription>
        </div>

      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[300px] w-full"
        >
          <AreaChart
            data={interactiveAreaChartData}
            margin={{ left: 12, right: 12, bottom: 0, top: 10 }}
          >
            <CartesianGrid vertical={false} strokeDasharray="4 4" className="stroke-gray-200 dark:stroke-gray-700" />

            <XAxis
              dataKey="accessibility"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={formatAccessibilityLabel}
              minTickGap={10}
            />

            <YAxis
              stroke="hsl(var(--foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => value}
            />

            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  indicator="dot"
                  labelFormatter={formatAccessibilityTooltip}
                />
              }
            />

            <defs>
              {/* Mapea las claves para crear un degradado (linearGradient) para cada serie */}
              {seriesKeys.map((key) => (
                <linearGradient key={key} id={`fill-${key}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={`var(--color-${key})`} stopOpacity={0.8} />
                  <stop offset="95%" stopColor={`var(--color-${key})`} stopOpacity={0.1} />
                </linearGradient>
              ))}
            </defs>

            {/* Mapea las claves para crear los componentes de Área */}
            {seriesKeys.map((key) => (
              <Area
                key={key}
                dataKey={key} // Clave de los datos (e.g., 'Food')
                type="natural"
                // Referencia al degradado: reemplazamos espacios por guiones para IDs válidos
                fill={`url(#fill-${key})`}
                stroke={`var(--color-${key})`}
                stackId="a" // **Clave para el apilamiento**
                connectNulls={false}
                activeDot={{ r: 6 }}
              />
            ))}

            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}