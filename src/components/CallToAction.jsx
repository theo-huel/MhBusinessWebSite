"use client";

import MyButton from './MyButton.jsx'
import { useTranslation } from 'react-i18next';
import Icon from './Icon';
import { usePathname } from "next/navigation";
import Link from "next/link";


// Composant CallToAction
const CallToAction = ({}) => {

  const { t } = useTranslation("home");
  const pathname = usePathname();

  if (pathname === "/contact" || pathname === "/services") return null;
  return (
    <section className="bg-[#AD9551] text-white py-20 rounded-xl mx-auto max-w-6xl my-20 shadow-xl">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-8">{t("calltoaction.h2")}</h2>
        {/* <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
        {t("calltoaction.p")}
        </p> */}
        <Link href="/services">
          <MyButton variant="secondary">
            {t("hero.btn2")}
          </MyButton>
        </Link>


      </div>
    </section>
  )
};
export default CallToAction;


