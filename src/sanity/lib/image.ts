import createImageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { dataset, projectId } from '../env'
import { client } from './client';
import { SanityyClient } from '../sanityclient';
// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder(SanityyClient)

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source)
}
