// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    let originalPhotos = S.split('\n');

    let photos = S.split('\n');

    photos = photos.sort((photo1, photo2) => Date.parse(photo1.split(',')[2]) - Date.parse(photo2.split(',')[2]))

    // Validation 2
    let p = photos.find((photo) => (new Date(photo.split(',')[2]).getFullYear() < 2000) || (new Date(photo.split(',')[2]).getFullYear() > 2020));
    if (p) {
      console.log('Invalid Input');
      return -1;
    }

    // Validation 4
    p = photos.find((photo) => (photo.split(',')[1].trim().length < 1 || photo.split(',')[1].trim().length > 20 ));
    if (p) {
      console.log('Invalid Input');
      return -1;
    }

    // Validation 7

    p = photos.find((photo) => (photo.split(',')[1].match(/.*[jpg|png|jpeg]$/)));
    if (p) {
      console.log('Invalid Input');
      return -1;
    }

    let photosMap = {};
    let photosWithNumbers = "";

    for (let i = 0; i < photos.length; i++) {
      const name = photos[i].split(',')[1];
      if (!photosMap[name.trim()]) {
        photosMap[name.trim()] = [];
      }
      photosMap[name.trim()].push(photos[i]);
    }

    for (let i = 0; i < originalPhotos.length; i++) {
      const photo = originalPhotos[i];
      const city = photo.split(',')[1].trim();
      const extension = photo.split(',')[0].split('.')[1];
      const cityPhotos = photosMap[city];
      let photoNumber = cityPhotos.findIndex((_photo) => _photo.split(',')[2].trim() === photo.split(',')[2].trim());
      // console.log(photo);
      // console.log(cityPhotos);
      // console.log(photoNumber)
      photoNumber = photoNumber + 1;
      photoNumber = getPhotoNumber(cityPhotos, photoNumber);
      const photosWithNumber = [city, photoNumber, '.', extension];
      photosWithNumbers += (photosWithNumber.join('')) + "\n";
    }

    return photosWithNumbers.replace(/\n$/, '');
}

function getPhotoNumber(cityPhotos, photoNumber) {
  if (photoNumber >= 10) {
    return photoNumber;
  }
  return (cityPhotos.length >=10 ? ("0" + photoNumber) : photoNumber);
}

const photosWithNumbers = solution('photo.jpg, Warsaw, 2013-09-05 14:08:15\njohn.png, London, 2015-06-20 15:13:22\nmyFriends.png, Warsaw, 2013-09-05 14:07:13\nEiffel.jpg, Paris, 2015-07-23 08:03:02\npisatower.jpg, Paris, 2015-07-22 23:59:59\nBOB.jpg, London, 2015-08-05 00:02:03\nnotredame.png, Paris, 2015-09-01 12:00:00\nme.jpg, Warsaw, 2013-09-06 15:40:22\na.png, Warsaw, 2016-02-13 13:33:50\nb.jpg, Warsaw, 2016-01-02 15:12:22\nc.jpg, Warsaw, 2016-01-02 14:34:30\nd.jpg, Warsaw, 2016-01-02 15:15:01\ne.png, Warsaw, 2016-01-02 09:49:09\nf.png, Warsaw, 2016-01-02 10:55:32\ng.jpg, Warsaw, 2016-02-29 22:13:11')
console.log(photosWithNumbers);
