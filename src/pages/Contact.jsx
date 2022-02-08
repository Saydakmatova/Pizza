import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
const ContactPage = (props) => {
  return (
    <>
      <div>
        <Map google={props.google} zoom={14}>
          <Marker
            title={"The marker`s title will appear as a tooltip."}
            position={{ lat: -34.397, lng: 150.644 }}
            onClick={props.onMarkerClick}
            name={"Current location"}
          />

          <InfoWindow onClose={props.onInfoWindowClose}></InfoWindow>
        </Map>
      </div>
      <footer
        style={{ marginTop: 100 }}
        className="bg-black text-center text-white"
      >
        <div
          className="container "
          style={{
            paddingTop: 50,
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Link to="/">
            <h1>Pizza</h1>
          </Link>
          <section
            className="mb-4"
            style={{
              padding: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link
              to="#"
              className="btn btn-primary btn-floating m-1"
              style={{
                backgroundColor: "-moz-initial",
                width: "auto",
                borderRadius: "100%",
                border: "none",
              }}
              role="button"
            >
              <FacebookOutlinedIcon />
            </Link>

            <Link
              to="#"
              className="btn btn-primary btn-floating m-1"
              style={{
                backgroundColor: "#55acee",
                width: "auto",
                borderRadius: "100%",
                border: "none",
              }}
              role="button"
            >
              <TwitterIcon />
            </Link>

            <Link
              to="#"
              className="btn btn-primary btn-floating m-1"
              style={{
                backgroundColor: "#dd4b39",
                width: "auto",
                borderRadius: "100%",
                border: "none",
              }}
              role="button"
            >
              <GoogleIcon />
            </Link>

            <Link
              to="#"
              className="btn btn-primary btn-floating m-1"
              style={{
                backgroundColor: "#ac2bac",
                width: "auto",
                borderRadius: "100%",
                border: "none",
              }}
              role="button"
            >
              <InstagramIcon />
            </Link>

            <Link
              to="#"
              className="btn btn-primary btn-floating m-1"
              style={{
                backgroundColor: "#0082ca",
                width: "auto",
                borderRadius: "100%",
                border: "none",
              }}
              role="button"
            >
              <LinkedInIcon />
            </Link>
            <Link
              to="#"
              className="btn btn-primary btn-floating m-1"
              style={{
                backgroundColor: "#333333",
                width: "auto",
                borderRadius: "100%",
                border: "none",
              }}
              role="button"
            >
              <GitHubIcon />
            </Link>
          </section>
        </div>
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 255)" }}
        >
          © 2022 Copyright:
          <Link to="#" className="text-white">
            allin@gmail.com
          </Link>
        </div>
      </footer>
    </>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyBl8dNatG7XhMznos5YSs0If4lHHg-Y5sM",
})(ContactPage);
