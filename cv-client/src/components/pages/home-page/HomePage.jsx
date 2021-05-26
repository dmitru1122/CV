import { Suspense, lazy, useRef } from "react";
import "./HomePage.scss";
import arrowRight from "../../../assets/arrow-right.svg";
// const myPhoto = lazy(() => import("../../../assets/myPhoto.jpg"));
import myPhoto from "../../../assets/myPhoto.png";
const ArticleCs = lazy(() => import("../../atricle-cs/ArticleCs"));
// const Test = lazy(() => import('../../atricle-cs/tes'));

function Home() {
  const aboutMyselfRef = useRef(null);
  const skills = useRef(null);
  const myProject = useRef(null);

  function scrollToRef(ref) {
    const positionTop = ref.current.getBoundingClientRect().y;
    document.body.scrollTo(0, positionTop);
  }

  return (
    <div className="home">
      <section className="intro-block  container">
        <div className="intro-block__left">
          <img
            className="intro-block__left__img"
            src={myPhoto}
            alt="me"
            title="My photo"
          />
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
          <div className="intro-block__link app-text--l app-text link-block" onClick={() => scrollToRef(aboutMyselfRef)}>
            About myself
            <img
              className="intro-block__link__img link-block__img"
              src={arrowRight}
              alt="arrow"
            />
          </div>
          <div className="intro-block__link app-text--l app-text link-block" onClick={() => scrollToRef(skills)}>
            My skills
            <img
              className="intro-block__link__img link-block__img"
              src={arrowRight}
              alt="arrow"
            />
          </div>
          <div className="intro-block__link app-text--l app-text link-block" onClick={() => scrollToRef(myProject)}>
            My project
            <img
              className="intro-block__link__img link-block__img"
              src={arrowRight}
              alt="arrow"
            />
          </div>
        </div>
        <div className="intro-block__background-title app-text">FRONT-END</div>
      </section>
      <section className="home__about-myself" ref={aboutMyselfRef}>
        <Suspense fallback={<div>Loading...</div>}>
          {/* <Test /> */}
          <div className="article-cs">
            <div className="article-cs__header-block app-text app-text--uppercase app-text--white app-text--xl">
              About myself
            </div>
            <div className="article-cs__main app-text app-text--m">
              <div className="list article-cs__main__list">
                <>
                  <div className="list__title app-text app-text--uppercase upp-text-m">
                    <div className="list__title-index">#1</div> Personal profile
                  </div>
                  <ul className="list__content">
                    <li>
                      I am a hard working, self-motivated, responsible person. I
                      am always willing to learn new skills. I have developed
                      good planning & organisational skills and am confident
                      working independently or as part of a team.
                    </li>
                    <li>
                      My weakness is stubbornness. I can spend too much time
                      looking for the best solution.
                    </li>
                  </ul>
                  <div className="list__title app-text app-text--uppercase upp-text-m">
                    <div className="list__title-index">#2</div> Hobbies
                  </div>
                  <ul className="list__content">
                    <li>Geographic</li>
                    <li>History</li>
                    <li>Volunteering</li>
                    <li>Teaching</li>
                  </ul>
                  <div className="list__title app-text app-text--uppercase upp-text-m">
                    <div className="list__title-index">#3</div> Education
                  </div>
                  <ul className="list__content">
                    <li>
                      Mechanical engineering food processing <br/>'Brest State
                      Technical University (BrSTU)'
                    </li>
                  </ul>
                </>
              </div>
            </div>
          </div>
        </Suspense>
      </section>
      <section className="home__technical-skills" ref={skills}>
        <Suspense fallback={<div>Loading...</div>}>
          {/* <Test /> */}
          <div className="article-cs">
            <div className="article-cs__header-block app-text app-text--uppercase app-text--white app-text--xl">
              Skills
            </div>
            <div className="article-cs__main app-text app-text--m">
              <div className="list article-cs__main__list">
                <>
                  <div className="list__title app-text app-text--uppercase upp-text-m">
                    <div className="list__title-index">#1</div> Core
                    competencies
                  </div>
                  <ul className="list__content">
                    <li>JavaScript</li>
                  </ul>
                  <div className="list__title app-text app-text--uppercase upp-text-m">
                    <div className="list__title-index">#2</div> Techinical
                    skills
                  </div>
                  <ul className="list__content">
                    <li>
                      <h4 className="list__content__title">OS Platform:</h4>
                      <ul className>
                        <li>LINUX, WINDOWS</li>
                      </ul>
                    </li>
                    <li>
                      <h4 className="list__content__title">
                        Version control systems:
                      </h4>
                      <ul>
                        <li>GIT</li>
                      </ul>
                    </li>
                    <li>
                      <h4 className="list__content__title">
                        Web technologies:
                      </h4>
                      <ul>
                        <li>
                          JavaScript, TypeScript, HTML5, CSS3, SASS, REST, JSON,
                          CSS BEM, Bootstrap, React.JS, Redux, React router,
                          Vue.js, Vue-router, Vue.ts, Node.js, Express.JS
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h4 className="list__content__title">
                        Application development systems:
                      </h4>
                      <ul>
                        <li>VS Code</li>
                      </ul>
                    </li>
                    <li>
                      <h4 className="list__content__title">
                        Management and modeling tools:
                      </h4>
                      <ul>
                        <li>Jira</li>
                      </ul>
                    </li>
                  </ul>
                  <div className="list__title app-text app-text--uppercase upp-text-m">
                    <div className="list__title-index">#3</div> Soft skills
                  </div>
                  <ul className="list__content">
                    <li>Hard working</li>
                    <li>Self-motivated</li>
                    <li>Responsible</li>
                    <li>Analytical skill</li>
                    <li>Organisational skill</li>
                  </ul>
                  <div className="list__title app-text app-text--uppercase upp-text-m">
                    <div className="list__title-index">#4</div> Languages
                  </div>
                  <ul className="list__content">
                    <li>Russian native speaker</li>
                    <li>English B1</li>
                  </ul>
                </>
              </div>
            </div>
          </div>
          {/* <ArticleCs
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
          /> */}
        </Suspense>
      </section>
      <section className="home__projects" ref={myProject}>
        <Suspense fallback={<div>Loading...</div>}>
          <div className="article-cs">
            <div className="article-cs__header-block app-text app-text--uppercase app-text--white app-text--xl">
              My projects
            </div>
            <div className="article-cs__main app-text app-text--m">
              <div className="list article-cs__main__list">
                <>
                  <div className="list__title app-text app-text--uppercase upp-text-m">
                    <div className="list__title-index">#1</div> Cv
                  </div>
                  <ul className="list__content">
                    <li>
                      <h4 className="list__content__title">Stack:</h4>
                      <ul>
                        <li>JavaScript, HTML, CSS, React.js</li>
                      </ul>
                    </li>
                    <li>
                      <h4 className="list__content__title">Link:</h4>
                      <ul>
                        <li>
                          <a href="It is current site">It is current site</a>
                        </li>
                      </ul>{" "}
                    </li>
                    <li>
                      <h4 className="list__content__title"> Role:</h4>
                      <ul>
                        <li>Front-end developer</li>
                      </ul>
                    </li>
                    <li>
                      <h4 className="list__content__title">Description:</h4>
                      <ul>
                        <li>Website to introduce myself</li>
                      </ul>
                    </li>
                    <li>
                      <h4 className="list__content__title"> Achievements:</h4>
                      <ul>
                        <li>Design all project architecture and structure</li>
                        <li> Built responsive application's UI</li>
                        <li>
                          Develop all frontend functionality from the ground up
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <div className="list__title app-text app-text--uppercase upp-text-m">
                    <div className="list__title-index">#2</div> Zupp.io
                  </div>
                  <ul className="list__content">
                    <li>
                      <h4 className="list__content__title"> Stack:</h4>
                      <ul>
                        <li>HTML, CSS, SASS, TypeScript, Vue.ts, Vue Router</li>
                      </ul>
                    </li>
                    <li>
                      <h4 className="list__content__title">Link:</h4>
                      <ul>
                        <li>
                          <a href="https://zupp.io">https://zupp.io</a>
                        </li>
                      </ul>{" "}
                    </li>
                    <li>
                      <h4 className="list__content__title">Role:</h4>
                      <ul>
                        <li>Front-end developer</li>
                      </ul>{" "}
                    </li>
                    <li>
                      <h4 className="list__content__title">Description:</h4>
                      <ul>
                        <li>Website to zupp service</li>
                      </ul>{" "}
                    </li>
                    <li>
                      <h4 className="list__content__title">Achievements:</h4>
                      <ul>
                        <li>Work with team.</li>
                        <li>Built responsive application's UI</li>
                        <li>
                          Develop all frontend functionality from the ground up
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <div className="list__title app-text app-text--uppercase upp-text-m">
                    <div className="list__title-index">#3</div>{" "}
                    Zupp.io.statistic
                  </div>
                  <ul className="list__content">
                    <li>
                    <h4 className="list__content__title">Stack:</h4>
                      <ul>
                        
                        <li>
                          HTML, CSS, SASS, TypeScript, Vue.ts, Vue Router,
                          Node.js
                        </li>
                      </ul>
                    </li>
                    <li>
                    <h4 className="list__content__title">Link:</h4>
                      <ul>
                        <li>
                          <a href="https://status.zupp.io/" target="_blank">
                            https://status.zupp.io/
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                    <h4 className="list__content__title">Role:</h4>
                      <ul>
                        
                        <li>Front-end developer</li>
                      </ul>
                    </li>
                    <li>
                    <h4 className="list__content__title">Description:</h4>
                      <ul>
                        <li>Website to zupp service</li>
                      </ul>
                    </li>
                    <li>
                    <h4 className="list__content__title">Achievements:</h4>
                      <ul>
                        <li>Work with team.</li>
                        <li>Tested backend.</li>
                        <li>Built responsive application's UI.</li>
                        <li>
                          Develop all frontend functionality from the ground up
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <div className="list__title app-text app-text--uppercase upp-text-m">
                    <div className="list__title-index">#4</div> Le Rosey
                  </div>
                  <ul className="list__content">
                    <li>
                    <h4 className="list__content__title">Stack:</h4>
                      <ul>
                        <li>HTML, CSS, SASS, JavaScript, Vue.ts, Vue Router</li>
                      </ul>
                    </li>
                    <li>
                    <h4 className="list__content__title">Link:</h4>
                      <ul>
                        <li>
                          <a href="https://www.rosey.ch/" target="_blank">
                            https://www.rosey.ch/
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                    <h4 className="list__content__title">Role:</h4>
                      <ul>
                        <li>Front-end developer</li>
                      </ul>
                    </li>

                    <li>
                    <h4 className="list__content__title">Description:</h4>
                      <ul>
                        <li>
                          We developed a client site for Switzerland school
                        </li>
                      </ul>
                    </li>
                    <li>
                    <h4 className="list__content__title">Achievements:</h4>
                      <ul>
                        <li>Work with a big team.</li>
                        <li>
                          Added new features and functionality to existing
                          project.
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <div className="list__title app-text app-text--uppercase upp-text-m">
                    <div className="list__title-index">#5</div> Success Craft
                  </div>
                  <ul className="list__content">
                    <li>
                    <h4 className="list__content__title">Stack:</h4>
                      <ul>
                        <li>HTML, CSS, SASS, TypeScript, Vue.ts, Vue Router</li>
                      </ul>
                    </li>

                    <li>
                    <h4 className="list__content__title">Link:</h4>
                      <ul>
                        <li>
                          <a href="https://scr.by/" target="_blank">https://scr.by/</a>
                        </li>
                      </ul>
                    </li>
                    <li></li>

                    <li>
                    <h4 className="list__content__title">Role:</h4>
                      <ul>
                        <li>Front-end developer</li>
                      </ul>
                    </li>
                    <li>
                    <h4 className="list__content__title">Description:</h4>
                      <ul>
                        <li>
                          We created a client site to represent our company
                        </li>
                      </ul>
                    </li>
                    <li>
                    <h4 className="list__content__title">Achievements:</h4>
                      <ul>
                        <li>Built responsive application's UI,</li>
                        <li>
                          Develop all frontend functionality from the ground up
                        </li>
                      </ul>
                    </li>
                  </ul>
                </>
              </div>
            </div>
          </div>
          {/* <ArticleCs
            title="My projects"
            blocks={
              [
                // {
                //   header: "Cv",
                //   content: [
                //     {
                //       header: "",
                //       type: "text",
                //       text: ["Stack: JavaScript, HTML, CSS, React.js"],
                //     },
                //     {
                //       header: "Link",
                //       type: "link",
                //       text: ["It is current site"],
                //     },
                //     {
                //       header: "",
                //       type: "text",
                //       text: ["Role: Front-end developer"],
                //     },
                //     {
                //       header: "",
                //       type: "text",
                //       text: ["Description: Website to introduce myself"],
                //     },
                //     {
                //       header: "",
                //       type: "text",
                //       text: [
                //         "Achievements: Design all project architecture and structure, Built responsive application's UI, Develop all frontend functionality from the ground up",
                //       ],
                //     },
                //   ],
                // },
                // {
                //   header: "Zupp.io",
                //   content: [
                //     {
                //       header: "",
                //       type: "text",
                //       text: [
                //         "Stack: HTML, CSS, SASS, TypeScript, Vue.ts, Vue Router",
                //       ],
                //     },
                //     { header: "", type: "text", text: ["Link: https://zupp.io"] },
                //     {
                //       header: "",
                //       type: "text",
                //       text: ["Role: Front-end developer"],
                //     },
                //     {
                //       header: "",
                //       type: "text",
                //       text: ["Description: Website to zupp service"],
                //     },
                //     {
                //       header: "",
                //       type: "text",
                //       text: [
                //         "Achievements: Work with team. Built responsive application's UI, Develop all frontend functionality from the ground up",
                //       ],
                //     },
                //   ],
                // },
                // {
                //   header: "Zupp.io.statistic",
                //   content: [
                //     {
                //       header: "stack",
                //       type: "text",
                //       text: [
                //         "Stack: HTML, CSS, SASS, TypeScript, Vue.ts, Vue Router, Node.js",
                //       ],
                //     },
                //     {
                //       header: "Link:",
                //       link: ["https://status.zupp.io/"],
                //       text: ["https://status.zupp.io/"],
                //     },
                //     { header: "Role", text: ["Front-end developer"] },
                //     { header: "Description", text: ["Website to zupp service"] },
                //     {
                //       header: "Achievements",
                //       type: "list",
                //       text: [
                //         "Achievements: Work with team. Tested backend. Built responsive application's UI, Develop all frontend functionality from the ground up",
                //       ],
                //     },
                //   ],
                // },
                // {
                //   header: "Le Rosey",
                //   content: [
                //     {
                //       header: "Stack",
                //       type: "text",
                //       text: [
                //         "HTML, CSS, SASS, JavaScript, Vue.ts, Vue Router",
                //       ],
                //     },
                //     {
                //       header: "Link",
                //       type: "link",
                //       text: ["https://www.rosey.ch/"],
                //     },
                //     {
                //       header: "Role",
                //       type: "text",
                //       text: ["Front-end developer"],
                //     },
                //     {
                //       header: "Description",
                //       type: "text",
                //       text: ["We developed a client site for Switzerland school"],
                //     },
                //     {
                //       header: "Achievements",
                //       type: "text",
                //       text: [
                //         "Work with a big team. Fixed bugs. Added new features and functionality to existing site",
                //       ],
                //     },
                //   ],
                // },
              ]
            }
          /> */}
        </Suspense>
      </section>

      {/* <Block data=""/> */}
      {/* <Contact /> */}
    </div>
  );
}

export default Home;
