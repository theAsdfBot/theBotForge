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
    <tr className='h-10 border-gray-700 border-2'>
      <td>{taskName}</td>
      <td>{website}</td>
      <td>{keywords.reduce((fullString, wordOrLink) => {
        return `${fullString} ${wordOrLink} `
      }, '')}</td>
      <td>{size}</td>
      <td>{profileDisplayName}</td>
      <td>{proxy}</td>
      <td>{status}</td>
    </tr>
  )
}

export default DashboardTask