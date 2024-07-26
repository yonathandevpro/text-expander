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

      <TextExpander buttonInline={false} expanded={true} className="box">
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we&apos;ll
        discover next!
      </TextExpander>
    </div>
  );
}

function TextExpander({
  expanded = false,
  className,
  collapsedNumWords = 10,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor = "#1f09cd",
  buttonInline = true,
  children,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);
  const style = {
    color: buttonColor,
    display: buttonInline ? "inline" : "block",
    border: "none",
    background: "none",
    fontSize: "inherit",
    cursor: "pointer",
  };
  return (
    <div className={`${className ? className : ""}`}>
      <span>
        {isExpanded ? children : wordShortener(children, collapsedNumWords)}
        {!isExpanded ? "... " : " "}
      </span>
      <button
        style={style}
        onClick={() => setIsExpanded((prevState) => !prevState)}
      >
        {!isExpanded ? expandButtonText : collapseButtonText}
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
  buttonInline: PropTypes.bool,
};
