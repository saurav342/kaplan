
import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import * as URL from './config';

const googleBookService = () => {
    const googleBookData = ajax
        .getJSON(URL.googleBooksUrl)
        .pipe(map((res => res.items)));
    return googleBookData;
}


export default googleBookService