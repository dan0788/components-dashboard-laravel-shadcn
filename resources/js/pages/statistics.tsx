import React, { ReactNode } from 'react'
import { Layout } from '@/pages/layout'

const title = 'Statistics'

export default function Statistics() {
    return (
        <div>statistics</div>
    )
}

Statistics.layout = (page: ReactNode) => <Layout children={page} documentName={title} />
