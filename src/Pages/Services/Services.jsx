import { useState } from "react";
import styled from "styled-components";
import logo from "../../assets/Contact/Group541.png";
import landingLogo from "../../assets/Services/Icons/01.svg";
import Img5 from "../../assets/Services/Icons/05.svg";
import Img4 from "../../assets/Services/Icons/04.svg";
import KidsPhoto1 from "../../assets/Services/Images/01.png";
import BrainLogo from "../../assets/Services/Icons/06.svg";
import pullUp from "../../assets/Services/Icons/07.svg";
import sun from "../../assets/Services/Icons/08.svg";
import sunray from "../../assets/Services/Icons/013.svg";
import paintdrop from "../../assets/Services/Icons/012.svg";
import paintingChild from "../../assets/Services/Images/05.png";
import handes from "../../assets/Services/Icons/09.svg";
import kidfoot from "../../assets/Services/Images/02.png";
import chess from "../../assets/Services/Images/03.png";
import dentist from "../../assets/Services/Images/04.png";
import fan from "../../assets/Services/Images/06.png";
import kidPainting from "../../assets/Services/Images/07.png";
import upper from "../../assets/Services/Icons/upper.svg";
import lower from "../../assets/Services/Icons/lower.svg";
import garden from "../../assets/Services/Images/09.png";
import Foam from "../../assets/Services/Images/011.png";
import Leather from "../../assets/Services/Images/012.png";
import SoltSand from "../../assets/Services/Images/013.png";
import "./Services.css";
import { Link } from "react-router-dom";
/* -------------------------------------------------------------------------- */
/*                                 START STYLE                                */
/* -------------------------------------------------------------------------- */
/* ------------------------------- NAVIGATION ------------------------------- */

const Nav = styled.nav`
  color: black;
  width: 90%;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
/* ---------------------------------- LOGO ---------------------------------- */
const Logo = styled.img`
  height: 50px;
`;
/* ---------------------------------- MENU ---------------------------------- */
const Menu = styled.ul`
  list-style: none;
  display: flex;
  @media (max-width: 768px) {
    display: ${(props) => (props.open ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 20px;
    border-radius: 5px;
    padding: 10px;
  }
`;
/* -------------------------------- Menu Item ------------------------------- */
const MenuItem = styled.li`
  margin: 0 10px;
  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;
/* --------------------------------- Burger --------------------------------- */
const Burger = styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: 768px) {
    display: block;
  }
`;
/* ----------------------------------- BAR ---------------------------------- */
const Bar = styled.span`
  display: block;
  width: 25px;
  height: 3px;
  background-color: black;
  margin: 5px 0;
`;

/* -------------------------------- Landing ------------------------------- */
const Container = styled.div`
  width: 80%;
  margin: 13rem auto;
  @media (max-width: 768px) {
    width: 90%;
    margin: 2rem auto;
  }
`;
/* ------------------------------- Landing H1 ------------------------------- */
const LandingH1 = styled.h1`
  font-size: 6em;
  font-weight: Bold;
  color: #f2d499;
  @media (max-width: 768px) {
    font-size: 4em;
    font-weight: Bold;
  }
`;
/* ------------------------------ Intervention ------------------------------ */
const Intervention = styled.div`
  width: 75%;
  margin: 13rem auto;
  position: relative;

  @media (max-width: 768px) {
    width: 90%;
    margin: 2rem auto;
  }
  &::before {
    content: "01"; /* The text to display */
    z-index: 100;
    position: absolute; /* Positioning relative to the Intervention div */
    top: 0px; /* Adjust as needed */
    left: 30px; /* Adjust as needed */
    width: 125px;
    height: 75px;
    border: 2px solid #f2d499; /* Border of the square */
    border-radius: 10px; /* Rounded corners */
    display: flex; /* To center the content */
    align-items: center; /* Align content vertically */
    justify-content: center; /* Align content horizontally */
    background-color: #f2d499; /* Background color of the square */
    font-size: 3rem; /* Font size of the text */
    color: white; /* Text color */
    font-weight: bold;

    @media (max-width: 768px) {
      top: 9px;
      left: 24px;
      width: 63px;
      height: 34px;
    }
  }
`;

/* ------------------------------ InterventionConatiner ------------------------------ */
const InterventionConatiner = styled.div`
  position: relative;
  border-radius: 7rem;
  height: 50vh;
  background-color: #f7e3bd;
  @media (max-width: 768px) {
    border-radius: 3rem;
    height: 30vh;
  }
`;
/* ------------------------------ InterventionText ------------------------------ */
const InterventionText = styled.div`
  position: absolute;
  left: 73px;
  top: 82px;
  @media (max-width: 768px) {
    left: 56px;
    top: 59px;
  }
`;
/* ------------------------------ InterventionText1 ------------------------------ */
const InterventionText1 = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #bc756a;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
/* ------------------------------ InterventionText1Span ------------------------------ */
const InterventionText1Span = styled.span`
  font-weight: normal;
  @media (max-width: 768px) {
  }
`;
/* ------------------------------ InterventionText1Span ------------------------------ */
const InterventionTextp1 = styled.p`
  color: #98a58f;
  font-size: 1.5rem;
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;
/* ------------------------------ InterventionText1Span ------------------------------ */
const InterventionTextp2 = styled.p`
  color: #98a58f;
  font-size: 1.5rem;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;
/* ------------------------------ InterventionText1Span ------------------------------ */
const Image1 = styled.img`
  position: absolute;
  left: 421px;
  top: 99px;
  @media (max-width: 768px) {
    display: none;
  }
`;
/* ------------------------------ InterventionText1Span ------------------------------ */
const Image2 = styled.img`
  position: absolute;
  right: -95px;
  bottom: 0px;
  @media (max-width: 768px) {
    display: none;
  }
`;
/* -------------------------------------------------------------------------- */
/*                                   SENSORY                                  */
/* -------------------------------------------------------------------------- */
/* ---------------------------- Sensory Container --------------------------- */
const SensoryContainer = styled.div`
  width: 50%;
  margin: 13rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    width: 90%;
    margin: 2rem auto;
    flex-direction: column;
  }
`;
/* --------------------------- TextSectionSensory --------------------------- */
const TextSectionSensoryBox = styled.div`
  margin: 0 60px;
  color: #bc756a;
  @media (max-width: 768px) {
    width: 90%;
    margin: 3rem auto;
    flex-direction: column;
  }
`;
/* --------------------------- TextSectionSensory --------------------------- */
const SensoryTitle = styled.div``;
/* --------------------------- SensoryHeader --------------------------- */
const SensoryHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;
/* --------------------------- TextSectionSensory --------------------------- */
const SensoryHeaderDiv = styled.div`
  margin-right: 3rem;
  position: relative;
  &::before {
    content: "";
    z-index: -1;
    position: absolute;
    top: -17px;
    left: -17px;
    width: 107px;
    height: 93px;
    border: 2px solid #f2d499;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f2d499;
    font-size: 3rem;
    color: white;
    font-weight: bold;
    
`;
/* --------------------------- TextSectionSensory --------------------------- */
const SensoryHeaderDivH3 = styled.h3`
  font-size: 0.9rem;
`;
/* --------------------------- TextSectionSensory --------------------------- */
const SensoryHeaderDivH1 = styled.h1`
  font-size: 2.5rem;
  line-height: 1.2;
  font-weight: bold;
`;
/* -------------------------------------------------------------------------- */
/*                                END OF STYLES                               */
/* -------------------------------------------------------------------------- */
const Services = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Nav>
        <Logo src={logo} alt="Logo" />
        <Menu open={isOpen}>
          <MenuItem>
            <Link to="/">HOME</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/about">ABOUT</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/services">PROGRAMS</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/whoweare">WHO-WE-ARE</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/contact">CONTACT</Link>
          </MenuItem>
        </Menu>
        <Burger onClick={() => setIsOpen(!isOpen)}>
          <Bar />
          <Bar />
          <Bar />
        </Burger>
      </Nav>
      <Container>
        <img src={landingLogo}></img>
        <LandingH1>
          OUR <br /> SERVICES
        </LandingH1>
      </Container>
      {/* InterVention */}
      <Intervention>
        <InterventionConatiner>
          <InterventionText>
            <InterventionText1>
              Intervention <br />{" "}
              <InterventionText1Span>Program</InterventionText1Span>
            </InterventionText1>
            <InterventionTextp1>
              Our experienced interdisciplinary team provides <br />
              advanced, innovative assessment and intervention <br />
              methods in various areas, engaging children in <br />
              enjoyable ways to help them become lifelong learners
            </InterventionTextp1>
            <InterventionTextp2>
              Our programs benefits all ages from birth to adulthood.
            </InterventionTextp2>
          </InterventionText>
          <Image1 src={Img4} />
          <Image2 src={Img5} />
        </InterventionConatiner>
      </Intervention>
      {/* /* --------------------------------- Sensory --------------------------------  */}
      <SensoryContainer>
        <TextSectionSensoryBox>
          <SensoryTitle>
            <SensoryHeader>
              <SensoryHeaderDiv>
                <SensoryHeaderDivH3>INTERVENTION PROGRAM</SensoryHeaderDivH3>
                <SensoryHeaderDivH1>
                  Sensory <br /> Integration
                </SensoryHeaderDivH1>
              </SensoryHeaderDiv>
              <img src={BrainLogo} />
            </SensoryHeader>
            <div className="sensory-textbox">
              <p>
                Sensory integration therapy aims to intervene with <br />
                children having sensory processing challenges, such <br />
                as having difficulty with organizing and responding <br />
                to information coming from our senses
              </p>
              <p>
                The child may be oversensitive, under-sensitive to <br />
                a sensory input, or both. and this may be evident in <br />
                his overall behaviour
              </p>
              <p>
                Sensory integration intervention includes structured <br />
                exposure to sensory input, movement therapy, Balance <br />
                treatments, together with carefully designed and <br />
                customized physical activities and accommodations
              </p>
            </div>
          </SensoryTitle>
        </TextSectionSensoryBox>
        <img src={KidsPhoto1} />
      </SensoryContainer>
      {/* /* ---------------------------- Physical Therapy ----------------------------  */}
      <div className="physicalTherapySection">
        <div className="physicalTherapyContainer">
          <div className="physicalTherapyHeaderDiv">
            <img src={pullUp} alt="" />
            <p>INTERVENTION PROGRAM</p>
            <h1>
              Physical <br />
              Therapy
            </h1>
          </div>
          {/* Physical Therapy textbox (1,2) */}
          <div className="textbox-physicalTherapy">
            {/* Left Side Box */}
            <div className="leftdivphysicaltherapytextbox">
              <p className="firstleftdivphysicaltherapytextbox">
                Physical therapists work with children to identify <br />
                movement and gross motor difficulties. Aiming <br />
                to facilitate and achieve their full potential with <br />
                functional mobility
              </p>
              <p>
                Our Team can assess, diagnose and treat <br />
                a wide variety of movement disorders <br />
                and difficulties, such as :
              </p>
            </div>
            {/* Right Side Box */}
            <div className="rightdivphysicaltherapytextbox">
              <ul>
                <li>
                  Children who are having difficulty coordinating motor <br />
                  skills such as jumping or stair climbing.
                </li>
                <li>
                  Babies who are slower to reach their motor milestones. <br />
                  eg: head control, sitting or walking.
                </li>
                <li>
                  Children who use unusual patterns of movement. <br />
                  eg: bottom shuffling or toe walking.
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Image */}
        <div className="photocontainerphysical">
          <img className="sunlogo" src={sun} alt="sun" />
          <img className="kidspic" src={kidfoot} alt="kids" />
        </div>
      </div>
      {/* /* -------------------------- Occupational Therapy --------------------------  */}
      <div className="OccupationalContainer">
        <SensoryContainer>
          <TextSectionSensoryBox>
            <SensoryTitle>
              <SensoryHeader>
                <SensoryHeaderDiv>
                  <SensoryHeaderDivH3>INTERVENTION PROGRAM</SensoryHeaderDivH3>
                  <SensoryHeaderDivH1>
                    Occupational <br /> Therapy
                  </SensoryHeaderDivH1>
                </SensoryHeaderDiv>
                <img className="hands" src={handes} />
              </SensoryHeader>
              <div className="sensory-textbox">
                <p>
                  Occupational therapy aims to assist children <br />
                  to reach their full potential in daily living <br />
                  activities and fine motor skills
                </p>
                <p style={{ fontWeight: "Bold" }}>Activities may include :</p>
                <h1 style={{ fontWeight: "Bold" }}>Self-Care</h1>
                <p>
                  Such as independent feeding, using the <br />
                  toilet and getting dressed. <br />
                </p>
                <p>Recreational activities</p>
                <p>such as sports and playing with friends.</p>
              </div>
            </SensoryTitle>
          </TextSectionSensoryBox>
          <img src={chess} />
        </SensoryContainer>
      </div>
      {/* /* -------------------------- Occupational Therapy --------------------------  */}
      <div className="speechSwallowingContainer">
        <div className="speechSwallowing">
          <div className="speechSwallowingImg">
            <img src={dentist} alt="" />
          </div>
          <div className="speechHeader">
            <div className="speechHeaderText1">
              <p>INTERVENTION PROGRAM</p>
              <h1>
                Speech <br /> + Swallowing
              </h1>
            </div>
            <div className="speechHeaderText2">
              <p>
                Speech and language therapy provide life-changing <br />
                treatment, support and care children and adults who <br />
                have difficulties with communication, cognitive skills, <br />
                voice, feeding and swallowing
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* /* ------------------------------ Entertainment -----------------------------  */}
      <div className="entertainment">
        <div className="entertainmentContainer">
          <div className="leftBoxEntertainment">
            <img src={sunray} alt="" />
            <img src={paintdrop} alt="" />
            <img src={paintingChild} alt="" />
          </div>
          <div className="rightBoxEntertainment">
            <div className="entertainmentHeader">
              <h1>Entertainment</h1>
              <p>PROGRAM</p>
            </div>
            <p>
              Each space at Cultivay was designed by our educators <br />
              and professionals experienced in childhood well- <br />
              being, all of whom firmly believe that children are <br />
              independent thinkers. The outdoor and indoor spaces <br />
              provide limitless potential for our children, inspiring <br />
              their young minds to become self directed, to create <br />
              lasting memories and to immerse themselves in the <br />
              world of imagination
            </p>
          </div>
        </div>
      </div>
      {/* /* -------------------------- Occupational Therapy --------------------------  */}
      <div className="handsOnActivities">
        <SensoryContainer>
          <TextSectionSensoryBox>
            <SensoryTitle>
              <SensoryHeader>
                <SensoryHeaderDiv>
                  <SensoryHeaderDivH3>INTERVENTION PROGRAM</SensoryHeaderDivH3>
                  <SensoryHeaderDivH1>Hands-On Activities</SensoryHeaderDivH1>
                </SensoryHeaderDiv>
              </SensoryHeader>
              <div className="sensory-textbox">
                <p>
                  Hands-on activities are educational or recreational <br />
                  tasks that require active engagement and manipulation <br />
                  of objects or materials using one’s hands.
                </p>

                <p>
                  These activities typically involve direct physical <br />
                  interaction with the subject matter, allowing children <br />
                  to explore, experiment, and learn through first-hand <br />
                  experience. To enhance understanding, promote critical <br />
                  thinking, and develop practical skills.
                </p>
              </div>
            </SensoryTitle>
          </TextSectionSensoryBox>
          <img src={fan} />
        </SensoryContainer>
      </div>
      {/* /* -------------------------- Picture Therapy --------------------------  */}
      <div className="divforpictures">
        <div className="containerForPicture">
          <img src={kidPainting} />
          <div className="textinPicture">
            <p>
              By immersing children in tactile <br />
              experiences, hands-on activities foster <br />
              a deeper level of engagement, stimulate <br />
              sensory perception, and facilitate the <br />
              acquisition of knowledge and skills in a <br />
              more interactive and memorable manner.
            </p>
          </div>
        </div>
      </div>
      {/* /* -------------------------- Natural Outdoor Space -------------------------  */}
      <div className="NaturalOutdoorSpace">
        <img src={upper}></img>
        <div className="NaturalSpaceDivParent">
          <div className="NaturalSpaceDivChild1">
            <div className="AllParent">
              <img src={garden}></img>
              <div className="TextParent">
                <h3>Hands-On Activities</h3>
                <h1>
                  Natural Outdoor
                  <br />
                  Space
                </h1>

                <p>
                  Our Natural Outdoor Space is composed of natural <br />
                  elements and features, allowing children to connect <br />
                  with nature and experience its inherent beauty and <br />
                  tranquility. This spaces provides an opportunity to do <br />
                  recreational activities , and it plays a vital role in <br />
                  promoting the overall well-being of children.
                </p>
              </div>
            </div>
          </div>
        </div>
        <img src={lower}></img>
      </div>
      {/* /* ------------------------------- Messy Play -------------------------------  */}
      <div className="messyPlay">
        <div className="textsideMessyPlay">
          <h3>ENTERTAINMENT PROGRAM</h3>
          <h1>Messy Play</h1>
          <p>
            Messy Play lets kids explore their senses and follow <br />
            their natural curiosity at all developmental stages. <br />
            They practice their motor, verbal, and social skills <br />
            while gaining an understanding of fundamental <br />
            cognitive ideas
          </p>
        </div>
        <div className="picturesSideMessyPlay">
          {/* First Div */}
          <div>
            <img src={Foam}></img>
            <p>Foam</p>
          </div>
          {/* Second Div */}
          <div>
            <img src={Leather}></img>
            <p>Leather</p>
          </div>
          {/* Third Div */}
          <div>
            <img src={SoltSand}></img>
            <p>Soft Sand</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
