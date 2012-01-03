// TeXworksScript
// Title:  Triangle
// Description: inserts a triangle
// Author:  Michael Donovan
// Version: 0.2
// Date: 2011-05-17
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+T, Alt+R, Alt+I
    
TW.target.insertText("\\[\\xymatrix{\nA\\ar[r]\\ar[dr]&B\\ar[d]\\\\\n&C\n}\\]\n");
TW.target.selectRange(TW.target.selectionStart-32, 1)
