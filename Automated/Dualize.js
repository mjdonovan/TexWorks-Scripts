// TeXworksScript
// Title:  dualize diagram
// Description: Highlights the next arrow to reverse, then reverses it.
// Author:  Michael Donovan
// Version: 0.2
// Date: 2011-05-17
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+Shift+Ctrl+R
    
var SELECTION = TW.target.selection;
var selStart  = TW.target.selectionStart;

var wholetext = TW.target.text;

var portion = TW.target.text.substr(TW.target.selectionStart);
if (portion.length>500){
 portion =portion.substr(0,500);
}

//TW.target.insertText(portion.length);



var firstOne = portion.search(/\[[u,d,l,r]+\]/);


if (firstOne>-1)
{
    portion = portion.substr(firstOne);
    var LastBracket = portion.search(/\]/);
    portion = portion.substr(0,LastBracket+1);

    if (portion == SELECTION)
    {
//        TW.target.insertText("portion is selection");
        var AFTER = wholetext.substr(TW.target.selectionStart+portion.length)
        if (AFTER.length>3)
        {
            AFTER= AFTER.substr(0,4);
            var alreadyInverted=AFTER.search(/\;\[\]/);
            if (alreadyInverted <0)
            {
                TW.target.selectRange(TW.target.selectionStart+portion.length,0);
                TW.target.insertText(";[]");
                if (AFTER[0]=="_")
                {
                    TW.target.selectRange(TW.target.selectionStart,1);
                    TW.target.insertText("^");
                }
                if (AFTER[0]=="^")
                {
                    TW.target.selectRange(TW.target.selectionStart,1);
                    TW.target.insertText("_");
                }
            }
            if (alreadyInverted == 0)
            {
                TW.target.selectRange(TW.target.selectionStart+portion.length,3);
                TW.target.insertText("");
                if (AFTER[3]=="_")
                {
                    TW.target.selectRange(TW.target.selectionStart,1);
                    TW.target.insertText("^");
                }
                if (AFTER[3]=="^")
                {
                    TW.target.selectRange(TW.target.selectionStart,1);
                    TW.target.insertText("_");
                }
            }
        }
    }
    else
    {
         TW.target.selectRange(TW.target.selectionStart+firstOne, portion.length);
    }

}
