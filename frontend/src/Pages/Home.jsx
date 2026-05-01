import React, { useState } from 'react'
import CategoryList from '../components/CategoryList'
import SubCategoryList from '../components/SubCategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'
import VerticalSubCardProduct from '../components/VerticalSubCardProduct'
import VerticalHotDealCard from '../components/VerticalHotDealCard'
import Hero from '../components/Hero'
import { useNavigate } from 'react-router-dom'
import { PiMagnifyingGlassBold } from 'react-icons/pi'


function Home() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const navigate = useNavigate()

  return (
    <div className='mt-0 lg:mt-0'>
      <Hero />
      <div className='mt-8 mb-2'>
        <CategoryList 
          activeCategory={selectedCategory} 
          onCategoryClick={setSelectedCategory} 
        />
      </div>
      <VerticalCardProduct 
        category={selectedCategory} 
        showHeading={false} 
      />



      {/* <VerticalHotDealCard hotDeal={"Hot_Deal"} />
      <VerticalCardProduct  category={"speakers"} />
      <VerticalCardProduct  category={"earphones"} />
      <VerticalCardProduct  category={"camera"} />
      <VerticalCardProduct  category={"mobiles"} />

      <VerticalCardProduct  category={"refrigerator"} />
      <VerticalCardProduct category={"food"} />
      <VerticalCardProduct  category={"mobiles"} />
      <VerticalCardProduct  category={"camera"} />
      <VerticalCardProduct  category={"earphones"} /> */}





      {/* <VerticalSubCardProduct subCategory={"Item7"} /> */}
      {/* <VerticalSubCardProduct subCategory={"Nutri_C"} /> */}

      {/* <VerticalCardProduct subCategory={"Item7"} /> */}
      {/* <VerticalCardProduct category={"watches"} /> */}
      
      {/* <VerticalCardProduct  category={"mouse"} heading={"Mouse"}/> */}
      {/* <VerticalCardProduct  category={"televisions"} /> */}
      {/* <VerticalCardProduct  category={"printers"} /> */}

      {/* <HorizontalCardProduct category={"speakers"} heading={"Popular Speakers"}/> */}
      {/* <HorizontalCardProduct category={"mobiles"} heading={"mobiles"}/> */}
      {/* <VerticalCardProduct  category={"trimers"} heading={"Trimers"}/> */}
      {/* <VerticalCardProduct  category={"processor"} heading={"Processor"}/> */}
      <button
        type='button'
        onClick={() => navigate('/search')}
        className='fixed bottom-6 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-neutral-950 text-white shadow-[0_18px_45px_rgba(17,17,17,0.28)] transition hover:-translate-y-0.5 hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2 sm:bottom-8 sm:right-8'
        aria-label='Search properties'
      >
        <PiMagnifyingGlassBold className='h-6 w-6' />
      </button>
    </div> 
  )
}

export default Home