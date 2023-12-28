import "./about.css";
import image from "../../assets/image.jpg";

export const About = () => {
  return (
    <>
      <div className="div1">
        <h2 style={{ color: "chocolate" }}>About Us</h2>
        <h3>
          StoryBook unites storytellers, fosters creativity, celebrates diverse
          voices in a vibrant community of narratives.
        </h3>
      </div>

      <div className="div2">
        <div className="div2subdiv1">
          <div className="div2subdiv1div1">
            <div>
              <h3>Who We Are</h3>
              <p>
                At StoryBook, we're a vibrant community of storytellers and
                readers passionate about the magic of narrative. Dive into a
                world where creativity knows no bounds—read captivating stories
                or craft your own. We're not just an app; we're a haven for
                diverse voices and imaginative tales.
              </p>
            </div>
            <div>
              <h3>What We Do</h3>
              <p>
                At StoryBook, we foster a dynamic community where users can read
                and create captivating stories. Our platform serves as a
                creative haven, encouraging storytellers to share their
                narratives and providing readers with a diverse array of
                engaging tales. Join us in the exploration of boundless
                imagination and literary expression.
              </p>
            </div>
          </div>
          <div className="div2subdiv1div2">
            <h3>Our Mission</h3>
            <p>
              Our mission at StoryBook is to inspire and connect storytellers
              worldwide. We aim to provide a platform where creativity
              flourishes, diverse voices are celebrated, and the joy of shared
              narratives enriches the lives of our community. Through fostering
              a supportive environment, we strive to make storytelling
              accessible, empowering individuals to express their unique
              perspectives and contribute to a global tapestry of imaginative
              tales.
            </p>
          </div>
        </div>

        <div className="div2subdiv2">
          <img src={image} alt="Viraj Gupta" />
          <h5>Viraj Gupta</h5>
          <p>Founder & CEO</p>
        </div>
      </div>
    </>
  );
};
