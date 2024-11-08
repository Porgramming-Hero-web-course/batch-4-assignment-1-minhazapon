{



    type Circle = {
       
        shape: string,
        size: number

    }


    type Rectangle = {

       shape2: string ,
       size2: number

    }

    type allShape = Circle | Rectangle

    

    const shape: allShape = {

         shape: 'circle',
         shape2: 'circle',
         size: 200,
         size2: 100
         
    }


    const heightWidth = 4 * 6

    const areaOfRectangle = heightWidth / 1000

    console.log(areaOfRectangle, shape)
    

}