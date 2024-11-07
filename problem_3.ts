{



    const countWordOccurrences = (sentnce: string, wrd: string) =>{


        const lowerS = sentnce.toLowerCase() 
        const lowerWrd = wrd.toLowerCase()  

        const WordZ = lowerS.split(" ")

        let allCount = 0 ;

        for(const WrdZ of WordZ){

           if(WrdZ === lowerWrd){
               
               allCount++

           }

        }

        return allCount
       
   }

   const allCountWordZ = countWordOccurrences("I love typescript", "typescript") 

   console.log(allCountWordZ)








}