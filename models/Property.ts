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
    PrijsGeformatteerd: string;
    PrijsGeformatteerdHtml: string;
    URL: string;
    // TODO: Refactor API so that it returns consistent JSON keys.
    PerceelOppervlakte: number;
    Perceeloppervlakte: number;
    Plaats: string;
    VolledigeOmschrijving: string;
    Woonplaats: string;
    WoonOppervlakte: number;
    Woonoppervlakte: number;
}

export default Property;
