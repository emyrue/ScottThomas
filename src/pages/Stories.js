import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import collections from '../allstories';
import '../style/stories.css';

export default function Stories() {
  return (
    <section className="stories-section">
      <h2 className="stories-heading">Stories</h2>
      <ul className="stories-navigation">
        <li>Go to:</li>
        {collections.map((object) => (
          <li key={uuidv4()} className="stories-list-item">
            <a className="stories-link" href={object.href}>
              Stories by
              {' '}
              {object.name}
            </a>
          </li>
        ))}
      </ul>
      <div className="all-stories">
        {collections.map((object) => (
          <div key={uuidv4()} id={object.id}>
            <h3 className="stories-author">
              Stories by
              {' '}
              {object.name}
            </h3>
            {object.stories.map((story, i) => (
              <div className="story" key={uuidv4()}>
                {
                  object.images[i]
                  && <img className="story-photo" src={object.images[i]} alt="" />
                }
                <div className="story-text">
                  {i + 1}
                  {') '}
                  {story}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
