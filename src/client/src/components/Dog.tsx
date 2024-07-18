import { Dog } from "../types"


export const SingleDog = (dog: Dog) => {
    return (
        <>
        <div>
           <p>{dog.name} who is a {dog.sex} {dog.breed}</p>
        </div>
        </>
    )
}