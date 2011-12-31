// TeXworksScript
// Title:  \frac{}{}
// Description: inserts \frac{}{}
// Author:  Michael Donovan
// Version: 0.2
// Date: 2011-05-17
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+F, Alt+R
    
var textBlock =  TW.target.selection;

if (textBlock.length == 0)
{
  TW.target.insertText("\\frac{}{}");
  TW.target.selectRange(TW.target.selectionStart-3, 0)
}
if (textBlock.length != 0)
{
  var textBlock =  TW.target.selection;
  var putAtStart = "\\frac{";
  var putAtEnd = "}{}";
  var INSERTME = putAtStart + textBlock + putAtEnd;
  TW.target.insertText(INSERTME);
  TW.target.selectRange(TW.target.selectionStart-1, 0);
}