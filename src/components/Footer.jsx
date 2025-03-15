import React from "react";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialLinkedin,
  TiSocialInstagram,
  TiSocialYoutube,
} from "react-icons/ti";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Footer() {
  return (
    <main className="bg-white">
      <article className="w-[85vw] m-auto flex flex-col md:flex-row flex-wrap justify-between gap-8 py-12">
        <section className="w-full md:w-3/12 grid gap-4">
          <img src="/logo.png" alt="logo" className="w-24 md:w-32" />
          <p className="text-sm text-gray-700">
            Best information about the company goes here but now lorem ipsum is
          </p>
          <div className="flex items-center gap-3">
            {[
              TiSocialFacebook,
              TiSocialTwitter,
              TiSocialLinkedin,
              TiSocialInstagram,
              TiSocialYoutube,
            ].map((Icon, index) => (
              <div
                key={index}
                className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center"
              >
                <Icon className="text-white" />
              </div>
            ))}
          </div>
        </section>

        {[
          { title: "About", items: ["About Us", "Find Store", "Categories", "Blogs"] },
          { title: "Partnership", items: ["About Us", "Find Store", "Categories", "Blogs"] },
          { title: "Information", items: ["Help Center", "Money Refund", "Shipping", "Contact us"] },
          { title: "For users", items: ["Login", "Register", "Settings", "My orders"] },
        ].map((section, index) => (
          <section key={index} className="w-auto">
            <p className="text-sm font-semibold mb-2">{section.title}</p>
            {section.items.map((item, idx) => (
              <p key={idx} className="text-gray-400 text-sm cursor-pointer py-[2px] hover:text-black">
                {item}
              </p>
            ))}
          </section>
        ))}

        <section className="w-auto">
          <p className="text-sm font-semibold mb-2">Get app</p>
          <div className="grid gap-2 mt-2">
            <img src="/apple.png" alt="Apple Store" className="w-24 md:w-32" />
            <img src="/gplay.png" alt="Google Play" className="w-24 md:w-32" />
          </div>
        </section>
      </article>

      <section className="bg-gray-100 border-t border-gray-200 p-4">
        <div className="w-[85vw] m-auto flex items-center justify-between gap-4">
          <div className="text-sm text-gray-500 text-center md:text-left">
            &copy; 2025 Ecommerce
          </div>
          <div>
            <Select>
              <SelectTrigger className="w-auto rounded-none border-0 shadow-none focus:ring-0 text-gray-500 text-sm">
                <SelectValue placeholder="English, USD" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="english">English, USD</SelectItem>
                <SelectItem value="urdu">Urdu, Pakistan</SelectItem>
                <SelectItem value="uk">English, UK</SelectItem>
                <SelectItem value="arabic">Arabic, UAE</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>
    </main>
  );
}
