import React from "react";

function Prestations() {
  return (
    <div className="Prestations">
      <h1>Prestations</h1>
      <p>
        Publicité, films institutionnels, captations… 3H-1/4 vous propose ses
        services
      </p>
      <br />
      <div>
        <a href="">Institutionnel</a>
        <a href="">Publicité</a>
        <a href="">Captation</a>
        <a href="">Clips musicaux</a>
      </div>
      <br />
      <div>
        <iframe
          src="https://player.vimeo.com/video/787883133?h=f70a4d9c67"
          width="640"
          height="360"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <div>Sperator</div>

      <div>
        <h1>Institutionnel</h1>
        <div>La caravane</div>
        <div>Gropuama</div>
        <div>Les CV de l'équipe</div>
      </div>

      <div>Sperator</div>

      <div>
        <h1>Publicité</h1>
        <div>Jump'in</div>
        <div>Pénélope</div>
      </div>
      <div>Sperator</div>

      <div>
        <h1>Captations</h1>
        <div>Culte</div>
        <div>Charlotte</div>
      </div>

      <div>Sperator</div>

      <div>
        <h1>Clip musicaux</h1>
        <div>Rebel Effort</div>
      </div>
    </div>
  );
}

export default Prestations;
