//-------------------------------------------------------------------------------------
//------------------------------------МОДАПЫ-------------------------------------------
//-------------------------------------------------------------------------------------
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelector(".lock-padding");

let unlock = true;
const timeout = 800;

if (popupLinks.length > 0) {
	for (let i = 0; i < popupLinks.length; i++) {
		const popupLink = popupLinks[i];
		popupLink.addEventListener("click", function(e) {
			const popupName = popupLink.getAttribute('href').replace('#','');
			const currentPopup = document.getElementById(popupName);
			popupOpen(currentPopup);
			e.preventDefault();
		});
	}
}
const popupCloseButton = document.querySelectorAll('.close-button');
if (popupCloseButton.length > 0) {
	for (let i = 0; i < popupCloseButton.length; i++) {
		const cl = popupCloseButton[i];
		cl.addEventListener('click', function (e) {
			popupClose(cl.closest('.popup'));
			e.preventDefault();
		});
	}
}
function popupOpen (currentPopup) {
	if  (currentPopup && unlock) {
		const popupActive = document.querySelector('.popup.open');
		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			bodyLock();
		}
		currentPopup.classList.add('open');
		currentPopup.addEventListener("click", function(e) {
			if (!e.target.closest('.popup-content')) {
				popupClose(e.target.closest('.popup'));
			}
		});
	}
}
function popupClose (popupActive, doUnlock = true) {
	if (unlock) {
		popupActive.classList.remove('open');
		if (doUnlock) {
			bodyUnLock();
		}
	}
}
function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
	for (let i=0; i < lockPadding.length; i++ ) {
		const el = lockPadding[i];
		el.style.paddingRight = lockPaddingValue;
	}
	body.style.paddingRight = lockPaddingValue;
	body.classList.add('lock');

	unlock = false;
	setTimeout(function() {
		unlock = true;
	}, timeout);
};
function bodyUnLock() {
	setTimeout(function () {
		for (let i = 0; i < lockPadding.length; i++) {
			const el = lockPadding[i];
			el.style.paddingRight = '0px';
		}
		body.style.paddingRight = '0px';
		body.classList.remove('lock');
	}, timeout);

	unlock = false;
	setTimeout(function() {
		unlock = true;
	}, timeout);
}
//-------------------------------------------------------------------------------------
// Переключение радиокнопки
function clickRadio(el) {
	var siblings = document.querySelectorAll("input[type='radio'][name='" + el.name + "']");
	for (var i = 0; i < siblings.length; i++) {
		if (siblings[i] != el)
		siblings[i].oldChecked = false;
	}
	if (el.oldChecked)
		el.checked = false;
	el.oldChecked = el.checked;
}
//-------------------------------------------------------------------------------------
//--------------------------------------ПОДКЛЮЧЕНИЕ КАРТ-------------------------------
//-------------------------------------------------------------------------------------
function init () {
	let map = new ymaps.Map('map', {
		center: [54.72944849769967,20.513725391238804],
		controls: [],
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
									<a href="tel:+74012519000" class="map__number">+7 (4012) 251-90-00</a>
									<div class="phone-icon">
										<a href="#" ><img src="../img/viber-icon.svg" width="32" height="29"></a>
										<a href="#"><img src="../img/whatsapp-icon.svg" width="29" height="29"></a>
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

myPlacemark2 = new ymaps.Placemark([54.736763122037225,20.538530478662775], {
		hintContent: 'Медэксперт',
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
.add(myPlacemark2);

mapSelma.geoObjects
.add(myPlacemarkSelma);

map.controls.remove('geolocationControl'); // удаляем геолокацию
map.controls.remove('searchControl'); // удаляем поиск
map.controls.remove('trafficControl'); // удаляем контроль трафика
map.controls.remove('typeSelector'); // удаляем тип
map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
map.controls.remove('zoomControl'); // удаляем контрол зуммирования
map.controls.remove('rulerControl'); // удаляем контрол правил
map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
}

ymaps.ready(init);