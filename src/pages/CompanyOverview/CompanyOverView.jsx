import { Helmet } from 'react-helmet';
import React from "react";
import { NavLink } from "react-router-dom";
import { CircleCheck, Lightbulb, ShieldAlert, Trophy, UsersRound, Sparkles, Target, TrendingUp, Users, Award, Globe } from "lucide-react";
import { useState } from 'react';

const CompanyOverView = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const values = [
    {
      icon: Lightbulb,
      title: "Expertise & Innovation",
      description: "Delivering specialized and highly skilled knowledge services to meet complex business needs.",
      color: "bg-purple-200",
      glowColor: "rgba(168, 85, 247, 0.3)"
    },
    {
      icon: UsersRound,
      title: "Talent Excellence",
      description: "Sourcing, attracting, and placing top-tier talent that aligns with the client's organizational culture and goals.",
      color: "bg-purple-200",
      glowColor: "rgba(16, 185, 129, 0.3)"
    },
    {
      icon: ShieldAlert,
      title: "Integrity",
      description: "We uphold the highest standards of integrity in all our interactions, ensuring transparency, honesty, and ethical conduct in every aspect of our business.",
      color: "bg-purple-200",
      glowColor: "rgba(6, 182, 212, 0.3)"
    },
    {
      icon: Trophy,
      title: "Excellence",
      description: "Our commitment to excellence is unwavering. We strive for the highest quality in our work, processes, and client interactions, setting benchmarks for industry standards.",
      color: "bg-fuchsia-800",
      glowColor: "rgba(251, 191, 36, 0.3)"
    },
    {
      icon: CircleCheck,
      title: "Quality & Precision",
      description: "Ensuring accuracy and quality in all knowledge-driven processes, through research, analysis, and strategic solutions.",
      color: "bg-fuchsia-800",
      glowColor: "rgba(244, 63, 94, 0.3)"
    },
    {
      icon: Sparkles,
      title: "Collaboration",
      description: "We believe in the power of collaboration, internally and externally, fostering teamwork and partnerships to achieve shared goals and mutual success.",
      color: "bg-fuchsia-800",
      glowColor: "rgba(139, 92, 246, 0.3)"
    }
  ];

  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "Clients Served",
      gradient: "from-purple-500 to-indigo-600"
    },
    {
      icon: Award,
      value: "98%",
      label: "Client Satisfaction",
      gradient: "from-amber-500 to-orange-600"
    },
    {
      icon: TrendingUp,
      value: "10K+",
      label: "Successful Placements",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      icon: Globe,
      value: "25+",
      label: "Countries Worldwide",
      gradient: "from-cyan-500 to-blue-600"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Company Overview - Evren Research</title>
        <meta name="description" content="Learn more about Evren Research, our mission, vision, and the innovative research solutions we provide to empower businesses." />
        <link rel="canonical" href="https://www.evrenresearch.com/company-overview" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "url": "https://www.evrenresearch.com/company-overview",
              "name": "Evren Research",
              "description": "Evren Research provides innovative data analytics and research solutions to empower businesses."
            }
          `}
        </script>
      </Helmet>
      
      {/* <div className="min-h-screen bg-gradient-to-br from-purple-950 via-slate-900 to-amber-950"> */}
      {/*
        <div className="min-h-screen bg-white">
        */}
        <div className="min-h-screen bg-gradient-to-br from-purple-950 via-slate-900 to-amber-950"> 

        {/* Hero Section */}
        <section className="relative bg-white pt-32 pb-20 px-5 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-600/10 to-amber-600/10 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fuchsia-950 backdrop-blur-sm border border-white/20 mb-8">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-sm text-white font-medium">Transforming Business Through Innovation</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#260433]  leading-tight">
              Company Overview
            </h1>
            
            <p className="text-xl md:text-2xl text-black/80 max-w-3xl mx-auto mb-12 leading-relaxed">
              Customized KPO & RPO Solutions for a Future-Ready Workforce
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <NavLink to="/about">
                <button className="group relative px-8 py-4 bg-fuchsia-800 text-white rounded-2xl font-semibold overflow-hidden transition-all duration-300 hover:bg-fuchsia-950 hover:scale-105">
                  <span className="relative z-10">About Us</span>
                </button>
              </NavLink>
              
              <NavLink to="/contact">
                <button className="group px-8 py-4 bg-white backdrop-blur-sm border-2 shadow-2xl border-white/30 text-black rounded-2xl font-semibold transition-all duration-300 hover:bg-white/20 hover:border-white/50 hover:scale-105 flex items-center gap-2">
                  <svg fill="none" viewBox="0 0 20 20" width="20" height="20">
                    <path
                      stroke="currentColor"
                      d="M8.709 14.155a4.793 4.793 0 0 1 5.412-6.55m-5.412 6.55a4.793 4.793 0 0 0 6.31 2.54c.1-.044.21-.06.317-.042l2.213.37c.18.03.337-.127.307-.307l-.371-2.21a.566.566 0 0 1 .041-.316 4.793 4.793 0 0 0-3.405-6.586m-5.412 6.55a5.845 5.845 0 0 1-2.682-.461.689.689 0 0 0-.385-.05l-2.695.45a.324.324 0 0 1-.373-.373l.452-2.69a.689.689 0 0 0-.05-.386 5.835 5.835 0 0 1 9.482-6.435 5.808 5.808 0 0 1 1.663 3.395"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.25"
                    ></path>
                  </svg>
                  Talk to Founders
                </button>
              </NavLink>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="relative py-24 px-5 bg-transparent">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Our Purpose & Direction
              </h2>
              <div className="w-80 h-1.5 bg-fuchsia-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Mission Card */}
              <div
                onMouseEnter={() => setHoveredCard('mission')}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative"
              >
                <div className="relative bg-purple-50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 transition-all duration-500 hover:bg-white hover:shadow-md h-full">
                  <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-fuchsia-700 rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                    <Target className="w-8 h-8 text-purple-200" />
                  </div>
                  
                  <div className="mt-8">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-3xl font-bold text-fuchsia-950">Our Mission</h3>
                    </div>
                    <p className="text-purple-400 text-sm font-medium mb-6">
                      Empowering businesses with knowledge, talent, and global excellence.
                    </p>
                    <p className="text-black leading-relaxed text-base">
                      Our mission is to deliver exceptional RPO and KPO services that empower businesses to unlock their full potential. By combining industry expertise, innovative solutions, and cutting-edge technology, we aim to streamline recruitment and knowledge processes, driving efficiency, scalability, and long-term success for our clients. We are committed to fostering strong partnerships, delivering personalized support, and continuously improving our services to exceed client expectations.
                    </p>
                  </div>
                  
                  <div className={`absolute bottom-0 left-0 right-0 h-1 hover:shadow-xl  rounded-b-3xl transition-all duration-500 ${hoveredCard === 'mission' ? 'opacity-100' : 'opacity-0'}`}></div>
                </div>
              </div>

              {/* Vision Card */}
              <div
                onMouseEnter={() => setHoveredCard('vision')}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative"
              >
                <div className="relative bg-purple-50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 transition-all duration-500 hover:bg-white hover:shadow=lg h-full">
                  <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-fuchsia-800 rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                    <Sparkles className="w-8 h-8 text-purple-200" />
                  </div>
                  
                  <div className="mt-8">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-3xl font-bold text-fuchsia-950">Our Vision</h3>
                    </div>
                    <p className="text-purple-400 text-sm font-medium mb-6">
                      Transforming businesses with cutting-edge insights and world-class talent solutions.
                    </p>
                    <p className="text-black leading-relaxed text-base">
                      At Evren Research, we aim to reshape the future of talent acquisition and knowledge outsourcing. Our vision is to deliver transformative RPO and KPO solutions that foster innovation, empower organizations, and drive sustainable growth. By leveraging data, technology, and expertise, we seek to create limitless opportunities for our clients, positioning them for long-term success in a rapidly evolving global market.
                    </p>
                  </div>
                  
                  <div className={`absolute bottom-0 left-0 right-0 h-1 hover:shadow-xl rounded-b-3xl transition-all duration-500 ${hoveredCard === 'vision' ? 'opacity-100' : 'opacity-0'}`}></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="relative py-24 px-5 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-fuchsia-950 mb-6">
                Our Core Values
              </h2>
              <p className="text-xl text-fuchsia-900 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="group relative"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="relative bg-[#260433] backdrop-blur-lg border border-white/10 rounded-2xl p-8 h-full transition-all duration-500 hover:bg-fuchsia-900 hover:border-white/30 hover:transform hover:scale-105 hover:-translate-y-2">
                      {/* Glow effect on hover */}
                      <div 
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                        style={{ boxShadow: `0 0 50px ${value.glowColor}` }}
                      ></div>
                      
                      <div className="relative z-10">
                        <div className={`inline-flex p-4 rounded-xl bg-purple-200 mb-6 shadow-lg group-hover:shadow-2xl transition-shadow`}>
                          <Icon className="w-8 h-8 text-fuchsia-900 bg-purple-200" />
                        </div>
                        
                        <h3 className="text-2xl font-bold text-white/100 mb-4">
                          {value.title}
                        </h3>
                        
                        <p className="text-white/80 leading-relaxed">
                          {value.description}
                        </p>
                      </div>

                      {/* Bottom accent line */}
                      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${value.gradient} rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Section */}
            <div className="mt-20 text-center">
              <div className="inline-block bg-white/90 backdrop-blur-xl border border-white/10 rounded-3xl p-10">
                <p className="text-xl font-semibold text-[#260433] mb-6">
                  Ready to transform your business?
                </p>
                <NavLink to="/contact">
                  <button className="group relative px-10 py-5 bg-fuchsia-800 text-white rounded-2xl font-bold text-lg overflow-hidden transition-all duration-300 hover:bg-fuchsia-950 hover:scale-105">
                    <span className="relative z-10 flex items-center gap-2">
                      Let's Discuss Your Project
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                    
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </section>

        
      </div>
    </>
  );
};

export default CompanyOverView;
