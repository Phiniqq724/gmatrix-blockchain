import type {Doc} from '@junobuild/core-peer';

export interface HistoryData {
    user_id: string;
    book_id: string;
    borrowed_at: Date;
    returned_at: Date;
}

export type History = Doc<HistoryData>;