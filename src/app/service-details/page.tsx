import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Car Doctor Pro | service-details",
    description: "Car Repearing workshop",
  };

const page = () => {
    return (
        <div>
            <h1>This is service details.</h1>
        </div>
    );
};

export default page;