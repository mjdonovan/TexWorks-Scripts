// TeXworksScript
// Title:  bigotimes
// Description:  Inserts a bigotimes
// Author:  Michael Donovan
// Version: 
// Date: 
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+Shift+O,Alt+*
    
TW.target.insertText("\\\u1F42bigotimes_{\u06F7\u25BA}^{\u06F8}");
TW.target.selectRange(TW.target.selectionStart-19, 1)