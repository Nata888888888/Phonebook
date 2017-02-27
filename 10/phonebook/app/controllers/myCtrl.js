angular.module('Controllers', ["taskService"]).controller('mainCtrl', mainCtrl)
mainCtrl.$inject = ["myService"];

function mainCtrl(myService) {
    this.show = false;
    this.list = myService.list;
    this.addNew = function() {
        this.show = true;
        // myService.addNew(name, surname, number);
    };
    this.saveNew = function(x, y, z) {
        // if (addNew) {
            this.list.push({
                name: x,
                surname: y,
                number: z
            });
            // if (change) {
            //     this.newname = this.list[index].name;
            //     this.newsurname = this.list[index].surname;
            //     this.newnumber = this.list[index].number;
            // }
        // }
        this.show = false;
        this.newname = "";
        this.newsurname = "";
        this.newnumber = "";
    };
    this.change = function(index) {
        this.show = true;
        this.newname = this.list[index].name;
        this.newsurname = this.list[index].surname;
        this.newnumber = this.list[index].number;
    };
    this.del = function(index) {
        this.list.splice(index, 1);
    };
    this.orderByMe = function(x) {
        this.myOrderBy = x;
    };
};
