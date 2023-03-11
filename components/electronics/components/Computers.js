import React, { useEffect, useState } from 'react'
import Navbar from '../../basic-components/Navbar/Navbar';
import Topbar from '../../basic-components/Navbar/Topbar';
import FilterComponent from '../../basic-components/filter/Filter';
import ProductsComponent from '../../basic-components/productsComponent/ProductsComponent';
import { ElectronicsData } from '../../Data/ElectronicsData';
import { AppliancesData } from '../../Data/AppliancesData';
import { useParams } from 'react-router-dom';

const Computers = () => {
  const {id} = useParams();
  const [sectionName, setSectionName] = useState()

  useEffect(()=>{
    if(id){
      setSectionName(id)
    }
    else{
      setSectionName('Computers')
    }
  },[])

  return (
    <>
     <Navbar/>
     <Topbar/>
     <div className='container-fluid electronics_cont'>
      <FilterComponent/>
      <ProductsComponent sectionName = {sectionName} popularityData = {ElectronicsData} priceData= {AppliancesData}/>
     </div>
    </>
  )
}

export default Computers