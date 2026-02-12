import React from "react";

const Footer = () => {
  // 1. Make sure 'address' is defined
  const address = "South Badda, Dhaka";

  // 2. Use the correct endpoint and ${} syntax
  const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto h-[600px]">
        <iframe
          title="Google Map Location"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          src={mapUrl}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default Footer;
