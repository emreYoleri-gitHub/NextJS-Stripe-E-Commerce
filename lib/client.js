import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "9zdejycc",
  dataset: "production",
  apiversion: "2022-05-07",
  usecdn: true,
  token: process.env.PUBLIC_SANITY,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
