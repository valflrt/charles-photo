import { PhotoObject } from "../types";

import { randomizeArray } from "../utils";

const photos: PhotoObject[] = randomizeArray<PhotoObject>([
  {
    url: "/photos/pexels-francesco-ungaro-2325446.jpg",
    reducedUrl: "/photos/pexels-francesco-ungaro-2325446_reduced.jpg",
    description: "Balloons over desert",
  },
  {
    url: "/photos/pexels-roberto-nickson-2775196.jpg",
    reducedUrl: "/photos/pexels-roberto-nickson-2775196_reduced.jpg",
    description: "Sunset on the sea",
  },
  {
    url: "/photos/pexels-sami-anas-5137664.jpg",
    reducedUrl: "/photos/pexels-sami-anas-5137664_reduced.jpg",
    description: "Rock sanding in the sea",
  },
]);

export default photos;
