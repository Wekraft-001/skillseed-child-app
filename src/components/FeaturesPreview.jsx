import React from "react";

const FeaturesPreview = () => {
  const features = [
    {
      icon: "fa-solid fa-palette",
      title: "Age-Appropriate Design",
      description:
        "Each age group gets questions and visuals designed specifically for their developmental stage.",
      color: "text-[#FFC107]",
      bgColor: "bg-[#FFC107]/20",
    },
    {
      icon: "fa-solid fa-robot",
      title: "AI-Powered Insights",
      description:
        "Get personalized feedback and recommendations based on your unique responses.",
      color: "text-[#1A73E8]",
      bgColor: "bg-[#1A73E8]/20",
    },
    {
      icon: "fa-solid fa-award",
      title: "Unlock Achievements",
      description:
        "Earn badges, unlock superpowers, and discover your unique talents and interests.",
      color: "text-[#4CAF50]",
      bgColor: "bg-[#4CAF50]/20",
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#212121] mb-4">
            What Makes Our Quiz Special? ✨
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Every age group gets a unique, fun experience designed just for
            them!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6">
              <div
                className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}
              >
                <i className={`${feature.icon} ${feature.color} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-semibold text-[#212121] mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesPreview;
