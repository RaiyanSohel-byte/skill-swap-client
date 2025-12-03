import { FaInstagram, FaLinkedin, FaStar, FaTwitter } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import Marquee from "react-fast-marquee";
const providers = [
  {
    id: 1,
    name: "Alex Martin",
    email: "alex@skillswap.com",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    rating: 4.9,
    skills: 12,
  },
  {
    id: 2,
    name: "John Kim",
    email: "john@skillswap.com",
    image:
      "https://images.unsplash.com/photo-1654110455429-cf322b40a906?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    rating: 4.8,
    skills: 8,
  },
  {
    id: 3,
    name: "John Doe",
    email: "john@skillswap.com",
    image:
      "https://images.unsplash.com/photo-1639747280804-dd2d6b3d88ac?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    rating: 4.7,
    skills: 10,
  },
  {
    id: 4,
    name: "Marcus Lee",
    email: "lee@skillswap.com",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    rating: 4.9,
    skills: 6,
  },
  {
    id: 5,
    name: "Ashley Young",
    email: "ashley@skillswap.com",
    image:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    rating: 4.7,
    skills: 4,
  },
];

const TopRatedProviders = () => {
  return (
    <section>
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="title">Top Rated Providers</h2>
        <p className="subTitle">
          Meet the most trusted and talented instructors in our community.”
        </p>
      </div>

      <div>
        <Marquee speed={50} className="py-4 max-w-[1200px] mx-auto">
          {providers.map((provider, index) => (
            <div
              key={provider.id}
              className="mx-4 card bg-white shadow-lg hover:shadow-xl transition-shadow rounded-lg p-6 text-center min-w-[250px]"
              data-aos="fade-up"
              data-aos-delay={index * 20}
            >
              <div className="avatar mx-auto mb-4">
                <div className="w-24 h-24 rounded-full overflow-hidden ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={provider.image} alt={provider.name} />
                </div>
              </div>
              <h3 className="text-xl text-primary font-semibold mb-1">
                {provider.name}
              </h3>
              <p className="text-gray-500 text-sm mb-2">{provider.email}</p>
              <div className="flex items-center justify-center mb-2">
                <FaStar className="text-yellow-400 mr-1" />
                <span className="font-semibold">{provider.rating}</span>
              </div>
              <p className="text-gray-600 text-sm">
                {provider.skills} skills offered
              </p>
              <div className="flex justify-center gap-5 mt-4">
                <a href="">
                  <FaSquareFacebook size={28} color="#0D9488" />
                </a>
                <a href="">
                  <FaTwitter size={28} color="#0D9488" />
                </a>
                <a href="">
                  <FaLinkedin size={28} color="#0D9488" />
                </a>
                <a href="">
                  <FaInstagram size={28} color="#0D9488" />
                </a>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default TopRatedProviders;
