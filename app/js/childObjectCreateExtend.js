/**
 * Created by Josh on 4/20/2015.
 */
(function () {
    var childObjectCreate = function childObjectCreate(param1, param2, param3) {
        Parent.call(this, param1, param2, param3);
    };

    childObjectCreate.prototype = Object.create(Parent.prototype);
    childObjectCreate.prototype.constructor = childObjectCreate;

    // Deep copy override and new functions onto the Parent prototype via $.extend
    $.extend(childObjectCreate.prototype, {
        initialize: function () {
            $("#someLinkA").on("click", this.methodA.bind(this));
            $("#someLinkB").on("click", this.methodB.bind(this));
            $("#someLinkC").on("click", this.methodC.bind(this));
        },

        methodB: function () {
            // this.param2 works because of 'this' was bound to methodB in initialize
            console.log("methodB Override " + this.param3);
        },

        methodC: function () {
            // That = this can be used in place of bind
            console.log("methodC " + this.param3);
        }
    });

    factory.register("Parent", childObjectCreate);
})();