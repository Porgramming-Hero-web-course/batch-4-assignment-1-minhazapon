{

    const removeDuplicates = (numberZ: number[] ): number[] =>{
             
        let CmnNumber: number[] = [];

        for( let n: number = 0; n < numberZ.length; n++ ){
            
           const elements: number = numberZ[n] 
           const valueZ = elements 

           if(!CmnNumber.includes(valueZ)){

               CmnNumber.push(valueZ);
 
           }
        }
        return CmnNumber;
    }
    const ArrayOfnumberZ: number[] = [1, 2, 2, 3, 4, 4, 5]
    
    const ArrayResult : number[] = removeDuplicates(ArrayOfnumberZ)

    const SendResult = ArrayResult 

    console.log(SendResult)


}