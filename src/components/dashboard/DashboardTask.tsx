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
    <div className='h-12 border-gray-700 border-2 rounded-lg flex justify-start mb-2'>
      <span className="ml-20 mr-10 py-2">{taskName}</span>
      <span className="mx-10 py-2">{website}</span>
      <span className="mx-10 py-2">{keywords.reduce((fullString, wordOrLink) => {
        return `${fullString} ${wordOrLink} `
      }, '')}</span>
      <span className="mx-10 py-2">{size}</span>
      <span className="mx-10 py-2">{profileDisplayName}</span>
      <span className="mx-10 py-2">{proxy}</span>
      <span className="mx-10 py-2">{status}</span>
    </div>
  )
}

export default DashboardTask