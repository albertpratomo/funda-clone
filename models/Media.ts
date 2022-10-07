import MediaCategory from '@/enums/MediaCategory';

interface MediaItem {
    Url: string;
}

interface Media {
    Categorie: MediaCategory;
    ContentType: number;
    IndexNumber: number;
    MediaItems: MediaItem[];
}

export default Media;
