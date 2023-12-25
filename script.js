// JavaScript
console.log('Hello world!');


// mapの表示
var map = L.map('map').setView([33.649241798686866, 130.4406793574221], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

 //複数アイコンをまとめて定義
 const circleIcon = L.Icon.extend({
    options: {
      shadowUrl: 'images/ico_shadow.png',
      iconSize: [40, 40],
      shadowSize: [40, 40],
      iconAnchor: [20, 40],
      shadowAnchor: [20, 40],
      popupAnchor: [0, -42]
    }
  });
  
  const whiteIcon = new circleIcon({ iconUrl: 'images/ico.png' }),
    pinkIcon = new circleIcon({ iconUrl: 'images/ico_pink.png' });
  
  L.marker([33.649241798686866, 130.4406793574221],{ icon: whiteIcon }).addTo(map).bindPopup('ここだよ！！<br><img src="images/img01.png" alt="img">').openPopup();
  L.marker([33.660067, 130.44385],{ icon: pinkIcon }).addTo(map).bindPopup('ここだよ！！<br><img src="images/img01.png" alt="img">').openPopup();
  
  circle.bindPopup("半径1kmの範囲");