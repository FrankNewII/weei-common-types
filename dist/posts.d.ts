import { IOwner } from './users';
export declare enum ESupportedContentTypes {
    Video = "video",
    Image = "img",
    Text = "text",
    Audio = "audio"
}
export interface IContent {
    type: ESupportedContentTypes.Video | ESupportedContentTypes.Image | ESupportedContentTypes.Text | ESupportedContentTypes.Audio;
    src: string;
}
export interface IPostBasic {
    isForSale: boolean;
    costs: number;
    title: string;
    description?: string;
    isVisible: boolean;
    hashtags: string[];
    availableFor?: IOwner[];
    content: IContent;
}
export interface IPost extends IPostBasic {
    createdAt: number;
    id: number;
    likes: number;
    sizes: string[];
    owner: IOwner;
}
