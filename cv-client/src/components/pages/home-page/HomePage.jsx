import React, { Suspense, lazy, useRef } from 'react';
import './HomePage.scss';
import arrowRight from '../../../assets/arrow-right.svg';
// const myPhoto = lazy(() => import("../../../assets/myPhoto.jpg"));
import myPhoto from '../../../assets/myPhoto.png';

import Context from './Context';

const Form = lazy(() => import('../../form/Form'));
const ArticleCs = lazy(() => import('../../atricle-cs/ArticleCs'));
// const Contacts = lazy(() => import("../../contacts/Contacts"));
// const Test = lazy(() => import('../../atricle-cs/tes'));

const aboutMyselData = {
  title: 'About myself',
  blocks: [
    {
      header: 'Personal profile',
      content: [
        {
          // don't use header with type text
          header: '',
          type: 'text',
          text: [
            `I am a hard working, self-motivated, responsible person. I
        am always willing to learn new skills. I have developed
        good planning & organisational skills and am confident
        working independently or as part of a team.`,
          ],
        },
      ],
    },
    {
      header: 'Education',
      content: [
        {
          // don't use header with type text
          header: '',
          type: 'text',
          text: ["Mechanical engineer 'Brest State Technical University (BrSTU)'"],
        },
      ],
    },
  ],
};

const skillsData = {
  title: 'Skills',
  blocks: [
    {
      header: 'Core competencies',
      content: [
        {
          // don't use header with type text
          header: '',
          type: 'text',
          text: ['JavaScript'],
        },
      ],
    },
    {
      header: 'Techinical skills',
      content: [
        {
          header: 'OS Platform:',
          type: 'list',
          text: ['LINUX, WINDOWS'],
        },
        {
          header: 'Version control systems:',
          type: 'list',
          text: ['GIT'],
        },
        {
          header: 'Web technologies:',
          type: 'list',
          text: [
            `JavaScript, TypeScript, HTML5, CSS3, SASS, REST, JSON,
          CSS BEM, Bootstrap, React.JS, Redux, React router,
          Vue.js, Vue-router, Vue.ts, Node.js, Express.JS`,
          ],
        },
        {
          header: 'Application development systems:',
          type: 'list',
          text: ['VS Code'],
        },
        {
          header: 'Management and modeling tools:',
          type: 'list',
          text: ['Jira'],
        },
      ],
    },
    {
      header: 'Soft skills',
      content: [
        {
          header: '',
          type: 'text',
          text: ['Hard working'],
        },
        {
          header: '',
          type: 'text',
          text: ['Self-motivated'],
        },
        {
          header: '',
          type: 'text',
          text: ['Responsible'],
        },
        {
          header: '',
          type: 'text',
          text: ['Analytical skill'],
        },
        {
          header: '',
          type: 'text',
          text: ['Organisational skill'],
        },
      ],
    },
  ],
};

const myProjectData = {
  title: 'My projects',
  blocks: [
    {
      header: 'Le Rosey',
      content: [
        {
          header: 'Stack:',
          type: 'list',
          text: ['HTML, CSS, SASS, JavaScript, Vue.ts, Vue Router'],
        },
        {
          header: 'Link:',
          type: 'link',
          text: ['https://www.rosey.ch/'],
        },
        {
          header: 'Role:',
          type: 'list',
          text: ['Front-end developer'],
        },
        {
          header: 'Description:',
          type: 'list',
          text: ['We developed a site for Switzerland school'],
        },
        {
          header: 'Achievements:',
          type: 'list',
          text: ['Work with a big team', 'Added new features and functionality to existing project', 'Fixed bugs'],
        },
      ],
    },
    {
      header: 'Cv',
      content: [
        {
          header: 'Stack:',
          type: 'list',
          text: ['JavaScript, HTML, CSS, React.js, Node js, SCSS, Axios'],
        },
        {
          header: 'Link:',
          type: 'link',
          text: ['https://github.com/dmitru1122/CV.git'],
        },
        {
          header: 'Role:',
          type: 'list',
          text: ['Full-stack developer', 'UI/UX designer'],
        },
        {
          header: 'Description:',
          type: 'list',
          text: ['Website to introduce myself'],
        },
        {
          header: 'Achievements:',
          type: 'list',
          text: [
            'Optimization',
            'Design all project architecture and structure',
            "Built responsive application's UI",
            'Develop all frontend functionality from the ground up',
          ],
        },
      ],
    },
    {
      header: 'VStore',
      content: [
        {
          header: 'Stack:',
          type: 'list',
          text: ['HTML, CSS, SASS, JavaScript, React, React-Router, Redux'],
        },
        {
          header: 'Link:',
          type: 'link',
          text: ['http://vabshop.beget.tech/'],
        },
        {
          header: 'Role:',
          type: 'list',
          text: ['Front-end developer', 'UI/UX designer'],
        },
        {
          header: 'Description:',
          type: 'list',
          text: ["Online store. I haven't finished this project yet"],
        },
        {
          header: 'Achievements:',
          type: 'list',
          text: ["Built responsive application's UI", 'Develop all frontend functionality from the ground up with React.js'],
        },
      ],
    },
    {
      header: 'Zupp.io',
      content: [
        {
          header: 'Stack:',
          type: 'list',
          text: ['HTML, CSS, SASS, TypeScript, Vue.ts, Vue Router'],
        },
        {
          header: 'Link:',
          type: 'link',
          text: ['https://zupp.io'],
        },
        {
          header: 'Role:',
          type: 'list',
          text: ['Front-end developer'],
        },
        {
          header: 'Description:',
          type: 'list',
          text: ['Website for zupp.io service'],
        },
        {
          header: 'Achievements:',
          type: 'list',
          text: ["Built responsive application's UI", 'Develop all frontend functionality from the ground up'],
        },
      ],
    },
    {
      header: 'Zupp.io.statistic',
      content: [
        {
          header: 'Stack:',
          type: 'list',
          text: ['HTML, CSS, SASS, TypeScript, Vue.ts, Vue Router, Node.js'],
        },
        {
          header: 'Link:',
          type: 'link',
          text: ['https://status.zupp.io/'],
        },
        {
          header: 'Role:',
          type: 'list',
          text: ['Front-end developer', 'UI/UX designer'],
        },
        {
          header: 'Description:',
          type: 'list',
          text: ['Admin panel for zupp service'],
        },
        {
          header: 'Achievements:',
          type: 'list',
          text: ['Set up autorization', 'Fixed bugs in backend', 'Develop all frontend functionality from the ground up'],
        },
      ],
    },
    {
      header: 'Success Craft',
      content: [
        {
          header: 'Stack:',
          type: 'list',
          text: ['HTML, CSS, SASS, TypeScript, Vue.ts, Vue Router'],
        },
        {
          header: 'Link:',
          type: 'link',
          text: ['https://scr.by/'],
        },
        {
          header: 'Role:',
          type: 'list',
          text: ['Front-end developer'],
        },
        {
          header: 'Description:',
          type: 'list',
          text: ['I created a site to represent company'],
        },
        {
          header: 'Achievements:',
          type: 'list',
          text: ["Built responsive application's UI", 'Develop all frontend functionality from the ground up with Vue.ts'],
        },
      ],
    },
  ],
};

const LinkTemplate = title => (
  <div className="intro-block__link app-text--l app-text link-block">
    About myself
    <img className="intro-block__link__img link-block__img" src={arrowRight} alt="arrow" />
  </div>
);

const contextData = {
  name: 'Vita',
  age: 29,
  number: 15,
};

function Home() {
  const aboutMyselfRef = useRef(null);
  const skills = useRef(null);
  const myProject = useRef(null);
  const contactRef = useRef(null);

  const scrollToRef = ref => {
    if (ref.current === null) return;
    const positionTop = ref.current.getBoundingClientRect().y + document.body.scrollTop;
    document.body.scrollTo(0, positionTop);
  };

  return (
    <div className="home">
      <section className="intro-block  container">
        <div className="intro-block__left">
          <img className="intro-block__left__img" src={myPhoto} alt="me" title="My photo" />
        </div>
        <div className="intro-block__right">
          <div className="intro-block__experience app-text app-text--l app-text--uppercase">
            experience
            <div className="intro-block__experience__number app-text">
              1<span className="app-text app-text--l">+</span>
            </div>
          </div>
          <h2 className="intro-block__name app-text--uppercase app-text app-text--xxxl" title="DMITRU VABISHCHEVICH">
            Dima <span className="app-text--grey">Vab</span>
          </h2>
          <hr className="intro-block__hr" />
          <h3 className="intro-block__profession app-text app-text--xxl app-text--uppercase">Front-end developer</h3>

          <p className="intro-block__describtion app-text--l app-text descktop">
            Have experience with front-end and UI-design. Working with a focus on Optimal efficiency, quality, and functionality.
          </p>
          {/* <LinkTemplate
            title="About myself"
            onClick={() => scrollToRef(aboutMyselfRef)}
          /> */}
          <div
            className="intro-block__link app-text--l app-text link-block"
            onClick={scrollToRef(aboutMyselfRef)}
            onKeyDown={() => scrollToRef(aboutMyselfRef)}
            tabIndex={0}
            role="button"
          >
            About myself
            <img className="intro-block__link__img link-block__img" src={arrowRight} alt="arrow" />
          </div>
          <div
            className="intro-block__link app-text--l app-text link-block"
            onClick={() => scrollToRef(skills)}
            onKeyDown={() => scrollToRef(skills)}
            tabIndex={0}
            role="button"
          >
            My skills
            <img className="intro-block__link__img link-block__img" src={arrowRight} alt="arrow" />
          </div>
          <div
            className="intro-block__link app-text--l app-text link-block"
            onClick={() => scrollToRef(myProject)}
            onKeyDown={() => scrollToRef(myProject)}
            tabIndex={0}
            role="button"
          >
            My project
            <img className="intro-block__link__img link-block__img" src={arrowRight} alt="arrow" />
          </div>
          <div
            className="intro-block__link app-text--l app-text link-block"
            onClick={() => scrollToRef(contactRef)}
            onKeyDown={() => scrollToRef(contactRef)}
            tabIndex={0}
            role="button"
          >
            Contact
            <img className="intro-block__link__img link-block__img" src={arrowRight} alt="arrow" />
          </div>
        </div>
        <div className="background-text intro-block__background-title app-text">FRONT-END</div>
      </section>
      <div className="home__article-cs">
        <aside className="background-text  background-decoration background-decoration--i app-text">I am</aside>
        <section ref={aboutMyselfRef}>
          <Suspense fallback={<div>Loading...</div>}>
            <ArticleCs title={aboutMyselData.title} blocks={aboutMyselData.blocks} />
          </Suspense>
          {/* </section>
      <section className="home__article-cs" ref={skills}> */}
        </section>
        <div ref={skills}>
          <Suspense fallback={<div>Loading...</div>}>
            <ArticleCs title={skillsData.title} blocks={skillsData.blocks} />
          </Suspense>
        </div>
      </div>

      <section className="home__article-cs" ref={myProject}>
        <aside className="background-text  background-decoration background-decoration--design app-text app-text--uppercase">
          ui/ux design
        </aside>
        <Suspense fallback={<div>Loading...</div>}>
          <ArticleCs title={myProjectData.title} blocks={myProjectData.blocks} />
        </Suspense>
      </section>
      <section className="home__form" ref={contactRef}>
        <Suspense fallback={<div>Loading...</div>}>
          <Form />
        </Suspense>
      </section>
    </div>
  );
}

export default Home;
