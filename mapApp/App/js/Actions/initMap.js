import constants from '../constants/constants';
import $ from "jquery";


export const initMap = () => {   
        // Создание карты.    
    var map = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчнию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [55.76, 37.64],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 7
    });


    var multiRoute = new ymaps.multiRouter.MultiRoute({
        // Точки маршрута. Точки могут быть заданы как координатами, так и адресом. 
        referencePoints: []
      }, {
            // Автоматически устанавливать границы карты так,
            // чтобы маршрут был виден целиком.
            boundsAutoApply: true
        });

  
    map.geoObjects.add(multiRoute);

    return {
        type: constants.MAP_INITIALIZED,
        map: map,  
        multiRoute: multiRoute
    }
     
}
    

    