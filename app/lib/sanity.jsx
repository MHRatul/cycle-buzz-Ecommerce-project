import { createClient } from "next-sanity";
import ImageUrlBuilder from "@sanity/image-url";

export const client = createClient({
    projectId: 'lh20fcff',
    dataset: 'production',
    apiVersion: '2024-06-03',
    useCdn: true,
});

const imgBuilder = ImageUrlBuilder(client);

export function urlFor(source) {
    return imgBuilder.image(source);
}