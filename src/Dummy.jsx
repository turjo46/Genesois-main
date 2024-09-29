// src/Dummy.js

import Card from "./Card";


// Dummy data for cards
const cardsData = [
  { image: "https://webextheme.com/html/loxicat/images/project/project_01.jpg", title: "Building Construction", subtitle: "- Industry" },
  { image: "https://webextheme.com/html/loxicat/images/project/project_02.jpg", title: "Metal Industry", subtitle: "- Industry" },
  { image: "https://webextheme.com/html/loxicat/images/project/project_03.jpg", title: "Bridge Construction", subtitle: "- Industry" },
  { image: "https://webextheme.com/html/loxicat/images/project/project_04.jpg", title: "Car Manufacturing", subtitle: "- Industry" },
  { image: "https://webextheme.com/html/loxicat/images/project/project_05.jpg", title: "Metal Industry", subtitle: "- Industry" },
  { image: "https://webextheme.com/html/loxicat/images/project/project_06.jpg", title: "Building Construction", subtitle: "- Industry" },
];

const Dummy = () => {
  return (
    <div className="bg-gray-100 py-10 ">
      <div className=" container mx-auto max-w-[1200px]  grid grid-cols-1 md:grid-cols-3 gap-6">
        {cardsData.map((card, index) => (
          <Card key={index} image={card.image} title={card.title} subtitle={card.subtitle} />
        ))}
      </div>
    </div>
  );
};

export default Dummy;
