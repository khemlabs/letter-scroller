# README #

Letter Scroller

### What is this repository for? ###

A lightweight, easy to use Javascript words letter by letter injector

### How do I get set up? ###

Install letter by letter scroller

```
#!bash
bower install letter-scroller --save
```

Include script

```
<script src="./bower_components/jquery/dist/jquery.min.js"></script>
<script src="./bower_components/dist/letter-scroller.min.js"></script>
```

Use it

```
var scroller = new letterScroller('id-render', ["my word"]);
```

### Online Documentation ###

## Configure ##

Initialize the library

Params
* id: HTML container id
* words: Array of words to scroll
* timers: {words: appearance interval of words, letters: appearance interval of letters, clean: clean interval}

## addWords ##

Add new words to display

* words: Array of words to scroll

## setInterval ##

Change interval values

* wordsTimer: appearance interval of words
* lettersTimer: appearance interval of letters
* clearTimer: clean interval

### Who do I talk to? ###

* elgambet
