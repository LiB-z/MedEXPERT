//-------------------------------------------------------------------------------------
//--------------------------------------ПОДКЛЮЧЕНИЕ КАРТ-------------------------------
//-------------------------------------------------------------------------------------
ymaps.ready(['Panel']).then(function () {
		map = new ymaps.Map('map', {
		center: [54.72944849769967,20.513725391238804],
		controls: ['default', 'zoomControl'],
		zoom: 14
	}, {autoFitToViewport: 'always',
		yandexMapDisablePoiInteractivity: true
	});
	//Контент балунов
	var selma = `
							<h4 class="map__title">Медэксперт на Сельме</h4>
							<div class="map__adress">
								ул. Франца Лефорта, 12, Калининград, Калининградская обл., 236029
							</div>
							<ul class="map__info">
								<li>
									<p class="map__phone">Телефон:</p>
									<div class="map__phone">
										<a href="tel:+74012519000" class="map__number">+7 (4012) 51-90-00</a>
										<div class="phone-icon">
											<a href="#" ><img src="img/viber-icon.svg" width="32" height="29"></a>
											<a href="#"><img src="img/whatsapp-icon.svg" width="29" height="29"></a>
										</div>
									</div>
								</li>
								<li>
									<div class="map__worktime">Режим работы:</div>
									<div class="map__week">
										<span>Пн-Пт</span>
										<span>Сб</span>
										<span>Вс</span>
									</div>
									<div class="map__time">
										<span>8:00 - 18:00</span>
										<span>8:00 - 16:00</span>
										<span>8:00 - 12:00</span>
									</div>
								</li>
							</ul>
			`;
	var kosmicheskaya = `
							<h4 class="map__title">Медэксперт на Космической</h4>
							<div class="map__adress">
								ул. Космическая, 29, Калининград, Калининградская обл., 236006
							</div>
							<ul class="map__info">
								<li>
									<p class="map__phone">Телефон:</p>
									<div class="map__phone">
										<a href="tel:+74012519102" class="map__number">+7 (4012) 51-91-02</a>
										<div class="phone-icon">
											<a href="#" ><img src="img/viber-icon.svg" width="32" height="29"></a>
											<a href="#"><img src="img/whatsapp-icon.svg" width="29" height="29"></a>
										</div>
									</div>
								</li>
								<li>
									<div class="map__worktime">Режим работы:</div>
									<div class="map__week">
										<span>Пн-Пт</span>
										<span>Сб</span>
										<span>Вс</span>
									</div>
									<div class="map__time">
										<span>7:30 - 20:00</span>
										<span>7:30 - 20:00</span>
										<span>7:30 - 20:00</span>
									</div>
								</li>
							</ul>
			`;
	var ivannikova = `
							<h4 class="map__title">Медэксперт на Иванникова</h4>
							<div class="map__adress">
								ул. Подполковника Иванникова, 8, Калининград, Калининградская обл., 236040
							</div>
							<ul class="map__info">
								<li>
									<p class="map__phone">Телефон:</p>
									<div class="map__phone">
										<a href="tel:+740125190000" class="map__number">+7 (4012) 51-90-00</a>
										<div class="phone-icon">
											<a href="#" ><img src="img/viber-icon.svg" width="32" height="29"></a>
											<a href="#"><img src="img/whatsapp-icon.svg" width="29" height="29"></a>
										</div>
									</div>
								</li>
								<li>
									<div class="map__worktime">Режим работы:</div>
									<div class="map__week">
										<span>Пн-Пт</span>
										<span>Сб</span>
										<span>Вс</span>
									</div>
									<div class="map__time">
										<span>8:00 - 20:00</span>
										<span>8:00 - 20:00</span>
										<span>8:00 - 20:00</span>
									</div>
								</li>
							</ul>
			`;
	var international = `
							<h4 class="map__title">Медэксперт на Интернациональной</h4>
							<div class="map__adress">
								ул. Интернациональная, 64, Калининград, Калининградская обл., 236039
							</div>
							<ul class="map__info">
								<li>
									<p class="map__phone">Телефон:</p>
									<div class="map__phone">
										<a href="tel:+74012567766" class="map__number">+7 (4012) 56-77-66</a>
										<div class="phone-icon">
											<a href="#" ><img src="img/viber-icon.svg" width="32" height="29"></a>
											<a href="#"><img src="img/whatsapp-icon.svg" width="29" height="29"></a>
										</div>
									</div>
								</li>
								<li>
									<div class="map__worktime">Режим работы:</div>
									<div class="map__week">
										<span>Пн-Пт</span>
										<span>Сб</span>
										<span>Вс</span>
									</div>
									<div class="map__time">
										<span>8:00 - 20:00</span>
										<span>8:00 - 20:00</span>
										<span>8:00 - 20:00</span>
									</div>
								</li>
							</ul>
			`;
	var leonova = `
							<h4 class="map__title">Медэксперт на Леонова</h4>
							<div class="map__adress">
								ул. Космонавта Леонова, 8, Калининград, Калининградская обл., 236006
							</div>
							<ul class="map__info">
								<li>
									<p class="map__phone">Телефон:</p>
									<div class="map__phone">
										<a href="tel:+74012519000" class="map__number">+7 (4012) 51-90-00</a>
										<div class="phone-icon">
											<a href="#" ><img src="img/viber-icon.svg" width="32" height="29"></a>
											<a href="#"><img src="img/whatsapp-icon.svg" width="29" height="29"></a>
										</div>
									</div>
								</li>
								<li>
									<div class="map__worktime">Режим работы:</div>
									<div class="map__week">
										<span>Пн-Пт</span>
										<span>Сб</span>
										<span>Вс</span>
									</div>
									<div class="map__time">
										<span>7:30 - 20:30</span>
										<span>7:30 - 20:00</span>
										<span>7:30 - 18:00</span>
									</div>
								</li>
							</ul>
			`;
	var moskovskya = `
							<h4 class="map__title">Медэксперт на Московском</h4>
							<div class="map__adress">
								Московский пр., 229, Калининград, Калининградская обл., 236048
							</div>
							<ul class="map__info">
								<li>
									<p class="map__phone">Телефон:</p>
									<div class="map__phone">
										<a href="tel:+74012519133" class="map__number">+7 (4012) 51-91-33</a>
										<div class="phone-icon">
											<a href="#" ><img src="img/viber-icon.svg" width="32" height="29"></a>
											<a href="#"><img src="img/whatsapp-icon.svg" width="29" height="29"></a>
										</div>
									</div>
								</li>
								<li>
									<div class="map__worktime">Режим работы:</div>
									<div class="map__week">
										<span>Пн-Пт</span>
										<span>Сб</span>
										<span>Вс</span>
									</div>
									<div class="map__time">
										<span>8:00 - 20:00</span>
										<span>8:00 - 20:00</span>
										<span>8:00 - 20:00</span>
									</div>
								</li>
							</ul>
			`;
	var sovetProspect = `
							<h4 class="map__title">Медэксперт на Советском проспекте</h4>
							<div class="map__adress">
								Советский пр., 14-16, Калининград, Калининградская обл., 236022
							</div>
							<ul class="map__info">
								<li>
									<p class="map__phone">Телефон:</p>
									<div class="map__phone">
										<a href="tel:+74012992033" class="map__number">+7 (4012) 99-20-33</a>
										<div class="phone-icon">
											<a href="#" ><img src="img/viber-icon.svg" width="32" height="29"></a>
											<a href="#"><img src="img/whatsapp-icon.svg" width="29" height="29"></a>
										</div>
									</div>
								</li>
								<li>
									<div class="map__worktime">Режим работы:</div>
									<div class="map__week">
										<span>Пн-Пт</span>
										<span>Сб</span>
										<span>Вс</span>
									</div>
									<div class="map__time">
										<span>8:30 - 20:30</span>
										<span>8:30 - 16:00</span>
										<span>9:30 - 16:00</span>
									</div>
								</li>
							</ul>
			`;
	var prospectPobedy = `
							<h4 class="map__title">Медэксперт на проспекте Победы</h4>
							<div class="map__adress">
								пр-т Победы, 33, Калининград, Калининградская обл., 236010
							</div>
							<ul class="map__info">
								<li>
									<p class="map__phone">Телефон:</p>
									<div class="map__phone">
										<a href="tel:+74012311231" class="map__number">+7 (4012) 31-12-31</a>
										<div class="phone-icon">
											<a href="#" ><img src="img/viber-icon.svg" width="32" height="29"></a>
											<a href="#"><img src="img/whatsapp-icon.svg" width="29" height="29"></a>
										</div>
									</div>
								</li>
								<li>
									<div class="map__worktime">Режим работы:</div>
									<div class="map__week">
										<span>Пн-Пт</span>
										<span>Сб</span>
										<span>Вс</span>
									</div>
									<div class="map__time">
										<span>8:00 - 20:00</span>
										<span>8:00 - 20:00</span>
										<span>8:00 - 20:00</span>
									</div>
								</li>
							</ul>
			`;
	var prajskaya = `
							<h4 class="map__title">Медэксперт на Пражской</h4>
							<div class="map__adress">
								ул. Пражская, 1, Калининград, Калининградская обл., 236040
							</div>
							<ul class="map__info">
								<li>
									<p class="map__phone">Телефон:</p>
									<div class="map__phone">
										<a href="tel:+74012519000" class="map__number">+7 (4012) 51-90-00</a>
										<div class="phone-icon">
											<a href="#" ><img src="img/viber-icon.svg" width="32" height="29"></a>
											<a href="#"><img src="img/whatsapp-icon.svg" width="29" height="29"></a>
										</div>
									</div>
								</li>
								<li>
									<div class="map__worktime">Режим работы:</div>
									<div class="map__week">
										<span>Пн-Пт</span>
										<span>Сб</span>
										<span>Вс</span>
									</div>
									<div class="map__time">
										<span>7:30 - 20:00</span>
										<span>7:30 - 19:00</span>
										<span>7:30 - 18:00</span>
									</div>
								</li>
							</ul>
			`;
	var turgeneva = `
							<h4 class="map__title">Медэксперт на Пражской</h4>
							<div class="map__adress">
								ул. Тургенева, 3, Советск, Калининградская обл., 238750
							</div>
							<ul class="map__info">
								<li>
									<p class="map__phone">Телефон:</p>
									<div class="map__phone">
										<a href="tel:+74016136099" class="map__number">+7 (4016) 13-60-99</a>
										<div class="phone-icon">
											<a href="#" ><img src="img/viber-icon.svg" width="32" height="29"></a>
											<a href="#"><img src="img/whatsapp-icon.svg" width="29" height="29"></a>
										</div>
									</div>
								</li>
								<li>
									<div class="map__worktime">Режим работы:</div>
									<div class="map__week">
										<span>Пн-Пт</span>
										<span>Сб</span>
										<span>Вс</span>
									</div>
									<div class="map__time">
										<span>8:00 - 17:00</span>
										<span>Закрыто</span>
										<span>Закрыто</span>
									</div>
								</li>
							</ul>
			`;

	// Создадим и добавим панель на карту.
	var panel = new ymaps.Panel();
	map.controls.add(panel, {
		position: {
			top: '6.875rem',
			left: '8.06%'
		}
	});
	// Создадим коллекцию геообъектов.
	var collection = new ymaps.GeoObjectCollection(null, {
		// Запретим появление балуна.
		hasBalloon: false,
		iconLayout: 'default#image',
		// Своё изображение иконки метки.
		iconImageHref: './img/map-icon.svg',
		// Размеры метки.
		iconImageSize: [100, 100],
		// Смещение левого верхнего угла иконки относительно
		// её "ножки" (точки привязки).
		iconImageOffset: [-5, -38]
	});
	// Добавим геообъекты в коллекцию.
	collection
		.add(new ymaps.Placemark([54.742494,20.496812], {
				hintContent: 'Медэксперт на Сельме',
				balloonContent: selma
		}))
		.add(new ymaps.Placemark([54.713762, 20.500404], {
			hintContent: 'Медэксперт на Космической',
			balloonContent: kosmicheskaya
		}))
		.add(new ymaps.Placemark([54.717423, 20.505807], {
			hintContent: 'Медэксперт на Иванникова',
			balloonContent: ivannikova
		}))
		.add(new ymaps.Placemark([54.713762, 20.500404], {
			hintContent: 'Медэксперт на Космической',
			balloonContent: kosmicheskaya
		}))
		.add(new ymaps.Placemark([54.668387, 20.508010], {
			hintContent: 'Медэксперт на Интернациональной',
			balloonContent: international
		}))
		.add(new ymaps.Placemark([54.722413, 20.483326], {
			hintContent: 'Медэксперт на Леонова',
			balloonContent: leonova
		}))
		.add(new ymaps.Placemark([54.708739, 20.571602], {
			hintContent: 'Медэксперт на Московском',
			balloonContent: moskovskya
		}))
		.add(new ymaps.Placemark([54.724038, 20.498731], {
			hintContent: 'Медэксперт на Советском проспекте',
			balloonContent: sovetProspect
		}))
		.add(new ymaps.Placemark([54.715859, 20.467706], {
			hintContent: 'Медэксперт на проспекте Победы',
			balloonContent: prospectPobedy
		}))
		.add(new ymaps.Placemark([54.726043, 20.530251], {
			hintContent: 'Медэксперт на Пражской',
			balloonContent: prajskaya
		}))
		.add(new ymaps.Placemark([55.075679, 21.894642], {
			hintContent: 'Медэксперт на Тургенева',
			balloonContent: turgeneva
		}));
    // Добавим коллекцию на карту.
    map.geoObjects.add(collection);
    // Подпишемся на событие клика по коллекции.
    collection.events.add('click', function (e) {
        // Получим ссылку на геообъект, по которому кликнул пользователь.
        var target = e.get('target');
        // Зададим контент боковой панели.
        panel.setContent(target.properties.get('balloonContent'));
        // Переместим центр карты по координатам метки с учётом заданных отступов.
        map.panTo(target.geometry.getCoordinates(), {useMapMargin: true});
    });

map.controls.remove('geolocationControl'); // удаляем геолокацию
map.controls.remove('searchControl'); // удаляем поиск
map.controls.remove('trafficControl'); // удаляем контроль трафика
map.controls.remove('typeSelector'); // удаляем тип
map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
map.controls.remove('rulerControl'); // удаляем контрол правил
map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)


});


//--Карта в всплывающем окне
function init () {
	let mapSmall = new ymaps.Map('mapSmall', {
		center: [54.72944849769967,20.513725391238804],
		controls: ['default'],
		zoom: 16
	}, {
		yandexMapDisablePoiInteractivity: true
	});

// Добавление метки на карту.
MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
	'<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
),
myPlacemark = new ymaps.Placemark([54.742494,20.496812], {
		hintContent: 'Медэксперт на Сельме',
		balloonContent: ''
		}, {
		// Опции.
		// Необходимо указать данный тип макета.
		iconLayout: 'default#image',
		// Своё изображение иконки метки.
		iconImageHref: './img/map-icon.svg',
		// Размеры метки.
		iconImageSize: [100, 100],
		// Смещение левого верхнего угла иконки относительно
		// её "ножки" (точки привязки).
		iconImageOffset: [-5, -38]
	});
myPlacemark2 = new ymaps.Placemark([54.713762, 20.500404], {
		hintContent: 'Медэксперт на Космической',
		balloonContent: ''
	}, {
		// Опции.
		// Необходимо указать данный тип макета.
		iconLayout: 'default#image',
		// Своё изображение иконки метки.
		iconImageHref: './img/map-icon.svg',
		// Размеры метки.
		iconImageSize: [100, 100],
		// Смещение левого верхнего угла иконки относительно
		// её "ножки" (точки привязки).
		iconImageOffset: [-5, -38]
	});
myPlacemark3 = new ymaps.Placemark([54.717423, 20.505807], {
		hintContent: 'Медэксперт на Иванникова',
		balloonContent: ''
	}, {
		// Опции.
		// Необходимо указать данный тип макета.
		iconLayout: 'default#image',
		// Своё изображение иконки метки.
		iconImageHref: './img/map-icon.svg',
		// Размеры метки.
		iconImageSize: [100, 100],
		// Смещение левого верхнего угла иконки относительно
		// её "ножки" (точки привязки).
		iconImageOffset: [-5, -38]
	});
myPlacemark4 = new ymaps.Placemark([54.668387, 20.508010], {
		hintContent: 'Медэксперт на Интернациональной',
		balloonContent: ''
	}, {
		// Опции.
		// Необходимо указать данный тип макета.
		iconLayout: 'default#image',
		// Своё изображение иконки метки.
		iconImageHref: './img/map-icon.svg',
		// Размеры метки.
		iconImageSize: [100, 100],
		// Смещение левого верхнего угла иконки относительно
		// её "ножки" (точки привязки).
		iconImageOffset: [-5, -38]
	});
myPlacemark5 = new ymaps.Placemark([54.722413, 20.483326], {
		hintContent: 'Медэксперт на Леонова',
		balloonContent: ''
	}, {
		// Опции.
		// Необходимо указать данный тип макета.
		iconLayout: 'default#image',
		// Своё изображение иконки метки.
		iconImageHref: './img/map-icon.svg',
		// Размеры метки.
		iconImageSize: [100, 100],
		// Смещение левого верхнего угла иконки относительно
		// её "ножки" (точки привязки).
		iconImageOffset: [-5, -38]
	});
myPlacemark6 = new ymaps.Placemark([54.708739, 20.571602], {
		hintContent: 'Медэксперт на Московском',
		balloonContent: ''
	}, {
		// Опции.
		// Необходимо указать данный тип макета.
		iconLayout: 'default#image',
		// Своё изображение иконки метки.
		iconImageHref: './img/map-icon.svg',
		// Размеры метки.
		iconImageSize: [100, 100],
		// Смещение левого верхнего угла иконки относительно
		// её "ножки" (точки привязки).
		iconImageOffset: [-5, -38]
	});
myPlacemark7 = new ymaps.Placemark([54.724038, 20.498731], {
		hintContent: 'Медэксперт на Советском проспекте',
		balloonContent: ''
	}, {
		// Опции.
		// Необходимо указать данный тип макета.
		iconLayout: 'default#image',
		// Своё изображение иконки метки.
		iconImageHref: './img/map-icon.svg',
		// Размеры метки.
		iconImageSize: [100, 100],
		// Смещение левого верхнего угла иконки относительно
		// её "ножки" (точки привязки).
		iconImageOffset: [-5, -38]
	});
myPlacemark8 = new ymaps.Placemark([54.715859, 20.467706], {
		hintContent: 'Медэксперт на проспекте Победы',
		balloonContent: ''
	}, {
		// Опции.
		// Необходимо указать данный тип макета.
		iconLayout: 'default#image',
		// Своё изображение иконки метки.
		iconImageHref: './img/map-icon.svg',
		// Размеры метки.
		iconImageSize: [100, 100],
		// Смещение левого верхнего угла иконки относительно
		// её "ножки" (точки привязки).
		iconImageOffset: [-5, -38]
	});
myPlacemark9 = new ymaps.Placemark([54.726043, 20.530251], {
		hintContent: 'Медэксперт на Пражской',
		balloonContent: ''
	}, {
		// Опции.
		// Необходимо указать данный тип макета.
		iconLayout: 'default#image',
		// Своё изображение иконки метки.
		iconImageHref: './img/map-icon.svg',
		// Размеры метки.
		iconImageSize: [100, 100],
		// Смещение левого верхнего угла иконки относительно
		// её "ножки" (точки привязки).
		iconImageOffset: [-5, -38]
	});
myPlacemark10 = new ymaps.Placemark([55.075679, 21.894642], {
		hintContent: 'Медэксперт на Тургенева',
		balloonContent: ''
	}, {
		// Опции.
		// Необходимо указать данный тип макета.
		iconLayout: 'default#image',
		// Своё изображение иконки метки.
		iconImageHref: './img/map-icon.svg',
		// Размеры метки.
		iconImageSize: [100, 100],
		// Смещение левого верхнего угла иконки относительно
		// её "ножки" (точки привязки).
		iconImageOffset: [-5, -38]
	});

mapSmall.geoObjects
.add(myPlacemark)
.add(myPlacemark2)
.add(myPlacemark3)
.add(myPlacemark4)
.add(myPlacemark5)
.add(myPlacemark6)
.add(myPlacemark7)
.add(myPlacemark8)
.add(myPlacemark9)
.add(myPlacemark10);


//--Позиционирование центра карты модапа
$('.map__link').click(function(){
	
		var coords =  $(this).attr('data-mapcenter');

		var selma = [54.742494,20.496812];
		var kosmicheskaya = [54.713762, 20.500404];
		var ivannikova = [54.717423, 20.505807];
		var international = [54.668387, 20.508010];
		var leonova = [54.722413, 20.483326];
		var moskovskya = [54.708739, 20.571602];
		var sovetProspect = [54.724038, 20.498731];
		var prospectPobedy = [54.715859, 20.467706];
		var prajskaya = [54.726043, 20.530251];
		var turgeneva = [55.075679, 21.894642];

		if (coords == 'selma') {
			mapSmall.setCenter(selma);
		} else if (coords == 'kosmicheskaya') {
			mapSmall.setCenter(kosmicheskaya);
		} else if (coords == 'ivannikova') {
			mapSmall.setCenter(ivannikova);
		} else if (coords == 'international') {
			mapSmall.setCenter(international);
		} else if (coords == 'leonova') {
			mapSmall.setCenter(leonova);
		} else if (coords == 'moskovskya') {
			mapSmall.setCenter(moskovskya);
		} else if (coords == 'sovetProspect') {
			mapSmall.setCenter(sovetProspect);
		} else if (coords == 'prospectPobedy') {
			mapSmall.setCenter(prospectPobedy);
		} else if (coords == 'prajskaya') {
			mapSmall.setCenter(prajskaya);
		} else if (coords == 'turgeneva') {
			mapSmall.setCenter(turgeneva);
		}
});

mapSmall.controls.remove('geolocationControl'); // удаляем геолокацию
mapSmall.controls.remove('searchControl'); // удаляем поиск
mapSmall.controls.remove('trafficControl'); // удаляем контроль трафика
mapSmall.controls.remove('typeSelector'); // удаляем тип
mapSmall.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
mapSmall.controls.remove('rulerControl'); // удаляем контрол правил
mapSmall.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
}

ymaps.ready(init);