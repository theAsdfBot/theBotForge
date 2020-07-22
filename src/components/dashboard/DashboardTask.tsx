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
    <div className='h-12 border-gray-700 border-2 rounded-lg mb-2 pl-6 dashboard-item'>
      <span className="py-3 overflow-hidden">{taskName}</span>
      <span className="py-3">{website}</span>
      <span className="py-3 truncate">{keywords.map((word, idx) => {
        if(idx !== keywords.length - 1) return word + ', '
        return word 
      }, '')}</span>
      <span className="py-3 text-center">{size}</span>
      <span className="py-3 overflow-hidden">{profileDisplayName}</span>
      <span className="py-3 overflow-hidden">{proxy}</span>
      <span className="py-3">{status}</span>
    </div>
  )
}

export default DashboardTask