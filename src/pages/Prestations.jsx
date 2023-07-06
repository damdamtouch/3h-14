import React from "react";
import Tile from "../components/Tile";
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
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div>Sperator</div>

      <div>
        <h1>Institutionnel</h1>
        <Tile
          title="La caravane"
          paragraphe="Réalisation de la rétrospective vidéo du tour de France de la Compagnie des Aidants, un road trip dans 9 villes […]"
        />
        <Tile
          title="Gropuama"
          paragraphe="Prestations de cadrage sur des vidéos de communication autour du projet L’étape du tour, organisé par Groupama pour ses collaborateurs. […]"
        />
        <Tile
          title="Les CV de l'équipe"
          paragraphe="Les CV de L’Équipée, ce sont des interviews courtes et percutantes face caméra, où des professionnel(le)s racontent le parcours qui […]"
        />
      </div>

      <div>Sperator</div>

      <div>
        <h1>Publicité</h1>

        <Tile
          title="Jump'in"
          paragraphe="Réalisation d’un clip de mise en valeur de l’entreprise familiale Jump’In. Jumpin – Made with savoir-faire from troisheuresmoinslequart on Vimeo. […]"
        />
        <Tile
          title="Pénélope"
          paragraphe="Réalisation d’un clip de promotion d’un gilet airbag pour cavaliers commercialisé par la marque Pénélope. Durée : 1’41 – Mai […]"
        />
      </div>
      <div>Sperator</div>

      <div>
        <h1>Captations</h1>

        <Tile
          title="CULTE @New Morning"
          paragraphe="Captation live du morceau Natifunk de CULTE au New Morning à Paris. CULTE – Live @ New Morning – Natifunk […]"
        />

        <Tile
          title="Charlotte Planchou live session"
          paragraphe="Captation du morceau Maintenant de Charlotte Planchou en live session au Centre culturel des Bords de Marne.          "
        />
      </div>

      <div>Sperator</div>

      <div>
        <h1>Clip musicaux</h1>

        <Tile
          title="Rebel Effort - Love Machine"
          paragraphe="Écriture et réalisation du clip vidéo du titre Love Machine interprété par Rebel Effort"
        />
      </div>
    </div>
  );
}

export default Prestations;
