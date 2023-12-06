import img1 from "../assets/img/hero3.jpg";
import img2 from "../assets/img/hero4.jpg";
import img3 from "../assets/img/hero6.jpg";

import DestinationCard from "../layouts/DestinationCard";

const Destination = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center md:mx-32 mx-5">
      <h1 className=" font-medium text-center text-4xl lg:mt-0 mt-16">
        Most Popular Destinations
      </h1>

      <div className=" flex flex-col lg:flex-row gap-5 mt-14">
        <DestinationCard
          img={img1}
          title="Bandarban"
          para="It is one of the three hill districts of Bangladesh and a part of the Chittagong Hill Tracts, the others being Rangamati District and Khagrachhari District."
        />
        <DestinationCard
          img={img2}
          title="Sundarbans"
          para="Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal."
        />
        <DestinationCard
          img={img3}
          title="St. Martin Island"
          para="St. Martin is a small island in the north eastern part of the Bay of Bengal, created the southernmost part of our country."
        />
      </div>
    </div>
  );
};

export default Destination;
