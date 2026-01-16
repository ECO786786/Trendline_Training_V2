"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

interface TeamMember {
  name: string;
  jobTitle: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Priscilla M Ngambi Fcca, FZica, MBA, Data Analyst",
    jobTitle: "Head Consultant | Operations",
    image: "/images/priscilla.jpg",
  },
  {
    name: "Edgar Matisha",
    jobTitle: `Human Resource Professional | Consultant | Learning & Development Specialist`,
    image: "/images/edgar.jpg",
  },
  {
    name: "Lilato Lisulo",
    jobTitle: "Consultant Trainer | Power BI Data Analyst | Data Scientist",
    image: "/images/lilato.jpg",
  },
  {
    name: "Obbie Kalenga",
    jobTitle:
      "Data Driven Professional | Consultant | Trainer | Power BI Specialist",
    image: "/images/Obbie.jpg",
  },
  {
    name: "Martin Mwaala",
    jobTitle:
      "Consultant Trainer | AI Specialist | Excel Expert | Financial Analyst | Financial Modelling",
    image: "/images/Martin.jpg",
  },
];

function useWindowWidth() {
  const [width, setWidth] = useState<number>(0);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return width;
}

const SocialIcons = () => (
  <div className="flex items-start gap-3.5">
    <a
      href="#"
      aria-label="LinkedIn"
      className="hover:opacity-70 transition-opacity"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.5 3.24268C3.67157 3.24268 3 3.91425 3 4.74268V19.7427C3 20.5711 3.67157 21.2427 4.5 21.2427H19.5C20.3284 21.2427 21 20.5711 21 19.7427V4.74268C21 3.91425 20.3284 3.24268 19.5 3.24268H4.5ZM8.52076 7.2454C8.52639 8.20165 7.81061 8.79087 6.96123 8.78665C6.16107 8.78243 5.46357 8.1454 5.46779 7.24681C5.47201 6.40165 6.13998 5.72243 7.00764 5.74212C7.88795 5.76181 8.52639 6.40728 8.52076 7.2454ZM12.2797 10.0044H9.75971H9.7583V18.5643H12.4217V18.3646C12.4217 17.9847 12.4214 17.6047 12.4211 17.2246C12.4203 16.2108 12.4194 15.1959 12.4246 14.1824C12.426 13.9363 12.4372 13.6804 12.5005 13.4455C12.7381 12.568 13.5271 12.0013 14.4074 12.1406C14.9727 12.2291 15.3467 12.5568 15.5042 13.0898C15.6013 13.423 15.6449 13.7816 15.6491 14.129C15.6605 15.1766 15.6589 16.2242 15.6573 17.2719C15.6567 17.6417 15.6561 18.0117 15.6561 18.3815V18.5629H18.328V18.3576C18.328 17.9056 18.3278 17.4537 18.3275 17.0018C18.327 15.8723 18.3264 14.7428 18.3294 13.6129C18.3308 13.1024 18.276 12.599 18.1508 12.1054C17.9638 11.3713 17.5771 10.7638 16.9485 10.3251C16.5027 10.0129 16.0133 9.81178 15.4663 9.78928C15.404 9.78669 15.3412 9.7833 15.2781 9.77989C14.9984 9.76477 14.7141 9.74941 14.4467 9.80334C13.6817 9.95662 13.0096 10.3068 12.5019 10.9241C12.4429 10.9949 12.3852 11.0668 12.2991 11.1741L12.2797 11.1984V10.0044ZM5.68164 18.5671H8.33242V10.01H5.68164V18.5671Z"
          fill="#04030B"
        />
      </svg>
    </a>
    <a
      href="#"
      aria-label="X (Twitter)"
      className="hover:opacity-70 transition-opacity"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.1761 4.24268H19.9362L13.9061 11.0201L21 20.2427H15.4456L11.0951 14.6493L6.11723 20.2427H3.35544L9.80517 12.9935L3 4.24268H8.69545L12.6279 9.3553L17.1761 4.24268ZM16.2073 18.6181H17.7368L7.86441 5.78196H6.2232L16.2073 18.6181Z"
          fill="#04030B"
        />
      </svg>
    </a>
    <a
      href="#"
      aria-label="Dribbble"
      className="hover:opacity-70 transition-opacity"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 3C7.03145 3 3 7.03145 3 12C3 16.9686 7.03145 21 12 21C16.9588 21 21 16.9686 21 12C21 7.03145 16.9588 3 12 3ZM17.9447 7.14859C19.0184 8.45662 19.6627 10.1258 19.6822 11.9317C19.4284 11.8829 16.8904 11.3655 14.333 11.6876C14.2744 11.5607 14.2256 11.4241 14.167 11.2874C14.0108 10.9165 13.8352 10.5358 13.6594 10.1746C16.4902 9.0228 17.7787 7.36334 17.9447 7.14859ZM12 4.32755C13.9523 4.32755 15.7386 5.05966 17.0955 6.26031C16.9588 6.45553 15.7972 8.00759 13.064 9.03253C11.8048 6.71909 10.4089 4.82538 10.1942 4.53254C10.77 4.39588 11.3753 4.32755 12 4.32755ZM8.72996 5.04989C8.93494 5.32321 10.3015 7.22668 11.5803 9.49131C7.98807 10.448 4.81562 10.4284 4.47397 10.4284C4.9718 8.04664 6.58243 6.06507 8.72996 5.04989ZM4.30803 12.0098C4.30803 11.9317 4.30803 11.8536 4.30803 11.7755C4.63991 11.7852 8.36876 11.8341 12.205 10.6822C12.4295 11.1117 12.6345 11.551 12.8297 11.9902C12.7321 12.0195 12.6247 12.0488 12.5271 12.0781C8.56399 13.3568 6.45553 16.8514 6.27983 17.1442C5.05965 15.7874 4.30803 13.9816 4.30803 12.0098ZM12 19.692C10.2234 19.692 8.58352 19.0868 7.28525 18.0716C7.42191 17.7885 8.98371 14.782 13.3178 13.269C13.3373 13.2592 13.3471 13.2592 13.3666 13.2495C14.4501 16.051 14.8894 18.4034 15.0065 19.077C14.0792 19.4772 13.064 19.692 12 19.692ZM16.2852 18.3742C16.2072 17.9056 15.7972 15.6605 14.7917 12.898C17.2028 12.5173 19.3113 13.1421 19.5749 13.23C19.243 15.3677 18.013 17.2126 16.2852 18.3742Z"
          fill="#04030B"
        />
      </svg>
    </a>
  </div>
);

const TeamCard = ({ member }: { member: TeamMember }) => (
  <div className="flex flex-col items-start gap-6">
    <div className="relative w-full aspect-square rounded-lg overflow-hidden">
      <Image
        src={member.image}
        alt={member.name}
        fill
        className="object-cover"
      />
    </div>
    <div className="flex flex-col items-center gap-4 w-full">
      <div className="flex flex-col items-center w-full">
        <h3 className="w-full text-[#04030B] font-inter text-[22px] font-semibold leading-[150%]">
          {member.name}
        </h3>
        <p className="w-full text-[#04030B] font-inter text-lg font-normal leading-[150%]">
          {member.jobTitle}
        </p>
      </div>
    </div>
    <SocialIcons />
  </div>
);

const SliderDots = ({ total, active }: { total: number; active: number }) => (
  <div className="flex items-start gap-2">
    {Array.from({ length: total }).map((_, i) => (
      <div
        key={i}
        className={`w-2 h-2 rounded-full transition-opacity ${
          i === active ? "bg-[#04030B] opacity-100" : "bg-[#04030B] opacity-20"
        }`}
      />
    ))}
  </div>
);

const NavigationButton = ({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className="flex p-3 justify-center items-center gap-2 rounded-full border border-[rgba(4,3,11,0.15)] bg-white hover:bg-gray-50 transition-colors"
    aria-label={direction === "left" ? "Previous" : "Next"}
  >
    {direction === "left" ? (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.09502 12.8518L12.5968 18.3533C12.7668 18.5236 12.8527 18.7236 12.8545 18.9533C12.8565 19.1829 12.7726 19.3836 12.6028 19.5553C12.4328 19.7274 12.2322 19.8125 12.001 19.8105C11.7699 19.8085 11.5686 19.7226 11.3973 19.5528L4.44727 12.6028C4.35627 12.5108 4.29011 12.4151 4.24877 12.3158C4.20727 12.2163 4.18652 12.1108 4.18652 11.9993C4.18652 11.8878 4.20727 11.7825 4.24877 11.6835C4.29011 11.5844 4.35627 11.4889 4.44727 11.3973L11.4033 4.44127C11.5791 4.27144 11.7805 4.18652 12.0075 4.18652C12.2344 4.18652 12.4328 4.27144 12.6028 4.44127C12.7726 4.61527 12.8575 4.81602 12.8575 5.04352C12.8575 5.27119 12.7726 5.47027 12.6028 5.64077L7.09502 11.1483H19.2978C19.5419 11.1483 19.7459 11.2291 19.9098 11.3908C20.0736 11.5524 20.1555 11.7555 20.1555 12C20.1555 12.2445 20.0736 12.4476 19.9098 12.6093C19.7459 12.7709 19.5419 12.8518 19.2978 12.8518H7.09502Z"
          fill="#04030B"
        />
      </svg>
    ) : (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.9051 12.8517H4.70234C4.45767 12.8517 4.25459 12.7709 4.09309 12.6092C3.93142 12.4476 3.85059 12.2445 3.85059 12C3.85059 11.7555 3.93142 11.5524 4.09309 11.3907C4.25459 11.2291 4.45767 11.1482 4.70234 11.1482H16.9051L11.4033 5.64674C11.2333 5.47674 11.1473 5.27649 11.1451 5.04599C11.1428 4.81532 11.2267 4.61457 11.3968 4.44374C11.5672 4.27224 11.7679 4.18749 11.9991 4.18949C12.2303 4.19149 12.4315 4.2774 12.6028 4.44724L19.5528 11.3972C19.6438 11.4892 19.71 11.5849 19.7513 11.6842C19.7928 11.7837 19.8136 11.8892 19.8136 12.0007C19.8136 12.1122 19.7928 12.2175 19.7513 12.3165C19.71 12.4157 19.6438 12.5111 19.5528 12.6027L12.5968 19.5527C12.421 19.7266 12.2196 19.8135 11.9926 19.8135C11.7658 19.8135 11.5673 19.7261 11.3973 19.5512C11.2275 19.3811 11.1426 19.1823 11.1426 18.955C11.1426 18.7278 11.2275 18.5292 11.3973 18.3592L16.9051 12.8517Z"
          fill="#04030B"
        />
      </svg>
    )}
  </button>
);

export default function Team() {
  const width = useWindowWidth();
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardsVisible = width >= 1024 ? 3 : width >= 768 ? 2 : 1;
  const maxIndex = teamMembers.length - cardsVisible;
  const gap = 24;

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white min-h-screen">
      <div className="flex px-8 md:px-16 py-16 md:py-28 flex-col items-center gap-12 md:gap-20 w-full">
        <div className="flex container w-full flex-col items-center gap-12 md:gap-20">
          <div className="flex max-w-3xl w-full flex-col items-center justify-center gap-4 text-center">
            <div className="flex items-center">
              <div className="text-[#1e3a8a] font-inter text-base font-semibold leading-[150%]">
                People
              </div>
            </div>
            <div className="flex flex-col items-center gap-6 w-full">
              <h2 className="w-full text-[#04030B] font-['Manrope',sans-serif] text-[32px] md:text-[52px] font-medium leading-[120%] tracking-[-0.52px] text-center">
                Meet Our Expert Team
              </h2>
              <p className="text-[#04030B] font-inter text-base md:text-lg font-normal leading-[150%] text-center">
                Our world class team of consultants, trainers, and specialists
                brings combined expertise in data science, AI, Power BI,
                operations, HR, and financial analysis to deliver impactful
                solutions.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-12 w-full">
            <div className="overflow-hidden w-full">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  gap: `${gap}px`,
                  transform: `translateX(calc(-${currentIndex} * (100% / ${cardsVisible} + ${
                    gap / cardsVisible
                  }px)))`,
                }}
              >
                {teamMembers.map((member, idx) => (
                  <div
                    key={`${member.name}-${idx}`}
                    className="shrink-0"
                    style={{
                      width: `calc((100% - ${
                        gap * (cardsVisible - 1)
                      }px) / ${cardsVisible})`,
                    }}
                  >
                    <TeamCard member={member} />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-between items-center w-full">
              <SliderDots total={maxIndex + 1} active={currentIndex} />
              <div className="flex items-start gap-4">
                <NavigationButton direction="left" onClick={handlePrevious} />
                <NavigationButton direction="right" onClick={handleNext} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
