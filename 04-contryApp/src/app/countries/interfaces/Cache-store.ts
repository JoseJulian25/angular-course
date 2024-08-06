import { Country } from "./Country"
import { Region } from "./Region.type";

export interface CacheStore {
    byCapital: TermCountries;
    byCountry: TermCountries;
    byRegion: RegionCountries;
}

interface TermCountries {
    term: string;
    countries: Country[];
}


interface RegionCountries {
    region?: Region;
    countries: Country[];
}