// TeXworksScript
// Title:  Find Longest Word
// Description: Highlights the Longest Word
// Author:  Michael Donovan
// Version: 0.2
// Date: 2011-05-17
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+Shift+W
    
var portion = TW.target.text;
var myOldString = portion;
var word = " ";
var i=0;


myOldString = myOldString.replace(/(\r\n|\n|\r)/gm," ");
//myOldString = myOldString.replace(/([\],\),\},\,,\:,\;,\.])([\[,\(,\{])/g,"$1 $2"); //might screw it up, drop if not working. (!!!)
myOldString = myOldString.replace(/\]\[/g,"] [");
myOldString = myOldString.replace(/\]\{/g,"] {");
myOldString = myOldString.replace(/\]\(/g,"] (");
myOldString = myOldString.replace(/\)\[/g,") [");
myOldString = myOldString.replace(/\)\{/g,") {");
myOldString = myOldString.replace(/\)\(/g,") (");
myOldString = myOldString.replace(/\}\[/g,"} [");
myOldString = myOldString.replace(/\}\{/g,"} {");
myOldString = myOldString.replace(/\}\(/g,"} (");
myOldString = myOldString.replace(/\|([^\]\}\)])/g,"| $1");
myOldString = myOldString.replace(/\-([A-Z,\>])/gi,"- $1");
myOldString = myOldString.replace(/,\\/g,", \\");
myOldString = myOldString.replace(/\.\\/g,". \\");
myOldString = myOldString.replace(/\;\\/g,"; \\");
myOldString = myOldString.replace(/\:\\/g,": \\");


//TW.target.insertText(myOldString);

var stringArray=new Array();
    stringArray= myOldString.split(" ");

for(i=0;i<stringArray.length;i++){
if(i==0){
word = stringArray[0];
}
    if (word.length<stringArray[i].length){
        word = stringArray[i];
    }
}
i=portion.indexOf(word);
if(i>-1){
    TW.target.selectRange(i,word.length);
}