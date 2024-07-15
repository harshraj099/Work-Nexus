import { FaBuilding, FaSuitcase, FaUsers, FaUserPlus } from "react-icons/fa";

const HeroSection = () => {
  const details = [
    {
      id: 1,
      title: "1,23,441",
      subTitle: "Live Job",
      icon: <FaSuitcase />,
    },
    {
      id: 2,
      title: "91220",
      subTitle: "Companies",
      icon: <FaBuilding />,
    },
    {
      id: 3,
      title: "2,34,200",
      subTitle: "Job Seekers",
      icon: <FaUsers />,
    },
    {
      id: 4,
      title: "1,03,761",
      subTitle: "Employers",
      icon: <FaUserPlus />,
    },
  ];

  return (
    <div className="flex flex-col py-10 bg-[#D6EAF8]">
      <div className="container mx-auto flex w-full h-[450px] mb-7 gap-8">
        <div className="title flex flex-col justify-center flex-1">
          <h1>Find a job that suits</h1>
          <h1>your interests and skills</h1>
          <p className="mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            voluptate repellat modi quidem aliquid eaque ducimus ipsa et, facere
            mollitia!
          </p>
        </div>
        <div className="image flex-1 overflow-hidden">
          <img src="/jobs.png" alt="hero" className="w-full h-[80%]" />
        </div>
      </div>

      <div className="details flex justify-between py-12 w-[1500px] max-w-[1500px] mx-auto">
        {details.map((element) => (
          <div
            key={element.id}
            className="card flex gap-5 items-center bg-[#85C1E9] w-[220px] p-5 hover:shadow-2xl cursor-pointer transition-shadow duration-300 border-4 border-[#21618C]"
          >
            <div className="icon text-3xl bg-[#85C1E9] flex items-center justify-center p-3 text-black">
              {element.icon}
            </div>
            <div className="content">
              <p className="font-bold">{element.title}</p>
              <p className="text-gray-900 text-base mt-1">{element.subTitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
