angular.module('Controllers', ["taskService"]).controller('mainCtrl', mainCtrl)
mainCtrl.$inject = ["myService"];

function mainCtrl(myService) {
    var changeIndex;
    var isAdd = false;
    this.show = false;
    this.list = myService.list;
    this.addNew = function() {
        this.show = true;
        isAdd = true;
        // myService.addNew(name, surname, number);
    };
    this.saveNew = function(x, y, z) {
        if (isAdd == true) {
            this.list.push({
                name: x,
                surname: y,
                number: z
            });
            isAdd = false;
        } else {
            this.list[changeIndex].name = this.newname;
            this.list[changeIndex].surname = this.newsurname;
            this.list[changeIndex].number = this.newnumber;
        }

        this.show = false;
        this.newname = "";
        this.newsurname = "";
        this.newnumber = "";
    };
    this.change = function(index) {
        this.show = true;
        changeIndex = index;
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