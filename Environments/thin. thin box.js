// TeXworksScript
// Title:  \makebox[0cm][l]{\,...}
// Description: inserts \makebox[0cm][l]{\,...}
// Author:  Michael Donovan
// Version: 
// Date: 
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+T,Alt+H,Alt+I,Alt+N
    
TW.target.insertText("\\makebox[0cm][l]{\\,}");
TW.target.selectRange(TW.target.selectionStart-1, 0)
