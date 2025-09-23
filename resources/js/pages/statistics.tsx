import React, { ReactNode } from 'react'
import {Layout} from '@/pages/clients/layout'

const title = 'Statistics'

export function Statistics () {
  return (
    <div>statistics</div>
  )
}

Statistics.layout = (page: ReactNode) => <Layout children={page} documentName={title} />
