document.addEventListener('DOMContentLoaded', function () {
    let url = "http://194.87.111.46:4015/";

    auth();
    // getDoctors(url);
});

function auth(url) {
    console.log('Авторизуемся');
    
    axios.post('http://194.87.111.46:4015/api/login', {
        login: 'WEBSERVICE_ME_WS',
        passwd: '39d5718A'
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

function getDoctors(url) {
    console.log('Запрашиваем докторов на ' + url);

    axios.get('http://194.87.111.46:4015/api/doclist')
        .then(function (response) {
            console.log(this);
            console.log(response);
        })
        .catch(function (error) {
            console.log(this);
            console.log(error);
        })
        .then(function () {
            console.log('Тык');
        });
}