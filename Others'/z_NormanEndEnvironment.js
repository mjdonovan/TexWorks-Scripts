// TeXworksScript
// Title:  Dropdown Environment
// Description: Completes a \begin{environment}
// Author:  Paul Norman
// Version: 0.2
// Date: 2011-05-17
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+J, Alt+J


// If there is only one available candidate it is inserted otherwise a dropdown shows the choices, with the average likely one showing, complex document structuring can muck this up, and so the choice through the dropdown

// Need document structure to be clean, each new environment starting on a new line 

// All this comes of not drinking enough coffee.             
             
  eval(TW.app.getGlobal("helper_twPan")); //  Comment if NOT Needed - This includes PhpJs ($P), twConst, msgBox, twPan ($tw), string.toTitleCase() 

 function getEnvironmentName(list)
        {
   
        test = new RegExp("\{(.*.)\}");     
        
          for(x in list)
            {             // drop the regular expressions this is possibly cleaner
             var start = list[x].indexOf("{");
             var end  = list[x].indexOf("}");
            
             list[x] = list[x].substr(start +1, end - (start + 1))
                          
             }             
        return list;
         }

 var  portion = TW.target.text;
 var beginDoc =  "\\begin{document}";  
 var chooseFrom = []; 
 
      portion = portion.substr(portion.indexOf(beginDoc) + beginDoc.length,  
      TW.target.selectionStart - ( portion.indexOf(beginDoc) + beginDoc.length));
      
 var  begins = portion.match(/\\begi.*{.*}/g);
 var    ends = portion.match(/\\end{(.*)}/g);   
 
  begins =   getEnvironmentName(begins);
  ends =   getEnvironmentName(ends);
    

     if (begins != null)
     {  
      for (I = 0; I <  begins.length ; I++)
         {
           
          if (ends != null)        
           {
            for (J = 0;  J < ends.length ; J++)
              {
            //  twPan.alert(">" +begins[I] + "< >" + ends[J] + "<");
            
               if (begins[I] == ends[J] && begins[I] != "" )
                 {
                   ends[J]   = "";
                   begins[I] = "";
                   
                    break;
                  }              
               }
            }  
          }
           
         if (begins != null) 
         {                  
          for (I = 0; I < begins.length; I++)
             {
              if ( begins[I]  != "")
               {
               
            chooseFrom.push(begins[I]);
            
                }    
             }  
          }
     }// /End. if (begins != null)
     
        if (chooseFrom.length == 1)
          {
          var thisEnd = chooseFrom[0];
           }
        else
          {
            if (chooseFrom.length > 0)
             {
               var thisEnd = TW.getItem(null, "Please Choose" , 
                       "Use Up and Down Arrows, And Enter", chooseFrom , chooseFrom.length -1); 
                        // in certain nestings it would be better to have  chooseFrom.length -2
              }
          }
           if (thisEnd != undefined)
             {
               TW.target.insertText("\\end{" + thisEnd + "}");
              } 
     null;
		 
/*
 Dual licensed under the

GPL (http://www.gnu.org/licenses/old-licenses/gpl-2.0.html)
http://www.gnu.org/licenses/old-licenses/gpl-2.0.html

Copyright (c) 2010,2011 Paul A Norman and others in their own right


This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.
This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.

MIT (http://www.opensource.org/licenses/mit-license.php)

Copyright (c) 2010,2011 Paul A Norman and others in their own right

 Permission is hereby granted, free of charge, to any person obtaining a
 copy of this software and associated documentation files (the
 "Software"), to deal in the Software without restriction, including
 without limitation the rights to use, copy, modify, merge, publish,
 distribute, sublicense, and/or sell copies of the Software, and to
 permit persons to whom the Software is furnished to do so, subject to
 the following conditions:

 The above copyright notice and this permission notice shall be included
 in all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 IN NO EVENT SHALL PAUL ANTHONY NORMAN BE LIABLE FOR ANY CLAIM, DAMAGES
 OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 OTHER DEALINGS IN EITHER THE SOFTWARE OR DOCUMENTATION.

*/		 