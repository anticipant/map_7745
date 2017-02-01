ymaps.ready(init);

function init () {
 var myMap = new ymaps.Map('map', {
  center: [53.90169268, 27.40884110],
  zoom: 6
 }, {
  searchControlProvider: 'yandex#search'
 }),
     objectManager = new ymaps.ObjectManager({
      // Чтобы метки начали кластеризоваться, выставляем опцию.
      clusterize: false,
      // ObjectManager принимает те же опции, что и кластеризатор.
      gridSize: 32
     })

 // Чтобы задать опции одиночным объектам и кластерам,
 // обратимся к дочерним коллекциям ObjectManager.
 objectManager.objects.options.set('preset', 'islands#greenDotIcon');
 objectManager.clusters.options.set('preset', 'islands#greenClusterIcons');
 myMap.geoObjects.add(objectManager);

 $.ajax({
  url: "data.json"
 }).done(function(data) {
  objectManager.add(data);
 });

}