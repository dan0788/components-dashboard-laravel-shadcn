"use client"

import { Input } from '@/components/ui/input';
import { FormLabel, FormMessage } from '@/components/ui/form';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { ControllerRenderProps, FieldValues, FieldPath } from 'react-hook-form';

export interface FieldData<TFieldValues extends FieldValues> {
    reference: string;
    field: ControllerRenderProps<TFieldValues, FieldPath<TFieldValues>>;
    value: string;
}

export const InputNamePage = <TFieldValues extends FieldValues>({
    reference,
    field,
    value,
}: FieldData<TFieldValues>) => {
    return (
        <div>
            <FormLabel htmlFor={reference} className="pl-1 text-text">{value}</FormLabel>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Input className="w-64 mt-2" type="text" id={reference} placeholder={value} {...field} />
                </TooltipTrigger>
                <TooltipContent>
                    <p>No special characters allowed</p>
                </TooltipContent>
            </Tooltip>
            {/* También puedes agregar FormMessage aquí si quieres que 
        el mensaje de error esté dentro de este componente.
      */}
            <FormMessage />
        </div>
    );
};