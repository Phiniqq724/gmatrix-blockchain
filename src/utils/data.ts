import { useEffect } from "react";
import { BookData } from "../../types/book";
import { listDocs } from "@junobuild/core-peer";

var book: BookData[] = [];
useEffect(() => {
    const items = await listDocs<BookData>({
        collection: "Buku",
        filter: {},
    });
    book = items;
});
export book;


// ini mau bikin apa
// ohh
// manggil data dari datastore