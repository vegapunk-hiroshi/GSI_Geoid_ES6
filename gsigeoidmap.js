//Gsi Geoid Map generated by "gsigeois2Js" 
//Source Data: gsigeo2011_ver
import { geoidMap } from '@/third-party/geoid';

export class GsiGeoid {
    constructor() {
        this.geoidMap = geoidMap;
    }
    getGeoid(lat, lon) {
        const glamn = 20;
        const glomn = 120;
        const dgla = 0.016667;
        const dglo = 0.025;
        const nla = 1801;
        const nlo = 1201;
        if (lat < glamn || lat > glamn + dgla * (nla - 1) || lon < glomn || lon > glomn + dglo * (nlo - 1)) {
            return 0;
        }
        const j = Math.floor((lon - glomn) / dglo);
        const i = Math.floor((lat - glamn) / dgla);
        const a = this.geoidMap['' + (i) + '_' + (j) + ''];
        const b = this.geoidMap['' + (i) + '_' + (j + 1) + ''];
        const c = this.geoidMap['' + (i + 1) + '_' + (j) + ''];
        const d = this.geoidMap['' + (i + 1) + '_' + (j + 1) + ''];
        if (a == null || b == null || c == null || d == null) {
            return 0;
        }
        const wlon = glomn + j * dglo;
        const elon = glomn + (j + 1) * dglo;
        const slat = glamn + i * dgla;
        const nlat = glamn + (i + 1) * dgla;
        const t = (lat - slat) / (nlat - slat);
        const u = (lon - wlon) / (elon - wlon);
        let Z = (1 - t) * (1 - u) * a + (1 - t) * u * b + t * (1 - u) * c + t * u * d;
        Z *= 100000;
        Z = Math.floor(Z + 0.5);
        Z /= 100000;
        return Z;
    }
}

