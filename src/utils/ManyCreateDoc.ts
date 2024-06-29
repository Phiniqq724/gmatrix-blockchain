import { Doc, setDoc } from "@junobuild/core-peer";
import { Book } from "../../types/book";

export function ManyCreateBook(Doc: Book, HowManyTimes: number){
    for (let index = 0; index < HowManyTimes; index++) {
        return async function CreateBook(){
        await setDoc({
            collection: "Buku",
            doc: Doc,
        });
    }
    }
    
}
