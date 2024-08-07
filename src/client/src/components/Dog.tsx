import { BaseDog } from "../types"


export const SingleDog = (dog: BaseDog) => {
    return (
        <>
        <div>
           <p>{dog.name} who is a {dog.sex} {dog.breed}</p>
        </div>
        </>
    )
}