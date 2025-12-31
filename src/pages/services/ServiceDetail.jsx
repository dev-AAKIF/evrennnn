import React from "react";
import { NavLink, useParams } from "react-router-dom";
// import image from  "../../image/Image.jpg"
import { serviceDetails } from "../../lib/utils2";
import { Helmet } from 'react-helmet';
import { CircleCheck, ShieldCheck } from "lucide-react";

function ServiceDetail() {
  const { serviceId } = useParams();
  const service = serviceDetails[serviceId];

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <>
<Helmet>
  <title>{`Service Detail - ${serviceId} - Evren Research`}</title>
  <meta name="description" content={`Details of the ${serviceId} service offered by Evren Research.`} />
  <link rel="canonical" href={`https://www.evrenresearch.com/kpo-services/${serviceId}`} />
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "url": "https://www.evrenresearch.com/kpo-services/${serviceId}",
        "name": "Service Detail - ${serviceId}",
        "description": "Details of the ${serviceId} service offered by Evren Research."
      }
    `}
  </script>
</Helmet>
    <div className="service-detail mt-16" data-aos="zoom-in-up"
    data-aos-duration="1300">
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="service-card rounded-2xl shadow-md overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Image Section */}
          <div className="image-section relative h-64 md:h-auto">
            {/* <img
              src={image}
              alt="Professional service illustration"
              className="absolute inset-0 w-full h-full object-cover"
            /> */}
            <div className="absolute inset-0 bg-blue-900/10 " />
          </div>

          {/* Content Section */}
          <div className="content-section p-8 md:p-12">
            <div className="service-title flex items-center gap-2 mb-6">
              <ShieldCheck className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl md:text-3xl font-bold text-[#260433]">
                {service.title}
              </h1>
            </div>

            <p className="text-md md:text-lg text-black mb-8 leading-relaxed">
              {service.details}
            </p>

            <div className="service-points space-y-4">
              {service.points.map((point, index) => (
                <div key={index} className="point flex items-start gap-3">
                  <CircleCheck className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5 md:w-6 md:h-6" />
                  <p className="md:text-medium text-sm text-gray-700">{point.content}</p>
                </div>
              ))}
            </div>

            <div className="call-to-action mt-10">
              <button className="border border-zinc-100 px-4 bg-[#260433] hover:bg-fuchsia-950 text-white rounded-lg py-2 md:text-medium text-sm">
                <NavLink to="/contact">Contact Us</NavLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
  );
}

export default ServiceDetail;
