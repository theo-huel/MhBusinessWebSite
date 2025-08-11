"use client";

import { useTranslation } from "react-i18next";
import Icon from "./Icon";
import Link from "next/link";

// Composant Footer
const Footer = () => {
  const { t } = useTranslation("navbar");

  const navItems = [
    { name: t("home.name"), href: "/" },
    { name: t("about.name"), href: "/about" },
    { name: t("services.name"), href: "/services" },
    { name: t("team.name"), href: "/team" },
    { name: t("contact.name"), href: "/contact" },
  ];

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Section 1: À Propos */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-[#AD9551]">{t("footer.mh")}</h3>
          <p className="text-gray-400 text-sm">{t("footer.p")}</p>
        </div>

        {/* Section 2: Liens Rapides */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-[#AD9551]">{t("footer.link")}</h3>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-gray-400 hover:text-white transition duration-300">
                    
                  {item.name}
                  
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 3: Contact */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-[#AD9551]">{t("footer.contact")}</h3>
          <p className="text-gray-400 flex items-center mb-2">
            <Icon name="Mail" className="w-5 h-5 mr-2 text-[#AD9551]" />
            matis@mhbusiness.be
          </p>
          <p className="text-gray-400 flex items-center">
            <Icon name="Phone" className="w-5 h-5 mr-2 text-[#AD9551]" />
            0477 64 46 42
          </p>
          <div className="flex space-x-4 mt-4">
            {/* Liens vers les réseaux sociaux (placeholders) */}
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              LinkedIn
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              Facebook
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-8 pt-8 border-t border-gray-800">
        &copy; {new Date().getFullYear()} {t("footer.rights")}
      </div>
    </footer>
  );
};

export default Footer;
