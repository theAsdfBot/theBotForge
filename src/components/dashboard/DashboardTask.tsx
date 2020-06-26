import React, { FunctionComponent } from 'react'

type DashboardTaskProps = {
  taskName: string,
  website: string,
  keywords: string[],
  size: string | number,
  profileDisplayName: string,
  proxy?: string,
  status: string // making this into an enum later 
}


const DashboardTask: FunctionComponent<DashboardTaskProps> = ({ taskName, website, keywords, size, profileDisplayName, proxy, status }) => {
  return (
    <div className='h-10 border-gray-700 border-2 rounded-lg'>
      <span>{taskName}</span>
      <span>{website}</span>
      <span>{keywords.reduce((fullString, wordOrLink) => {
        return `${fullString} ${wordOrLink} `
      }, '')}</span>
      <span>{size}</span>
      <span>{profileDisplayName}</span>
      <span>{proxy}</span>
      <span>{status}</span>
    </div>
  )
}

export default DashboardTask