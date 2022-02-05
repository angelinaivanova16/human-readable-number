function units (number) {
    switch(number) {
        case 1: {
            return 'one'
            break;
        }
        case 2: {
            return 'two'
            break;
        }
        case 3: {
            return 'three'
            break;
        }
        case 4: {
            return 'four'
            break;
        }
        case 5: {
            return 'five'
            break;
        }
        case 6: {
            return 'six'
            break;
        }
        case 7: {
            return 'seven'
            break;
        }
        case 8: {
            return 'eight'
            break;
        }
        case 9: {
            return 'nine'
            break;
        }
        case 0: {
            return 'zero'
            break;
        }
          
    }
}


function sec (number) {
    switch(number) {
        case 11: {
            return 'eleven'
            break;
        }
        case 12: {
            return 'twelve'
            break;
        }
        case 13: {
            return 'thirteen'
            break;
        }
        case 14: {
            return 'fourteen'
            break;
        }
        case 15: {
            return 'fifteen'
            break;
        }
        case 16: {
            return 'sixteen'
            break;
        }
        case 17: {
            return 'seventeen'
            break;
        }
        case 18: {
            return 'eighteen'
            break;
        }
        case 19: {
            return 'nineteen'
            break;
        }
        case 10: {
            return 'ten'
            break;
        }
    }
}


function dozens(number) {
    let str = number.toString();
        switch(str[0]) {
            case '2': {
                return 'twenty ' + units(number % 10) 
                break;
            }
            case '3': {
                return 'thirty ' + units(number % 10)
                break;
            }
            case '4': {
                return 'fourty ' + units(number % 10)
                break;
            }
            case '5': {
                return 'fifty ' + units(number % 10)
                break;
            }
            case '6': {
                return 'sixty ' + units(number % 10)
                break;
            }
            case '7': {
                return 'seventy ' + units(number % 10)
                break;
            }
            case '8': {
                return 'eighty ' + units(number % 10)
                break;
            }
            case '9': {
                return 'ninety ' + units(number % 10) 
                break;
            }
            case '0': {
                return units(number % 10) 
                break;
            }
        }
}




module.exports = function toReadable (number) {
    if (number >= 0 && number < 10){
        return units(number)
    }

    if (number > 9 && number < 20){
        return sec(number)
    }

    if(number >= 20 && number < 100) {
        return dozens(number)
    }

    if(number >= 100) {
        return units(Math.floor(number / 100)) + ' hundred ' + dozens(number % 100)
    }
}


