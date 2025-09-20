import React, { ReactNode } from 'react'
import { Layout } from './layout'
import { Head, usePage } from '@inertiajs/react'

interface ClientProps {
    id: number
    firstname: string
    lastname: string
    email: string
}

interface CompanyProps {
    id: number
    company_type_id: number
    company_name: string
    direction: string
    ramp: string
    braille_language: string
    elevator: string
    first_aid_kit: string
    sign_language: string
    private_transportation: string
    information_places: string
}

const title = 'Edit Client';

export default function editClient() {

    const { client, company } = usePage<{ client: ClientProps[], company: CompanyProps[] }>().props;

    return (
        <>
            <Head title={title} />
            <div>editClient</div>
        </>
    )
}

editClient.layout = (page: ReactNode) => <Layout children={page} documentName={title} />