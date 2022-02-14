//-------------------------------------------------------------------------------------
//--------------------------------------ПОДКЛЮЧЕНИЕ КАРТ-------------------------------
//-------------------------------------------------------------------------------------
function init () {
	let map = new ymaps.Map('map', {
		center: [54.72944849769967,20.513725391238804],
		controls: ['default', 'zoomControl'],
		zoom: 14
	});
	let mapSelma = new ymaps.Map('mapSelma', {
		center: [54.742494,20.496812],
		controls: [],
		zoom: 14
	}, {
		autoFitToViewport: 'always'
	});

// Добавление метки на карту.
MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
	'<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
),
myPlacemark = new ymaps.Placemark([54.742494,20.496812], {
		hintContent: 'Медэксперт на Сельме',
		balloonContent: `
			<div class="map_ballon">
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
					</div>
		`
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
		balloonContent: `
			<div class="map_ballon">
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
					</div>
		`
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
		balloonContent: `
			<div class="map_ballon">
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
					</div>
		`
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
myPlacemark4 = new ymaps.Placemark([54.668314, 20.507937], {
		hintContent: 'Медэксперт на Интернациональной',
		balloonContent: `
			<div class="map_ballon">
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
					</div>
		`
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
		balloonContent: `
			<div class="map_ballon">
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
					</div>
		`
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
myPlacemark6 = new ymaps.Placemark([54.668314, 20.507937], {
		hintContent: 'Медэксперт на Московском',
		balloonContent: `
			<div class="map_ballon">
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
					</div>
		`
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
		balloonContent: `
			<div class="map_ballon">
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
					</div>
		`
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
		balloonContent: `
			<div class="map_ballon">
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
					</div>
		`
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
		balloonContent: `
			<div class="map_ballon">
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
					</div>
		`
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
		balloonContent: `
			<div class="map_ballon">
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
					</div>
		`
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
myPlacemarkSelma = new ymaps.Placemark([54.742494,20.496812], {
		hintContent: 'Медэксперт',
		balloonContent: ''
	}, {
		// Опции.
		// Необходимо указать данный тип макета.
		iconLayout: 'default#image',
		// Своё изображение иконки метки.
		iconImageHref: './img/map-icon.svg',
		// Размеры метки.
		iconImageSize: [100, 70],
		// Смещение левого верхнего угла иконки относительно
		// её "ножки" (точки привязки).
		iconImageOffset: [-5, -38]
	});


map.geoObjects
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

mapSelma.geoObjects
.add(myPlacemarkSelma);

map.controls.remove('geolocationControl'); // удаляем геолокацию
map.controls.remove('searchControl'); // удаляем поиск
map.controls.remove('trafficControl'); // удаляем контроль трафика
map.controls.remove('typeSelector'); // удаляем тип
map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
map.controls.remove('rulerControl'); // удаляем контрол правил
map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
}

ymaps.ready(init);