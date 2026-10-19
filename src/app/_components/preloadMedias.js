/**
 * Précharge une liste de médias (images, vidéos et sons).
 *
 * Chaque fois qu'un média est prêt, la fonction onProgress
 * est appelée avec la progression du chargement (entre 0 et 1).
 *
 * @param {string[]} medias - Tableau des chemins vers les médias.
 * @param {(progress: number) => void} onProgress - Fonction appelée
 * à chaque média chargé. progress varie de 0 à 1.
 *
 * @returns {Promise<void[]>} Promesse résolue lorsque tous
 * les médias sont prêts ou ont échoué.
 *
 * @example
 * preloadMedias(
 *   ["/images/photo.webp", "/audio/ambiance.mp3"],
 *   (progress) => {
 *     console.log(`Chargement : ${Math.round(progress * 100)} %`);
 *   }
 * );
 */
export const preloadMedias = (medias, onProgress) => {
  let loaded = 0;

  const promises = medias.map((src) => {
    return new Promise((resolve) => {
      const isVideo = /\.(mp4|webm|ogv)(\?.*)?$/i.test(src);
      const isAudio = /\.(mp3|wav|ogg|m4a|aac)(\?.*)?$/i.test(src);
      let media;
      let event;

      if (isVideo) {
        media = document.createElement("video");
        event = "canplay";
      } else if (isAudio) {
        media = new Audio();
        event = "canplay";
      } else {
        media = new Image();
        event = "load";
      }

      function complete() {
        // console.log("[COMPLETED]", media);
        media.removeEventListener(event, complete);
        media.removeEventListener("error", complete);

        loaded++;

        onProgress(loaded / medias.length);

        resolve();
      }

      media.addEventListener(event, complete, { once: true });
      media.addEventListener(
        "error",
        () => {
          console.log(media);
          complete();
        },
        { once: true },
      );

      if (isVideo || isAudio) {
        media.preload = "auto";
      }

      media.src = src;

      if (isVideo || isAudio) {
        media.load();
      }
    });
  });

  return Promise.all(promises);
};
