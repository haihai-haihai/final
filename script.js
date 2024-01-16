// JavaScript
console.log('Hello world!');


// mapの表示
var map = L.map('map').setView([33.672293326486994, 130.44982208243596], 15);

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
  
  const whiteIcon = new circleIcon({ iconUrl: 'images/ico.png' });　
  L.marker([33.672293326486994, 130.44982208243596],{ icon: whiteIcon }).addTo(map).bindPopup('ここだよ！！').openPopup();
  
  circle.bindPopup("半径1kmの範囲");