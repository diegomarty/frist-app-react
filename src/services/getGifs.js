const apiKey = "yt0in7NMytJYOKM95bkJU3s39zvywr9C&q";

export default function getGifs({ keyword = "pokemon" } = {}) {
  const giphyRoute = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}=${keyword}&limit=25&offset=0&rating=g&lang=en`;

  return fetch(giphyRoute)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;

      if (Array.isArray(data)) {
        const gifs = data.map((image) => {
          const { images, title, id } = image;
          const { url } = images.downsized_medium;

          return { title, id, url };
        });

        return gifs;
      }
    });
}
