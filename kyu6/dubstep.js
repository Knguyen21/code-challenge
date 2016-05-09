// Polycarpus works as a DJ in the best Berland nightclub, and he often uses dubstep music in his performance.
// Recently, he has decided to take a couple of old songs and make dubstep remixes from them.
//
// Let's assume that a song consists of some number of words. To make the dubstep remix of this song, Polycarpus
// inserts a certain number of words "WUB" before the first word of the song (the number may be zero), after the
// last word (the number may be zero), and between words (at least one between any pair of neighbouring words), and
// then the boy glues together all the words, including "WUB", in one string and plays the song at the club.
//
// For example, a song with words "I AM X" can transform into a dubstep remix as "WUBWUBIWUBAMWUBWUBX" and cannot
// transform into "WUBWUBIAMWUBX".




function songDecoder(song){
  var i = 0;
  var str = [];
  for(var i; i< song.length; i++){
    if( song.substring(i, i+3) !== 'WUB'){
      str.push(song[i]);
    }
    else if( (song.substring(i, i+3) === 'WUB') && song.substring(i-3, i) !== 'WUB' && i !==0 ) {
     i +=2;
    str.push(" ");
    console.log(str);
    }
    else{
    i +=2;
    }
    console.log(i);
  }
  if(str[str.length -1] === " "){
    str.pop();
  }
  console.log(str);
  return str.join("");
}

// //best solution
// function songDecoder(song){
//   return song.replace(/(WUB)+/g," ").trim()
// }
//
//
// function songDecoder(song){
//   return song.split('WUB').filter(Boolean).join(' ');
// }
