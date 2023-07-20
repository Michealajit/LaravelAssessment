import React, { useEffect, useState } from 'react';
import Listing from '../components/Listing'; // Assuming you have defined the ListingCard component
import { host } from '../config/config';
import axios from 'axios';
import HeroSection from '../components/HeroSection';

const Listings = () => {
  const [listings, setListings] = useState([]);
//  const [user,setUser] = useState(undefined);
  useEffect(() => {
    
    
   fetch(`${host}/alllistings`)
    .then((response) => response.json())
        .then((data) => {
          console.log(data);
          // Process the fetched data
          setListings(data.data);
        })
        .catch((error) => {
          // Handle errors
          console.error(error);
        });
   //   alert(data);
    //  setListings(data);
  }, []);
 // alert(listings);
  return (
    <>
    <HeroSection/>
    <div class="lg:grid lg:grid-cols-2 gap-4 space-y-4 md:space-y-0 mx-4">
      {/* Use the map function to loop through listings and render ListingCard */}
      {listings.map((listing) => (
    
         <Listing key={listing.id} listing={listing} />
      ))}
    </div>
    </>
  );
};

export default Listings;
