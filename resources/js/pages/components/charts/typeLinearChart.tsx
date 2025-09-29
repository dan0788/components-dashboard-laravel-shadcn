"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

interface LinearChartProps {
    linearChartData?: { type: string; desktop: number }[]
    linearChartConfig: ChartConfig
}

export function LinearChart({ linearChartData, linearChartConfig }: LinearChartProps) {
    
    return (
        <Card className="p-0 m-0 w-full h-full">
            <CardHeader>
                <CardTitle>Services Types</CardTitle>
                <CardDescription>
                    Count of companies of each type
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={linearChartConfig} className="w-full h-full">
                    <AreaChart
                        accessibilityLayer
                        data={linearChartData}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="type"
                            tickLine={true}
                            axisLine={true}
                            tickMargin={8}
                            tickFormatter={(value) => value}
                            angle={90}
                            textAnchor="start"
                            height={70}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="dot" hideLabel />}
                        />
                        <Area
                            dataKey="desktop"
                            type="linear"
                            fill="var(--color-desktop)"
                            fillOpacity={0.4}
                            stroke="var(--color-desktop)"
                        />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
