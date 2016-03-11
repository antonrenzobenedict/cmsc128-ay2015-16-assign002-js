function getHammingDistance(str1,str2)
{
    if((str1.length != str2.length) || str1.length == 0 || str2.length == 0)
        return "Error! Strings are not equal! or String Length is 0"
    else
        {
           var hammingDistance = 0;
           for(var i = 0; i < str1.length; i++)
           {
               if(str1[i] != str2[i])
                    hammingDistance++;
           }
           
           return parseInt(hammingDistance);
        }
}

function countSubstrPattern(original,pattern)
{
    var substrPattern = 0;
    for(var i = 0; i < original.length; i++)
    {
        if(original[i] == pattern[0])
        {
            var j = 0;
            for(;j < pattern.length; j++)
            {
                if(original[i + j] == pattern[j])
                    continue;
                else
                    break;
                
                
            }
            if(j == pattern.length)
                substrPattern++;
        } 
    }
    return parseInt(substrPattern);    
}

function isValidString(str,alphabet)
{
    for(var i = 0; i < str.length; i++)
    {
        if(alphabet.search(str[i]) == -1)
            return Boolean(false)
    }
    
    return Boolean(true);
}

function getSkew(str,n)
{
    var q = str.length;
    n = parseInt(n);
    if (isNaN(parseInt(n)))
        return "n is Not a Number"
    if(parseInt(n) <= 0)
        return "n is less than or equal to 0"
    if(q < n)
        return "str length is less than n"
     
    var G = 0;
    var C = 0;
    for(var i = 0; i < n; i++)
    {
        if(str[i] == 'G')  
            G++;
        if(str[i] == 'C')  
            C++;
    }
    
    var skew = G-C;
    
    return parseInt(skew);
}

function getMaxSkewN(str,n)
{
    var q = str.length;
    n = parseInt(n);
    if (isNaN(parseInt(n)))
        return "n is Not a Number"
     if(parseInt(n) <= 0)
        return "n is less than or equal to 0"
    if(q < n)
        return "str length is less than n"
    
   var max = getSkew(str,1);
    
   for(var j = 0; j < n; j++)
   {
       var temp = getSkew(str,j + 1);
        if(temp > max)
            max = temp;
   }
   
   return parseInt(max);
    
}

function getMinSkewN(str,n)
{
    var q = str.length;
    n = parseInt(n);
    if (isNaN(parseInt(n)))
        return "n is Not a Number"
    if(parseInt(n) <= 0)
        return "n is less than or equal to 0"
    if(q < n)
        return "str length is less than n"
    
   var min = getSkew(str,1);
    
   for(var j = 0; j < n; j++)
   {
       var temp = getSkew(str,j + 1);
        if(temp < min)
            min = temp;
   }
   
   return parseInt(min);
    
}

