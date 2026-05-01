import React, { useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import { FaKey, FaShieldHalved, FaStar } from 'react-icons/fa6'
import VerticalCard from '../components/VerticalCard'
import {
  getAllLocalProducts,
  getLocalCategorySummaries,
  getLocalProductsByCategory,
  productCategoryOptions,
} from '../data/localProducts'

const StatPill = ({ value, label }) => (
  <div className='rounded-full border border-white/70 bg-white/75 px-4 py-2 shadow-sm backdrop-blur'>
    <p className='text-sm font-black tracking-[-0.04em] text-neutral-950'>{value}</p>
    <p className='text-[9px] font-black uppercase tracking-[0.18em] text-neutral-500'>{label}</p>
  </div>
)

const CategoryProduct = () => {

    const [data,setData] = useState([])
    const navigate = useNavigate()
    const [loading,setLoading] = useState(false)
    const location = useLocation()
    const urlSearch = new URLSearchParams(location.search)
    const urlCategoryListinArray = urlSearch.getAll("category")
    const showAll = urlSearch.get("all") === "true"

    const urlCategoryListObject = {}
    urlCategoryListinArray.forEach(el =>{
      urlCategoryListObject[el] = true
    })


    const [selectCategory, setSelectCategory] = useState(urlCategoryListObject)
    const [filterCategoryList, setFilterCategoryList] = useState([])
    const [categories, setCategories] = useState([])

    

    const [sortBy, setSortBy] = useState("")

    const selectedLabel = useMemo(() => {
      if (showAll && filterCategoryList.length === 0) {
        return "All verified spaces"
      }

      if (filterCategoryList.length === 0) {
        return "Explore by space type"
      }

      return filterCategoryList
        .map((category) => productCategoryOptions.find((option) => option.value === category)?.label || category)
        .join(", ")
    }, [filterCategoryList, showAll])

    const fetchAllCategories = async () => {
      setLoading(true)
      setCategories(getLocalCategorySummaries())
      setLoading(false)
    }

    const fetchAllProducts = async () => {
      setLoading(true)
      // Backend version kept here for easy reactivation later.
      // const response = await fetch(SummaryApi.allProduct.url)
      // const dataResponse = await response.json()
      // setData(dataResponse?.data || [])
      setData(getAllLocalProducts())
      setLoading(false)
    }

    const fetchData = async()=>{
      setLoading(true)
      // Backend version kept here for easy reactivation later.
      // const response = await fetch(SummaryApi.filterProduct.url,{
      //   method : SummaryApi.filterProduct.method,
      //   headers : {
      //     'content-type' : 'application/json'
      //   },
      //   body : JSON.stringify({
      //     category : filterCategoryList
      //   })
      // })
      //
      // const dataResponse = await response.json()
      // setData(dataResponse?.data || [])
      const filteredProducts = filterCategoryList.flatMap((category) =>
        getLocalProductsByCategory(category)
      )
      const uniqueProducts = Array.from(
        new Map(filteredProducts.map((product) => [product._id, product])).values()
      )
      setData(uniqueProducts)
      setLoading(false)
    }

    useEffect(() => {
      fetchAllCategories()
      if(showAll) {
        fetchAllProducts()
      }
    }, [showAll])

    const handleSelectCategory = (e) => {
      const { value, checked} = e.target
      setSelectCategory((preve)=>{
        return{
          ...preve,
          [value] : checked
      }
      })
    }

    useEffect(()=>{
      if(filterCategoryList.length > 0) {
        fetchData()
      } else if (!showAll) {
        setData([])
      }
    },[filterCategoryList, showAll])

    useEffect(()=>{
      const arrayOfCategory = Object.keys(selectCategory).map(categoryKeyName =>{
       if(selectCategory[categoryKeyName]){
        return categoryKeyName
       }
       return null
      }).filter(el => el)

      setFilterCategoryList(arrayOfCategory)

      // format for url change when change on the checkbox
      const urlFormat = arrayOfCategory
        .map((el) => `category=${encodeURIComponent(el)}`)
        .join("&")

      if (arrayOfCategory.length > 0) {
        navigate("/product-category?"+urlFormat)
      } else if (showAll) {
        navigate("/product-category?all=true")
      } else {
        navigate("/product-category")
      }
    },[selectCategory])

    const handleOnChangeSortBy = (e) => {
      const { value} = e.target

      setSortBy(value)

      if(value === 'asc'){
        setData(preve => [...preve].sort((a,b)=> a.sellingPrice - b.sellingPrice))
      }

      if(value === 'dsc'){
        setData(preve => [...preve].sort((a,b)=> b.sellingPrice - a.sellingPrice))
      }
    }
    
  return (
    <div className='mx-auto w-full max-w-7xl px-3 pb-16 pt-4 sm:px-6 sm:pt-5 lg:px-8 lg:pt-6'>
      <section className='relative mb-8 overflow-hidden rounded-[2rem] bg-[#f5f5f7] px-5 py-8 shadow-[0_28px_90px_rgba(17,17,17,0.09)] sm:rounded-[3rem] sm:px-8 lg:px-10'>
        <div className='absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white to-transparent' />
        <div className='relative grid gap-8 lg:grid-cols-[1.35fr,0.65fr] lg:items-end'>
          <div>
            <span className='inline-flex items-center gap-2 border border-slate-200 bg-white px-4 py-2 text-[10px] font-black uppercase tracking-[0.24em] text-neutral-700 shadow-sm'>
              <FaShieldHalved className='h-3.5 w-3.5 text-neutral-950' />
              Verified Rome listings
            </span>
            <h1 className='mt-6 max-w-3xl text-4xl font-black leading-[0.92] tracking-[-0.075em] text-neutral-950 sm:text-6xl lg:text-7xl'>
              Browse homes by the spaces that matter.
            </h1>
            <p className='mt-5 max-w-2xl text-sm font-semibold leading-7 text-neutral-600 sm:text-base'>
              Filter complete buildings, bedrooms, kitchens, and living rooms with the same premium property experience as the home page.
            </p>
          </div>

          <div className='rounded-[1.75rem] border border-white/70 bg-white/75 p-4 shadow-[0_18px_60px_rgba(17,17,17,0.07)] backdrop-blur-2xl'>
            <p className='text-[10px] font-black uppercase tracking-[0.24em] text-neutral-500'>Current view</p>
            <h2 className='mt-2 text-2xl font-black tracking-[-0.06em] text-neutral-950'>{selectedLabel}</h2>
            <div className='mt-5 flex flex-wrap gap-2'>
              <StatPill value={getAllLocalProducts().length} label='Listings' />
              <StatPill value={productCategoryOptions.length} label='Categories' />
              <StatPill value='24h' label='Tour support' />
            </div>
          </div>
        </div>
      </section>

      <div className='flex flex-col gap-8 lg:grid lg:grid-cols-[280px,1fr]'>
        {/* left side - Filters */}
        <div className={`h-fit rounded-[2rem] border border-white/70 bg-white/75 p-5 shadow-[0_20px_70px_rgba(17,17,17,0.07)] backdrop-blur-2xl lg:sticky lg:top-6 ${(filterCategoryList.length === 0 && !showAll) ? 'hidden lg:block' : 'block'}`}>
          {/* sort by  */}
          <div className='mb-8 rounded-[1.5rem] bg-neutral-100/70 p-4'>
            <h3 className='mb-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.24em] text-neutral-950'>
              <FaStar className='h-3.5 w-3.5' />
              Sort by
            </h3>
            <form className='flex flex-col gap-3 text-[11px] font-black uppercase tracking-widest text-neutral-600'>
              <div className='group flex cursor-pointer items-center gap-3'>
                <input type='radio' name='sortBy'
                  className='h-4 w-4 accent-neutral-950'
                  checked={sortBy === 'asc'}
                  onChange={handleOnChangeSortBy}
                  value={"asc"} 
                  id="sort-asc" />
                <label htmlFor="sort-asc" className='cursor-pointer transition-colors group-hover:text-neutral-950'>Price - Low to High</label>
              </div>

              <div className='group flex cursor-pointer items-center gap-3'>
                <input type='radio' name='sortBy'
                  className='h-4 w-4 accent-neutral-950'
                  checked={sortBy === 'dsc'}
                  onChange={handleOnChangeSortBy}
                  value={"dsc"}
                  id="sort-dsc"
                />
                <label htmlFor="sort-dsc" className='cursor-pointer transition-colors group-hover:text-neutral-950'>Price - High to Low</label>
              </div>
            </form>
          </div>

          {/* filter by  */}
          <div>
            <h3 className='mb-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.24em] text-neutral-950'>
              <FaKey className='h-3.5 w-3.5' />
              Space type
            </h3>
            <form className='flex flex-col gap-2 text-[11px] font-black uppercase tracking-widest text-neutral-600'>
              {
                productCategoryOptions.map((categoryName, index) => {
                  const isChecked = Boolean(selectCategory[categoryName?.value])
                  return (
                    <label
                      htmlFor={categoryName?.value}
                      className={`group flex cursor-pointer items-center justify-between rounded-full border px-4 py-3 transition-all ${
                        isChecked
                          ? 'border-neutral-950 bg-neutral-950 text-white shadow-[0_12px_28px_rgba(17,17,17,0.16)]'
                          : 'border-neutral-200 bg-white/70 text-neutral-600 hover:border-neutral-950 hover:text-neutral-950'
                      }`}
                      key={index}
                    >
                      <span>{categoryName?.label}</span>
                      <input type='checkbox' name={"category"}
                        className='h-4 w-4 accent-neutral-950'
                        checked={isChecked}
                        id={categoryName?.value}
                        value={categoryName?.value}
                        onChange={handleSelectCategory} />
                    </label>
                  )
                })
              }
            </form>
          </div>
        </div>

        {/* right side - Content */}
        <div className='w-full'>
          {
            (filterCategoryList.length === 0 && !showAll) ? (
              <div className='w-full'>
                <div className="mb-8 flex flex-col gap-3 rounded-[2rem] border border-white/70 bg-white/70 p-5 shadow-[0_18px_60px_rgba(17,17,17,0.06)] backdrop-blur-2xl sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className='text-[10px] font-black uppercase tracking-[0.24em] text-neutral-500'>Explore spaces</p>
                    <h2 className='mt-2 text-3xl font-black tracking-[-0.07em] text-neutral-950 md:text-5xl'>Shop by category</h2>
                  </div>
                  <p className="max-w-sm text-xs font-black uppercase leading-6 tracking-[0.18em] text-neutral-500">Select a property space to browse verified listings</p>
                </div>
                <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4'>
                  {
                    loading ? (
                      new Array(8).fill(null).map((_, index) => (
                        <div key={index} className='overflow-hidden rounded-[1.75rem] border border-white/70 bg-white shadow-sm'>
                          <div className='aspect-[4/3] animate-pulse bg-slate-100'></div>
                          <div className='p-5'>
                            <div className='h-4 w-2/3 animate-pulse rounded bg-slate-100'></div>
                          </div>
                        </div>
                      ))
                    ) : (
                      categories.map((category, index) => (
                        <Link
                          to={`/product-category?category=${encodeURIComponent(category.category)}`}
                          key={index}
                          className='group flex flex-col overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/80 shadow-[0_20px_60px_rgba(17,17,17,0.08)] backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(17,17,17,0.14)]'
                          onClick={() => setSelectCategory({ [category.category]: true })}
                        >
                          <div className='relative m-2 aspect-[4/3] overflow-hidden rounded-[1.35rem] bg-neutral-100'>
                            <img
                              src={category?.productImage?.[0]}
                              alt={category.label}
                              className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-105'
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent" />
                            <span className='absolute bottom-4 left-4 rounded-full bg-white/85 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.22em] text-neutral-950 shadow-sm backdrop-blur'>
                              {getLocalProductsByCategory(category.category).length} spaces
                            </span>
                          </div>
                          <div className='p-5 pt-3'>
                            <h3 className='truncate text-xl font-black tracking-[-0.06em] text-neutral-950'>
                              {category.label}
                            </h3>
                            <p className='mt-2 text-[10px] font-black uppercase leading-5 tracking-[0.18em] text-neutral-500'>View verified {category.label.toLowerCase()} listings</p>
                          </div>
                        </Link>
                      ))
                    )
                  }
                </div>
              </div>
            ) : (
              <>
                <div className='mb-8 flex flex-col gap-4 rounded-[2rem] border border-white/70 bg-white/70 p-5 shadow-[0_18px_60px_rgba(17,17,17,0.06)] backdrop-blur-2xl sm:flex-row sm:items-center sm:justify-between'>
                  <div>
                    <p className='text-[10px] font-black uppercase tracking-[0.24em] text-neutral-500'>Property results</p>
                    <h2 className='mt-2 text-3xl font-black tracking-[-0.07em] text-neutral-950'>
                      {showAll && filterCategoryList.length === 0 ? "All spaces" : "Filtered spaces"}
                    </h2>
                    <p className='mt-2 text-xs font-black uppercase tracking-[0.18em] text-neutral-500'>{data.length} verified listings found</p>
                  </div>
                  <button
                    onClick={() => {
                      setSelectCategory({});
                      navigate("/product-category");
                    }}
                    className='w-fit rounded-full bg-neutral-950 px-5 py-3 text-[10px] font-black uppercase tracking-[0.18em] text-white transition hover:bg-neutral-800'
                  >
                    Clear All
                  </button>
                </div>
                <div className='min-h-[calc(100vh-120px)]'>
                  {
                    data.length !== 0 ? (
                      <VerticalCard data={data} loading={loading} />
                    ) : (
                      !loading && (
                        <div className='flex flex-col items-center justify-center rounded-[2rem] border border-dashed border-neutral-200 bg-white/60 py-32 text-center'>
                          <p className='text-xs font-black uppercase tracking-[0.3em] text-neutral-400'>No spaces found in this category</p>
                          <Link to='/product-category?all=true' className='mt-5 rounded-full bg-neutral-950 px-5 py-3 text-[10px] font-black uppercase tracking-[0.18em] text-white transition hover:bg-neutral-800'>
                            Browse all spaces
                          </Link>
                        </div>
                      )
                    )
                  }
                </div>
              </>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default CategoryProduct
