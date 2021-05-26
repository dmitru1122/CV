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
          {/* <div className="article-cs">
            <div className="article-cs__header-block app-text app-text--uppercase app-text--white app-text--xl">
              About myself
            </div>
            <div className="article-cs__main app-text app-text--m">
              <div className="list article-cs__main__list">
                <>
                  <div className="list__title app-text app-text--uppercase upp-text-m">
                    <div className="list__title-index">#1</div>{" "}
                    Personal profile
                  </div>
                  <ul className="list__content"> 
                  <li >I am a hard working, self-motivated, responsible person.  I am always willing to learn new skills.
                   I have developed good planning & organisational skills and am confident working independently or as part of a team.</li>
                   <li>My weakness is stubbornness. I can spend too much time looking for the best solution.</li>
                  </ul>
                  <div className="list__title app-text app-text--uppercase upp-text-m">
                    <div className="list__title-index">#2</div>{" "}
                    Hobbies
                  </div>
                  <ul className="list__content"> 
                  <li >Geographic</li>
                   <li>History</li>
                  </ul>
                </>
              </div>
            </div>
          </div> */}
          <ArticleCs
            title="About myself"
            blocks={[
              {
                header: "Personal profile",
                content: [
                  {
                    header: "",
                    type: "text",
                    text: [
                      `I am a hard working, self-motivated, responsible person.  I am always willing to learn new skills.
                   I have developed good planning & organisational skills and am confident working independently or as part of a team.`,
                      "My weakness is stubbornness. I can spend too much time looking for the best solution.",
                    ],
                  },
                ],
              },
              {
                header: "Hobbies",
                content: [
                  { header: "", type: "text", text: ["Geographic"] },
                  { header: "", type: "text", text: ["History"] },
                  { header: "", type: "text", text: ["Medicial"] },
                  { header: "", type: "text", text: ["Volunteering"] },
                  { header: "", type: "text", text: ["Teaching"] },
                ],
              },
              {
                header: "Education",
                content: [
                  {
                    header: "",
                    type: "text",
                    text: [
                      "Mechanical engineering food processing 'Brest State Technical University (BrSTU)'",
                    ],
                  },
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
                content: [{ header: "", type: "text", text: ["JavaScript"] }],
              },
              {
                header: "Techinical skills",
                content: [
                  { header: "", type: "text", text: ["LINUX, WINDOWS"] },
                  { header: "", type: "text", text: ["GIT"] },
                  {
                    header: "",
                    type: "text",
                    text: [
                      "JavaScript, TypeScript, HTML5, CSS3, SASS, REST, JSON, CSS BEM, Bootstrap,  React.JS, Redux, React router, Vue.js, Vue-router, Vue.ts, Node.js, Express.JS",
                    ],
                  },
                  { header: "", type: "text", text: ["VS Code"] },
                  { header: "", type: "text", text: ["Jira"] },
                ],
              },
              {
                header: "Soft skills",
                content: [
                  { header: "", type: "text", text: ["Hard working"] },
                  { header: "", type: "text", text: ["Self-motivated"] },
                  { header: "", type: "text", text: ["Responsible"] },
                  { header: "", type: "text", text: ["Analytical skill"] },
                  { header: "", type: "text", text: ["Organisational skill"] },
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
                  {
                    header: "",
                    type: "text",
                    text: ["Stack: JavaScript, HTML, CSS, React.js"],
                  },
                  {
                    header: "Link",
                    type: "link",
                    text: ["It is current site"],
                  },
                  {
                    header: "",
                    type: "text",
                    text: ["Role: Front-end developer"],
                  },
                  {
                    header: "",
                    type: "text",
                    text: ["Description: Website to introduce myself"],
                  },
                  {
                    header: "",
                    type: "text",
                    text: [
                      "Achievements: Design all project architecture and structure, Built responsive application's UI, Develop all frontend functionality from the ground up",
                    ],
                  },
                ],
              },
              {
                header: "Zupp.io",
                content: [
                  {
                    header: "",
                    type: "text",
                    text: [
                      "]Stack: HTML, CSS, SASS, TypeScript, Vue.ts, Vue Router",
                    ],
                  },
                  { header: "", type: "text", text: ["Link: https://zupp.io"] },
                  {
                    header: "",
                    type: "text",
                    text: ["Role: Front-end developer"],
                  },
                  {
                    header: "",
                    type: "text",
                    text: ["Description: Website to zupp service"],
                  },
                  {
                    header: "",
                    type: "text",
                    text: [
                      "Achievements: Work with team. Built responsive application's UI, Develop all frontend functionality from the ground up",
                    ],
                  },
                ],
              },
              {
                header: "Zupp.io.statistic",
                content: [
                  {
                    header: "stack",
                    type: "text",
                    text: [
                      "Stack: HTML, CSS, SASS, TypeScript, Vue.ts, Vue Router, Node.js",
                    ],
                  },
                  {
                    header: "Link:",
                    link: ["https://status.zupp.io/"],
                    text: ["https://status.zupp.io/"],
                  },
                  { header: "Role", text: ["Front-end developer"] },
                  { header: "Description", text: ["Website to zupp service"] },
                  {
                    header: "Achievements",
                    type: "list",
                    text: [
                      "Work with team. Tested backend. Built responsive application's UI, Develop all frontend functionality from the ground up",
                    ],
                  },
                ],
              },
              {
                header: "Le Rosey",
                content: [
                  {
                    header: "Stack",
                    type: "text",
                    text: [
                      "HTML, CSS, SASS, JavaScript, Vue.ts, Vue Router, Node.js",
                    ],
                  },
                  {
                    header: "Link",
                    type: "link",
                    text: ["https://www.rosey.ch/"],
                  },
                  {
                    header: "Role",
                    type: "text",
                    text: ["Front-end developer"],
                  },
                  {
                    header: "Description",
                    type: "text",
                    text: ["We developed a client site for Switzerland school"],
                  },
                  {
                    header: "Achievements",
                    type: "text",
                    text: [
                      "Work with a big team. Fixed bugs. Added new features and functionality to existing site",
                    ],
                  },
                ],
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
