import React from "react";

import RoomIcon from "@mui/icons-material/Room";
import PhoneIcon from "@mui/icons-material/Phone";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container1 = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-around;

  ${mobile({ flexDirection: "column" })};
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 2;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const ContactPage = () => {
  return (
    <>
      <div>
        <Container1>
          <Left>
            <Link to="/" style={{ color: "black" }}>
              <Logo>PIZZA.</Logo>
            </Link>
            <Desc>
              The PIZZA’s family tradition begins with a passion for culinary
              excellence. It continues with a storied reputation for
              award-winning cuisine, and a legacy spanning more than 50 years.
              It continues today in The Pizza Shop, where passion and tradition
              meet in a warm, inviting and contemporary atmosphere.
            </Desc>
            <SocialContainer>
              <SocialIcon color="3B5999">
                <a
                  href="https://www.instagram.com/_allin18"
                  style={{ color: "white" }}
                >
                  <FacebookIcon />
                </a>
              </SocialIcon>
              <SocialIcon color="E4405F">
                <a
                  href="https://www.instagram.com/_allin18"
                  style={{ color: "white" }}
                >
                  <InstagramIcon />
                </a>
              </SocialIcon>
              <SocialIcon color="55ACEE">
                <a
                  href="https://www.instagram.com/_allin18"
                  style={{ color: "white" }}
                >
                  <TwitterIcon />
                </a>
              </SocialIcon>
              <SocialIcon color="E60023">
                <a
                  href="https://www.instagram.com/_allin18"
                  style={{ color: "white" }}
                >
                  <PinterestIcon />
                </a>
              </SocialIcon>
            </SocialContainer>
          </Left>
          <Center>
            <Title>Useful Links</Title>
            <List>
              <ListItem>
                <Link to="/" style={{ color: "black", fontSize: 20 }}>
                  Home
                </Link>
              </ListItem>
              <ListItem>
                <Link to="/about" style={{ color: "black", fontSize: 20 }}>
                  About
                </Link>
              </ListItem>
              <ListItem>
                <Link to="/login" style={{ color: "black", fontSize: 20 }}>
                  Login
                </Link>
              </ListItem>
              <ListItem>
                <Link to="/shop" style={{ color: "black", fontSize: 20 }}>
                  Shop
                </Link>
              </ListItem>
            </List>
          </Center>
          <Right>
            <Title>Contact</Title>
            <ContactItem>
              <RoomIcon style={{ marginRight: "10px" }} /> Isanova 105/3,
              c.Bishkek
            </ContactItem>
            <ContactItem>
              <PhoneIcon style={{ marginRight: "10px" }} />
              <a href="tel:5558920234" style={{ fontSize: 16, color: "black" }}>
                {" "}
                +996 771 010022
              </a>
            </ContactItem>
            <ContactItem>
              <MailOutlineIcon style={{ marginRight: "10px" }} />{" "}
              almaida@gmail.com
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
          </Right>
        </Container1>
      </div>
    </>
  );
};
export default ContactPage;
