// TeXworksScript
// Title:  Pause. Show menu
// Description: Shows the menu, highlighted
// Author:  Michael Donovan
// Version: 0.2
// Date: 2011-05-17
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+M
  


TW.target.insertText("1:    proof         2:    proposition   3:    theorem       4:    corollary\n5:    example       6:    definition    7:    lemma         ss:   subsection\n8:    itemise       9:    enumerate     0:    alignat       xy:   xymatrix\n$:    $...$         \\[:     \\[\\]        {:      {}          ~:    \\widetilde{}\nbf:   \\textbf{}     up:   \\textup{}     bb:   \\mathbb{}     sf:   \\mathsf{}\nem:   \\emph{}       it:   \\textit{}     resp: (resp.\\ ...)\nsimp: simplicial    adj:  Adjunction    ca:   cases         beg:  \\begin{}\n(:    ()  ---  may be any of (,[,\\{,|,\\|,<; add Ctrl for \\left(\\right)\nF1:  $$    F2:  \\[\\]    F3:  {}    F4:  ()    F5:  []    F6:  \\{\\}\nSES, LES, SQU, LADD, TRI\n");
//TW.target.insertText("1.    proof         2.    proposition   3.    theorem       4.    corollary\n5.    example       6.    definition    7.    claim         8.    itemise\n9.    enumerate     0.    alignat\nXY.   xymatrix      SIMP. simplicial object                 SS.   subsection");
//TW.target.insertText("1.    proof         2.    proposition   3.    theorem       4.    corollary\n5.    example       6.    definition    7.    claim         8.    itemise\n9.    enumerate     0.    alignat\nXY.   xymatrix      SIMP. simplicial object                 SS.   subsection");
TW.target.selectRange(TW.target.selectionStart, -680)
