angular.module('taskService', []).factory("myService", myService)

function myService() {
    var list = [{
        name: 'Katya',
        surname: 'Korostenska',
        number: '0635550213'
    }, {
        name: 'Oleg',
        surname: 'Chernez',
        number: '0676497821'
    }, {
        name: "Rostyk",
        surname: 'Borovyk',
        number: '0932497415'
    }, {
        name: 'Olya',
        surname: 'Fuch',
        number: '0973485984'
    }, {
        name: 'Olya',
        surname: 'Sydor',
        number: '0639217359'
    }, {
        name: 'Dima',
        surname: 'Sulyk',
        number: '0961213915'
    }, {
        name: 'Vova',
        surname: 'Kos',
        number: '0687359218'
    }];

    function addnumber(name, surname, number) {
        list.push({
            name: name,
            surname: surname,
            number: number
        });
    }
    return {
        list: list,
        addnumber: addnumber
    }
}
