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

//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//---------------------------------             ---------------------------------------
//---------------------------------    JQUERY    --------------------------------------
//---------------------------------             ---------------------------------------
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------
//--------------------------------------ПРОВЕРКА ФОРМЫ-------------------------------
//-----------------------------------------------------------------------------------
$(function() {
	$('.form_registration,.form_datetime').each(function(){
	var form = $(this),
	btn = form.find('.btn__submit');

	form.find('input, select').val();
	form.find('.rfield').addClass('empty_field');
	function checkInput(){
		form.find('.rfield').each(function(){
			if($(this).val() != '' && !$(this).is(':radio') && $(this).val()!= null )  {
				$(this).removeClass('empty_field');
			} else if ($(this).is(':radio') && $(this).is(':checked')) {
				$(this).removeClass('empty_field');
				$(this).siblings().removeClass('empty_field').addClass("filled_field");
			} else if ($(this).is(':not(.filled_field)')) {
				$(this).addClass('empty_field');
			} 
		});
		
	}

// Функция для подсветки незаполненных полей
function lightEmpty(){
		form.find('.empty_field').css({'border-color':'#d8512d'});
		form.find('.empty_field').closest('fieldset').find('.empty-fields').css({'opacity':'1','visibility':'visible'});
		form.find('.datetime__list').find('.empty-fields').css({'opacity':'1','visibility':'visible'});

		// Подсветка радиокнопок checked
		if ($('#male').prop("checked") == false && $('#female').prop("checked") == false) {
			form.find('input[name="sex"]').next('label').addClass('radio-empty');
		}
		if ($('#policyTrue').prop("checked") == false && $('#policyFalse').prop("checked") == false) {
			form.find('input[name="policy"]').next('label').addClass('radio-empty');
      }
      if ($('#employmentTrue').prop("checked") == false && $('#employmentFalse').prop("checked") == false) {
      	form.find('input[name="employment"]').next('label').addClass('radio-empty');
      }
      if ($('#moveOutTrue').prop("checked") == false && $('#moveOutFalse').prop("checked") == false) {
      	form.find('input[name="move-out"]').next('label').addClass('radio-empty');
      }
      if ($('#vaccinationCovidTrue').prop("checked") == false && $('#vaccinationCovidFalse').prop("checked") == false) {
      	form.find('input[name="vaccination-covid"]').next('label').addClass('radio-empty');
      }
      if ($('#vaccinationFluTrue').prop("checked") == false && $('#vaccinationFluFalse').prop("checked") == false) {
      	form.find('input[name="vaccination-flu"]').next('label').addClass('radio-empty');
      }
      if ($('#contactObservedTrue').prop("checked") == false && $('#contactObservedFalse').prop("checked") == false) {
      	form.find('input[name="contact-observed"]').next('label').addClass('radio-empty');
      }
      if ($('#contactConfirmationTrue').prop("checked") == false && $('#contactConfirmationFalse').prop("checked") == false) {
      	form.find('input[name="contact-confirmation"]').next('label').addClass('radio-empty');
      }
      if ($('#quarantineTrue').prop("checked") == false && $('#quarantineFalse').prop("checked") == false) {
      	form.find('input[name="quarantine"]').next('label').addClass('radio-empty');
      }
      if ($('#symptomsOfInfectionTrue').prop("checked") == false && $('#symptomsOfInfectionFalse').prop("checked") == false) {
      	form.find('input[name="symptoms-of-infection"]').next('label').addClass('radio-empty');
      }
      // Таймаут подсветки полей
      setTimeout(function(){
      form.find('.empty_field').removeAttr('style');
      },1000);
    }
    // Проверка в режиме реального времени
	setInterval(function(){
		checkInput();
		var sizeEmpty = form.find('.empty_field').length;
		if(sizeEmpty > 0){
			// Все поля раздела заполнены   уведомление отключено   
			$('fieldset').each(function() {
				var fielsetControl = $(this).find('.empty_field').length;
				if(fielsetControl <= 0) {
				$(this).find('.empty-fields').removeAttr('style');
				}
			});
			// 
			if(btn.hasClass('disabled')){
			return false;
			} else {
				btn.addClass('disabled');
			}
		} else {
			btn.removeClass('disabled');
			form.find('.empty-fields').removeAttr('style');
			form.find('.rfield').next('label').removeClass('radio-empty');
		}
	},200);
	// Событие клика по кнопке отправить
		btn.click(function(){
			if($(this).hasClass('disabled')){
				lightEmpty();
				return false
			} else {
				if($(this).hasClass('datetime__btn-submit')) {
					regOpen();
				} else {
					regPreview();
				}
			}
		});
	});
});
//-------------------События при отправке форм--------
//Выбора даты и времени
function regOpen() {
		$('.form_datetime').submit(function (e) {
			e.preventDefault ();

			$('.form-1').css({'display':'none'});
			$('.datetime-select ').removeClass('open');
			$('.registration_info, .form-2').css({'display':'block'});
			window.scrollTo(0, 0);
		});
		
		$('.cheked_analyse').val($('.analysis-type').val())
		$('.cheked-department').val($('.department').val())
		$('#checkedVisitDate').val($('.visitdate').val())
		$('#checkedVisitTime').val($('.visitTime__result').val())
};
//-Регистрации анкеты
function regPreview() {
		if (innerWidth <= 1200 ) {
			$('.form_registration').submit(function (e) {
				e.preventDefault ();
				$('body').addClass('lock');
				$('.order-info').addClass('open');
			});
		} else {
			$('.form_registration').submit(function (e) {
				e.preventDefault ();

				$(this).css({'display':'none'});
				$('.registration__title, .registration__text').css({'display':'none'});
				$('.order-accepted').css({'display':'block'});
				window.scrollTo(0, 0);
	 		});
		}
};
//-Регистрация анкеты ПЛАНШЕТ
$(function() {
	$('.order-info__submit.popup-link').click(function() {
		if(innerWidth >= 750 && innerWidth <= 1200) {
			$('.form_registration').css({'display':'none'});
			$('.registration__title, .registration__text').css({'display':'none'});
			$('.order-accepted.popup').removeClass('open');
			$('body').removeClass('lock');
			$('.order-accepted').css({'display':'block'});
			window.scrollTo(0, 0);
		}
	});
})
//     Обновление страницы после отправки.
$('order-accepted__close-button').click(function() {
	location.reload();
});

//---------------------------------------------------------------------------------------
//--------------------------------------НАСТРОЙКИ ФОРМ-----------------------------------
//---------------------------------------------------------------------------------------
//---Отключение обводки радиокнопки
	$("input[type='radio']").each(function(i,elem) {
		$(this).click(function() {
			if ($(this).is(":checked")) {
				$(this).siblings('label').removeClass('radio-empty');
			}
	});
});

//---Активация блока ПРЕДСТАВИТЕЛЬ в #form-2
$(function() {
	$("input[name='representative']").click(function() {
		if ($("#representative").is(":checked")) {
		$(".representative-info").show();
		$('.representative-name, .representative-adress').toggleClass('rfield');
		} else {
		$(".representative-info").hide();
		$('.representative-name, .representative-adress').toggleClass('rfield');
		$('.representative-name, .representative-adress').toggleClass('empty_field');
		}
	});
});

//---Запись выбранного времени в поле & изменение стиля активной выбранной кнопки
 $('.visitTime__item').on('click', function() {
 		var anySelected = $('.visitTime__list').find('.visitTime__item.selected').length

 		if($(this).hasClass('active') && anySelected <= 0) {
			$(this).addClass('selected')
		} else if ($(this).hasClass('active') && anySelected > 0) {
			$('.visitTime__list').find('.visitTime__item.selected').removeClass('selected');
			$(this).addClass('selected')
		}
		$('#visitTime').val($('.visitTime__item.selected').text());
 })

//---Вывод общей информации внизу формы #form-1
	$('.date-time__field, .datetime-select').on('click', function () {
		var TimeValue = $('#visitTime').val();
		var DateValue = $('.visitdate__result').val()
		console.log((DateValue + " " + TimeValue).replace(": ", ""))

		$(".datetime-out").text((DateValue + " " + TimeValue).replace(": ", ""));
});

//---Подключение в форме раздела ПРЕДСТАВИТЕЛЬ
$(document).ready(function() {
	$(".contact__title").click(function(event) {
		$(this).parent('.contact-departament').toggleClass('active');
	});
});

//---Уведомление о незаполненных полях
$('.datetime-popup__btn-submit').on('click', function(e) {
	if($(this).hasClass('disabled')) {
		e.preventDefault ();
		$(".datetime-select.popup").removeClass('open');
		window.scrollTo(0, 0);
	}
});
//---Ограничение прокрутки окна "ВАШ ЗАКАЗ"
$(window).scroll(() => {
	//Высота до футера
	topFooter = $('#footer').position().top;
	// Высота прокрутки страницы
	scrollDistanceFromTop = $(document).scrollTop() + window.innerHeight ;
	// Разница между высотами
	scrollDistanceTopFooter = scrollDistanceFromTop - topFooter; 
	// Если область прокрутки ниже футера - добавляется отступ.
	if (scrollDistanceFromTop > topFooter) {
		$('#orderInfoResult').css('margin-bottom',  0 + scrollDistanceTopFooter + 50);
	} else  {
		$('#orderInfoResult').css('margin-bottom', 0);
	}
});

//проверка фиксации body
setInterval(function(){
		if($(document).find('.popup').hasClass("open") || $(document).find('.header-menu__content').hasClass("active") && !$('body').hasClass('lock')) {
			$('body').addClass('lock');
		} else if (!$(document).find('.popup').hasClass("open") && !$(document).find('.header-menu__content').hasClass("active")) {
			$('body').removeClass('lock');
		}
	},200);
//--------------------------------------------------------------------------------------
//----------------------------------------МОДАП ОТКАЗ ----------------------------------
//--------------------------------------------------------------------------------------
$("input[id*='True']").each(function (i, el) {
	$(this).click(function() {
		if ($(this).parents('.additional-questions').length != 0) {
			$('.refusal').addClass('open');
			$(body).addClass('lock');
			$(this).prop("checked", false);
		}
	});
 });

//отключение кликабельности скрытых модапов
$(document).on('load', function() {
	$('popup').find().css('pointer-events','auto');
});
//--------------------------------------------------------------------------------------
//--------------------------------------МАСКИ под INPUT---------------------------------
//--------------------------------------------------------------------------------------
$(function() {
//---для телефонного номера
	$('#phone, #phoneCallback').mask("+7-999-999-99-99");
//---для текста
	jQuery(function($) {
		$('#secondName, #name, #patronymic').on('keypress', function() {
			var that = this;
			setTimeout(function() {
			var res = /[^а-яА-Я]/g.exec(that.value);
			that.value = that.value.replace(res, '');
			}, 0);
		});
		$('#representativeName').on('keypress', function() {
			var that = this;
			setTimeout(function() {
			var res = /[^а-яА-Я ]/g.exec(that.value);
			that.value = that.value.replace(res, '');
			}, 0);
		});
	});
});
//----------------------------------------------------------------------------------
//------------------------------------------КАЛЕНДАРЬ-------------------------------
//----------------------------------------------------------------------------------
// подключение календаря к полю дата-рождения
$('#birthdate').datepicker({
	classes: "datepicker__birthdate",
});

//  подключение календаря к полю дата-визита
var avalibleDates = [10, 11, 13, 24, 18, 21, 28, 29],
	$visitdate = $('#visitdate'),
	$content = $('#visitdate-events');
var visitTimeTitle = $('#visitTimeTitle').text();

$visitdate.datepicker({
	classes: "visitTime__datepicker",
	inline: true,
	disableNavWhenOutOfRange: true,
	onRenderCell: function (date, cellType) {
		changeViewType() 
		var currentDate = date.getDate();
		// Добавляется класс, если число содержится в `avalibleDates`, прочие даты деактивируются
		if (cellType == 'day' && avalibleDates.indexOf(currentDate) != -1) {
			return {
				classes: 'available'
			}
		} else if (cellType == 'day' && avalibleDates.indexOf(currentDate) == -1) {
			return {
				disabled: true
			}
		}
	},
	// Вывод выбранной даты в поле
	altField: $('#visitdateResualt'),
	altFieldDateFormat: ': DD, d MM,',
	// Изменение заголовка недели
	onSelect: function onSelect(fd, date) {
		changeViewType() 
		var visitdateResualtText = $('#visitdateResualt').val();
		$('#visitdateResualt').val(visitdateResualtText.replace("Понедельник","пн").replace("Вторник","вт").replace("Среда","ср").replace("Четверг","чт").replace("Пятница","пт").replace("Суббота","сб").replace("Воскресенье","вс").replace("Январь","января").replace("Февраль","февраля").replace("Март","марта").replace("Апрель","апреля").replace("Май","мая").replace("Июнь","июня").replace("Июль","июля").replace("Август","августа").replace("Сентябрь","сентября").replace("Октябрь","октября").replace("Ноябрь","ноября").replace("Декабрь","декабря"));
	 	//обновление переменной visitdateResualtText
	 	var visitdateResualtText = $('#visitdateResualt').val();
	 	$('#visitTimeTitle').text(visitTimeTitle + visitdateResualtText);
	 	//обновление заголовка время визита
	 	var visitTimeTitleUpdate = $('#visitTimeTitle').text();
	 	// исключение избыточных символов
	 	$('#visitTimeTitle').text(visitTimeTitleUpdate.replace(",","").replace("пн ","").replace("вт ","").replace("ср ","").replace("чт ","").replace("пт ","").replace("сб ","").replace("вс ","").replace(",",""));
	 
		//подключение блока времени
		if ($(".visitdate").val() !== '') {
			$(".visitTime__list").addClass('active');
			$(".time-icon").removeClass('active');
			$(".result__column").removeClass('disabled');
			// screen-size < 750 вывод модапа выбора времени
		 	if(innerWidth < 750) {
				console.log('click-click')
				$('#visitTime').val("");
				$('.datetime-select.popup').find('.visitTime__item.selected').removeClass('selected')
				$('.datetime-select.popup').addClass('open');
				$('.datetime-select__text').text($('#visitTimeTitle').text());
			} 
		} else {
			$(".time-icon").addClass('active');
			$(".visitTime__list").removeClass('active');
		//удаление данных из поля времени при отключении 
			$("#visitTime").val('');
			$('.visitTime__list').find('.visitTime__item.selected').removeClass('selected');
		}
	 },
	onChangeMonth: function() {
		changeViewType() 
	},
	onChangeYear: function() {
		changeViewType() 
	},
	onChangeDecade: function() {
		changeViewType() 
	}
});
//-Скролл внутри календаря формы #form-1
$(window).on('load', function(){
	changeViewType()
	if (innerWidth < 425) {
		$('.datepicker--content').mCustomScrollbar({
			axis: 'x',
			autoHideScrollbar: false,
		});
	}
});
$(window).on('resize', function(){
	changeViewType();
	if (innerWidth < 425) {
		$('.datepicker--content').mCustomScrollbar({
			axis: 'x',
			autoHideScrollbar: false,
		});
	} else {
		$('.datepicker--content').mCustomScrollbar("destroy");
	}
});
//Отключение вида "месяц" для маленьких экранов
function changeViewType() {
	var typeOfView = $(".visitTime__datepicker").find(".datepicker--nav-title");
	if(innerWidth < 425) {
		$(typeOfView).css("pointer-events", "none");
	} else {
		$(typeOfView).removeAttr('style');
	}
};
//-------------------------------------------------------------------------------
//-----------------------------------БУРГЕР--------------------------------------
//-------------------------------------------------------------------------------
$(document).ready(function() {
	$('.header-menu__burger').click(function(event) {
		$('.header-menu__burger,.header-menu__content, .header-menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});
//-------------------------------------------------------------------------------------
// ---------------------------------Кнопка НАВЕРХ--------------------------------------
//-------------------------------------------------------------------------------------
$(function() {
	$(document).scroll(function() {
			var scrollSize = $(document).scrollTop();
			var scrollArea = $(window).innerHeight();

			if (scrollSize > scrollArea) {
				$('.back_to_top').addClass('back_to_top-show');
			} else {
				$('.back_to_top').removeClass('back_to_top-show');
			}
	});
	
	$('.back_to_top').on('click', function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
	});
});
//-------------------------------------------------------------------------------------
//----------------------------------------СЛАЙДЫ---------------------------------------
//-------------------------------------------------------------------------------------
new Swiper('.type-slide__wrapper',{
	spaceBetween: 10,
	speed: 800,
	width: 217,
	watchOverflow: false,
	centeredSlides: false,
	breakpoints: { 
		750: {
			width: 370,
			spaceBetween: 30
		}
	},
	slideActiveClass: 'slide__active'
});

new Swiper('.before-vaccine__slide__wrapper',{
	spaceBetween: 10,
	speed: 800,
	width: 217,
	watchOverflow: false,
	centeredSlides: false,
	breakpoints: { 
		750: {
			width: 370,
			spaceBetween: 30
		}
	},
	slideActiveClass: 'slide__active',
});
//-------------------------------------------------------------------------------------