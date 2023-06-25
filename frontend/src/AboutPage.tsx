import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import ResponsiveAppBar from "./Appbar";

const AboutPage = () => {
  return (
    <div>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Parallax pages={2} style={{ backgroundColor: "#f2f2f2" }}>
        <ParallaxLayer
          offset={0}
          speed={0.5}
          style={{
            backgroundImage: `url(/sierra.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: ".7"
          }}
        />

        <ParallaxLayer offset={0.1} speed={-0.2}>
          <h1>About Us</h1>
        </ParallaxLayer>

        <ParallaxLayer offset={0.2} speed={0.3}>
          <h2 style={{color: 'black'}}>
            The goal of this project is to study embodied cognition by integrating multiple modalities in real time.

          </h2>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.5} style={{
          backgroundImage: `url(/p1.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: ".6"
        }}>
        </ParallaxLayer>

        <ParallaxLayer offset={1.1} speed={0.5}>
          <h1>Our Mission</h1>
        </ParallaxLayer>

        <ParallaxLayer offset={1.5} speed={0.3}
        >

          
          <h2>
            Research-grade sensors are becoming widely available. Our goal is to build a platform that can
            integrate these sensors in real time, encrypt and store them on cloud infrasture, and then make
            this data available to users to enable personal insight, scientific research, etc.
          </h2>
        </ParallaxLayer>



        

        
      </Parallax>
    </div>
  );
};

export default AboutPage;