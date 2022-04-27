import { IOwner } from './user';

export enum ESupportedContentTypes {
    Video = 'video',
    Image = 'img',
    Text = 'text',
    Audio = 'audio',
}

export interface IContent {
    type: ESupportedContentTypes.Video | ESupportedContentTypes.Image | ESupportedContentTypes.Text | ESupportedContentTypes.Audio;
    src: string;
}

export interface IPostBasic {
    costs: number;
    title: string;
    description?: string;
    hashtags: string[];
    content: IContent;
}

export interface IPost extends IPostBasic {
    created: number;
    id: number;
    likes: number;
    sizes: string[];
    owner: IOwner;
}