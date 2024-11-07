{



    const validateKeys = <T extends object > (obj: T, keys: ( keyof T )[]): boolean =>{

            
        const value = keys 

        const result = value 

        return result.every(key => key in obj)

    }

    const person = { name: "Alice", age: 25, email: "alice@example.com" };

    const keyValue = validateKeys(person, ["name", "age"])

    console.log(keyValue)



}