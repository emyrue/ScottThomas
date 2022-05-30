import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import collections from '../allstories';

export default function Stories() {
  return (
    <section className="stories-section">
      <h2>Stories</h2>
      <ul className="stories-navigation">
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
      <div>
        {collections.map((object) => (
          <div key={uuidv4()} id={object.id}>
            {object.stories.map((story) => (
              <div key={uuidv4()}>{story}</div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
