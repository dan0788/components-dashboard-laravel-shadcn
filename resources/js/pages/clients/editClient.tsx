import React, { ReactNode, useState } from 'react'
import { Layout } from './layout'
import { Head } from '@inertiajs/react'

export default function editClient() {
    return (
        <>
        <Head title='Edit Client'/>
        <div>editClient</div>
        </>
    )
}

editClient.layout = (page: ReactNode) => <Layout children={page} />