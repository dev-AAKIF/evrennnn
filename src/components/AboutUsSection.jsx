import React from "react";
import { AboutUsHeader } from "./AllHeader";
import { AboutCard } from "./ui/card";
import { NavLink } from "react-router-dom";
import { ChevronRight, Eye, Handshake, Phone, UsersRound } from "lucide-react";

const AboutUsSection = () => {
  const aboutCards = [
    {
      icon: Eye,
      title: "Mission & Vision",
      color: "red",
      description: "Guiding principles that drive our success"
    },
    {
      icon: UsersRound,
      title: "Expert Team Member",
      color: "green",
      description: "Talented professionals at your service"
    },
    {
      icon: Handshake,
      title: "Top Collaboration",
      color: "blue",
      description: "Building lasting partnerships"
    },
    {
      icon: Phone,
      title: "Professional Support",
      color: "pink",
      description: "Always here to help you succeed"
    },
  ];

  return (
    <div className="px-4 py-16 lg:px-16 overflow-x-hidden bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto">
        <AboutUsHeader />
        
        <div className="mt-16 relative">
          {/* Background Decorative Elements */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-30 -z-10"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-200 rounded-full blur-3xl opacity-20 -z-10"></div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content Section */}
            <div 
              className="space-y-6"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div className="inline-block">
                <span className="bg-fuchsia-800  text-white px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider">
                  Why Choose Us
                </span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold leading-tight bg-[#260433] border-fuchsia-700 border-b-4 inline-block bg-clip-text text-transparent">
                Empowering Business Success with Tailored Solutions
              </h2>
                            
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                At Evren Research, we empower businesses by offering a blend of
                tailored solutions designed for success. With expertise in talent
                mapping, executive search, recruitment, and KPO services—including
                data management and B2B data—we provide the tools and insights
                that drive growth.
              </p>
              
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Our commitment to innovation and efficiency ensures your organization 
                stays ahead in an ever-evolving business landscape. Let us help you 
                unlock potential, streamline processes, and shape a thriving future.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-fuchsia-900"></div>
                  <span className="text-sm text-gray-700 font-medium">10+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-fuchsia-900"></div>
                  <span className="text-sm text-gray-700 font-medium">500+ Happy Clients</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-fuchsia-900"></div>
                  <span className="text-sm text-gray-700 font-medium">24/7 Support</span>
                </div>
              </div>
              
              <div className="pt-4">
                <NavLink to="/about">
                  <button className="group relative flex items-center gap-2 px-8 py-4 rounded-full text-white bg-fuchsia-900 hover:shadow-2xl font-semibold transition-all duration-300 hover:scale-105 overflow-hidden">
                    <span className="relative z-10">Discover More</span>
                    <ChevronRight className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    <div className="absolute inset-0 bg-fuchsia-900 from-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </NavLink>
              </div>
            </div>

            {/* Right Cards Section */}
            <div 
              className="relative"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {aboutCards.map((aboutCard, index) => (
                  <div
                    key={index}
                    className={`transform transition-all duration-500`}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
                      {/* Hover Gradient Background */}
                      <div className="absolute inset-0 transition-opacity duration-300"></div>
                      
                      <div className="relative z-10">
                        <div className={`inline-flex p-4 rounded-xl  ${
                          aboutCard.color === 'red' ? 'bg-purple-200' :
                          aboutCard.color === 'green' ? 'bg-fuchsia-800' :
                          aboutCard.color === 'blue' ? 'bg-purple-200' :
                          'bg-fuchsia-800'
                        } mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                          <aboutCard.icon className={`h-8 w-8 ${
                            aboutCard.color === 'red' ? 'text-fuchsia-800' :
                            aboutCard.color === 'green' ? 'text-purple-200' :
                            aboutCard.color === 'blue' ? 'text-fuchsia-800' :
                            'text-purple-200'
                          }`} />
                        </div>
                        
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-fuchsia-900 transition-colors duration-300">
                          {aboutCard.title}
                        </h3>
                        
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {aboutCard.description}
                        </p>
                        
                        <div className="mt-4 flex items-center text-fuchsia-900 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                          Learn more 
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </div>
                      </div>
                    
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Floating decorative element */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;