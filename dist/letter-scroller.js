var letterScroller = (function($){

  var $output   = false;
  var writting  = false;
  var interval  = false;
  var textLines = [];

  var getWord = (function(){
    var next = 0;
    return function(){
      if(next > (textLines.length - 1)){
        next = 0;
      }
      var word = textLines[next];
      next++;
      return word;
    };
  })();

  var printWord = function(word, lettersTimer, clearTimer){
    writting = true;
    var nlines = word.length;
    var position = 0;
    var timer = setInterval(function(){
      var letter = word[position];
      if(letter){
        $output.append(letter);
        position++;
      }else{
        clearInterval(timer);
        eraseWord(clearTimer);
      }
    }, lettersTimer);
  }

  var eraseWord = function(clearTimer){
    setTimeout(function(){
      $output.html("");
      writting = false;
    }, clearTimer);
  }  
  
  var addWords = function(words){
    words.forEach(function(word){
      if(textLines.indexOf(word) == -1){
        textLines.push(word);
      }
    });
  };
  
  var setLocalInterval = function(wordsTimer, lettersTimer, clearTimer){
    if(interval){
      clearInterval(interval);
    }
    interval = setInterval(function(){
      if(!writting && textLines.length && $output){
        printWord(getWord(), lettersTimer, clearTimer);
      }
    }, wordsTimer);
  };
  
  var configure = function(render, words, timers){
    var times = {
      words:    timers && timers.words    ? timers.words    : 500,
      letters:  timers && timers.letters  ? timers.letters  : 200,
      clear:    timers && timers.clear    ? timers.clear    : 1000,
    };
    $output = $("#" + render);
    addWords(words || []);
    setLocalInterval(times.words, times.letters, times.clear);
  };
  
  var scroller = function(render, words, timers) {
    configure(render, words, timers);
  };
  scroller.prototype.addWords     = addWords;
  scroller.prototype.setInterval  = setInterval;
  
  return scroller;
})(jQuery);