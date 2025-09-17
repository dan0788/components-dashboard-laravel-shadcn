import AuthenticatedLayout from '@/layouts/authenticated-layout'
import { Head } from '@inertiajs/react'
import React from 'react'
import { usePageData } from "@/hooks/get-page"
import { Tabs, TabsTrigger } from '@/components/ui/tabs';
import { MultilineTabsList } from "@/pages/components/multiline-tabs-list"; // Asegúrate de ajustar la ruta
import { componentKeys, formatName } from '@/config/routes';

export default function Components() {
    const pageData = usePageData();
    const componentValues= componentKeys.map(key=>{
        const formattedName = formatName(key);
        return formattedName.replace(/\s/g, "")
    })

    return (
        <AuthenticatedLayout breadcrumbs={pageData.breadcrumbs}>
            <Head title={pageData.title} />
            <Tabs defaultValue='Components'>
                <MultilineTabsList>
                    {componentValues.map((key, index) => (
                        <TabsTrigger key={index} value={key}>
                            {key}
                        </TabsTrigger>
                    ))}
                </MultilineTabsList>
            </Tabs>
        </AuthenticatedLayout>
    )
}