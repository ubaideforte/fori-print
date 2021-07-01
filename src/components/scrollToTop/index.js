import React, { useEffect, useState } from "react";
import { UpOutlined } from "../icons";
import { RoundButton } from "../buttons";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", toggleVisibility);
    }

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  /**
   * For smooth scrolling to top.
   */
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div
      style={{
        position: "fixed",
        bottom: isVisible ? 32 : "-144px",
        right: "2%",
        zIndex: 900,
        transition: "0.6s",
      }}
    >
      <RoundButton
        backgroundColor="#d81e32"
        hoverColor="#efa718"
        onClick={scrollToTop}
        size="64px"
      >
        <UpOutlined className="mb-2" />
      </RoundButton>
    </div>
  );
};

export default ScrollToTopButton;
