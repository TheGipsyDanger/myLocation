import { cloudy, sunny, rain } from '~/images';
import { IStringToImage } from '~/utils';

export function useImage() {
  function getImage(description = 'clear sky') {
    const images: IStringToImage = {
      'clear sky': sunny,
      'few clouds': cloudy,
      'scattered clouds': cloudy,
      'broken clouds': cloudy,
    };

    return images[description];
  }

  return {
    getImage,
  };
}
