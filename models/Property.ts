import Media from '@/models/Media';

interface Property {
    AangebodenSindsTekst: string;
    AantalKamers: number;
    AantalKavels: number;
    Adres: string;
    FotoLarge: string;
    HoofdFoto: string;
    Id: string;
    Media: Media[];
    Postcode: string;
    PrijsGeformatteerdHtml: string;
    Perceeloppervlakte: number;
    Woonplaats: string;
    Woonoppervlakte: number;
}

export default Property;
