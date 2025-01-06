import React from "react";
import "../Education And Experience/eduexp.css";

const EduExp = () => {
  return (
    <div class="container">
      <main class="row">
        {/* <!--   *******  Education Section Starts  *******   --> */}

        <section class="col">
          <header class="title">
            <h2>EDUCATION</h2>
          </header>

          <div class="contents">
            <div class="box">
              <h4>2017 - 2018</h4>
              <h3>Class X (SSC)</h3>
              <h5>Ash Secondary School, Vijapur</h5>
              <p>
                Successfully completed foundational education with a strong
                emphasis on core subjects such as Mathematics, Science, and
                English.
              </p>
            </div>

            <div class="box">
              <h4>2018 - 2020</h4>
              <h3>Class XII (HSC)</h3>
              <h5>Ash Secondary School, Vijapur</h5>
              <p>
                Completed higher secondary education with a focus on Science
                stream.Developed a strong understanding of subjects like
                Physics, Chemistry, Mathematics.Achieved a commendable academic
                performance, laying a solid foundation for higher education.
              </p>
            </div>

            <div class="box">
              <h4>2020 - 2024</h4>
              <h3>Bachelor's Degree In Information Technology</h3>
              <h5>Charotar University Of Science and Technology, Anand</h5>
              <p>
                Completed a comprehensive program focusing on the principles and
                practices of IT.Developed strong problem-solving skills and a
                solid foundation in technologies such as web development,
                programming languages, and system design. Actively engaged in
                projects that enhanced practical knowledge of modern IT
                solutions and contributed to academic success.
              </p>
            </div>
          </div>
        </section>
        {/* 
		<!--   *******  Education Section Ends  *******   -->

		<!--   *******  Experience Section Starts  *******  --> */}

        <section class="col">
          <header class="title">
            <h2>EXPERIENCE</h2>
          </header>

          <div class="contents">
            <div class="box">
              <h4>May 2022 - June 2022 (1 Month)</h4>
              <h3>HTML, CSS, JAVASCRIPT Intern</h3>
              <h5>Sparks To Ideas, Ahmadabad</h5>
              <p>
                Learned The Frontend Technologies Like HTML, CSS, JAVASCRIPT And
                Implement this Technologies in practical way. Create Designs
                using this Three Technologies.
              </p>
            </div>

            <div class="box">
              <h4>May 2023 - June 2023 (1 Month)</h4>
              <h3>React js Developer Intern</h3>
              <h5>TatvaSoft, Ahmadabad</h5>
              <p>
                Learned about Frontend Javascript framework React js.
                Understanding the concepts of react js Like Jsx, Hooks, State,
                Prop, Component, And Many more in React js. Create Dynamic
                Weather Web application using React js.
                <br />
                <br /> (I mention this Project into Project Section)
              </p>
            </div>

            <div class="box">
              <h4>January 2024 - July 2024 (6 Month)</h4>
              <h3>MERN Stack Developer Intern</h3>
              <h5>Sparks To Ideas, Ahmadabad</h5>
              <p>
                Learned about the MERN stack Technologies in this 6 Month
                internship. Learned The Frontend Technologies and Backend
                Technologies. Learned How to store Data In Backend. How to
                Create APIs. Create different different APIs. Using This MERN
                Technologies Create KEEP NOTES Project.
                <br />
                <br /> (I mention this Project into Project Section)
              </p>
            </div>
          </div>
        </section>

        {/* <!--   *******  Experience Section Ends   *******  --> */}
      </main>
    </div>
  );
};

export default EduExp;
