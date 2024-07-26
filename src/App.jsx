import { useState } from "react";
import PropTypes from "prop-types";

export default function App() {
  return (
    <div>
      <TextExpander>
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It&apos;s the stuff of dreams and science
        fiction, but believe it or not, space travel is a real thing. Humans and
        robots are constantly venturing out into the cosmos to uncover its
        secrets and push the boundaries of what&apos;s possible.
      </TextExpander>

      <TextExpander
        collapsedNumWords={20}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="#ff6622"
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it&apos;s not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>

      <TextExpander expanded={true} className="box">
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we&apos;ll
        discover next!
      </TextExpander>
    </div>
  );
}

function TextExpander({
  expanded,
  className,
  collapsedNumWords = 10,
  expandButtonText,
  collapseButtonText,
  buttonColor,
  children,
}) {
  const [expand, setExpand] = useState(expanded ? expanded : false);
  const style = {
    color: buttonColor ? buttonColor : "blue",
  };
  return (
    <div className={`${className ? className : ""}`}>
      {expand ? children : wordShortener(children, collapsedNumWords)}
      {!expand ? "... " : " "}
      <button
        style={style}
        onClick={() => setExpand((prevState) => !prevState)}
      >
        {!expand
          ? expandButtonText
            ? expandButtonText
            : "Show more"
          : collapseButtonText
          ? collapseButtonText
          : "Show less"}
      </button>
    </div>
  );
}

function wordShortener(sentence, collapsedNumWords) {
  const displayedSentence = sentence
    .split(" ")
    .slice(0, collapsedNumWords)
    .join(" ");
  return displayedSentence;
}

TextExpander.propTypes = {
  expanded: PropTypes.bool,
  className: PropTypes.string,
  collapsedNumWords: PropTypes.number,
  expandButtonText: PropTypes.string,
  collapseButtonText: PropTypes.string,
  buttonColor: PropTypes.string,
  children: PropTypes.string,
};
