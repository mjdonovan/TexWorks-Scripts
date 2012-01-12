// TeXworksScript
// Title:  Short exact sequence
// Description: inserts a short exact sequence
// Author:  Michael Donovan
// Version: 0.2
// Date: 2011-05-17
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+S, Alt+E, Alt+S
    
TW.target.insertText("\\[\\xymatrix{\n0\\ar[r]&\n\u25D9\\ar[r]&\n\u25D9\\ar[r]&\n\u25D9\\ar[r]&\n0\n}\\]\n");
TW.target.selectRange(TW.target.selectionStart-33, 1)
