{


      
    const getProperty = <G, P extends keyof G > (object: G , key: P  ): G[P] =>{
           
        const property = object
         
        return property[key]
    }

  const Person = { name: "Alice",   age: 23 };

  const result = getProperty(Person, "name")

  console.log(result)
 


}