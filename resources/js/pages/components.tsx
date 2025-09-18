import AuthenticatedLayout from '@/layouts/authenticated-layout'
import { Head } from '@inertiajs/react'
import React, { ReactNode, useState } from 'react'
import { usePageData } from "@/hooks/get-page"
import { Tabs, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import { MultilineTabsList } from "@/pages/components/multiline-tabs-list";
import { componentKeys, formatName } from '@/config/routes';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {AccordionPage} from '@/pages/components/Accordion'

interface ComponentProps {
    children: ReactNode;
    title?: string;
}

export default function ComponentsPage({ children, title }: ComponentProps) {
    const pageData = usePageData();
    const componentValues = componentKeys.map(key => {
        const formattedName = formatName(key);
        return formattedName.replace(/\s/g, "");
    });

    const initialTabValue = title 
        ? title.replace(/\s/g, "") 
        : pageData.title.replace(/\s/g, "");

    const [activeTabValue , setActiveTabValue] = useState(initialTabValue);
    
    function onChangeValues(value: string){
        setActiveTabValue(value);
    }
    return (
        <AuthenticatedLayout breadcrumbs={pageData.breadcrumbs}>
            <Head title={pageData.title} />
            <Tabs defaultValue={activeTabValue}
            onValueChange={(value) => onChangeValues(value)}>
                <MultilineTabsList>
                    {componentValues.map((key, index) => (
                        <TabsTrigger key={index} value={key}>
                            {key}
                        </TabsTrigger>
                    ))}
                </MultilineTabsList>
                
                <TabsContent value='Accordion'>
                                <AccordionPage/>
                </TabsContent>
                <TabsContent value='Accordion'>
                                <AccordionPage/>
                </TabsContent>
                
                <TabsContent value='Accordion'>
                                <AccordionPage/>
                </TabsContent>
                
                <TabsContent value='Accordion'>
                                <AccordionPage/>
                </TabsContent>
                
                <TabsContent value='Accordion'>
                                <AccordionPage/>
                </TabsContent>
                
                <TabsContent value='Accordion'>
                                <AccordionPage/>
                </TabsContent>
                
                <TabsContent value='Accordion'>
                                <AccordionPage/>
                </TabsContent>
                
                <TabsContent value='Accordion'>
                                <AccordionPage/>
                </TabsContent>
                
                <TabsContent value='Accordion'>
                                <AccordionPage/>
                </TabsContent>
                
                <TabsContent value='Accordion'>
                                <AccordionPage/>
                </TabsContent>
                
                <TabsContent value='Accordion'>
                                <AccordionPage/>
                </TabsContent>
                
                <TabsContent value='Accordion'>
                                <AccordionPage/>
                </TabsContent>
                
                <TabsContent value='Accordion'>
                                <AccordionPage/>
                </TabsContent>
                
                <TabsContent value='Accordion'>
                                <AccordionPage/>
                </TabsContent>
                
                <TabsContent value='Accordion'>
                                <AccordionPage/>
                </TabsContent>
                
                <TabsContent value='Accordion'>
                                <AccordionPage/>
                </TabsContent>
                
                <TabsContent value='Accordion'>
                                <AccordionPage/>
                </TabsContent>
                
                <TabsContent value='Accordion'>
                                <AccordionPage/>
                </TabsContent>
                
                <TabsContent value='Accordion'>
                                <AccordionPage/>
                </TabsContent>
                
                <TabsContent value='Accordion'>
                                <AccordionPage/>
                </TabsContent>
                
                <TabsContent value='Accordion'>
                                <AccordionPage/>
                </TabsContent>
                
                <TabsContent value='Accordion'>
                                <AccordionPage/>
                </TabsContent>
                
                <TabsContent value='Accordion'>
                                <AccordionPage/>
                </TabsContent>
                
                <TabsContent value='Accordion'>
                                <AccordionPage/>
                </TabsContent>
                
                <TabsContent value='Accordion'>
                                <AccordionPage/>
                </TabsContent>
                
                <TabsContent value='Accordion'>
                                <AccordionPage/>
                </TabsContent>
                
                <TabsContent value='Accordion'>
                                <AccordionPage/>
                </TabsContent>
                
                <TabsContent value='Accordion'>
                                <AccordionPage/>
                </TabsContent>
                
                <TabsContent value='Accordion'>
                                <AccordionPage/>
                </TabsContent>
                
                <TabsContent value='Accordion'>
                                <AccordionPage/>
                </TabsContent>
                
                <TabsContent value='Accordion'>
                                <AccordionPage/>
                </TabsContent>
                
                <TabsContent value='Accordion'>
                                <AccordionPage/>
                </TabsContent>
                
                <TabsContent value='Accordion'>
                                <AccordionPage/>
                </TabsContent>
                
                <TabsContent value='Accordion'>
                                <AccordionPage/>
                </TabsContent>
                
                <TabsContent value='Accordion'>
                                <AccordionPage/>
                </TabsContent>
                
                <TabsContent value='Accordion'>
                                <AccordionPage/>
                </TabsContent>
                
                <TabsContent value='Accordion'>
                                <AccordionPage/>
                </TabsContent>
                
                <TabsContent value='Accordion'>
                                <AccordionPage/>
                </TabsContent>
                
                <TabsContent value='Accordion'>
                                <AccordionPage/>
                </TabsContent>
                
                <TabsContent value='Accordion'>
                                <AccordionPage/>
                </TabsContent>
                
                <TabsContent value='Accordion'>
                                <AccordionPage/>
                </TabsContent>
                
                <TabsContent value='Accordion'>
                                <AccordionPage/>
                </TabsContent>
                
                <TabsContent value='Accordion'>
                                <AccordionPage/>
                </TabsContent>
                
                <TabsContent value='Accordion'>
                                <AccordionPage/>
                </TabsContent>
                
                <TabsContent value='Accordion'>
                                <AccordionPage/>
                </TabsContent>
                
                <TabsContent value='Accordion'>
                                <AccordionPage/>
                </TabsContent>
                
                <TabsContent value='Accordion'>
                                <AccordionPage/>
                </TabsContent>
                
                <TabsContent value='Accordion'>
                                <AccordionPage/>
                </TabsContent>
                
            </Tabs>
            <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/gKVwYoNYp2g?si=rQCYtiQAE8b0u2Fc" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
        </AuthenticatedLayout>
    )
}