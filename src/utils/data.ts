import { useEffect, useState } from "react";
import { BookData } from "../../types/book";
import { listDocs } from "@junobuild/core-peer";

const DataComponent = () => {
    const [book, setBook] = useState<BookData[]>([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const items = await listDocs<BookData>({
                collection: "Buku",
                filter: {},
            });
            setBook(items);
        };
        
        fetchData();
    }, []);

    
};

export default DataComponent;