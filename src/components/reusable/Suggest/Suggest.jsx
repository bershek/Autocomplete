import React, { memo } from 'react';
import {isEmpty} from "lodash";

const areEqual = (prevProps, nextProps) => {
  return JSON.stringify(prevProps.matches) === JSON.stringify(nextProps.matches);
}

const Suggest = ({ matches, onHintClick }) => {
  return (
    !isEmpty(matches)
    && <ul className="suggest-list">
      {
        matches.map(({id, title}) => (
          <div
            key={id}
            onClick={onHintClick}
            className="suggest-list_item"
          >
            {title}
          </div>
        ))
      }
    </ul>
  )
};

export default memo(Suggest, areEqual);
