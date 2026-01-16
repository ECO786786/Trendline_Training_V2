"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Script from "next/script";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [consentGiven, setConsentGiven] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("cookieConsent") === "accepted";
    }
    return false;
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");

    if (!consent) {
      setTimeout(() => {
        setShowBanner(true);
      }, 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
    setConsentGiven(true);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShowBanner(false);
  };

  return (
    <>
      {consentGiven && (
        <>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-V5NLVCR1BG"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-V5NLVCR1BG');
            `}
          </Script>
        </>
      )}

      {showBanner && (
        <>
          <div className="fixed inset-0 bg-black/20 z-40 animate-fade-in" />

          <div className="fixed bottom-4 left-4 z-50 max-w-sm bg-white rounded-lg shadow-2xl border border-gray-200 p-6 animate-slide-up">
            <div className="flex items-start gap-4 mb-4">
              <div className="shrink-0">
                <svg
                  className="w-8 h-8 text-[#1e3a8a]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                </svg>
              </div>

              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-2 text-lg">
                  We Value Your Privacy
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  We use cookies to enhance your browsing experience, serve
                  personalized content, and analyze our traffic. By clicking
                  &quot;Accept All&quot;, you consent to our use of cookies.
                </p>
                <Link
                  href="/privacy"
                  className="text-sm text-[#1e3a8a] hover:underline font-medium"
                >
                  Learn more about our Privacy Policy
                </Link>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <button
                onClick={handleAccept}
                className="flex-1 px-4 py-2.5 bg-[#1e3a8a] text-white font-medium rounded-full hover:bg-blue-900 transition-colors focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:ring-offset-2"
              >
                Accept All
              </button>
              <button
                onClick={handleDecline}
                className="flex-1 px-4 py-2.5 bg-white text-gray-700 font-medium rounded-full border border-gray-300 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
              >
                Decline
              </button>
            </div>
          </div>

          <style jsx>{`
            @keyframes fade-in {
              from {
                opacity: 0;
              }
              to {
                opacity: 1;
              }
            }

            @keyframes slide-up {
              from {
                transform: translateY(100%);
                opacity: 0;
              }
              to {
                transform: translateY(0);
                opacity: 1;
              }
            }

            .animate-fade-in {
              animation: fade-in 0.3s ease-out;
            }

            .animate-slide-up {
              animation: slide-up 0.4s ease-out;
            }
          `}</style>
        </>
      )}
    </>
  );
}
