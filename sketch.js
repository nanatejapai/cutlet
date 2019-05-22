var foo= new p5.Speech();
var myRec = new p5.SpeechRec('en-US','it-IT','ja-JP','fr-FR');
var cote1;
var cote2;
var cote3;
var cote4;
var eat;


// new P5.SpeechRec object
//myRec.interimResults = true; // allow partial recognition (fast
 myRec.continuous = true; // do continuous recognition
	
function setup() { 
  createCanvas(windowWidth, windowHeight);
  background('black');
  
		myVoice = new p5.Speech();
		// textSize(32);
		// textAlign(CENTER);
		// text("cutlet", width/2, height/2);
        foo.setLang('fr-FR');
        foo.speak('I say côtelette you say');
  
  

        // foo.speak('côtelette');
        // foo.speak('côtelette');
  
        myRec.onResult = parseResult;
		myRec.start(); // start engine
    cote1 = createVideo('vdo/cote.mp4');
  cote1.loop();
  cote1.position(0,0);
  cote1.style('width', '100%');
  cote1.style('height', '100%');
  cote1.hide();
  
    cote2 = createVideo('vdo/coto.mp4');
        cote2.loop();
        cote2.position(0,0);
        cote2.style('width', '100%');
        cote2.style('height', '100%');
        cote2.hide();
  
cote3 = createVideo('vdo/katsu.mp4');
        cote3.loop();
        cote3.position(0,0);
        cote3.style('width', '100%');
        cote3.style('height', '100%');
        cote3.hide();
  
cote4 = createVideo('vdo/cutlet.mp4');
cote4.loop();
        cote4.position(0,0);
        cote4.style('width', '100%');
        cote4.style('height', '100%');
        cote4.hide();
  
eat = createVideo('vdo/eat.mp4');
  eat.position(0,0);
        eat.style('width', '100%');
        eat.style('height', '100%');
        eat.hide();
        eat.stop();
        eat.onended(sayDone);
  
  
} 


function draw() { 
  // image(cote1,0,0,100,100);
  cote1.show();

  
  // noLoop();
}

function parseResult()
	{
		
	
    var mostrecentword = myRec.resultString.split(' ').pop();

      if(mostrecentword.indexOf("Quizlet")!==-1) {
        cote1.hide();
        cote2.show();
         // image(cote2,0,0,100,100);
        foo.setLang('it-IT')
        foo.speak('cotoletta');}
      
       if(mostrecentword.indexOf("Colette")!==-1) {
        cote1.hide();
        cote2.show();
         // image(cote2,0,0,100,100);
        foo.setLang('it-IT')
        foo.speak('cotoletta');}
      
      if(mostrecentword.indexOf("Kool-Aid")!==-1) {
        cote1.hide();
        cote2.show();
         // image(cote2,0,0,100,100);
        foo.setLang('it-IT')
        foo.speak('cotoletta');}
      
      if(mostrecentword.indexOf("fever.")!==-1) {
        cote1.hide();
        cote2.show();
         // image(cote2,0,0,100,100);
        foo.setLang('it-IT')
        foo.speak('cotoletta');}
      
      if(mostrecentword.indexOf("letter")!==-1) {
        cote1.hide();
        cote2.show();
         // image(cote2,0,0,100,100);
        foo.setLang('it-IT')
        foo.speak('cotoletta');} 
      if(mostrecentword.indexOf("1")!==-1) {
        cote1.hide();
        cote2.show();
         // image(cote2,0,0,100,100);
        foo.setLang('it-IT')
        foo.speak('cotoletta');} 
        
      
      if(mostrecentword.indexOf("collector")!==-1) {
        cote1.hide();
        cote2.show();
         // image(cote2,0,0,100,100);
        foo.setLang('it-IT')
        foo.speak('cotoletta');}
      
      if(mostrecentword.indexOf("Atlanta")!==-1) {
        cote1.hide();
        cote2.show();
         // image(cote2,0,0,100,100);
        foo.setLang('it-IT')
        foo.speak('cotoletta');}
      
      if(mostrecentword.indexOf("protector")!==-1) {
        cote1.hide();
        cote2.show();
         // image(cote2,0,0,100,100);
        foo.setLang('it-IT')
        foo.speak('cotoletta');}
      
      if(mostrecentword.indexOf("Kinecta")!==-1) {
        cote1.hide();
        cote2.show();
         // image(cote2,0,0,100,100);
        foo.setLang('it-IT')
        foo.speak('cotoletta');}
      
    if(mostrecentword.indexOf("France")!==-1) {
        cote1.hide();
        cote2.show();
         // image(cote2,0,0,100,100);
        foo.setLang('it-IT')
        foo.speak('cotoletta');}
      

    if(mostrecentword.indexOf("cotoletta")!==-1) {
      cote2.hide();
      cote3.show();
      // background(192, 255, 192);
      foo.setLang('ja-JP')
      foo.speak('カツ');}
      
         if(mostrecentword.indexOf("class")!==-1) {
      cote2.hide();
      cote3.show();
      // background(192, 255, 192);
      foo.setLang('ja-JP')
      foo.speak('カツ');}
      
       if(mostrecentword.indexOf("2")!==-1) {
      cote2.hide();
      cote3.show();
      // background(192, 255, 192);
      foo.setLang('ja-JP')
      foo.speak('カツ');}
      
        if(mostrecentword.indexOf("polenta")!==-1) {
      cote2.hide();
      cote3.show();
      // background(192, 255, 192);
      foo.setLang('ja-JP')
      foo.speak('カツ');}
      
      if(mostrecentword.indexOf("Athleta")!==-1) {
      cote2.hide();
      cote3.show();
      // background(192, 255, 192);
      foo.setLang('ja-JP')
      foo.speak('カツ');}
      
      if(mostrecentword.indexOf("Italy")!==-1) {
      cote2.hide();
      cote3.show();
      foo.setLang('ja-JP')
      foo.speak('カツ');}
      
       if(mostrecentword.indexOf("Bellator")!==-1) {
      cote2.hide();
      cote3.show();
      foo.setLang('ja-JP')
      foo.speak('カツ');}
 if(mostrecentword.indexOf("calculator")!==-1) {
      cote2.hide();
      cote3.show();
      foo.setLang('ja-JP')
      foo.speak('カツ');}
       if(mostrecentword.indexOf("paleta")!==-1) {
      cote2.hide();
      cote3.show();
      foo.setLang('ja-JP')
      foo.speak('カツ');}
      if(mostrecentword.indexOf("later")!==-1) {
      cote2.hide();
      cote3.show();
      foo.setLang('ja-JP')
      foo.speak('カツ');}
      
  if(mostrecentword.indexOf("Katsu")!==-1) {
        cote3.hide();
        cote4.show();
      foo.setLang('en-US')
      foo.speak('cutlet');}
      
       if(mostrecentword.indexOf("cats")!==-1) {
        cote3.hide();
        cote4.show();
      foo.setLang('en-US')
      foo.speak('cutlet');}
      
  if(mostrecentword.indexOf("Pepsi")!==-1) {
        cote3.hide();
        cote4.show();
      foo.setLang('en-US')
      foo.speak('cutlet');}
      
   if(mostrecentword.indexOf("Tatsu")!==-1) {
        cote3.hide();
        cote4.show();
      foo.setLang('en-US')
      foo.speak('cutlet');}
      
        if(mostrecentword.indexOf("Japan")!==-1) {
        cote3.hide();
        cote4.show();
      foo.setLang('en-US')
      foo.speak('cutlet');}
      
      if(mostrecentword.indexOf("cutsie")!==-1) {
        cote3.hide();
        cote4.show();
      foo.setLang('en-US')
      foo.speak('cutlet');}
      
      // if(mostrecentword.indexOf("it")!==-1) {
      //   cote3.hide();
      //   cote4.show();
      // foo.setLang('en-US')
      // foo.speak('cutlet');}
      
      if(mostrecentword.indexOf("3")!==-1) {
        cote3.hide();
        cote4.show();
      foo.setLang('en-US')
      foo.speak('cutlet');}
      
      if(mostrecentword.indexOf("next")!==-1) {
window.open("https://editor.p5js.org/nanatejapai/present/ReO-18pKe");     
  }
      
  if(mostrecentword.indexOf("bite")!==-1) {
        cote4.hide();
        eat.show();
        eat.play();
        
  }
      
      
  console.log(mostrecentword);

  }


function sayDone(elt) { 
  
  eat.hide();
  cote1.show();
  noLoop();
  myVoice = new p5.Speech();
  foo.setLang('fr-FR');
  foo.speak('I say côtelette you say');
}
    

      