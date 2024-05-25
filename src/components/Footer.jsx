import { useMediaQuery } from "react-responsive";

const links = [
  {
    option: "Terms",
    link: "/#",
  },
  {
    option: "Privacy",
    link: "/#",
  },
  {
    option: "DMCA",
    link: "/#",
  },
  {
    option: "Support",
    link: "/#",
  },
  {
    option: "Contact Us",
    link: "/#",
  },
];

const Footer = () => {
  const isFooterVisible = useMediaQuery({ minWidth: 700 });
  return (
    <div
      className={`bg-neutral-700 text-gray-300 absolute bottom-0 text-center w-full ${
        isFooterVisible ? "flex justify-center" : "hidden"
      }`}
    >
      <div className="pt-8 pb-6">
        <div className="flex">
          {links.map((link, index) => {
            return (
              <li className="list-none px-6" key={index}>
                <a href={link.link}>{link.option}</a>
              </li>
            );
          })}
        </div>
        <div className="text-sm">
          <div>©2024 BALAUR MARKETING SOLUTIONS SRL. All Rights Reserved.</div>
          <div>
            Nr. 14, Camera 1 Strada Gabroveni Etaj 1 Ap 4 Bucuresti Sectorul 3,
            Romania
          </div>
          <div>help@tendermomentswithyou.com</div>
          <div>(844) 211-8137</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
