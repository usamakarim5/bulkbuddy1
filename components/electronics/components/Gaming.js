import React from 'react'
import FilterComponent from '../../basic-components/filter/Filter'
import Navbar from '../../basic-components/Navbar/Navbar'
import Topbar from '../../basic-components/Navbar/Topbar'
import ProductsComponent from '../../basic-components/productsComponent/ProductsComponent'
import { AppliancesData } from '../../Data/AppliancesData'
import { TopDealsData } from '../../Data/TopDealsData'


const Gaming = () => {

    var sectionName = 'Games'
    return (
      <>
       <Navbar/>
       <Topbar/>
       <div className='container-fluid electronics_cont'>
        <FilterComponent/>
        <ProductsComponent sectionName = {sectionName} popularityData = {TopDealsData} priceData= {AppliancesData}/>
       </div>
      </>
    )
}

export default Gaming