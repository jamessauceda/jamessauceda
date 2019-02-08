import React, { Component } from 'react';

export default class Music extends Component {
  render() {
    return (
      <div className="Music">
        <h2>Rap/Hip-Hop & Beats</h2>
        <iframe
          width="100%"
          height="450"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/119081906&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        />
        <h2>EDM</h2>
        <iframe
          width="100%"
          height="450"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/310513603&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        />
        <h2>Metal/Hardcore</h2>
        <iframe
          src="https://open.spotify.com/embed/artist/6cb0pSk4lsrgPdT0G2foKO"
          width="100%"
          height="400"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        />
        <h2>Alternative Rock/Indie Songwriter</h2>
        <iframe
          src="https://open.spotify.com/embed/artist/58U24wY50M5XYdl3fIjfoE"
          width="100%"
          height="250"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        />
        <h2> </h2>
      </div>
    );
  }
}
