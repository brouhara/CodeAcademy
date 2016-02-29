/*jshint multistr:true */

var text = "ipsum lorel et blasphamus plagumus";
var myName = "Julia Ceasure";
var hits = [];

for (var x = 0; x < text.length; x++)
{
    //Check for matching letter
    if ( text[x] === myName[0] )
    {
        // Its a Match!
        console.log("First letter matches!"); 

        // Check for more matching Characters!
        
        // i = currentPos, i < currentPos + namelength, i++
        for( var i = x; i < (x + myName.length); i++) 
        {
            
            hits.push( text[i] );
                            
            //Check for Matching Characters!        
            if( text[i] === myName[i] )
            {
                // Add Matching Characters to the new Array.
                hits.push( text[i] );
            }
              
        }
        
    }
    
    
}