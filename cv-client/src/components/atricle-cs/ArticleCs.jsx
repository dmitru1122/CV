// import { React } from "react";
// import PropTypes from "prop-types";
// import "./ArticleCs.scss";

// const propTypes = {
//   title: PropTypes.string,
//   blocks: PropTypes.array,
// };
// const defaultProps = {
//   title: PropTypes.null,
//   content: PropTypes.null,
// };

// function Article(props) {
//   const { title, blocks } = props;
//   return (
//     <div className="article-cs">
//       <div className="article-cs__header-block app-text app-text--uppercase app-text--white app-text--xl">
//         {title && title.length ? title : ""}
//       </div>
//       <div className="article-cs__main app-text app-text--m">
//         <div className="list article-cs__main__list">
//           {blocks && blocks.length
//             ? blocks.map((block, index) => (
//                 <>
//                   <div
//                     key={block.header}
//                     className="list__title app-text app-text--uppercase upp-text-m"
//                   >
//                     <div className="list__title-index">#{index + 1}</div>{" "}
//                     {block.header}
//                   </div>
//                   <ul className="list__content">
//                     {block.content && block.content.length 
//                       ? block.content.forEach((currentPoint) =><li key={currentPoint.text[0]}>{currentPoint.text[0]}</li>)
//                       // {
//                       //   console.log(currentPoint);
//                       //   console.log(block.content);
//                           // switch (currentPoint.type) {
//                           //   case "link": {
//                           //     (<li key={currentPoint.text[0]}>
//                           //       <div>{currentPoint.header}</div>
//                           //       <a href={currentPoint.text[0]}> {currentPoint.text[0]} </a>
//                           //       </li>)
//                           //     ;

//                           //     break;
//                           //   }

//                           //   case "text": {
//                           //     (<li key={currentPoint.text[0]}>
//                           //       {currentPoint.header}
//                           //       <div href={currentPoint.text[0]}> {currentPoint.text[0]} </div>
//                           //     </li>);
//                           //     break;
//                           //   }

//                           //   default: {
//                           //     break;
//                           //   }
//                           // }
//                           // (<>fsdf</>)
//                         //   (<li>content</li>)
//                         // })
                        
//                       : ""}
//                   </ul>
//                 </>
//               ))
//             : ""}
//         </div>
//       </div>
//     </div>
//   );
// }

// Article.propTypes = propTypes;
// Article.defaultProps = defaultProps;

// export default Article;
