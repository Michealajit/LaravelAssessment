import React from 'react';

const ListingCard = ({ listing }) => {
  return (
    <div className={`bg-gray-50 border border-gray-200 rounded p-6 `} >
    
    <div className="flex">
      <img
        className="hidden w-48 mr-6 md:block"
        src={listing.logo ? `/storage/${listing.logo}` : '/images/no-image.png'}
        alt="img"
      />
      <div>
        <h3 className="text-2xl">
          <a href={`/listing/${listing.id}`}>{listing.title}</a>
        </h3>
        <div className="text-xl font-bold mb-4">{listing.company}</div>
        {/* Assuming <ListingTags /> component is defined elsewhere */}
        {/* Pass the tags as a prop to the ListingTags component */}
        {/* <ListingTags tagsCsv={listing.tags} /> */}
        <div className="text-lg mt-4">
          <i className="fa-solid fa-location-dot"></i> {listing.location}
        </div>
      </div>
    </div>
   
  </div>
  );
};

export default ListingCard;
