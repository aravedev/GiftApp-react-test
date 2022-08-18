const getGifts = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=ZMFx0fFtVVZ48FUfFBj2LFb4VdpXbg56&q=${category}&limit=10`;

  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifts = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.fixed_height_downsampled.url,
  }));

  //console.log(gifts);
  return gifts;
};

export default getGifts;
