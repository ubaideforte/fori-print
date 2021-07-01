import styled from "styled-components";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const StyledDiv = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .eaze-animate {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    zindex: 140;
    animation: ease-animation 12s infinite;
  }

  @keyframes ease-animation {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.03);
    }
  }

  p {
    margin: 0;
    line-height: 1;
  }

  .text {
    font-size: 18px;
  }
  .title {
    font-size: 76px;
    font-weight: 900;
  }
  .subtitle {
    font-size: 27px;
  }

  .social-icons {
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 48px;
    right: 100px;
  }
  .narrow-social-icons {
    a {
      font-size: 20px;
      color: #fff;
      margin-right: 16px;
    }
    .icon:hover {
      color: #efa718;
      fill: #efa718;
    }
  }

  @media (max-width: 768px) {
    .text {
      font-size: 18px;
    }
    .title {
      font-size: 60px;
    }
    .subtitle {
      font-size: 25px;
    }
    .social-icons {
      right: 48px;
    }
  }

  @media (max-width: 576px) {
    .text {
      font-size: 13px;
    }
    .title {
      font-size: 38px;
    }
    .subtitle {
      font-size: 15px;
    }
  }

  @media screen and (max-width: 479px) {
    .text {
      font-size: 13px;
    }
    .title {
      font-size: 39px;
    }
    .subtitle {
      font-size: 16px;
    }
  }
`;

const Image = styled.div`
  background-image: ${(props) => `url(${props.backgroundImage[0]})`};
  background-position: center;
  background-size: cover;

  @media (max-width: 1024px) {
    background-image: ${(props) => `url(${props.backgroundImage[1]})`};
  }
`;

const HomeCarousel = (props) => {
  const { text, title, subtitle, backgroundImage } = props;

  return (
    <StyledDiv>
      <Image
        // style={{
        //   backgroundImage: `url(${backgroundImage})`,
        //   backgroundPosition: "center",
        //   backgroundSize: "cover",
        // }}
        backgroundImage={backgroundImage}
        className="eaze-animate"
      />
      <div
        className="col-11 col-sm-10 col-md-11 col-lg-11 col-xl-8 mx-auto text-white"
        style={{ zIndex: 200 }}
      >
        <p className="text">{text}</p>
        <p className="text-uppercase my-2 my-md-3 title">{title}</p>
        <p style={{ color: "#efa718" }} className="subtitle">
          {subtitle}
        </p>
      </div>

      <div className="social-icons d-none d-sm-flex text-white">
        <p>SOCIALS</p>
        <div
          style={{
            height: 1,
            width: 40,
            backgroundColor: "#fff",
            margin: "0 16px",
          }}
        />
        <div className="narrow-social-icons">
          <a href="https://www.facebook.com/LetsEmergeForward" target="blank">
            <FaFacebookF className="icon" />
          </a>
          <a href="https://twitter.com/EmergeForward" target="blank">
            <FaTwitter className="icon" />
          </a>
          <a href="https://www.instagram.com/emergeforward/" target="blank">
            <FaInstagram className="icon" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCFkPtfpMV_z1QVxvpGheNIg/featured"
            target="blank"
          >
            <FaYoutube className="icon" />
          </a>
        </div>
      </div>
    </StyledDiv>
  );
};

export default HomeCarousel;
