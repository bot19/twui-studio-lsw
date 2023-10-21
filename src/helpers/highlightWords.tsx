import React from 'react'

interface IHighlightWords {
  fullText: string;
  highlightWords: string;
}

export const HighLightWords = (props: IHighlightWords) => {
  const indexOfHighlight = props.fullText.indexOf(props.highlightWords);
  const lengthOfHighlight = props.highlightWords.length;

  return (<>
    {props.fullText.slice(0, indexOfHighlight)}<span className="text-brand-red">{props.highlightWords}</span>{props.fullText.slice(indexOfHighlight + lengthOfHighlight)}
  </>)
}