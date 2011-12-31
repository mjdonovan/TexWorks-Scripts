// TeXworksScript
// Title:  commuting square
// Description: inserts a commuting square
// Author:  Michael Donovan
// Version: 0.2
// Date: 2011-05-17
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+S, Alt+Q, Alt+U
    
TW.target.insertText("\\[\\xymatrix{\n\\ar[r]\\ar[d]&\n\\ar[d]\\\\\n\\ar[r]&\n}\\]\n");
TW.target.selectRange(TW.target.selectionStart-35,0)
