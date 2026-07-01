import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaRegCopyright,
} from "react-icons/fa";

import { logo } from "../../assets/images";
import FooterColumn from "./FooterColumn";
import { quickLinks, supportLinks } from "../../data/footerLinks";

function Footer() {
  return (
    <footer className="mt-32 border-t border-white/10">

      <div className="mx-auto flex max-w-7xl justify-between gap-16 px-8 py-20">

        {/* Brand */}
        <div className="max-w-sm">

          <div className="flex items-center gap-3">

            <img
              src={logo}
              alt="FloraVision"
              className="w-11"
            />

            <h2 className="text-3xl font-bold tracking-tight text-white">
              FloraVision.
            </h2>

          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Bringing nature closer to your home with premium indoor plants,
            modern décor, and exceptional customer experience.
          </p>

          <div className="mt-8 flex gap-4">

            <button className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#2ED573] hover:text-black">
              <FaFacebookF />
            </button>

            <button className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#2ED573] hover:text-black">
              <FaInstagram />
            </button>

            <button className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#2ED573] hover:text-black">
              <FaTwitter />
            </button>

            <button className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#2ED573] hover:text-black">
              <FaLinkedinIn />
            </button>

          </div>

        </div>

        {/* Links */}

        <FooterColumn
          title="Quick Links"
          links={quickLinks}
        />

        <FooterColumn
          title="Support"
          links={supportLinks}
        />

        {/* Contact */}

        <div className="max-w-sm">

          <h3 className="text-xl font-semibold text-white">
            Contact
          </h3>

          <div className="mt-6 space-y-6 text-gray-300">

            <div>
              <p className="font-medium text-white">
                Email
              </p>

              <p className="mt-2">
                support@floravision.com
              </p>
            </div>

            <div>
              <p className="font-medium text-white">
                Phone
              </p>

              <p className="mt-2">
                +91 98765 43210
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-white/10 py-8">

        <p className="flex items-center justify-center gap-2 text-sm tracking-wide text-gray-400">

          <FaRegCopyright className="text-xs" />

          {new Date().getFullYear()} FloraVision. All rights reserved.

        </p>

      </div>

    </footer>
  );
}

export default Footer;