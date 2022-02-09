import { Container } from "@mui/material";
import React from "react";

const AboutPage = () => {
  return (
    <div className="about-page">
      <section id="about" className="about">
        <h1
          className="about-h1"
          style={{ textAlign: "center", fontSize: 80, marginBottom: 50 }}
        >
          Discover ABOUT US
        </h1>
        <Container>
          <div className="discription">
            <div className="desc-left">
              <h3>We </h3>
              <p>
                Usually people come to Pizza just to eat. Our promoters hand out
                leaflets about a slice of pizza or something else profitable. We
                do this as the first step to getting to know each other. But for
                us, Dodo is not only pizza. This is pizza too, but first of all
                it is a great thing that inspires us, makes us wake up every
                morning and continue to work with interest. What is our
                interest? Now we'll tell you.
              </p>
            </div>
            <div className="desc-right">
              <h3>Perfect Ingredients</h3>
              <p>
                Why do we want to get to know each other so much? Because then
                the pizza does everything by itself. People see that it is
                delicious and come back again. We need to show it for the first
                time. In general, pizza is a very simple thing, it is difficult
                to spoil it. Enough good ingredients and the right dough. This
                is a designer, if the parts are of high quality, then the result
                will be in order. Here they are, our details:
              </p>
            </div>
          </div>
          <div className="gallery">
            <img
              src="https://images.squarespace-cdn.com/content/v1/604ebfaf22e44a51184e5ac6/1626294491906-BDPO32OH507VTBUGTW6O/image-asset.jpeg?format=300w"
              alt="Event1"
            />
            <img
              src="https://images.squarespace-cdn.com/content/v1/604ebfaf22e44a51184e5ac6/1626478243391-IG8VP8PRQWMTUJ3WFFV2/image-asset.jpeg?format=300w"
              alt="Event1"
            />
            <img
              src="https://images.squarespace-cdn.com/content/v1/604ebfaf22e44a51184e5ac6/1625842378413-8F3EFVCTX8XMZU7ASD3H/image-asset.jpeg?format=300w"
              alt="Event1"
            />
          </div>
        </Container>
      </section>
    </div>
  );
};

export default AboutPage;
