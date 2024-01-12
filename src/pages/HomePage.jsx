import React from 'react'
import Format1 from '../components/contents/ui-state/Format1';
import TrafficSource from '../components/contents/ui-charts/Traffic-source';
import ProgressIncome from '../components/contents/ui-charts/Progress-Income';

function HomePage() {
  return (
    <div className='w-full h-screen bg-slat-100 p-10'>
        <div className='flex space-x-4'>
            <Format1 />
            <Format1 />
            <Format1 />
            <Format1 />
        </div>

        <div className='w-full flex space-x-4 my-4'>
            <TrafficSource />

            <ProgressIncome />
        </div>
    </div>
  )
}

export default HomePage;