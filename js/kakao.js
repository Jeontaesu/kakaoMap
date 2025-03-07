const toggleTraffic = document.querySelector('.toggleTraffic');
const mapContainer = document.querySelector('#map'); // 지도를 표시할 div 
const mapOption = { center: new kakao.maps.LatLng(37.51934317566885, 127.05708823178604), level: 2};

//map instance
const map = new kakao.maps.Map(mapContainer, mapOption);

//marker instance
const marker = new kakao.maps.Marker({ position: mapOption.center });

//type controller instance
const mapTypeControl = new kakao.maps.MapTypeControl();

//zoom controller instance
const zoomControl = new kakao.maps.ZoomControl();

//add marker layer on map layer
marker.setMap(map);

//add controller layer on map layer
[mapTypeControl, zoomControl].forEach(el => map.addControl(el));

//toggleTraffic event bind
toggleTraffic.addEventListener('click', e => {
  e.target.classList.toggle('on');

  if(e.target.classList.contains('on')) {
    e.target.innerText = "Traffic OFF"
    map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC); 
  }else {
    e.target.innerText = "Traffic ON";
    map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC); 
  }
});

//resize envent bind
window.addEventListener("resize", () => map.setCenter(mapOption.center));
