/**
 * Created by Josh on 4/20/2015.
 */
(function () {
    // Yes this is global, shh...
    window.ParentObjectCreateExtend = function ParentObjectCreateExtend(param1, param2, param3) {
        this.param1 = param1;
        this.param2 = param2;
        this.param3 = param3;
    };

    ParentObjectCreateExtend.prototype = {
        initialize: function () {
            document.querySelector("#someLinkA").addEventListener("click", this.methodA);
            document.querySelector("#someLinkB").addEventListener("click", this.methodB);
            //$("#someLinkA").on("click", this.methodA);
            //$("#someLinkB").on("click", this.methodB);
        },

        methodA: function () {
            console.log("Parent methodA " + this.param1);
        },

        methodB: function () {
            console.log("Parent methodB " + this.param1);
        }
    };

    Factory.register("Parent", ParentObjectCreateExtend);
})();