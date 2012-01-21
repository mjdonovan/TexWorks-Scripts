// TeXworksScript
// Title:  \,
// Description:  inserts \,
// Author:  Michael Donovan
// Version: 
// Date: 
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+RIGHT

var portion = TW.target.text;
if (TW.target.selection.length==0)
{
	var SELSTART = TW.target.selectionStart;
	var stringZ = "\\\\"
	var stringA = "\\,"
	var stringB = "\\ "
	var stringC = "\\quad "
	var stringD = "\\qquad "

	var Zstart =portion.lastIndexOf(stringZ,SELSTART)
	var Astart =portion.lastIndexOf(stringA,SELSTART)
	var Bstart =portion.lastIndexOf(stringB,SELSTART)
	var Cstart =portion.lastIndexOf(stringC,SELSTART)
	var Dstart =portion.lastIndexOf(stringD,SELSTART)
	var Zend =Zstart+stringZ.length;
	var Aend =Astart+stringA.length;
	var Bend =Bstart+stringB.length;
	var Cend =Cstart+stringC.length;
	var Dend =Dstart+stringD.length;

	if(Aend==SELSTART && Zend != SELSTART-1)
	{
		TW.target.selectRange(SELSTART-stringA.length,stringA.length);
		TW.target.insertText(stringB);
	}
	else if(Bend==SELSTART && Zend != SELSTART-1)
	{
		TW.target.selectRange(SELSTART-stringB.length,stringB.length);
		TW.target.insertText(stringC);
	}
	else if(Cend==SELSTART)
	{
		TW.target.selectRange(SELSTART-stringC.length,stringC.length);
		TW.target.insertText(stringD);
	}
	else 
	{
		TW.target.insertText(stringA);
	}
}
else
{
	null;
}

