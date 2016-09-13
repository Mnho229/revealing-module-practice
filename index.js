//Two modules present in this practice run

var result = (function() {

    //cache current value
    var $curr_number = $("#result").html();

    function update(value) {
        $curr_number = value;
        $("#result").html(value);
    };

    function print() {
        console.log($curr_number);
    }

    function number_get() {
        return Number($curr_number);
    }

    return {
        print: print,
        update: update,
        number_get: number_get
    };

})();

var calculation = (function() {

    //cache current value
    var $field = $('input');
    var $submit = $('#submit');
    var curr_selection = '';

    //bind events
    $(".operator").on("click", _select);
    $submit.on("click", _compute);

    function _select() {
        $(".operator").removeClass("selected");
        $(this).addClass("selected");

        curr_selection = $(this).attr('id');
    }

    function _compute() {
        var computation;
        var operatee = Number($field.val());

        switch(curr_selection) 
        {
            case "add":
                computation = operatee + result.number_get();
                break;
            case "subtract":
                computation = result.number_get() - operatee;
                break;
            case "multiply":
                computation = result.number_get() * operatee;
                break;
            case "divide":
                computation = result.number_get() / operatee;
                break;
            case "exponential":
                computation = Math.pow(result.number_get(), operatee);
                break;
            default:
                console.log("Please select one of the boxes above");
                break;
        }

        $field.val("");
        if (curr_selection != '') {
            result.update(computation);
        }
    }

})();





