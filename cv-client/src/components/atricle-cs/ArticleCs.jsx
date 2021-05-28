import { React } from "react";
import PropTypes, { string } from "prop-types";
import "./ArticleCs.scss";

const { shape, arrayOf } = require("prop-types");

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

function ListFromArrayContent(props) {
  const { header, text, type } = props.list;
  if (type === "list") {
    return (
      <>
        <h4 className="list__content__title">{header}</h4>
        <ul>
          {text.map((currentString) => (
            <li key={currentString}>{currentString}</li>
          ))}
        </ul>
      </>
    );
  }
  if (type === "link") {
    return (
      <>
        <h4 className="list__content__title">{header}</h4>
        <ul>
          <li>
            <a href={text}>{text}</a>
          </li>
        </ul>
      </>
    );
  }
  return <>{text}</>;
}

function Article(props) {
  const { title, blocks } = props;
  return (
    <div className="article-cs">
      <div className="article-cs__header-block app-text app-text--uppercase app-text--white app-text--xl">
        {title && title.length ? title : ""}
      </div>
      <div className="article-cs__main app-text app-text--m">
        <div className="list article-cs__main__list">
          {blocks && blocks.length
            ? blocks.map((block, index) => (
                <>
                  <div
                    key={block.header}
                    className="list__title app-text app-text--uppercase upp-text-m"
                  >
                    <div className="list__title-index">#{index + 1}</div>{" "}
                    {block.header}
                  </div>
                  <ul className="list__content">
                    {block.content &&
                    block.content.length &&
                    Array.isArray(block.content) ? (
                      <li>
                        {block.content.map((currentPoint) => (
                          <>
                            <ListFromArrayContent list={currentPoint} />
                          </>
                        ))}
                      </li>
                    ) : (
                      <li>Wrong content</li>
                    )}
                  </ul>
                </>
              ))
            : ""}
        </div>
      </div>
    </div>
  );
}

Article.propTypes = propTypes;
Article.defaultProps = defaultProps;

export default Article;
