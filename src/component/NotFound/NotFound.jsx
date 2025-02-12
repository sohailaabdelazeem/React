import React from 'react'
import notFoundImage from '../../assets/404.avif'
export default function NotFound() {
  return (
    <img src={notFoundImage} alt="not found image" className='w-100' />
   )
}
