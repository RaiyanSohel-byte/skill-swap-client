import { useState } from "react";
import { FaRegPaperPlane } from "react-icons/fa";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribed:", email);
    // API call here...
  };

  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-6 lg:px-0">
        {/* Container */}
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-10 lg:p-16 text-white relative overflow-hidden">
          {/* Glow Effects */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-3xl"></div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-400/20 rounded-full blur-2xl"></div>

          {/* Content */}
          <div className="relative z-10 text-center space-y-5">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Join Our Newsletter
            </h2>
            <p className="text-base lg:text-lg opacity-90 max-w-xl mx-auto">
              Stay updated with new skills, tips, and learning opportunities
              delivered straight to your inbox.
            </p>

            {/* Form */}
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col lg:flex-row items-center gap-4 mt-8 max-w-xl mx-auto"
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="input input-bordered w-full rounded-full text-black bg-white shadow-md"
                onChange={(e) => setEmail(e.target.value)}
              />

              <button className="btn btn-primary rounded-full text-white shadow-lg flex items-center gap-2 bg-primary hover:bg-primary/90 border-none px-8">
                <FaRegPaperPlane />
                Subscribe
              </button>
            </form>

            <p className="text-white/80 text-xs pt-2">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
