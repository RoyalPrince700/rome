import bedroom1 from '../assets/bedroom/b1.png';
import bedroom2 from '../assets/bedroom/b2.png';
import bedroom3 from '../assets/bedroom/b3.png';
import bedroom4 from '../assets/bedroom/b4.png';
import bedroom5 from '../assets/bedroom/b5.png';
import bedroom6 from '../assets/bedroom/b6.png';
import bedroom7 from '../assets/bedroom/b7.png';
import bedroom8 from '../assets/bedroom/b8.png';
import bedroom9 from '../assets/bedroom/b9.png';
import bedroom10 from '../assets/bedroom/b10.png';
import flat1 from '../assets/flat/f1.png';
import flat2 from '../assets/flat/f2.png';
import flat3 from '../assets/flat/f3.png';
import flat4 from '../assets/flat/f4.png';
import flat5 from '../assets/flat/f5.png';
import flat6 from '../assets/flat/f6.png';
import kitchen1 from '../assets/kitchen/k1.png';
import kitchen2 from '../assets/kitchen/k2.png';
import kitchen3 from '../assets/kitchen/k3.png';
import kitchen4 from '../assets/kitchen/k4.png';
import kitchen5 from '../assets/kitchen/k5.png';
import kitchen6 from '../assets/kitchen/k6.png';
import kitchen7 from '../assets/kitchen/k7.png';
import kitchen8 from '../assets/kitchen/k8.png';
import kitchen9 from '../assets/kitchen/k9.png';
import kitchen10 from '../assets/kitchen/k10.png';
import livingRoom1 from '../assets/livingroom/l1.png';
import livingRoom2 from '../assets/livingroom/l2.png';
import livingRoom3 from '../assets/livingroom/l3.png';
import livingRoom4 from '../assets/livingroom/l4.png';
import livingRoom5 from '../assets/livingroom/l5.png';
import livingRoom6 from '../assets/livingroom/l6.png';
import livingRoom7 from '../assets/livingroom/l7.png';
import livingRoom8 from '../assets/livingroom/l8.png';
import livingRoom9 from '../assets/livingroom/l9.png';
import { PROPERTY_AMENITY_ORDER } from './propertyAmenityCatalog';

const emptyPropertyAmenities = () =>
  Object.fromEntries(PROPERTY_AMENITY_ORDER.map((key) => [key, false]));

const propertyAmenitiesWith = (overrides = {}) => ({
  ...emptyPropertyAmenities(),
  ...overrides,
});

const inferStateFromAddress = (addr = '') => {
  if (!addr || addr === 'Address available on the parent building listing') return '';
  const lower = addr.toLowerCase();
  const pairs = [
    ['ilorin', 'Kwara'],
    ['kwara', 'Kwara'],
    ['abuja', 'FCT'],
    [', fct', 'FCT'],
    ['fct,', 'FCT'],
    ['port harcourt', 'Rivers'],
    ['rivers', 'Rivers'],
    ['ibadan', 'Oyo'],
    ['oyo', 'Oyo'],
    ['kano', 'Kano'],
    ['enugu', 'Enugu'],
    ['delta', 'Delta'],
    ['ogun', 'Ogun'],
    ['lagos', 'Lagos'],
  ];
  for (const [needle, label] of pairs) {
    if (lower.includes(needle)) return label;
  }
  return '';
};

const buildProduct = ({
  _id,
  image,
  images,
  productName,
  brandName,
  category,
  subCategory,
  price,
  sellingPrice,
  rating,
  reviewCount,
  badge,
  soldLabel,
  hotDeal = false,
  productStatus = 'preorder',
  state,
  address,
  description,
  propertySpecs = null,
  amenities = null,
}) => {
  const resolvedAddress =
    address ||
    (brandName === 'Compartment View'
      ? 'Address available on the parent building listing'
      : `${brandName}, Lagos, Nigeria`);

  const resolvedState = state || inferStateFromAddress(resolvedAddress) || '';

  return {
    _id,
    productName,
    brandName,
    category,
    subCategory,
    productImage: images || [image],
    price,
    sellingPrice,
    rating,
    reviewCount,
    badge,
    soldLabel,
    hotDeal,
    productStatus,
    propertySpecs,
    amenities,
    state: resolvedState,
    address: resolvedAddress,
    description:
      description ||
      `${productName} is available on Rome as a verified real estate listing with polished visuals, clear pricing, and inspection-ready compartment details.`,
  };
};

export const localProducts = [
  buildProduct({
    _id: 'lekki-sky-duplex',
    images: [flat1, livingRoom1, kitchen1, bedroom1],
    productName: 'Lekki Sky Duplex',
    brandName: 'Lekki Phase 1',
    category: 'flat',
    subCategory: 'duplex',
    price: 165000000,
    sellingPrice: 148000000,
    rating: 4.9,
    reviewCount: 42,
    badge: 'Signature home',
    soldLabel: '12 inspections booked',
    hotDeal: true,
    productStatus: 'for sale',
    address: 'Admiralty Way, Lekki Phase 1, Lagos',
    description:
      'A contemporary duplex with a bright living room, fitted kitchen, and ensuite bedrooms prepared for premium family living in Lekki.',
    propertySpecs: { bedrooms: 5, bathrooms: 6, builtUpArea: '420 m²', tenure: 'Certificate of Occupancy' },
    amenities: propertyAmenitiesWith({
      power: true,
      solar: true,
      water: true,
      borehole: true,
      cctv: true,
      security: true,
      parking: true,
      internet: true,
      intercom: true,
      generator: true,
      kitchen: true,
      waste: true,
      greenSpace: true,
    }),
  }),
  buildProduct({
    _id: 'banana-island-villa',
    images: [flat2, livingRoom2, kitchen2, bedroom2],
    productName: 'Banana Island Villa',
    brandName: 'Banana Island',
    category: 'flat',
    subCategory: 'detached-home',
    price: 420000000,
    sellingPrice: 395000000,
    rating: 4.9,
    reviewCount: 31,
    badge: 'Waterfront',
    soldLabel: '8 private tours',
    hotDeal: true,
    productStatus: 'for sale',
    address: 'First Avenue, Banana Island, Ikoyi, Lagos',
    description:
      'A private villa listing with a luxury lounge, designer kitchen, and calm bedroom spaces built for buyers who want a complete home tour online.',
    propertySpecs: { bedrooms: 6, bathrooms: 7, builtUpArea: '680 m²', tenure: 'Governor\'s consent' },
    amenities: propertyAmenitiesWith({
      power: true,
      solar: true,
      water: true,
      borehole: true,
      cctv: true,
      security: true,
      parking: true,
      internet: true,
      intercom: true,
      generator: true,
      kitchen: true,
      waste: true,
      greenSpace: true,
    }),
  }),
  buildProduct({
    _id: 'ikoyi-serviced-apartment',
    images: [flat3, livingRoom3, kitchen3, bedroom3],
    productName: 'Ikoyi Serviced Apartment',
    brandName: 'Old Ikoyi',
    category: 'flat',
    subCategory: 'apartment',
    price: 18000000,
    sellingPrice: 15000000,
    rating: 4.8,
    reviewCount: 67,
    badge: 'Move-in ready',
    soldLabel: '23 renters interested',
    hotDeal: true,
    productStatus: 'for rent',
    address: 'Bourdillon Road, Old Ikoyi, Lagos',
    description:
      'A furnished serviced apartment with polished shared spaces and detailed room photos for renters comparing premium Ikoyi homes.',
    propertySpecs: { bedrooms: 3, bathrooms: 3, builtUpArea: '145 m²', tenure: 'Serviced block — confirm lease' },
    amenities: propertyAmenitiesWith({
      power: true,
      solar: false,
      water: true,
      borehole: false,
      cctv: true,
      security: true,
      parking: true,
      internet: true,
      intercom: true,
      generator: false,
      kitchen: true,
      waste: true,
      greenSpace: false,
    }),
  }),
  buildProduct({
    _id: 'ajah-family-terrace',
    images: [flat4, livingRoom4, kitchen4, bedroom4],
    productName: 'Ajah Family Terrace',
    brandName: 'GRA Ilorin',
    category: 'flat',
    subCategory: 'terrace',
    price: 76000000,
    sellingPrice: 69000000,
    rating: 4.7,
    reviewCount: 58,
    badge: 'Family pick',
    soldLabel: '19 tours requested',
    hotDeal: true,
    productStatus: 'for sale',
    address: 'Talatu Crescent, GRA, Ilorin, Kwara',
    description:
      'A family terrace with airy living areas, a modern kitchen, and soft bedroom finishes for buyers seeking value in Ilorin.',
    propertySpecs: { bedrooms: 4, bathrooms: 4, builtUpArea: '220 m²', tenure: 'Registered survey' },
    amenities: propertyAmenitiesWith({
      power: true,
      solar: false,
      water: true,
      borehole: true,
      cctv: false,
      security: true,
      parking: true,
      internet: true,
      intercom: false,
      generator: true,
      kitchen: true,
      waste: true,
      greenSpace: true,
    }),
  }),
  buildProduct({
    _id: 'vi-shortlet-suite',
    images: [flat5, livingRoom5, kitchen5, bedroom5],
    productName: 'Victoria Island Shortlet Suite',
    brandName: 'Jabi',
    category: 'flat',
    subCategory: 'shortlet',
    price: 180000,
    sellingPrice: 145000,
    rating: 4.8,
    reviewCount: 91,
    badge: 'Short stay',
    soldLabel: '44 stays requested',
    hotDeal: true,
    productStatus: 'for rent',
    address: 'Mike Akhigbe Way, Jabi, Abuja, FCT',
    description:
      'A polished shortlet suite with a comfortable living room, compact kitchen, and hotel-style bedroom for daily or weekly stays in Abuja.',
    propertySpecs: { bedrooms: 1, bathrooms: 1, builtUpArea: '48 m²', tenure: 'Shortlet — nightly rates' },
    amenities: propertyAmenitiesWith({
      power: true,
      solar: false,
      water: true,
      borehole: false,
      cctv: true,
      security: true,
      parking: false,
      internet: true,
      intercom: false,
      generator: false,
      kitchen: true,
      waste: true,
      greenSpace: false,
    }),
  }),
  buildProduct({
    _id: 'mainland-smart-flat',
    images: [flat6, livingRoom6, kitchen6, bedroom6],
    productName: 'Mainland Smart Flat',
    brandName: 'GRA PH',
    category: 'flat',
    subCategory: 'apartment',
    price: 6500000,
    sellingPrice: 5200000,
    rating: 4.6,
    reviewCount: 49,
    badge: 'Best value',
    soldLabel: '35 renters interested',
    hotDeal: true,
    productStatus: 'for rent',
    address: 'Ezimgbu Link Road, GRA Phase III, Port Harcourt, Rivers',
    description:
      'A compact smart flat with clean rooms and essential finishes for renters who want easy access to central Port Harcourt.',
    propertySpecs: { bedrooms: 2, bathrooms: 2, builtUpArea: '72 m²', tenure: 'Annual rent' },
    amenities: propertyAmenitiesWith({
      power: true,
      solar: false,
      water: true,
      borehole: false,
      cctv: false,
      security: false,
      parking: false,
      internet: true,
      intercom: false,
      generator: false,
      kitchen: true,
      waste: true,
      greenSpace: false,
    }),
  }),
  buildProduct({ _id: 'minimal-primary-bedroom', image: bedroom7, productName: 'Minimal Primary Bedroom', brandName: 'Compartment View', category: 'bedroom', subCategory: 'primary-suite', price: 22000000, sellingPrice: 18500000, rating: 4.7, reviewCount: 24, badge: 'Ensuite', soldLabel: 'Part of verified homes', productStatus: 'compartment', state: 'Lagos', description: 'A primary bedroom compartment view for buyers and renters who want to inspect room scale, lighting, and finishes before booking.' }),
  buildProduct({ _id: 'warm-guest-bedroom', image: bedroom8, productName: 'Warm Guest Bedroom', brandName: 'Compartment View', category: 'bedroom', subCategory: 'guest-room', price: 16000000, sellingPrice: 13200000, rating: 4.6, reviewCount: 18, badge: 'Guest ready', soldLabel: 'Available in listings', productStatus: 'compartment', state: 'Kwara', description: 'A warm guest bedroom view that helps users compare comfort, privacy, and natural light across available buildings.' }),
  buildProduct({ _id: 'executive-bedroom-suite', image: bedroom9, productName: 'Executive Bedroom Suite', brandName: 'Compartment View', category: 'bedroom', subCategory: 'executive-suite', price: 28000000, sellingPrice: 24000000, rating: 4.8, reviewCount: 29, badge: 'Premium room', soldLabel: 'Inspection ready', productStatus: 'compartment', state: 'Oyo', description: 'A premium bedroom compartment created for high-value home listings that need clear room-level presentation.' }),
  buildProduct({ _id: 'compact-studio-bedroom', image: bedroom10, productName: 'Compact Studio Bedroom', brandName: 'Compartment View', category: 'bedroom', subCategory: 'studio-room', price: 9000000, sellingPrice: 7500000, rating: 4.5, reviewCount: 33, badge: 'Studio fit', soldLabel: 'Popular with renters', productStatus: 'compartment', state: 'Rivers', description: 'A compact bedroom setup suitable for studio apartments and renters comparing practical layouts.' }),
  buildProduct({ _id: 'chef-kitchen-suite', image: kitchen7, productName: 'Chef Kitchen Suite', brandName: 'Compartment View', category: 'kitchen', subCategory: 'fitted-kitchen', price: 26000000, sellingPrice: 21900000, rating: 4.8, reviewCount: 21, badge: 'Fully fitted', soldLabel: 'Featured in homes', productStatus: 'compartment', state: 'FCT', description: 'A fitted kitchen compartment view for listings where cabinetry, workflow, and appliances are part of the purchase decision.' }),
  buildProduct({ _id: 'open-plan-kitchen', image: kitchen8, productName: 'Open Plan Kitchen', brandName: 'Compartment View', category: 'kitchen', subCategory: 'open-plan', price: 21000000, sellingPrice: 17800000, rating: 4.7, reviewCount: 19, badge: 'Open layout', soldLabel: 'Inspection ready', productStatus: 'compartment', state: 'Kano', description: 'An open-plan kitchen view that supports property buyers and renters comparing entertaining spaces.' }),
  buildProduct({ _id: 'compact-modern-kitchen', image: kitchen9, productName: 'Compact Modern Kitchen', brandName: 'Compartment View', category: 'kitchen', subCategory: 'compact', price: 12000000, sellingPrice: 9900000, rating: 4.5, reviewCount: 27, badge: 'Space smart', soldLabel: 'Popular in apartments', productStatus: 'compartment', state: 'Enugu', description: 'A practical kitchen compartment for apartments and shortlets where efficient space planning matters.' }),
  buildProduct({ _id: 'luxury-island-kitchen', image: kitchen10, productName: 'Luxury Island Kitchen', brandName: 'Compartment View', category: 'kitchen', subCategory: 'island-kitchen', price: 34000000, sellingPrice: 29500000, rating: 4.9, reviewCount: 16, badge: 'Luxury finish', soldLabel: 'Premium listing view', productStatus: 'compartment', state: 'Delta', description: 'A luxury island kitchen view for premium buildings that need aspirational, high-detail compartment photos.' }),
  buildProduct({ _id: 'sunlit-family-lounge', image: livingRoom6, productName: 'Sunlit Family Lounge', brandName: 'Compartment View', category: 'living-room', subCategory: 'family-lounge', price: 24000000, sellingPrice: 20500000, rating: 4.8, reviewCount: 26, badge: 'Bright lounge', soldLabel: 'Featured room', productStatus: 'compartment', state: 'Ogun', description: 'A sunlit living room compartment showing the main gathering space users evaluate before choosing a building.' }),
  buildProduct({ _id: 'premium-reception-room', image: livingRoom7, productName: 'Premium Reception Room', brandName: 'Compartment View', category: 'living-room', subCategory: 'reception', price: 31000000, sellingPrice: 26800000, rating: 4.9, reviewCount: 14, badge: 'Reception ready', soldLabel: 'Luxury home view', productStatus: 'compartment', state: 'Lagos', description: 'A reception room view designed for premium properties where first impressions and guest flow matter.' }),
  buildProduct({ _id: 'calm-apartment-lounge', image: livingRoom8, productName: 'Calm Apartment Lounge', brandName: 'Compartment View', category: 'living-room', subCategory: 'apartment-lounge', price: 15000000, sellingPrice: 12500000, rating: 4.6, reviewCount: 37, badge: 'Apartment fit', soldLabel: 'Renter favorite', productStatus: 'compartment', state: 'Kwara', description: 'A calm apartment lounge view for renters comparing everyday comfort across available homes.' }),
  buildProduct({ _id: 'designer-living-room', image: livingRoom9, productName: 'Designer Living Room', brandName: 'Compartment View', category: 'living-room', subCategory: 'designer-lounge', price: 36000000, sellingPrice: 31500000, rating: 4.9, reviewCount: 20, badge: 'Designer finish', soldLabel: 'Premium view', productStatus: 'compartment', state: 'Rivers', description: 'A designer living room compartment view for listings that need a clean, premium showcase of interior quality.' }),
];

export const productCategoryOptions = Array.from(
  new Set(localProducts.map((product) => product.category))
).map((category, index) => ({
  id: index + 1,
  label: category
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' '),
  value: category,
}));

export const getAllLocalProducts = () => [...localProducts];

export const getLocalProductById = (id) =>
  localProducts.find((product) => product._id === id);

export const getLocalProductsByCategory = (category) => {
  if (!category || category === 'all') {
    return getAllLocalProducts();
  }

  return localProducts.filter((product) => product.category === category);
};

export const getLocalProductsBySubCategory = (subCategory) =>
  localProducts.filter((product) => product.subCategory === subCategory);

export const getLocalHotDealProducts = () =>
  localProducts.filter((product) => product.hotDeal);

export const searchLocalProducts = (query = '') => {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return getAllLocalProducts();
  }

  return localProducts.filter((product) =>
    [product.productName, product.brandName, product.category, product.subCategory, product.state, product.address]
      .join(' ')
      .toLowerCase()
      .includes(normalizedQuery)
  );
};

export const getLocalCategorySummaries = () =>
  productCategoryOptions.map(({ value, label }) => {
    const matchedProduct = localProducts.find((product) => product.category === value);

    return {
      category: value,
      label,
      productImage: matchedProduct?.productImage || [],
    };
  });
