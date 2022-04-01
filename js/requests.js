document.addEventListener('DOMContentLoaded', () => {
    // initRequests();
    new Requests();
});

class Requests {
    constructor() {
        this.url = "https://cab.mdx39.ru/apiv2/";

        this.login = "WEBSERVICE_ME_WS";
        this.passwd = "39d5718A";

        this.token = null;
        this.userId = null;

        this.auth();
    }

    auth = () => {
        let context = this;

        axios.post(this.url + 'login', {
            login: this.login,
            passwd: this.passwd
        })
            .then(function (response) {
                // console.log(response);
                context.token = response.data.data.token;
                context.userId = response.data.data.userid;

                context.getDoctors();
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    getDoctors = () => {
        // Запрашиваем докторов

        let context = this;

        // https://cab.mdx39.ru/apiv2/doclist
        console.log('Токен получен: ' + this.token);
        console.log('ID пользователя: ' + this.userId);

        axios.get(this.url + 'doclist', {
            headers: {
                'Authorization': this.token
            }
        })
            .then(function (response) {
                console.log(response);
            })
            // .catch(function (error, response) {
            //     console.log(error);
            //     console.log(response);
            // })
            .catch(function (error) {
                console.log(error.response.status) // 401
                console.log(error.response.data.error) //Please Authenticate or whatever returned from server
                if (error.response.status == 401) {
                    //redirect to login
                }
            })
            // .then(function (el) {
            //     console.log(el);
            // });
    }
}