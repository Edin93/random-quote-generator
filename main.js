var tab = [
{
    "quote": "Don't cry because it's over, smile because it happened.",
    "name": "Dr.Suess"
},
{
    "quote": "Be yourself: everyone else is already taken.",
    "name": "Oscar Wilde"
},
{
    "quote": "So many books, so little time.",
    "name": "Frank Zappa"
},
{
    "quote": "You only live once, but if you do it right, once is enough.",
    "name": "Mae West"
},
{
    "quote": "A room without books is like a body without soul.",
    "name": "Marcus Tullius Cicero"
},
{
    "quote": "Don’t walk in front of me… I may not follow. Don’t walk behind me… I may not lead. Walk beside me… just be my friend",
    "name": "Albert Camus"
},
{
    "quote": "Without music, life would be a mistake.",
    "name": "Friedrich Nietzsche"
}
];

var btnNext = document.querySelector('.next');
var btnTweet = document.querySelector('.tweet');
var l = tab.length;

function change(){
    var x = Math.floor(Math.random()*l);
    
    document.querySelector(".quote-container").innerHTML = "&ldquo; " +  tab[x].quote;
    document.querySelector(".quote-by").innerHTML =  " - " + tab[x].name;
};

function share(){
    var q = document.querySelector(".quote-container");
    var s = document.querySelector(".quote-by");
    var thequote = q.innerHTML + s.innerHTML;
    window.open('https://twitter.com/intent/tweet?text='+ thequote);
};

btnNext.onclick = change;
btnTweet.onclick = share;