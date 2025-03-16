"use client";
import React, { useEffect, useState, FC } from "react";
import Cookies from "js-cookie";
import { Alert } from "@heroui/alert";
import { Button } from "@heroui/react";

const AcceptButton: FC<{ handleAccept: () => void }> = ({
  handleAccept,
}: {
  handleAccept: () => void;
}) => (
  <Button onPress={handleAccept} className={"flex justify-center"}>
    I Understand
  </Button>
);

const CookieConsentBanner: FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    // Check if the user has already provided cookie consent
    const consent = Cookies.get("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set("cookieConsent", "accepted", { expires: 365 });
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <Alert
      className={"fixed bottom-0 left-0 w-full z-50 bg-white"}
      variant="bordered"
      radius={"none"}
      title={
        "We use cookies to enhance your experience. By using our site, you agree to our cookie policy. For more information visit our privacy policy page (Datenschutz)."
      }
      endContent={
        <div className="hidden md:flex pl-4">
          <AcceptButton handleAccept={handleAccept} />
        </div>
      }
    >
      <div className={"mt-4 w-full flex items-center justify-center md:hidden"}>
        <AcceptButton handleAccept={handleAccept} />
      </div>
    </Alert>
  );
};

export default CookieConsentBanner;
