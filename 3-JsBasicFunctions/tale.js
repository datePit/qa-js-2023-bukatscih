//////////////////////////////////
// First task
//////////////////////////////////

/* 
//////////////
//__switch
//////////////

let kolobok = function (persName) {
 switch(persName) {
    case 'дедушка': return 'Я от дедушки ушёл';
    break;
    case 'лиса': return 'Меня съели';
    break;
    case 'заяц': return 'Не ясно какой текст выводить с зайцем';
    break;
    default: return 'не придумывай, нет таких вариантов';
 }
}
 */



///////////////
//__if
//////////////
let kolobok = (persName) => {
    if (persName == 'дедушка') {
        return 'Я от дедушки ушёл';
    } else if (persName ==  'лиса') {
        return 'Меня съели';
    } else if (persName ==  'заяц') {
        return 'Не ясно какой текст выводить с зайцем';
    } else {
        return 'не придумывай, нет таких вариантов';
    }
}


//kolobok('дедушка');
console.log(kolobok('толян'));



/* 
//////////////////////////////////
// Second task
//////////////////////////////////
let newYear = (nameOfPers) => {
    if (nameOfPers == 'Дед Мороз' || nameOfPers == 'Снегурочка') {
        return `${nameOfPers}! ${nameOfPers}! ${nameOfPers}!`;
    } else {
        return `не придумывай, нет таких вариантов`
    }
}

//console.log(newYear('толян'));

 */
