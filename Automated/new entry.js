// TeXworksScript
// Title:  new entry
// Description: Start a new entry
// Author:  Michael Donovan
// Version: 0.2
// Date: 2011-05-17
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+N,Alt+E,Alt+W


 var portion = TW.target.text;

 var Sstr = "%%% BEGIN NEW ENTRY FORMAT";
 var Estr = "%%% END NEW ENTRY FORMAT";

 var Spos = portion.indexOf(Sstr);
 var Epos = portion.indexOf(Estr);

if(Spos < Epos)
{
 Spos += Sstr.length;
 portion = portion.substr(Spos,Epos-Spos);

while (portion.indexOf('%')!=-1) {
     portion = portion.replace('%', '');
}
 
 if (portion.indexOf('\n')==0)
 {
   portion=portion.substr(1);
 }
   TW.target.insertText(portion); 
}