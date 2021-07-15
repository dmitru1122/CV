/* eslint-disable react/forbid-prop-types */
import { React } from 'react';
import PropTypes, { string } from 'prop-types';
import './ArticleCs.scss';

const { shape, arrayOf } = require('prop-types');

const propTypes = {
  title: PropTypes.string,
  blocks: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string,
      content: PropTypes.oneOfType([
        PropTypes.arrayOf(
          PropTypes.shape({
            header: PropTypes.string,
            type: PropTypes.string,
            text: PropTypes.array,
          })
        ),
        PropTypes.string,
      ]),
    })
  ),
};
const defaultProps = {
  title: PropTypes.null,
  blocks: PropTypes.null,
};

const iListFromArrayContent = {
  list: PropTypes.objectOf({
    header: PropTypes.string,
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    type: PropTypes.string,
  }),
};
const iListFromArrayContentDefault = {
  list: {},
};

function ListFromArrayContent(props) {
  const { list } = props;
  const { header, text, type } = list;
  if (type === 'list') {
    return (
      <>
        <h4 className="list__content__title">{header}</h4>
        <ul>
          {text.map(currentString => (
            <li key={currentString}>{currentString}</li>
          ))}
        </ul>
      </>
    );
  }
  if (type === 'link') {
    return (
      <>
        <h4 className="list__content__title">{header}</h4>
        <ul>
          <li>
            <a href={text} target="_blank" rel="noreferrer">
              {text}
            </a>
          </li>
        </ul>
      </>
    );
  }
  return <>{text}</>;
}

ListFromArrayContent.propTypes = iListFromArrayContent;
ListFromArrayContent.defaultProps = iListFromArrayContentDefault;

function Article(props) {
  const { title, blocks } = props;
  return (
    <div className="article-cs">
      <div className="article-cs__header-block app-text app-text--uppercase app-text--white app-text--xl">
        {title && title.length ? title : ''}
      </div>
      <div className="article-cs__main app-text app-text--m">
        <div className="list article-cs__main__list">
          {blocks && blocks.length
            ? blocks.map((block, index) => (
                <div className="list__item">
                  <div key={block.header} className="list__title app-text app-text--uppercase upp-text-m">
                    <div className="list__title-index">#{index + 1}</div> {block.header}
                  </div>
                  <ul className="list__content">
                    {block.content && block.content.length && Array.isArray(block.content) ? (
                      <>
                        {block.content.map(currentPoint => (
                          <li key={currentPoint.header}>
                            <ListFromArrayContent list={currentPoint} />
                          </li>
                        ))}
                      </>
                    ) : (
                      <li>Wrong content</li>
                    )}
                  </ul>
                </div>
              ))
            : ''}
        </div>
      </div>
    </div>
  );
}

Article.propTypes = propTypes;
Article.defaultProps = defaultProps;

export default Article;
