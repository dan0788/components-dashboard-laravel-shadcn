import React, { ReactNode } from 'react'
import { Layout } from '@/pages/layout'
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { LinearChart } from '@/pages/components/charts/linearChart';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
const title = 'Statistics'

export default function Statistics() {
  const charts = [
    <LinearChart />
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
