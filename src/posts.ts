import { IBasicProfile } from './profile';

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
    isForSale: boolean;
    costs: number;
    title: string;
    description?: string;
    isVisible: boolean;
    hashtags: string[];
    availableFor?: IBasicProfile[];
    content: IContent;
}
export interface IPost extends IPostBasic {
    createdAt: number;
    _id: number;
    likes: number;
    didILike?: boolean;
    sizes: string[];
    owner: IBasicProfile;
}
