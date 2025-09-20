import AuthenticatedLayout from '@/layouts/authenticated-layout'
import { Head } from '@inertiajs/react'
import React, { ReactNode, useState } from 'react'
import { usePageData } from "@/hooks/get-page"
import { Tabs, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import { MultilineTabsList } from "@/pages/components/multiline-tabs-list";
import { componentKeys, formatName } from '@/config/routes';
import { AccordionPage } from '@/pages/components/Accordion'
import { AlertPage } from '@/pages/components/Alert'
import { AlertDialogPage } from '@/pages/components/AlertDialog'
import { AspectRatioPage } from '@/pages/components/AspectRatio'
import { AvatarPage } from '@/pages/components/Avatar'
import { BadgePage } from '@/pages/components/Badge'
import { BreadcrumbPagePage } from '@/pages/components/Breadcrumb'
import { ButtonPage } from '@/pages/components/Button'
import { CalendarPage } from '@/pages/components/Calendar'
import { CardPage } from '@/pages/components/Card'
import { CarouselPage } from '@/pages/components/Carousel'
import { ChartPage } from '@/pages/components/Chart'
import { CheckboxPage } from '@/pages/components/Checkbox'
import { CollapsiblePage } from '@/pages/components/Collapsible'
import { ComboboxPage } from '@/pages/components/Combobox'
import { CommandPage } from '@/pages/components/Command'
import { ContextMenuPage } from '@/pages/components/ContextMenu'
import { DataTablePage } from '@/pages/components/DataTable'
import { DatePickerPage } from '@/pages/components/DatePicker'
import { DialogPage } from '@/pages/components/Dialog'
import { DrawerPage } from '@/pages/components/Drawer'
import { DropdownMenuPage } from '@/pages/components/DropdownMenu'
import { HoverCardPage } from '@/pages/components/HoverCard'
import { InputPage } from '@/pages/components/Input'
import { InputOTPPage } from '@/pages/components/InputOTP'
import { LabelPage } from '@/pages/components/Label'
import { MenubarPage } from '@/pages/components/Menubar'
import { NavigationMenuPage } from '@/pages/components/NavigationMenu'
import { PaginationPage } from '@/pages/components/Pagination'
import { PopoverPage } from '@/pages/components/Popover'
import { ProgressPage } from '@/pages/components/Progress'
import { RadioGroupPage } from '@/pages/components/RadioGroup'
import { ResizablePage } from '@/pages/components/Resizable'
import { ScrollAreaPage } from '@/pages/components/ScrollArea'
import { SelectPage } from '@/pages/components/Select'
import { SeparatorPage } from '@/pages/components/Separator'
import { SheetPage } from '@/pages/components/Sheet'
import { SkeletonPage } from '@/pages/components/Skeleton'
import { SliderPage } from '@/pages/components/Slider'
import { SonnerPage } from '@/pages/components/Sonner'
import { SwitchPage } from '@/pages/components/Switch'
import { TablePage } from '@/pages/components/Table'
import { TabsPage } from '@/pages/components/Tabs'
import { TextAreaPage } from '@/pages/components/TextArea'
import { ToggleGroupPage } from '@/pages/components/ToggleGroup'
import { TooglePage } from '@/pages/components/Toogle'
import { TooltipPage } from '@/pages/components/Tooltip'
import { TypographyPage } from '@/pages/components/Typography'

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

    const [activeTabValue, setActiveTabValue] = useState(initialTabValue);

    function onChangeValues(value: string) {
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
                    <AccordionPage />
                </TabsContent>
                <TabsContent value='Alert'>
                    <AlertPage />
                </TabsContent>
                <TabsContent value='AlertDialog'>
                    <AlertDialogPage />
                </TabsContent>
                <TabsContent value='AspectRatio'>
                    <AspectRatioPage />
                </TabsContent>
                <TabsContent value='Avatar'>
                    <AvatarPage />
                </TabsContent>
                <TabsContent value='Badge'>
                    <BadgePage />
                </TabsContent>
                <TabsContent value='BreadcrumbPage'>
                    <BreadcrumbPagePage />
                </TabsContent>
                <TabsContent value='Button'>
                    <ButtonPage />
                </TabsContent>
                <TabsContent value='Calendar'>
                    <CalendarPage />
                </TabsContent>
                <TabsContent value='Card'>
                    <CardPage />
                </TabsContent>
                <TabsContent value='Carousel'>
                    <CarouselPage />
                </TabsContent>
                <TabsContent value='Chart'>
                    <ChartPage />
                </TabsContent>
                <TabsContent value='Checkbox'>
                    <CheckboxPage />
                </TabsContent>
                <TabsContent value='Collapsible'>
                    <CollapsiblePage />
                </TabsContent>
                <TabsContent value='Combobox'>
                    <ComboboxPage />
                </TabsContent>
                <TabsContent value='Command'>
                    <CommandPage />
                </TabsContent>
                <TabsContent value='ContextMenu'>
                    <ContextMenuPage />
                </TabsContent>
                <TabsContent value='DataTable'>
                    <DataTablePage />
                </TabsContent>
                <TabsContent value='DatePicker'>
                    <DatePickerPage />
                </TabsContent>
                <TabsContent value='Dialog'>
                    <DialogPage />
                </TabsContent>
                <TabsContent value='Drawer'>
                    <DrawerPage />
                </TabsContent>
                <TabsContent value='DropdownMenu'>
                    <DropdownMenuPage />
                </TabsContent>
                <TabsContent value='HoverCard'>
                    <HoverCardPage />
                </TabsContent>
                <TabsContent value='Input'>
                    <InputPage />
                </TabsContent>
                <TabsContent value='InputOTP'>
                    <InputOTPPage />
                </TabsContent>
                <TabsContent value='Label'>
                    <LabelPage />
                </TabsContent>
                <TabsContent value='Menubar'>
                    <MenubarPage />
                </TabsContent>
                <TabsContent value='NavigationMenu'>
                    <NavigationMenuPage />
                </TabsContent>
                <TabsContent value='Pagination'>
                    <PaginationPage />
                </TabsContent>
                <TabsContent value='Popover'>
                    <PopoverPage />
                </TabsContent>
                <TabsContent value='Progress'>
                    <ProgressPage />
                </TabsContent>
                <TabsContent value='RadioGroup'>
                    <RadioGroupPage />
                </TabsContent>
                <TabsContent value='Resizable'>
                    <ResizablePage />
                </TabsContent>
                <TabsContent value='ScrollArea'>
                    <ScrollAreaPage />
                </TabsContent>
                <TabsContent value='Select'>
                    <SelectPage />
                </TabsContent>
                <TabsContent value='Separator'>
                    <SeparatorPage />
                </TabsContent>
                <TabsContent value='Sheet'>
                    <SheetPage />
                </TabsContent>
                <TabsContent value='Skeleton'>
                    <SkeletonPage />
                </TabsContent>
                <TabsContent value='Slider'>
                    <SliderPage />
                </TabsContent>
                <TabsContent value='Sonner'>
                    <SonnerPage />
                </TabsContent>
                <TabsContent value='Switch'>
                    <SwitchPage />
                </TabsContent>
                <TabsContent value='Table'>
                    <TablePage />
                </TabsContent>
                <TabsContent value='Tabs'>
                    <TabsPage />
                </TabsContent>
                <TabsContent value='TextArea'>
                    <TextAreaPage />
                </TabsContent>
                <TabsContent value='ToggleGroup'>
                    <ToggleGroupPage />
                </TabsContent>
                <TabsContent value='Toogle'>
                    <TooglePage />
                </TabsContent>
                <TabsContent value='Tooltip'>
                    <TooltipPage />
                </TabsContent>
                <TabsContent value='Typography'>
                    <TypographyPage />
                </TabsContent>

            </Tabs>
            {/* <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/gKVwYoNYp2g?si=rQCYtiQAE8b0u2Fc"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe> */}
        </AuthenticatedLayout>
    )
}