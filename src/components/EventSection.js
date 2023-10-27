import React, { useState, useEffect } from 'react';
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import EventItem from './EventItem';




const EventSection = () => {
  // These are just placeholders; you'll probably replace these with data fetched from your API
  const btcHalvingData = {
    eventName: "BTC HALVING",
    targetDate : new Date('2024-05-15T00:00:00Z')
  };

  const blkEtfData = {
    eventName: "BLK ETF - SEC APPROVAL",
    targetDate : new Date('2024-01-10T00:00:00Z')
  };

  return (
    <VStack spacing={4}>
      <EventItem {...btcHalvingData} />
      {/* <Box height="1rem" />  Adjust this value for desired spacing */}
      <EventItem {...blkEtfData} />
    </VStack>
  );
};


export default EventSection;
