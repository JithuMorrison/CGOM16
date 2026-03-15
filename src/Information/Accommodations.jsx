import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHotel, faUtensils, faGlassCheers, faDownload, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const Accommodations = ({ scrollTo }) => {

  const accomRef = useRef(null);
        
  useEffect(() => {
      const scrollWithOffset = (ref, offset) => {
        if (ref && ref.current) {
          setTimeout(() => {
            window.scrollTo({ top: offset, behavior: 'smooth' });
          }, 500);
        }
      };
  
      const isMobile = window.innerWidth <= 768;
    
      if (scrollTo === 'accomodate') {
        scrollWithOffset(accomRef, isMobile ? 1650 : 980);
      }
    }, [scrollTo]);

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Banner Section */}
      <div className="relative bg-gradient-to-r from-blue-700 to-blue-900 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/Extras/accomodation.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg" ref={accomRef}>
            Accommodations
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Hotel Booking Information for CGOM'16
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* OMR Hotels Section */}
        <motion.div 
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center mb-6">
            <FontAwesomeIcon icon={faHotel} className="text-3xl text-blue-600 mr-4" />
            <h2 className="text-2xl font-bold text-gray-900">OMR Hotels</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {/* NOVOTEL */}
            <div className="border rounded-lg p-5 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-xl text-blue-800">NOVOTEL</h3>
              <p className="text-sm text-gray-600 mt-2">
                <span className="font-medium">Location:</span> Opp. Elcot Sez, IT Expressway, Old Mahabalipuram Road, Sholinganallur, 600119 CHENNAI India
              </p>
              <a 
                href="https://all.accor.com/booking/en/accor/hotel/6714?dateIn=2026-03-13&nights=1&compositions=2&stayplus=false&snu=false&accessibleRooms=false&hideWDR=false&productCode=null&hideHotelDetails=true&utm_campaign=6714-IN-cpc-desktop-default-0--mapresults--0-0-0&utm_medium=partenariats&hmGUID=61cd844e-4a58-4dc4-a491-fd791470f026&wiz_campaign=&utm_source=seo_meta_google&basketId=bd71e88c-5f1a-414a-acd6-7295aee10326"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 mt-3"
              >
                Official Site <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-2 text-sm" />
              </a>
            </div>

            {/* REGENTA */}
            <div className="border rounded-lg p-5 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-xl text-blue-800">REGENTA</h3>
              <p className="text-sm text-gray-600 mt-2">
                <span className="font-medium">Location:</span> 13/1 A, near Navalur Toll, adjacent to Marina Mall, OMR, Egattur Village, Chennai, Egattur, Tamil Nadu 600130
              </p>
              <a 
                href="https://www.agoda.com/en-in/regenta-central-deccan/hotel/chennai-in.html?countryId=35&finalPriceView=1&isShowMobileAppPrice=false&cid=1914936&numberOfBedrooms=&familyMode=false&adults=1&children=0&rooms=1&maxRooms=0&checkIn=2026-03-18&isCalendarCallout=false&childAges=&numberOfGuest=0&missingChildAges=false&travellerType=-1&showReviewSubmissionEntry=false&currencyCode=INR&isFreeOccSearch=false&tag=68975f15-9cbe-4ba3-9c83-a2f5d2f7dce2&los=1&searchrequestid=b157e06e-626e-438a-9318-2d092a4bae8d"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 mt-3"
              >
                Booking Site <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-2 text-sm" />
              </a>
            </div>

            {/* IBIS */}
            <div className="border rounded-lg p-5 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-xl text-blue-800">IBIS</h3>
              <p className="text-sm text-gray-600 mt-2">
                <span className="font-medium">Location:</span> ibis Chennai Sipcot, Rajiv Gandhi Salai, opp. Sipcot It Park, near state highway 49, Chennai, Egattur, Tamil Nadu 603103
              </p>
              <a 
                href="https://www.agoda.com/en-in/ibis-chennai-sipcot-hotel-an-accorhotels-brand/hotel/chennai-in.html?countryId=35&finalPriceView=1&isShowMobileAppPrice=false&cid=1914936&numberOfBedrooms=&familyMode=false&adults=1&children=0&rooms=1&maxRooms=0&checkIn=2026-03-18&isCalendarCallout=false&childAges=&numberOfGuest=0&missingChildAges=false&travellerType=-1&showReviewSubmissionEntry=false&currencyCode=INR&isFreeOccSearch=false&tag=68975f15-9cbe-4ba3-9c83-a2f5d2f7dce2&tspTypes=8&los=1&searchrequestid=b157e06e-626e-438a-9318-2d092a4bae8d&ds=lvrxJlkzVyHolPx0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 mt-3"
              >
                Booking Site <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-2 text-sm" />
              </a>
            </div>

            {/* FOUR POINTS BY SHERATON */}
            <div className="border rounded-lg p-5 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-xl text-blue-800">FOUR POINTS BY SHERATON</h3>
              <p className="text-sm text-gray-600 mt-2">
                <span className="font-medium">Location:</span> No 169 Plot 1B, Four Points 1, Survey, 1A, Rajiv Gandhi Salai, Kumaran Nagar, Sholinganallur, Chennai, Tamil Nadu 600119
              </p>
              <a 
                href="https://www.booking.com/hotel/in/duet-india-omr-chennai.en-gb.html?aid=2419846&label=metagha-link-MRIN-hotel-4399516_dev-desktop_los-1_bw-3_dow-Thursday_defdate-1_room-0_gstadt-2_rateid-public_aud-0_gacid-21415141192_mcid-10_ppa-1_clrid-0_ad-1_gstkid-0_checkin-20260312_ppt-_lp-2356_r-10524912489958614917&sid=06e08dc2237c9fbe3005a5dc81537446&all_sr_blocks=439951606_377150079_0_42_0&checkin=2026-03-12&checkout=2026-03-13&dest_id=4399516&dest_type=hotel&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=439951606_377150079_0_42_0&hpos=1&matching_block_id=439951606_377150079_0_42_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=439951606_377150079_0_42_0__429700&srepoch=1773040182&srpvid=706e3254bab203b3&type=total&ucfs=1&"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 mt-3"
              >
                Booking Site <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-2 text-sm" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Mamallapuram Hotels Section */}
        <motion.div 
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex items-center mb-6">
            <FontAwesomeIcon icon={faHotel} className="text-3xl text-blue-600 mr-4" />
            <h2 className="text-2xl font-bold text-gray-900">Mamallapuram Hotels</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {/* RADISSON BLU */}
            <div className="border rounded-lg p-5 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-xl text-blue-800">RADISSON BLU</h3>
              <p className="text-sm text-gray-600 mt-2">
                <span className="font-medium">Location:</span> 57 Covelong Road, Dist, Kanchipuram, Mahabalipuram, Tamil Nadu 603104
              </p>
              <a 
                href="https://www.radissonhotels.com/en-us/hotels/radisson-blu-resort-mamallapuram-temple-bay?facilitatorId=RHGSEM&cid=a%3Aps+b%3Abng+c%3Aemea+i%3Abrand+e%3Ardb+d%3Aind+r%3Abrt+f%3Aen-US+g%3Aho+h%3AINTNMAMTEM+v%3Acf&gclid=b564fd9a93f01b9612df9434fc968b54&gclsrc=3p.ds&msclkid=b564fd9a93f01b9612df9434fc968b54&utm_source=bing&utm_medium=cpc&utm_campaign=MS_IND_CR_APAC_rh_Brand_Multiple_Multiple-Grouped_EN_PH%26EX_Multiple_T3&utm_term=radisson+blu+temple+bay+mamallapuram&utm_content=MS_IND_CR_SA_sk_Brand_Mamallapuram_INTNMAMTEM_EN_PH%26EX_India"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 mt-3"
              >
                Official Site <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-2 text-sm" />
              </a>
            </div>

            {/* GOLDEN SUN BEACH */}
            <div className="border rounded-lg p-5 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-xl text-blue-800">GOLDEN SUN BEACH</h3>
              <p className="text-sm text-gray-600 mt-2">
                <span className="font-medium">Location:</span> 59, Kovalam Rd, Mahabalipuram, Tamil Nadu 603104
              </p>
              <a 
                href="https://www.agoda.com/en-in/golden-sun-beach-resort/hotel/mamallapuram-in.html?ds=NokgsZ1OkALTBNcw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 mt-3"
              >
                Booking Site <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-2 text-sm" />
              </a>
            </div>

            {/* KALDAN SAMUDHRA PALACE */}
            <div className="border rounded-lg p-5 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-xl text-blue-800">KALDAN SAMUDHRA PALACE</h3>
              <p className="text-sm text-gray-600 mt-2">
                <span className="font-medium">Location:</span> 16/3B1B, Devaneri, East Coast Road, Mamallapuram, Chengulpet, Mahabalipuram, Mamallapuram, India, 603103
              </p>
              <a 
                href="https://www.agoda.com/en-in/kaldan-samudhra/hotel/chennai-in.html?ds=FVodoNdmrTOag9r8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 mt-3"
              >
                Booking Site <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-2 text-sm" />
              </a>
            </div>

            {/* TAJ FISHERMAN'S COVE */}
            <div className="border rounded-lg p-5 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-xl text-blue-800">TAJ FISHERMAN'S COVE RESORT & SPA</h3>
              <p className="text-sm text-gray-600 mt-2">
                <span className="font-medium">Location:</span> Covelong Beach, Kancheepuram District, 603112 Mahabalipuram, India
              </p>
              <a 
                href="https://www.booking.com/hotel/in/fisherman-s-cove.en-gb.html?aid=2276374&label=msn-jA8vWHt2ojhLcHd2EZis8A-79989669566576%3Atikwd-79989867342101%3Aloc-90%3Aneo%3Amte%3Alp157752%3Adec%3Acid578271579%3Aagid1279831995692626&sid=06e08dc2237c9fbe3005a5dc81537446&all_sr_blocks=7471605_363409674_2_2_0&checkin=2026-03-12&checkout=2026-03-13&dest_id=-2103573&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=7471605_363409674_2_2_0&hpos=1&matching_block_id=7471605_363409674_2_2_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=7471605_363409674_2_2_0__1238000&srepoch=1773115734&srpvid=a6ce1d27209c0446&type=total&ucfs=1&"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 mt-3"
              >
                Booking Site <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-2 text-sm" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Downloads Section */}
        <motion.div 
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Conference Documents</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/Docs/CGOM16_Accomodations.docx"
              download="CGOM16_Hotel_Details.docx"
              className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-teal-700 text-white rounded-lg hover:bg-teal-800 transition-all duration-200 shadow-md hover:shadow-lg font-semibold text-base tracking-wide text-center"
            >
              <FontAwesomeIcon icon={faDownload} className="mr-3" />
              Download Hotel Details
            </a>
          </div>
        </motion.div>

        {/* Food Arrangements Section */}
        <motion.div 
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex items-center mb-6">
            <FontAwesomeIcon icon={faUtensils} className="text-3xl text-blue-600 mr-4" />
            <h2 className="text-2xl font-bold text-gray-900">Food Arrangements</h2>
          </div>
          <div className="prose max-w-none text-gray-600">
            <div className="space-y-4">
              <p>During the conference, we will provide the following meal arrangements:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Breakfast will be provided at your respective hotels</li>
                <li>Coffee/Tea breaks with light refreshments during conference sessions</li>
                <li>Lunch buffet at the conference venue</li>
                <li>Welcome dinner</li>
                <li>Conference banquet</li>
              </ul>
              <p className="text-sm text-gray-500 mt-4">
                * Special dietary requirements can be accommodated upon request during registration
              </p>
            </div>
          </div>
        </motion.div>

        {/* Banquet Information Section */}
        <motion.div 
          className="bg-white rounded-lg shadow-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-center mb-6">
            <FontAwesomeIcon icon={faGlassCheers} className="text-3xl text-blue-600 mr-4" />
            <h2 className="text-2xl font-bold text-gray-900">Conference Banquet</h2>
          </div>
          <div className="prose max-w-none text-gray-600">
            <p>
              The conference banquet will be held on a special evening featuring:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-4">
              <li>Traditional Indian cultural performance</li>
              <li>Gala dinner featuring international and local cuisine</li>
              <li>Networking opportunities with fellow attendees</li>
              <li>Special awards ceremony</li>
            </ul>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm">
                <strong>Note:</strong> The banquet is included in the conference registration fee. 
                Additional guest tickets can be purchased during registration.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Accommodations;