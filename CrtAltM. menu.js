// TeXworksScript
// Title:  Pause. Show menu
// Description: Shows the menu, highlighted
// Author:  Michael Donovan
// Version: 0.2
// Date: 2011-05-17
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Ctrl+Alt+Shift+M
  
var menutext=
"\n-----------MENU STARTS HERE-----------\nENVIRONMENTS:\n1:    proof         6:    definition    \n2:    proposition   7:    lemma         \n3:    theorem       8:    itemise       \n4:    corollary     9:    enumerate     \n5:    example       0:    alignat       \nclai: claim         shad: shaded\nfn:   footnote      ss:   subsection\npara: paragraph     SS:   subsubsection\n\nIN MATH MODE:\nsum:  Sum           prod: product\ncopr: coproduct     +:    direct sum\nsm/SM:smash         we/WE:wedge\nH:    (co)Homology  pi:   homotopy\nca:   cases         fr:   fraction\nto:   rightarrow    der:  partial deriv\nF3:   textup\\,      F4:   mathsf\nBifunctors:   ext, hom, ten, Tor\nAbbrevs:      inf, inv, ld, cd, sph, op\nDecoration:   uparr, dnarr, ul, ol, wt\n\nF BUTTONS:\nF1:  $$     F2:  \\[\\]   Pause: {}\nF10: \\{\\}   F11: []     F12: ()\n\nBUILDERS:\nF5: Begin and End   CtrAlt+P: pmatrix\nCtrAlt+X: xymatrix  Insert:   xyarrow    \n\nMATH or TEXT:\nFonts:      bf, up, em, sf, it, sc, red\nSpacing:    ->, ind, noin, thin, rais, MASH\n\nABBREVIATIONS IN TEXT:\nAbbrev: resp, ie, aka, for, i1, icat\n------------MENU ENDS HERE------------\n"

var selec = TW.target.selection;
var SCUR = TW.target.selectionStart;
var menusearch = TW.target.text.indexOf(menutext);

if (selec.length==0)
{
	if (menusearch==-1)
	{
		TW.target.insertText(menutext);
		TW.target.selectRange(TW.target.selectionStart-1, 0)
		TW.target.selectRange(TW.target.selectionStart+1-menutext.length, 1)
		TW.target.selectRange(TW.target.selectionStart, 0)
	}
	else
	{
		TW.target.selectRange(menusearch,menutext.length)
		TW.target.insertText("");
	}
}
else
{
	null;
}

