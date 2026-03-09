import sharp from 'sharp'

sharp('public/home.png')
  .extract({ left: 500, top: 200, width: 600, height: 600 })
  .resize(150, 150)
  .webp({ quality: 85 })
  .toFile('public/avatar.webp')
  .then(() => console.log('Done: public/avatar.webp'))
