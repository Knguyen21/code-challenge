function howManydays(month){
  var days;
  switch (days){
    case 2:
     days= 28;
     break;
    case 4:
    case 6:
    case 9:
    case 11:
     days= 30;
     break;
    default:
    days = 31;
  }
  console.log(days);
  return days;
}

howManydays(6s);
