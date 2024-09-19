import React from "react";

const Pricing = () => {
  const pricingPlans = [
    {
      title: "Starter",
      price: "$1",
      period: "/ month",
      features: ["1 Website", "SSL (HTTPS)", "SiteFast Domain","SiteFast Branding Removal"],
      buttonText: "Start Now",
      isFeatured: false,
    },
    {
      title: "Basic",
      price: "$29",
      period: "/ month",
      features: ["15 Websites", "SSL (HTTPS)", "Custom Domain", "SiteFast Branding Removal"],
      buttonText: "Start Now",
      isFeatured: true,
    },
    {
      title: "Plus",
      price: "$49",
      period: "/ month",
      features: [
        "50 Websites",
        "SSL (HTTPS)",
        "Custom Domain",
        "SiteFast Branding Removal",
        "Google Analytics",
        "Email Integration",
      ],
      buttonText: "Start Now",
      isFeatured: false,
    },
  ];

  return (
    <section className="py-6 bg-white sm:py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-6 lg:px-0 max-w-7xl text-center">
        <h2 className="text-3xl font-semibold sm:text-4xl md:text-5xl text-gray-900">Simple, Transparent Pricing</h2>

        <div className=" max-w-5xl mx-auto grid grid-cols-1 gap-4 mt-8 sm:gap-6 md:gap-0 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col items-center max-w-md p-8 mx-auto my-8 bg-white border border-solid rounded-lg 
              ${plan.isFeatured ? "border-4 border-blue-600 bg-white" : "border-gray-200"}`}
            >
              <h3 className="text-2xl font-semibold sm:text-3xl md:text-4xl text-black">{plan.title}</h3>
              <div className="flex items-end mt-6">
                <p className="text-6xl font-semibold">{plan.price}</p>
                <p>{plan.period}</p>
              </div>
              <ul className="mt-4 space-y-2 text-left">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center font-semibold">
                    <svg
                      className="w-5 h-5 mr-2 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`mt-8 w-full py-3 text-sm font-semibold text-center rounded-md ${
                  plan.isFeatured
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "text-blue-600 border border-blue-600 hover:bg-blue-700 hover:text-white"
                }`}
              >
                {plan.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
