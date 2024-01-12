import React from "react";
import img from "../images/image_philosophy.jpg";
import img2 from "../images/360_F_597957430_bIMCZ4J6AYr36uthT3EYyD9P6yGQZwbY.jpg";
import img3 from "../images/Frame 16.svg";
import img4 from "../images/Group 20.svg";
import img5 from "../images/Group 62.svg";
import img7 from "../images/Vector 1 (2).svg";
import img8 from "../images/acastro_211101_1777_meta_0002.jpg";

const Contentt = () => {
  return (
    <div>
      <div class="content">
        <img class="img_bng" src={img2} width="700" alt="" />
        <div class="main_tittle">
          <h1>
            I’m Bekboeva Aidana. <br />
            A Web Developer
            <br />
            <span>based in Kyrgyzstan.</span>
          </h1>
        </div>
      </div>
      <div class="section-2">
        <div class="title_section2">
          <span class="work_exp">work experience</span>
          <p class="info_company_worked">
            Companies I have worked <br />
            for in the past
          </p>
        </div>
        <div class="section-2_boxes">
          <div class="first_box">
            <span class="number_box">01</span>
            <span class="company_box">
              <span>Google</span>, Interaction Designer
            </span>
            <p class="info_box">
              I currently am the lead designer on the interaction design team
              for Google Play.
            </p>
          </div>
          <div class="second_box">
            <span class="number_box">02</span>
            <span class="company_box">
              <span>Facebook</span> , Product Designer
            </span>
            <p class="info_box">
              I’ve worked on a wide variety of internal tools for facebook over
              the past 6 years.
            </p>
          </div>
          <div class="third_box">
            <span class="number_box">03</span>
            <span class="company_box">
              <span>Dribbble</span>, Graphic Designer
            </span>
            <p class="info_box">
              I started my design career with Dribbble. I was incharge of
              creating illustrations for the platform.
            </p>
          </div>
        </div>
      </div>
      <div class="section-3">
        <div class="title_section3">
          <h2>Philosophy & values</h2>
          <p>
            I think everyone wants the same thing - relationship with <br />
            humanity, peace with the <br />
            metaphysical, and experience with the universe. I try to grasp these
            things with my values: authenticity,
            <br />
            creativity, & hospitality.
          </p>
        </div>
        <div class="image_philosophy">
          <img src={img} width="650px" alt="" />
        </div>
      </div>
      <div class="section-4">
        <div class="title_4">
          <h2>Skillset</h2>
          <p>
            With skills in over 4 different fields of design, I am the perfect
            person to hire when it comes to a full fledged project. Whatever
            your needs are, I can pretty much take on any challenge.
          </p>
        </div>
        <div class="boxes_section4">
          <div class="box1">
            <img src={img7} width="30px" alt="" />
            <span class="main_word">Product Design</span>
            <p class="section-4_p">
              Working at Facebook has taught me a lot about how to understand
              users, solve problems and build great products.
            </p>
            <div class="box2">
              <div>
                <img src={img5} width="30px" alt="" />
                <span class="main_word">Motion Design</span>
                <p class="section-4_p">
                  I started my design journey with motion design in my college
                  days. Motion is something that really fascinates me because of
                  the flexibility of story telling.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div class="box3">
              <img src={img4} width="30px" alt="" />
              <span class="main_word">Visual Design</span>
              <p class="section-4_p">
                My experience at dribbble has helped me learn to develop the eye
                for design. Colors, typography, layout and the whole package.
              </p>
            </div>
            <div class="box4">
              <img src={img3} width="30px" alt="" />
              <span class="main_word">Photography</span>
              <p class="section-4_p">
                Clicking pictures really brings out the creative in me.
                Phtography really makes you look and percieve things in a
                different way.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="SECTION-5">
        <div class="first_section-5">
          <h2 class="main_tittle5">
            Work that I’ve done <br />
            for the past 8 years
          </h2>
          <div class="projects">
            <div class="project1">
              <img src={img8} width="600px" alt="" />
              <div class="name_company">Meta. Social Metaverse company</div>
              <p>Main Web Developer</p>
            </div>
          </div>
          <div class="btn_view">
            <button>Veiw all projects</button>
          </div>
        </div>
      </div>
      <div class="animation">
        <h2 class="Word_lets">Lets get started</h2>
        <p class="info_5">
          Now that you know a lot about me, let me know if you are interested to
          work with me.
        </p>
        <div class="signin" data-aos="flip-left">
          <p>Name</p>
          <input type="text" />
          <p>Email</p>
          <input type="text" />
          <p>Message</p>
          <input type="text" />
          <div class="btn_lets">
            <button>Let’s get started</button>
            <div></div>
          </div>
        </div>
      </div>
      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      <script>AOS.init();</script>
    </div>
  );
};

export default Contentt;
