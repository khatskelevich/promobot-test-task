import Vue from 'vue';

Vue.filter('currency', function(value, digits = 2, unit = '$'){

    if (isNaN(value) || value === Infinity)
        return 'Не число';

    return value.toFixed(digits) + ' ' + unit;
});