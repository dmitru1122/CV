import { Suspense, lazy } from "react";
import "./HomePage.scss";
import arrowRight from "../../../assets/arrow-right.svg";
// const myPhoto = lazy(() => import("../../../assets/myPhoto.jpg"));
import myPhoto from "../../../assets/myPhoto_black.png";
const ArticleCs = lazy(() => import("../../atricle-cs/ArticleCs"));

function Home() {
  return (
    <div className="home">
      <section className="intro-block  container horizontal-center">
        <div className="intro-block__left">
          {/* <Suspense fallback={<div>Loading...</div>}> */}
          <img
            className="intro-block__left__img"
            src={myPhoto}
            alt="me"
            title="My photo"
          />
          {/* </Suspense> */}
        </div>
        <div className="intro-block__right">
          <h2
            className="intro-block__name app-text--uppercase app-text app-text--xxxl"
            title="DMITRU VABISHCHEVICH"
          >
            Dima <span className="app-text--grey">Vab</span>
          </h2>
          <hr className="intro-block__hr" />
          <h3 className="intro-block__profession app-text app-text--xxl app-text--uppercase">
            Front-end developer
          </h3>

          <p className="intro-block__describtion app-text--l app-text">
            Have experience with front-end and UI-design. Working with a focus
            on Optimal efficiency, quality, and functionality.
          </p>
          <div className="intro-block__link app-text--l app-text link-block">
            About me{" "}
            <img
              className="intro-block__link__img link-block__img"
              src={arrowRight}
              alt="arrow"
            />
          </div>
          <div className="intro-block__link app-text--l app-text link-block">
            My project{" "}
            <img
              className="intro-block__link__img link-block__img"
              src={arrowRight}
              alt="arrow"
            />
          </div>
        </div>
        <div className="intro-block__background-title app-text">FRONT-END</div>
      </section>
      <section className="home__about-myself">
        <Suspense fallback={<div>Loading...</div>}>
          <ArticleCs
            title="About myself"
            blocks={[
              {
                header: "Personal profile",
                content: [
                  `I am a hard working, self-motivated, responsible person.  I am always willing to learn new skills.
                   I have developed good planning & organisational skills and am confident working independently or as part of a team.`,
                  "My weakness is stubbornness. I can spend too much time looking for the best solution.",
                ],
              },
              {
                header: "Hobbies",
                content: [
                  "Geographic",
                  "History",
                  "Medicial",
                  "Volunteering",
                  "Teaching",
                ],
              },
              {
                header: "Education",
                content: [
                  "Mechanical engineering food processing 'Brest State Technical University (BrSTU)'",
                ],
              },
            ]}
          />
        </Suspense>
      </section>
      <section className="home__technical-skills">
        <Suspense fallback={<div>Loading...</div>}>
          <ArticleCs
            title="Skills"
            blocks={[
              {
                header: "Core competencies",
                content: ["JavaScript"],
              },
              {
                header: "Techinical skills",
                content: [
                  "LINUX, WINDOWS",
                  "GIT",
                  "JavaScript, TypeScript, HTML5, CSS3, SASS, REST, JSON, CSS BEM, Bootstrap,  React.JS, Redux, React router, Vue.js, Vue-router, Vue.ts, Node.js, Express.JS",
                  "VS Code",
                  "Jira",
                ],
              },
              {
                header: "Soft skills",
                content: [
                  "Hard working",
                  "Self-motivated",
                  "Responsible",
                  "Analytical skill",
                  "Organisational skill",
                ],
              },
            ]}
          />
        </Suspense>
      </section>
      <section className="home__projects">
        <Suspense fallback={<div>Loading...</div>}>
          <ArticleCs
            title="My projects"
            blocks={[
              {
                header: "Cv",
                content: [
                  "Stack: JavaScript, HTML, CSS, React.js",
                  "Role: Front-end developer",
                  "Description: Website to introduce myself",
                  "Design all project architecture and structure",
                ],
              },
              {
                header: "Hobbies",
                content: ["reading", "programming", "medicial"],
              },
            ]}
          />
        </Suspense>
      </section>

      {/* <Block data=""/> */}
      {/* <Contact /> */}
    </div>
  );
}

export default Home;
