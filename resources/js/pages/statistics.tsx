import React, { ReactNode } from 'react'
import { Layout } from '@/pages/layout'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { LinearChart } from '@/pages/components/charts/typeLinearChart';
import { TypeAccesibilityAreaChart } from '@/pages/components/charts/typeAccesibilityAreaChart';
import { ChartConfig } from '@/components/ui/chart';

const title = 'Statistics'

interface StatisticsProps {
  linearChartProps: {
        data?: { type: string; desktop: number }[];
        config: ChartConfig;
    };
}

export default function Statistics({linearChartProps}: StatisticsProps) {
  
  const charts = [
    <LinearChart linearChartData={linearChartProps?.data} linearChartConfig={linearChartProps.config} />,
    <TypeAccesibilityAreaChart />
  ];
  return (

    <div style={{ width: '800px' }} className="w-full h-full flex flex-col items-center justify-center space-y-8">
      <div className="flex flex-col items-center justify-center px-8 w-full">
      <Carousel className="w-full">
        <CarouselContent className="">
          {charts.map((chart, index) => (
            <CarouselItem key={index}>
              {chart}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
    </div>

  )
}

Statistics.layout = (page: ReactNode) => <Layout children={page} documentName={title} className='flex justify-center' />
