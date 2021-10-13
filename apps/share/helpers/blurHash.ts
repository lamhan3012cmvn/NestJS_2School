import * as sharp from 'sharp';
import { encode } from 'blurhash';
export const encodeImageToBlurhash = (path: string) => {
  return new Promise((resolve, reject) => {
    sharp(path)
      .resize(400, 300)
      .raw()
      .ensureAlpha()
      .toBuffer((err, buffer, { width, height }) => {
        if (err) return reject(err);
        resolve(encode(new Uint8ClampedArray(buffer), width, height, 4, 3));
      });
  });
};
