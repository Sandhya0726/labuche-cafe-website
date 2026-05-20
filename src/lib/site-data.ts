import type { HeaderNavItem } from "@/components/organisms/Header";
import type { AboutSectionProps } from "@/components/sections/AboutSection";
import type { ContactSectionProps } from "@/components/sections/ContactSection";
import type { CraftSectionProps } from "@/components/sections/CraftSection";
import type { FoundersSectionProps } from "@/components/sections/FoundersSection";
import type { GalleryBentoSectionProps } from "@/components/sections/GalleryBentoSection";
import type { GallerySectionProps } from "@/components/sections/GallerySection";
import type { HeroSectionProps } from "@/components/sections/HeroSection";
import type { MapShowcaseSectionProps } from "@/components/sections/MapShowcaseSection";
import type { MenuSectionProps } from "@/components/sections/MenuSection";
import type { PhilosophySectionProps } from "@/components/sections/PhilosophySection";
import type { PromiseSectionProps } from "@/components/sections/PromiseSection";
import type { ReservationCtaSectionProps } from "@/components/sections/ReservationCtaSection";
import type { ReservationFormSectionProps } from "@/components/sections/ReservationFormSection";
import type { SiteFooterProps } from "@/components/sections/SiteFooter";
import type { SplitMediaSectionProps } from "@/components/sections/SplitMediaSection";
import type { TestimonialsSectionProps } from "@/components/sections/TestimonialsSection";
import {
  Coffee,
  HandHeart,
  Leaf,
  Mail,
  MapPin,
  Mountain,
  Phone,
  Sparkles,
  Sprout,
  Users,
} from "lucide-react";

export const brand = "Lobuche Cafe";

const baseNavItems: HeaderNavItem[] = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/#menu" },
  { label: "About Us", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export function getNavItems(activeLabel?: string): HeaderNavItem[] {
  return baseNavItems.map((item) => ({
    ...item,
    active: activeLabel ? item.label === activeLabel : false,
  }));
}

export const navItems = getNavItems("Home");

export const hero: HeroSectionProps = {
  eyebrow: "Modern artisanal · Australia",
  title: "Warm Nepali Flavors in the Heart of Australia",
  description:
    "Handcrafted dishes and a cozy atmosphere in every bite, blending the soul of the Himalayas with the precision of Melbourne coffee culture.",
  primaryCta: { label: "View Menu", href: "#menu" },
  secondaryCta: { label: "Book a Table", href: "/reserve" },
  backgroundImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAKWvHC4-q05jYbC_NfEq8BTu0-FnJj8qZ4AjVGkhgAklE3BWJ9vJ_4gH__KuqnTM-RTEGF1MfP7yCuo2vIWF2gPdWEQ1XeRhJTlkQofbmO4txicIHtdaIe63tXBg-axkmdeSjc50iU92OzYrQLMG3Vvb1NMepWveaeRjyO5nDP2OZeXYxQbqavrtm10v0x-23xsXs-MUDYtC3X5nOvYv0aB5z-dG6ewyb7KAoyMVezy8JeKBKoGoZAtlYMjtp6sGO1JGpvPCCf0sCq",
  backgroundAlt:
    "Modern artisanal cafe interior with warm ambient lighting and an espresso machine",
};

export const about: AboutSectionProps = {
  id: "about",
  eyebrow: "Our Story",
  title: "Where Himalayan Soul Meets Modern Brew",
  paragraphs: [
    "Lobuche Cafe was born from a simple longing: to bring the genuine, unhurried warmth of a Nepali kitchen to the vibrant streets of Australia. We believe coffee is more than caffeine; it's a bridge between worlds.",
    "Every grain of spice in our momos and every bean in our signature Himalayan roast is selected with an artisanal eye for quality. We invite you to slow down, savor the spices, and find a piece of the mountains in your morning cup.",
  ],
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDt-7N1dIkCrUDaHuMCD-sAU3uS08oUCxpYbWk6OK09w7pBwOBnJ0MnmkHXmLBV_obZpha-6kXWpstdgkDoBjOfgHhEWnSdCPPrzLhFNnyc96irFiHUnKnHyMGNLAyCHWtiqtsdXdoic4LLu7BA8TeQ0E34DBx2tLrHRaryh6qKf5l1x4tXVHH__ex62Hn6V5UIpvEyVzSvas_2wOITrabcZr6lMqEyHkLGLZ_NAyemSt325sM64J6UBsY5gq1_88dQ_2z19H0kvgen",
  imageAlt: "Barista pouring steaming coffee in a minimalist cafe",
  stats: [
    { value: "15+", label: "Signature Spices" },
    { value: "100%", label: "Ethical Sourcing" },
  ],
};

export const menu: MenuSectionProps = {
  id: "menu",
  eyebrow: "Crafted with Love",
  title: "Our Signature Dishes",
  link: { label: "Explore Full Menu", href: "#full-menu" },
  dishes: [
    {
      title: "Authentic Steamed Momos",
      description:
        "Hand-pleated dumplings filled with spiced minced meat or vegetables, served with our secret sesame-tomato achar.",
      price: "$18.00",
      tag: "House Favorite",
      featured: true,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBKtcjxEc-r3IXedS2Gct27jM-81G9aJ54pfBB7bbaD0T8amNcrpDk7aHIfm59onTrvg3HgDmbj_k0wOKi_oJESsyikBHZ7PIZOrLLNaDE9xRNPyVjek4u5s1eAw8kPAexZFmnXYw9KW_qfMU9xQhLGZVX_hoWKK0JUZ6bhjD73Z4yQUOCBo7MaGbTSQUYKKHKPGFLr726Hb9wm6JZJAY2k4c6bVwsuKZM1mbsivTd4zYJfnzOvvtfeYieR1eeGAqwVTtb1T-HjI6Vp",
      imageAlt: "Steamed Nepali momos on a brass plate",
    },
    {
      title: "Himalayan Peak Roast",
      description: "High-altitude beans with notes of dark chocolate and Himalayan wild berries.",
      price: "$6.50",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD_F2oVD_L2A3ajdEZGzyc-GjQF3WXaAwt5suL0BljuEcEqlMYI8YlQsANuKz9RLAZu-imRP3dPmam35ceK1wLR3j7nK1a_lTf6_SiHlfXYtAZFzsyvsemr0UJyYVAg9qZQXeUQBPUDrlx4lM06HmZMk8lStzH1C94fVDnxg4lzELEkLFqGAjHDA4PycnrY0jCJQNX0qbh-MYOa0Dbqya8mCrnStK1zSdV6QjiSScBxlQW7pI7xwKa5gZ9MNi46lNS25lwxOpLEvTi5",
      imageAlt: "Latte with leaf art in dark forest green ceramic cup",
    },
    {
      title: "Sherpa Thukpa",
      description: "Hearty noodle soup with hand-pulled noodles and mountain herbs.",
      price: "$22.00",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBLS_HORZ-ZSPn59BNnMe4KY7jpPETbsyvSu_AVM830Km03qoZFqbyLdxzAXQpyg15XPUb6B7f7eV1DH2KhcbhJA1fG0g_6uX6V3kV22EPZKnsy_uEDgGy8hqh8Z0_sIx5akW2oVTV-2V02qsccKQRUesvVzSAb8Te2aWQsK1Mjz7s_mhdvlJPxbRWj7Jaonvkq-BKiZzLkt4vsCzy9yhEPziag3mlDTHs3WpVsP2iTnSbNBNj4Ws4uitomCINlsuw1c-jQd94mFYZe",
      imageAlt: "Steaming bowl of Thukpa noodle soup",
    },
    {
      title: "Golden Sel Roti",
      description: "Sweet, crispy rice flour bread rings, a traditional festive staple.",
      price: "$12.00",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAVcv06rcC7QQdRCPbqHlxyWqohiS5bbZTLu9QLZJjFh04WOM3X_pRearfgHPK2FqhvS_Y1LXOFwa-EA4YmSe82ok9cq-8F_fvAjm5ElCm9q5mi26Niaw_TJ29C_AX-5F53hPIjY44bQNel1M64gcPkX9qHcxOdlW2bx-o66F4nXdMuTsVuPDu06WwIZFi8te2qKOYs_lJInKojAOtWuMdBbNHkfRHEJjng6RtRU7OdWWqvWTxdmOctHOppIy_Wsry8X6Q5nt_1fqfS",
      imageAlt: "Stack of golden Sel Roti rings on a ceramic platter",
    },
    {
      title: "Artisanal Bakery",
      description: "Daily selections of sourdough, croissants, and matcha treats.",
      price: "$7.50+",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCgTv4zk89ERm6Id-FrzJFy2C2xYt1m_l0R8z3mpGpVniQ6ltWpGmmDnyunlM7KLNHah2waXbb9uZiZHx7qzK5psQFIEoCbJ0huLP81vFZxrmFKfwlg73hIQSP2cOyz5c3BK0qECokCcKDqZSfLwNrIwfMTBwbbolXELPBzzqjeTdnsNPqV8IJo0lSyGwwr3X5_hwR-rK_oMwbYDfZT9CBKD7CrKcHH6c9XhTBSVuH4u8gWUmWAFYLwe1dI8U9WLcLKnT9kcXgRBOLC",
      imageAlt: "Matcha latte and almond croissant on stone plate",
    },
  ],
};

export const promise: PromiseSectionProps = {
  id: "promise",
  eyebrow: "Our Standards",
  title: "Our Promise of Quality",
  description:
    "We combine ancient tradition with modern standards to ensure every visit is an experience worth remembering.",
  features: [
    {
      icon: Sparkles,
      tone: "accent",
      title: "Hygienic Environment",
      description:
        "Pristine kitchen standards and a sanitized dining space for your peace of mind.",
    },
    {
      icon: Leaf,
      tone: "sage",
      title: "Fresh Ingredients",
      description: "Sourced locally from Australian farms and ethically from the hills of Nepal.",
    },
    {
      icon: Sprout,
      tone: "neutral",
      title: "Cozy Atmosphere",
      description: "A sanctuary of calm with tactile textures and warm Himalayan lighting.",
    },
    {
      icon: HandHeart,
      tone: "warm",
      title: "Friendly Service",
      description: "Traditional Nepali hospitality (Namaste!) meets Australian efficiency.",
      span: 2,
    },
    {
      icon: Mountain,
      tone: "cream",
      title: "Authentic Nepali Taste",
      description: "Recipes passed down through generations, preserved with care.",
    },
  ],
};

export const gallery: GallerySectionProps = {
  id: "gallery",
  eyebrow: "Visit",
  title: "Captured Moments",
  description:
    "A peek inside the cafe — from beans being roasted to friends sharing momos around the communal table.",
  images: [
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzpSAZ8jivavCRR_sDBdHtATSt1OOoVfaJa5c7GI2-M2bYXCAGicLLNMwdvV_bQyTHfYqZTXQIJvKZgFCaXoyGOQh1PB5XCUP7wfvq5bHBuNTGuPITFWUQ_AraOqXP-jLC-bPts8s3CwxRuLqYPvkQcY7DL5kow_HaPrrGJoF2UcAziDOC_iLdXj89unpfrdCsLdzXWlIHuqvRBMXApJWEnd3PJvkxKfecEnskaAXo1GTXqmQuFuqovtxfrAFvrrOTnBCx0I9oYQ_F",
      alt: "Overhead shot of cups and pastries on a light wood table",
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuACrGxaqbrDWWYeLB2x5320GFQqa5AIRQpWg4zJIwekFmVMfv2fawEkwR72RAKebh6vKEtEJS8X1mcoG3IrAgHctBn8LgBx7WZB37wUBQd5_SYbUG2NDL4sh0lXQK-7NywGmE8-fLGK525J-BJ_FA7iODaOI5UjPpiEMfgIyYz3dop8OAfd7Ltja7rgAEBYCG-K2as1smEMilVugytNDAX6ennH6z4K7azXZh0lIDQ8Sf2VkqJ0mHiJdO8bYjI4yQlUa-iYhVKndxw4",
      alt: "Coffee beans spilling out of a hessian sack",
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBu9CXgtS-P1HGWOIxXrodY2bZD3Ak0ogdaQ2eBgsHQHUNmQLLdgTRQYkEHW2GRmujhTlmjoakD1dtoBhYHOjH_--pVPb6ITtWlsNBEQQwxSb3CpJZwzLlegn26iJUTlNcSDB5mmmV1t4_rJLdINgDriXFfLIGv814l9fLwTvF9T8XQfF53rB9UxNS9zNOcmmnuufn8VLjX6P9kA2U1ldI2ZRrsdXJw5xTFb35U93CK16TZ9ZZBNJCLRWAsBpg26Di_qC1r16kqGPyw",
      alt: "Lobuche Cafe storefront at dusk with glowing sign",
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8Q_48DyAa9oLPQcpCyjD8ycagEPkoPENstdn0fXIVDPNyXt5SH62vEEhxuaJc9yaiGDbJHDOtlhWA7YwizP_UwBC6zrr3sOdfuWrlz4IziIj53_4NuqGsQr_HaaMMf8BmBQSpHLi63W3kTaQ4IemRhWgtGHBKnj9KEm8KzsT1KTjbvFM4sYRivIrHd5AanxywuFly4JwWzEpV8SSbxE0wpwnoDb_fSnxitWZGvXzUzmgEHGeV7Ltl9xvjX27bFCrw3ktj-4z4g7PC",
      alt: "Traditional Nepali pottery serving tea",
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBp8C_VJiUknkwOLLGZ6HQOHSA_dQYc67dkqPnF4LzyE0zDg32Opmtdm6EsAKhLCmoxHs1v3y7X69L2wQuOROcC8jwU1LFoAaTk_8Cwe_dXChlnPVyto8juAbJtG8HmOpqxXFRze9wapMU6cf_P_LszEVTKugau3cBQ01DQ5EwiFK-0dnycslLwNzTIRgNWTDOfhoGZBwNaqrRYPjSD_N-BcSc_cypTVnGffIGwoBBVxHzZ19EFZ-f2Ysz-e69VQ5OIVWSOG4gXOeFM",
      alt: "Three friends laughing over plates of momos",
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJQvdsSAcikX2P3x1pwTuNvy2858Ys6tDdfHfGiwRLUl4kY5j_RK54eqzoKwI8AU76o-UUDc1iWehlUKI2BQ25RbhvJhvggxqJV4r3R-WOGrqxbmW2TI4iLtBblf1AM3Gxd3wQdjCpzh9ySOMk4gxk_l-R8p_qAerQMcZBbEKVUdvUyXsxpdsFQp9PuPjLOaX5mfhNF58UoZwFMCiMxo4L8F-0-eliXhFqksGO6yaP2O-Lq5BrgzP1eLNj94-nF1TXnGuBKCtkmmtq",
      alt: "Chef hands garnishing a dish with cilantro",
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAaMexDSDIYJILN4StAj2g1IGL16W--kDv9fmzxNL-fkH-KuuwXX9PHNzbgYCgHGubWciPR9wF0Fs8ZtGd83T5O8GZ2FC6VooYUiTv8kVTV-p7SNF4Ef16T4EOqHDrkTjRVbtt964oPyQj-ePqiFZrVeqdm53MXqwEDyhXAVj61Zo6Pc3q-gEZL0vnpMFEXcrgLVVIPsNI7EDN2IIVEOGyjSG2IBjk_ExLh32russF7R2X__sbE9mUSTPTuFIzR0aJjJHCiHz4xyQsn",
      alt: "Server carrying a steaming bowl of Thukpa",
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCY9rnEb-78_yd7Z7rAow4UOPg6xDPQyYBbmvfSYo_9tKE-xOA93DJY1qyWKKoxu1b5CO5d_hhpjANI8qTSSjMlByNgEj__ylrtQxpmToa56zwSwQtpoQUyC_a7SdR18-WdTiXfJ9fW8Hbh725JXuSNLOkHyCR8tESm6LUnrol6C7MdfkRz_38-7xl7PH8Q1gErgLGCyOm44w-Kzs3351nDjpUESxccUsdY1CdoW_geEme8C8z6lswlfFmTNAn_t2CqM9he00mqIHMK",
      alt: "Latte pour creating swirling milk patterns",
    },
  ],
};

export const testimonials: TestimonialsSectionProps = {
  id: "testimonials",
  title: "What Our Community Says",
  testimonials: [
    {
      quote:
        "The Momos here are exactly like the ones I had in Kathmandu. The atmosphere is so peaceful, it's my new favorite remote work spot.",
      authorName: "Sarah J.",
      authorRole: "Coffee Enthusiast",
      authorAvatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDOLi3_ACeKvkK8ABWMMCoGKAKOiES1AvAGMjTPTth6g67ONbmStMzCrt2YXyN2QbFSNx3WbZRj0zbqpEEIuZROAyng2vKk1rg0EWHHb_OdFPkL-zpuyi-JX39XuP6VnJmbo6Aar_NHc-BoxCoGvihiDC6roJRg8lQdaXUa-TAOp13vqmMm_Ru3gLgGPJs0KT18ejcrgb3AqonzVa0eznjxFfPqGagj_oPG0-e_DWjX7l8MpCQlOMuxyvHISVmLMecO9IMVoRsuDJiq",
    },
    {
      quote:
        "Best Himalayan coffee in town. You can tell they care about the beans and the brewing process. Exceptional service too!",
      authorName: "David M.",
      authorRole: "Local Resident",
      authorAvatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDxH-wEEPwNKbo-HQtDU4TW80BoBvOjdR-XLv2bk9FPJ31L9bq2vrV5x7-xmv5uUxWMf_j9JqThw2tzgRxINt4Mc4p3y6-UW3J7N1ePXoW8sF2aYlEyL-ei2b-PAkh00zF1xZJAoDkDlN6yKISuj9XU_J1MN_WmxJnnBe-KnUUNp6rWW7f4_4bR9GVUxz0VaCpZ6_qhhjZ6zosSHUZ2H91bsmRue_tJc-p09-vt_8Q-ki1vhiTjaSmQnsxRZqltJYVLShkHg-380yM4",
    },
    {
      quote:
        "A true hidden gem. The mix of Nepali flavors and Australian brunch culture is perfectly executed. Highly recommend the Sel Roti.",
      authorName: "Anita R.",
      authorRole: "Food Blogger",
      authorAvatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBB9hp8d2g6e-4upkNqTh0m0PonnCXAmziLVusDhO6hlCv3j2dCwfHDzEZCqP6eK1NScMQXsqumf0xluwLW4ZVU0T5-5Ye0PrinxWwJ_42UJoPtp6vSpG82E_ipYx04WoxYgZnNAqp28_gNvp66-By4tMHg-2BqGWPUFWtN4v_97UwfUj8DL-O8RaptgwA3E345ecOXS39u9eFve_5Fw7qz-5LGgmuDTi_mnfi9J50Py-FFbD82mp0VRhEowyGTnHFQi9MVBDsR30gf",
    },
  ],
};

export const reservation: ReservationCtaSectionProps = {
  id: "reserve",
  title: "Join Us for an Unforgettable Culinary Journey",
  description:
    "Whether it's a quiet morning coffee or a celebratory family dinner, we're ready to welcome you with open arms.",
  cta: { label: "Reserve Your Table Today", href: "/reserve" },
  perks: ["Instant Confirmation", "No Reservation Fees"],
};

export const footer: SiteFooterProps = {
  brand,
  description:
    "Modern artisanal Nepali coffee & soul-warming kitchen, crafted with Himalayan soul in the heart of Rouse Hill.",
  linkColumn: {
    title: "Quick Links",
    links: [
      { label: "About Us", href: "/about" },
      { label: "The Menu", href: "#menu" },
      { label: "Book Table", href: "/reserve" },
      { label: "Contact", href: "/contact" },
    ],
  },
  visit: {
    title: "Visit Us",
    address: ["Shop D-GR 165, 10-14 Market Ln,", "Rouse Hill NSW 2155"],
    hours: [
      { days: "Mon – Fri", time: "7:00 AM – 9:00 PM" },
      { days: "Sat – Sun", time: "8:00 AM – 10:00 PM" },
    ],
  },
  contact: {
    title: "Connect",
    email: "info@lobuche.com.au",
    phone: "+61 413 902 092",
    socials: [
      { label: "Facebook", href: "#facebook", iconSrc: "/socials/facebook.png" },
      {
        label: "Instagram",
        href: "#instagram",
        iconSrc: "/socials/instagram.png",
      },
    ],
  },
  map: {
    title: "Find Us",
    query: "Shop D-GR 165, 10-14 Market Ln, Rouse Hill NSW 2155",
    label: "Shop D-GR 165, 10-14 Market Ln, Rouse Hill NSW 2155",
  },
  legal: [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
  ],
  copyright: `© ${new Date().getFullYear()} Lobuche Cafe. Crafted with Himalayan Soul.`,
};

export const contact: ContactSectionProps = {
  reachOutTitle: "Reach Out",
  contactInfo: [
    {
      icon: Mail,
      label: "Email",
      value: "info@lobuche.com.au",
      href: "mailto:info@lobuche.com.au",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+61 413 902 092",
      href: "tel:+61413902092",
    },
    {
      icon: MapPin,
      label: "Visit",
      value: "Shop D-GR 165, 10-14 Market Ln, Rouse Hill NSW 2155",
    },
  ],
  hoursTitle: "Opening Hours",
  hours: [
    { days: "Mon – Fri", time: "7:00 AM – 9:00 PM" },
    { days: "Sat – Sun", time: "8:00 AM – 10:00 PM" },
  ],
  social: {
    title: "Social Hub",
    description: "Join our community.",
    links: [
      { label: "Facebook", href: "#facebook", iconSrc: "/socials/facebook.png" },
      {
        label: "Instagram",
        href: "#instagram",
        iconSrc: "/socials/instagram.png",
      },
    ],
  },
  formTitle: "Send us a Message",
};

export const mapShowcase: MapShowcaseSectionProps = {
  atmosphereImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA5CMMGcFFophidJp-5fn7VtdTthEGev2fMCDuH27FdNGOONJcy99X8kBz1kmQukvkkn1ahVhF7b8lr1ebzVAs8EMGKigPKTQslLRIOFQFDn58CUNtPFhpMIJ44qtEnn47QtYac96b9NwXdkHTX_q-aPmtduvfr1GFFYEADj92pVr2n_KbskViTLn-11SL5Sg61hr3_X_Q41w9QGGQK-kypGk8kqvIO56n8siX2ikuHbArHamOYdd-25ggRGCAkCHYz4DYhJQ2Ycl_S",
  atmosphereImageAlt: "Moody cafe interior at night with warm amber lighting",
  atmosphereCaption: "Experience the atmosphere firsthand.",
  mapImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA8vhFVtuk6ojrnE2IabmCYG-4U1S3Bx2c8CAHRdMKized7bbvBq2STttdU-AZ_QRYM-qURjGb-W59TTWBcSCySWSEdDw2rSvjXmBXDDCkmCwTtOHdyUuM62j9O9DXTeHubaZqXC_8CKqHoXfuV9MwJn0f407K3CNuurn1paM6Yz9x1ezIicVymRGEJjrosJu1Ha8tbb7VOTghLueUSziHaXlvXtGzm6QcEHP7sTGRrFSQPR3RKRIEgFcker9FKrmZ67U5fqXqjogat",
  mapImageAlt: "Stylized topographic map of the Melbourne neighborhood",
  directionsHref:
    "https://www.google.com/maps/dir/?api=1&destination=Shop+D-GR+165%2C+10-14+Market+Ln%2C+Rouse+Hill+NSW+2155",
};

export const contactHero = {
  eyebrow: "Contact",
  title: "Visit the Sanctuary",
  description:
    "Whether it's for a morning brew or an intimate evening dinner, we are here to welcome you. Reach out or step into our world of artisanal delights.",
};

export const aboutHero: HeroSectionProps = {
  eyebrow: "Est. 2018",
  title: "Our Himalayan Roots",
  description:
    "From the mist-covered peaks of the Annapurna range to the vibrant streets of Australia, we bring the soul of the mountains to your cup.",
  primaryCta: { label: "View Our Menu", href: "/#menu" },
  secondaryCta: { label: "Visit the Cafe", href: "/contact" },
  backgroundImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDAklLu7jj2q8FLr6QCrlwHtd4pTG7O90m4fSo0ab8_cqXlCaNMobExRlnXuU5W2zjZJKq4AstLpqWPRYAFOaexqkYOjf7p9_6m_RtMOm9KBCqgDzz5-PvnKQkvLH3_mDaSBD34gTrKfsICipNc3x6r09qDZ20vJlomZccpZ6b4ydLACjWAMnVbcm3tPP4I3u0GM2In6hpzSA2t0QO8KMNjXe8VTGyKYZj68gUBl5Vasu1NFXCE77Gfok4y67RbrQILxKmIO2fUx_Fb",
  backgroundAlt: "Himalayan peaks at dawn with soft golden sunlight on snow-capped summits",
};

export const aboutJourney: SplitMediaSectionProps = {
  eyebrow: "The Journey",
  title: "From a copper pot in Gulmi to a sanctuary in Australia.",
  paragraphs: [
    "It began with a single copper pot and a handful of green coffee beans carried from a small family farm in Gulmi, Nepal. Lobuche Cafe was born from the desire to bridge two worlds — the ancient, unhurried traditions of the Himalayas and the sophisticated coffee culture of Australia.",
    "Our founders brought more than recipes; they brought the spirit of “Mehman-Nawazi” — the Himalayan tradition of treating every guest as a god. Today, that spirit lives in every steam-filled kitchen and every perfectly poured flat white.",
  ],
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBdpvstg_n-qw_120X9-vyPH2wsbEZl4Im7vqVUgbTBCrC3tDd1VS-7OvWXwygooAPKUsLVIn_wgSGopP2hMi8jYp4lOgZuHpIiyUHpVUxHSUSq1MoMmKzOQS3Xq226go57o1y0d7U3zny-mIOgpTbw_r_cLdzen1xzmfaEv8NcxNqgwZW2CVsyTlubTiyVVjjIJkl5hZGgDg0SJv64HAA30pQR-d8uuCV-KpL7O7TYi0RhWZAWNqjTDoZLLORRMesyhKacclsnXYs9",
  imageAlt: "Warm modern cafe interior blending Australian industrial design with Nepali textures",
  imageSide: "right",
  split: "5-7",
};

export const aboutPhilosophy: PhilosophySectionProps = {
  eyebrow: "Our Philosophy",
  title: "Quality that transcends borders.",
  description: "A commitment to craft that transcends borders, anchored in three core pillars.",
  pillars: [
    {
      icon: Leaf,
      title: "Ethical Sourcing",
      description:
        "We partner directly with small-hold farmers in the high-altitude regions of Nepal, ensuring fair wages and sustainable agricultural practices that protect the mountain ecosystem.",
    },
    {
      icon: Coffee,
      title: "Micro-Roasting",
      description:
        "Our beans are roasted in small batches on-site, allowing us to highlight the unique floral and nutty profiles that only high-altitude Himalayan Arabica can offer.",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "Lobuche is more than a cafe; it's a sanctuary. We host regular cultural nights and coffee workshops, fostering a space where global stories are shared over shared meals.",
    },
  ],
};

export const aboutFounders: FoundersSectionProps = {
  eyebrow: "Behind the Vision",
  title: "Arjun & Maya — built on heritage.",
  description:
    "Arjun and Maya started Lobuche Cafe with a vision to celebrate their heritage through the universal language of food and drink. Arjun, a third-generation coffee grower, and Maya, a culinary artist specializing in traditional Newari cuisine, combined their passions to create something truly unique.",
  portraits: [
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDaPxCP-yAGSNsgCqbV6uhJeubNqg4b25AsEwTfvfAsu3Fl8noScoOJ0EFOQHihxNL3GzTJMRIZ4bLdUj6nn158fbdZhkluZ2dboi62uhXibb_rdOMPtlwuX-g2O5TXQXdwe9ViDm3lHfXEPOJEdV6bz3v5xqZsW_oxWcv-PotZW-Yja7UZC6-zUHKbpNpJ-3kAiGhk98_EaDBhgyvSTLLXiYhbRbXok5KKdALXmQiZo9F7fQ_4X0szknur8LV585QI7KWA6Ybqb9cF",
      alt: "Portrait of Arjun, co-founder of Lobuche Cafe, in a modern kitchen",
      name: "Arjun",
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwMDdpCKXMtNjRv0O1jnkZLnvjQVcxYGP-_S_IZJb2A8K3Xpxiea6knHU7iUGlDP9K6mLAds-1TmwwAI_5fL31imA9MtWlB5n8zrGXVKTa5Cg0etKJrdybPwMCsFMXQ8FTc-WBj7316EjCyuml7yQ7qB15_qfokAQi4SIk3Ar9j7dWzoRG0N6-sTJ8o3z3Zw67qu7uartaz3-Q3CRBzf_kcubh8jOL84AkVSg4_MJ27M-rWF7do-wZH3Klk6OtIQuWibF4K2aKUarn",
      alt: "Portrait of Maya, co-founder of Lobuche Cafe, laughing in front of coffee shelves",
      name: "Maya",
    },
  ],
  quote:
    "In our village, we say a cup of coffee is a conversation that hasn't happened yet. We built Lobuche to provide the space for those conversations to bloom.",
  quoteAttribution: "Arjun & Maya, Co-founders",
};

export const aboutCraft: CraftSectionProps = {
  eyebrow: "Our Craft",
  title: "Detail in every cup, every plate.",
  staggered: true,
  blocks: [
    {
      title: "The Art of the Momo",
      description:
        "Every momo served at Lobuche is hand-pleated with precision. Our secret lies in the 24-hour spice infusion and the traditional steaming methods passed down through generations.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAAzXxK0eplvH7nHidN3oaasy1k6C__WfKCPrwlPvlMnNzaG2YDBK7w53EhYJeyxJdXd9aIMyPfy4oppKvnv9J26tsqpX9AzJOJgUYRLcEEembBRfb4RnArKX8RrH-OghzyQnQlF08qBgKSagCA5jLsxyDEYT5l_T_J-WYWwjiC_CRFCF1S6gHPhlKNL1ipejPra5JRzK_ypwyc3y6UbHOEvRSDAdhrwEa1IdOhiKY3B8cCtXhFzFnwwYK02JYuUqXSPLaBcDU8-KhY",
      imageAlt: "Hands folding a traditional Nepali momo dumpling",
    },
    {
      title: "The Precision Roast",
      description:
        "We treat our beans with reverence. By monitoring temperature curves to the tenth of a degree, we unlock the delicate mountain acidity and chocolatey finish of our signature blends.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDY629nj2QrAtleyOQiN53awnB13icjDV8xRivowdqDI8LCd1wuA3EfEIg09q2YzlAFHgvkEhi7eUIv3ixsdlWpN_gogl8-0wF9UdP0xLTCAy26ANUy2JdDddPMYqZyvtGuGGQ09x78UcDF5LPvNAn6FbE4Vn-VuZfdC0isLOsKJyQMdlOgtBaxdCuYTm_9bLrE1Wsl5vpOKVrdDOA9b7Vaa0Bf0-x0Qu0YQTRMntpBBO7vLdHRSaO_-5sMaKcSZSqnhljDkXBvASst",
      imageAlt: "Dark roasted coffee beans falling into a cooling tray",
    },
  ],
};

export const aboutCta: ReservationCtaSectionProps = {
  title: "Visit the Sanctuary",
  description:
    "Experience the warmth of the Himalayas in the heart of the city. We have a table waiting for you.",
  cta: { label: "Book a Table", href: "/reserve" },
  secondaryCta: { label: "View Full Menu", href: "/#menu" },
  tone: "cream",
};

export const galleryHero = {
  eyebrow: "Artisanal Journey",
  title: "Captured Moments",
  description:
    "Experience the artisanal craft of Nepali cuisine through our lens. From the steam of freshly folded momos to the rich aroma of Himalayan beans, every frame tells a story of heritage and soul.",
};

export const galleryBento: GalleryBentoSectionProps = {
  categories: ["All", "Signature Dishes", "Coffee & Drinks", "Atmosphere"],
  initialCategory: "All",
  items: [
    {
      id: "momos",
      category: "Signature Dishes",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAFc64ohQh7xsI8VLVed-QROt8bHXdno_FD69jkxOiDu99DL_sB4U2LiNkMkkIbCeS9pPqdB692lA2UEJRwej7ByzqaY-XbMfUXoXchpw60q8_IFNP1hfSIBfV3D0gfJsl-wJSRAmtGnPnWB92RCKSetnbV4bEIUfzG8BOy8mWzTI4v06pG41a10QJHGpOoMPUJiyk7mnhK43SBkgiSO_T4EmwdIwJA2B1tNedWxm9Ht-3hf6oZ86xGfetXeh4_GgefsKkic3zNMBrp",
      imageAlt: "Close-up of artisanal steamed momos on a brass plate with red tomato chutney",
      title: "Signature Momos",
      description: "Hand-folded with generational recipes and love.",
      captionStyle: "gradient",
      heightClassName: "h-[420px] md:h-[500px]",
      colSpanClassName: "md:col-span-8",
    },
    {
      id: "mountain-brew",
      category: "Coffee & Drinks",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCjgdAGGdj5kag0UoGSw8iDjFxQsifTQnVXu77eYZWnb0BFX1EXaFEL1Bol28udB__DIa-pthalhUMioonOHrXuP_1ujkkiFoCetCEb6ODn0O2t7RCXRC9t3WqL6LAL3gU3w8e3HXYctHSwRZfmD3S_S39qTFJYhnS1zKdCNMulaAIy00l5TAE8OxaMBjc6oBFJ7vbftopx5-NEUgYTyRVW_snooiyo5CYTlchcS8A3ejKeTRLugpPbhb7BdgrLUrPD3u4b5pQax1tm",
      imageAlt: "Slow pour of dark Himalayan coffee into a ceramic mug under morning light",
      title: "Mountain Brew",
      captionStyle: "corner",
      heightClassName: "h-[420px] md:h-[500px]",
      colSpanClassName: "md:col-span-4",
    },
    {
      id: "sanctuary",
      category: "Atmosphere",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBWxxtVbxWFnBoYpi1y9HX6W080PjUFO1WxT_9oH2Pm3Duz7t7LeEmLDBjaNggZkufGI_RqQmPQpJWKyx0Y2mJle0ANrFYD6EVFPKZ9r33ApwXR8MbCXit3QWwbPQdwvCnvW3pHInNL1OZqpwmtKKTQllzFcRM1_kjCFk3v2AWeAhUiVknfEo2DJ_nxf7OMdPzruB6OKBDCHuG6Ghge40lb21ZLGzVfNlLen7gVogxUmPOphLWlKcNb9cPHCb9YJ4jye6u69CIAxOP7",
      imageAlt: "Intimate corner of the cafe with a forest green armchair and pendant lamp",
      title: "Sanctuary",
      captionStyle: "hover",
      heightClassName: "h-[400px]",
      colSpanClassName: "md:col-span-4",
    },
    {
      id: "thukpa",
      category: "Signature Dishes",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCp1XNM-lS8StC8CMfl8eAMsOl7wuSVfZH2Yr4mKX8Ulje0ErDBNTcbf1s6BkWxsTxQwERgmOtPhlRWmb5lM6TioSJK6QKhCVdafZEHXNxOpdF_6GWppNGcJ5MvyyE8CHO85DMx8_0uMkpod5QugLpZLyGHLavQSAfr3bBRbX4OoL7Nm2ZjENePORWSoliby5iGc-iPJAhEqB99AumVfsrb6Jzj--MSKTKrnbMjLk60aqQUN7OOxUxfveqLhPnfKz-T2jI0Yx9ZJCrm",
      imageAlt: "Steaming bowl of Thukpa noodle soup garnished with fresh herbs",
      title: "Savory Thukpa",
      badge: "Warmth",
      captionStyle: "corner",
      heightClassName: "h-[400px]",
      colSpanClassName: "md:col-span-4",
    },
    {
      id: "sel-roti",
      category: "Signature Dishes",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDvJdIdG9Erz8hKBJJwrD8aqA9IickgtzB0pJfqIZi3vJi5PA2nYupXGTNZ5g3Ii2x84bGk8JNBui07HIPqvupjM5lDaa-MlPaz2GoH36f7bSRawjiQej9g4TbeRjaFZv7PZvX3-_LqrXinJiL84zYtlg17I41W2FJlCJk6HuIpB7aTPYNJbIT8OhIc-YfiE2yPtRyeapxtZXudSHRQrzIWmNYbelnFCNjzkblX9wHSwTKs-OFXRSmciFORoDUu2160FKnsW3GW15o1",
      imageAlt: "Stack of golden-brown Sel Roti rings on a warm cream ceramic plate",
      captionStyle: "bordered",
      heightClassName: "h-[400px]",
      colSpanClassName: "md:col-span-4",
    },
  ],
};

export const galleryCta: ReservationCtaSectionProps = {
  title: "Ready to Taste the Craft?",
  description:
    "Our tables are waiting for you. Experience the fusion of modern design and ancient flavors in the heart of the city.",
  cta: { label: "Reserve a Table", href: "/reserve" },
  secondaryCta: { label: "View Full Menu", href: "/#menu" },
  tone: "sageCard",
};

export const reserveHero = {
  title: "Secure Your Sanctuary",
  description:
    "Join us for a quiet morning coffee or a celebratory family dinner. We're ready to welcome you with open arms.",
};

export const reserveForm: ReservationFormSectionProps = {
  experience: {
    title: "The Lobuche Experience",
    description:
      "Savor artisanal brews and traditional Himalayan-inspired cuisine in our tranquil forest-themed space.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCHj0OzkvZ3OdJ8bZXxCPNskoa_2brx-FFxkn26gHDTKlnkdSVM3FXCGsUdyC-1kizl8pb7xiBnCG45i9p8TPKb51MWG6NMW60_7-R4DBeRbqEXpXTFwAgUBJO7lxhS89_A55VqFB4D4qos_Y86r9ugZjQLcWbnYv9atVYA3zuOW8ByeRUXYd_b-SoKA2QOONmbWLx7icr6-2bOarc3Uigg7fdcL0inAK8bNkZe_lWESw9aEfUGk_ilBLM1BnNgH7JSlwaxflIXB6KW",
    imageAlt: "Warm interior of the cafe at dusk with brass pendant lamps",
  },
  hoursTitle: "Opening Hours",
  hours: [
    { days: "Mon – Fri", time: "07:00 – 21:00" },
    { days: "Sat – Sun", time: "08:00 – 22:00" },
  ],
  locationLabel: "Thamel, Kathmandu, NP",
};
