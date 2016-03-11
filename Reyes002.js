function getHammingDistance(str1,str2)
{
    if((str1.length != str2.length) || str1.length == 0 || str2.length == 0) // Checks if string lengths are equal and both are greater than 0.
        return "Error! Strings are not equal! or String Length is 0"
    else
        {
           var hammingDistance = 0; //variable for Hamming Distance
           for(var i = 0; i < str1.length; i++)//iterates through the string 1
           {
               if(str1[i] != str2[i])//if each character is not the same, increases hammingDistance by 1
                    hammingDistance++;
           }
           
           return parseInt(hammingDistance);//returns the Hamming Distance converted to integer.
        }
}

function countSubstrPattern(original,pattern)
{
    var substrPattern = 0;//variable for SubstrPattern
    for(var i = 0; i < original.length; i++)//iterates through the original string
    {
        if(original[i] == pattern[0])//if the current character of the original string is equal to the first character of the pattern
        {
            var j = 0;
            for(;j < pattern.length; j++)//iterates through the pattern
            {
                if(original[i + j] == pattern[j])//if the current character of the original string is equal to the current character of the pattern string
                    continue;
                else
                    break;
            }
            if(j == pattern.length)// if it matches all the characters in the pattern
                substrPattern++;
        } 
    }
    return parseInt(substrPattern);//returns the substrPattern converted to int
}

function isValidString(str,alphabet)
{
    if(str.length == 0)//if string is empty
        return Boolean(false);//string is not valid
        
    for(var i = 0; i < str.length; i++)//iterates through the string
    {
        if(alphabet.search(str[i]) == -1)//if the current character is not in the alphabet
            return Boolean(false)//string is not valid
    }
    return Boolean(true);//string is valid
}

function getSkew(str,n)
{
    var q = str.length;//q will contain the string length
    n = parseInt(n);//parses n to Integer
    if (isNaN(parseInt(n)))//if n is not a number
        return "n is Not a Number"
    if(parseInt(n) <= 0)//if n is less than or equal to 0
        return "n is less than or equal to 0"
    if(q < n)//if str lengh is less than n
        return "str length is less than n"
     
    var G = 0;//variable for G's
    var C = 0;//variable for C's
    for(var i = 0; i < n; i++)//counts every G's and C's in the string from index 1 to n
    {
        if(str[i] == 'G')  
            G++;
        if(str[i] == 'C')  
            C++;
    }
    
    var skew = G-C;//skew is G's minus C's
    
    return parseInt(skew);//parses skew to integer and returns it
}

function getMaxSkewN(str,n)
{
   var q = str.length;//q will contain the string length
    n = parseInt(n);//parses n to Integer
    if (isNaN(parseInt(n)))//if n is not a number
        return "n is Not a Number"
    if(parseInt(n) <= 0)//if n is less than or equal to 0
        return "n is less than or equal to 0"
    if(q < n)//if str lengh is less than n
        return "str length is less than n"
    
   var max = getSkew(str,1);//gets the max value initially from the skew at index 1
    
   for(var j = 0; j < n; j++)//iterates from index 1 to index n and gets the max skew
   {
       var temp = getSkew(str,j + 1);
        if(temp > max)
            max = temp;
   }
   
   return parseInt(max);//parses the max to int and returns it
    
}

function getMinSkewN(str,n)
{
    var q = str.length;//q will contain the string length
    n = parseInt(n);//parses n to Integer
    if (isNaN(parseInt(n)))//if n is not a number
        return "n is Not a Number"
    if(parseInt(n) <= 0)//if n is less than or equal to 0
        return "n is less than or equal to 0"
    if(q < n)//if str lengh is less than n
        return "str length is less than n"
    
   var min = getSkew(str,1);//gets the min value initially from the skew at index 1
    
   for(var j = 0; j < n; j++)//iterates from index 1 to index n and gets the max skew
   {
       var temp = getSkew(str,j + 1);
        if(temp < min)
            min = temp;
   }
   
   return parseInt(min);//parses the min and returns it
    
}

