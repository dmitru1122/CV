import { React } from 'react';
import PropTypes from 'prop-types';
import './ArticleCs.scss';

function Article(props) {
  const { title, blocks } = props;
  return (
    <div className="article-cs">
      <div className="article-cs__header-block app-text app-text--uppercase app-text--white app-text--xl">About myself</div>
      <div className="article-cs__main app-text app-text--m">
        <div className="list article-cs__main__list">
          <>
            <div className="list__title app-text app-text--uppercase upp-text-m">
              <div className="list__title-index">#1</div> Personal profile
            </div>
            <ul className="list__content">
              <li>
                I am a hard working, self-motivated, responsible person. I am always willing to learn new skills. I have developed
                good planning & organisational skills and am confident working independently or as part of a team.
              </li>
              <li>My weakness is stubbornness. I can spend too much time looking for the best solution.</li>
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
              <li>Mechanical engineering food processing 'Brest State Technical University (BrSTU)'</li>
            </ul>
          </>
        </div>
      </div>
    </div>
  );
}

export default Article;
