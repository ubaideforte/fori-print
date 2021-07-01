import React from "react";
import styled from "styled-components";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const StyledSocialIconsDark = styled.div`
  a {
    color: #fff;
    transition: 0.5s;
    :hover {
      color: #eea019;
    }
  }

  //-------------------------------//
  // Styling for Dark Social Icons //
  //-------------------------------//
  &.dark-social-icons {
    display: flex;
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 48px;
      height: 48px;
      background-color: #eea019;
      border-radius: 50%;
      margin-right: 12px;
      font-size: 18px;

      :hover {
        background-color: #fff;
      }
    }
  }

  //--------------------------------//
  // Styling for Light Social Icons //
  //--------------------------------//
  &.light-social-icons {
    a {
      font-size: 20px;
      margin-right: 16px;
    }
  }

  @media (min-width: 768px) {
    &.light-social-icons {
      a {
        font-size: 16px;
        margin-right: 12px;
      }
    }
  }

  @media (max-width: 576px) {
    &.dark-social-icons {
      a {
        width: 40px;
        height: 40px;
        font-size: 16px;
      }
    }

    &.light-social-icons {
      a {
        font-size: 16px;
        margin-right: 12px;
      }
    }
  }
`;

export const SocialIcons = ({ className }) => {
  return (
    <StyledSocialIconsDark className={className ?? "light-social-icons"}>
      <a href="https://www.facebook.com/LetsEmergeForward" target="blank">
        <FaFacebookF />
      </a>
      <a href="https://twitter.com/EmergeForward" target="blank">
        <FaTwitter />
      </a>
      <a href="https://www.instagram.com/emergeforward/" target="blank">
        <FaInstagram />
      </a>
      <a
        href="https://www.youtube.com/channel/UCFkPtfpMV_z1QVxvpGheNIg/featured"
        target="blank"
      >
        <FaYoutube />
      </a>
    </StyledSocialIconsDark>
  );
};

// export const SocialIconsLight = () => {
//   return (
//     <StyledSocialIconsDark className="narrow-social-icons">
//       <a href="https://www.facebook.com/LetsEmergeForward" target="blank">
//         <FaFacebookF />
//       </a>
//       <a href="https://twitter.com/EmergeForward" target="blank">
//         <FaTwitter />
//       </a>
//       <a href="https://www.instagram.com/emergeforward/" target="blank">
//         <FaInstagram />
//       </a>
//       <a
//         href="https://www.youtube.com/channel/UCFkPtfpMV_z1QVxvpGheNIg/featured"
//         target="blank"
//       >
//         <FaYoutube />
//       </a>
//     </StyledSocialIconsDark>
//   );
// };
