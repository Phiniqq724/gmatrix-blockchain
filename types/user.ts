import type {Doc} from '@junobuild/core-peer';

export default interface UserData {
    name   : string;
    img_url: string;
    address: string;
}

export type User = Doc<UserData>;