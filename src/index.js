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
    if(str[1] != 0) {
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
                return 'forty ' + units(number % 10)
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
    } else {
        switch(str[0]) {
            case '2': {
                return 'twenty'
                break;
            }
            case '3': {
                return 'thirty'
                break;
            }
            case '4': {
                return 'forty'
                break;
            }
            case '5': {
                return 'fifty'
                break;
            }
            case '6': {
                return 'sixty'
                break;
            }
            case '7': {
                return 'seventy'
                break;
            }
            case '8': {
                return 'eighty'
                break;
            }
            case '9': {
                return 'ninety'
                break;
            }
        }
    }
}

module.exports = function toReadable (number) {
    let strTwo = number.toString();
    if (number >= 0 && number < 10){
        return units(number)
    }

    if (number > 9 && number < 20){
        return sec(number)
    }

    if(number >= 20 && number < 100) {
        return dozens(number)
    }

    if(number > 100 && strTwo[1] != 0 && strTwo[1] != 1 && strTwo[2] != 0) {
        return units(Math.floor(number / 100)) + ' hundred ' + dozens(number % 100) // работает 121, 234
    }

    if(number > 100 && strTwo[1] != 0 && strTwo[1] != 1 && strTwo[2] == 0) {
        return units(Math.floor(number / 100)) + ' hundred ' + dozens(number % 100) // работает(120,240,570), кроме 110, 210, 310
    }

    if(number > 100 && strTwo[1] == 1 && strTwo[2] == 0) {
        return units(Math.floor(number / 100)) + ' hundred ' + sec(number % 100)
    }

    if(number > 100 && strTwo[1] == 1 && strTwo[2] != 0) {
        return units(Math.floor(number / 100)) + ' hundred ' + sec(number % 100) // работает 119, 117, 115
    }

    if(number >= 100 && strTwo[1] == 0 && strTwo[2] == 0) {  //работает (100, 200, 300...)
        return units(number / 100) + ' hundred'
    }

    if(number >= 100 && strTwo[1] == 0 && strTwo[2] != 0) {     
        return units(Math.floor(number / 100)) + ' hundred ' + units(number % 10)    // работает (101, 102, 103...)
    }
}