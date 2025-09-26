import React, { ReactNode } from 'react'
import { Layout } from '@/pages/layout'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { LinearChart } from '@/pages/components/charts/typeLinearChart';
import { ChartConfig } from '@/components/ui/chart';

const title = 'Statistics'

interface StatisticsProps {
  linearChartProps: {
        data?: { type: string; desktop: number }[];
    };
}

export default function Statistics({linearChartProps}: StatisticsProps) {
  
  const charts = [
    <LinearChart linearChartData={linearChartProps?.data} />,
  ];
  return (

    <div className="flex flex-col items-center justify-center px-8 w-[600px]">
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

  )
}

Statistics.layout = (page: ReactNode) => <Layout children={page} documentName={title} className='flex justify-center' />
