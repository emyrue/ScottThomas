import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Photo from '../components/Photo';
import images from '../allphotos';
import '../style/gallery.css';

export default function Gallery() {
  return (
    <section className="gallery-container">
      <h2 className="gallery-heading">Gallery</h2>
      <div className="photos-container">
        {images.map((image) => (
          <div key={uuidv4()}>
            <Photo image={image} />
          </div>
        ))}
      </div>
    </section>
  );
}
