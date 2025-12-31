import { Helmet } from "react-helmet";
import React from "react";
import {
  ArrowUpRight,
  ChartColumnBig,
  Lightbulb,
  Puzzle,
  RefreshCw,
  UsersRound,
} from "lucide-react";
import { ServiceCard } from "../../pages/services/Card"; // 👈 import your reusable card component
// import { Puzzle, ChartColumnBig, RefreshCw, Lightbulb, UsersRound, ArrowUpRight } from "lucide-react";

function WhyUs() {
  const services = [
    {
      key: "customized",
      icon: Puzzle,
      title: "Customized Solutions",
      description:
        "We design personalized RPO and KPO services that align with your specific business objectives, ensuring maximum impact and value.",
      color: "border-green-400",
    },
    {
      key: "data-driven",
      icon: ChartColumnBig,
      title: "Data-Driven Decisions",
      description:
        "By leveraging data and insights, we optimize recruitment and knowledge processes, ensuring smarter decisions and better results for our clients.",
      color: "border-purple-400",
    },
    {
      key: "agility",
      icon: RefreshCw,
      title: "Agility & Flexibility",
      description:
        "We adapt to changing market demands and evolving business needs, offering scalable solutions that grow with your business.",
      color: "border-red-400",
    },
    {
      key: "innovation",
      icon: Lightbulb,
      title: "Innovation & Technology",
      description:
        "By integrating the latest technologies and automation, we improve efficiency, accuracy, and scalability, driving success in every project we undertake.",
      color: "border-blue-400",
    },
    {
      key: "collaboration",
      icon: UsersRound,
      title: "Collaborative Partnerships",
      description:
        "We work closely with clients to understand their goals and build strong, long-term partnerships that promote mutual success and sustained growth.",
      color: "border-yellow-400",
    },
    {
      key: "improvement",
      icon: ArrowUpRight ,
      title: "Continuous Improvement",
      description:
        "We constantly evaluate and refine our strategies and processes, ensuring we stay at the forefront of industry trends and always deliver exceptional outcomes.",
      color: "border-orange-400",
    },
  ];

  const rightList = [
    {
      title: "Strategic Talent Acquisition",
      description:
        "We go beyond traditional recruitment by understanding your business culture and long-term vision, ensuring the right talent fits your goals.",
    },
    {
      title: "Advanced Knowledge Solutions",
      description:
        "Our (KPO),(RPO) services empower clients by offering data-driven insights, detailed research, and specialized knowledge that fosters smarter decisions and faster growth.",
    },
    {
      title: "Precision-Driven Quality",
      description:
        "We hold ourselves to the highest standards, focusing on precision, accuracy, and efficiency to deliver flawless, actionable results every time.",
    },
    {
      title: "Client-Focused Innovation",
      description:
        "We thrive on customizing our approach to each client’s unique challenges, creating transformative solutions that drive operational success and strategic growth.",
    },
    {
      title: "A Legacy of Excellence",
      description:
        "Evren Research is known for continuously setting the benchmark in RPO and KPO services, not just meeting but consistently exceeding industry standards.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Why Choose Us - Evren Research</title>
        <meta
          name="description"
          content="Learn why Evren Research is the best choice for your business research and data analytics needs."
        />
        <link rel="canonical" href="https://www.evrenresearch.com/why-us" />
      </Helmet>

      <section className="relative  px-6 md:px-12 py-16 md:py-24 sm:py-24 ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Section */}
          <div data-aos="fade-right" data-aos-duration="1200">
            <h1 className="text-3xl md:text-4xl font-bold text-[#260433] mb-8 ">
              Our Strategic Approach
            </h1>
            <p className="text-gray-700 leading-relaxed mb-10">
              At Evren Research, our strategic approach is designed to deliver tailored,
              high-performance solutions that meet the unique needs of each client. We focus
              on blending industry-leading expertise, innovative methodologies, and cutting-edge
              technology to drive superior outcomes in RPO and KPO services.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.key}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  color={service.color}
                  className={`transform transition-transform duration-300 hover:-translate-y-1 ${
                    index % 3 === 0
                      ? "lg:translate-y-4"
                      : index % 3 === 1
                      ? "lg:translate-y-0"
                      : "lg:-translate-y-4"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div data-aos="fade-left" data-aos-duration="1200">
            <h2 className="text-3xl md:text-4xl font-bold text-[#260433] mb-8">
              Industry Excellence
            </h2>
            <div className="space-y-6">
              {rightList.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-5 md:p-6 border-l-4 border-fuchsia-700 rounded-r-xl shadow-sm hover:shadow-md transition"
                >
                  <h4 className="font-semibold text-[#260433]">{item.title}</h4>
                  <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Blockquote */}
            <div className="mt-10 pt-6 border-t border-gray-200">
              <blockquote className="italic text-gray-700 font-semibold text-lg">
                "Do what you do best and outsource the rest."
              </blockquote>
              <p className="text-sm text-gray-500 mt-2">
                – Peter Drucker, Renowned Management Consultant
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhyUs;
