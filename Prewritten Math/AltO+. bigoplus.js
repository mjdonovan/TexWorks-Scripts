// TeXworksScript
// Title:  bigoplus
// Description:  Inserts a bigoplus
// Author:  Michael Donovan
// Version: 
// Date: 
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+Shift+O,Alt++
    
TW.target.insertText("\\\u1F42bigoplus_{\u06F7\u25BA}^{\u06F8}");
TW.target.selectRange(TW.target.selectionStart-18, 1)