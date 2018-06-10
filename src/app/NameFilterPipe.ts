import { Pipe, PipeTransform } from '@angular/core';
import {Hero} from './hero';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({name: 'nameFilterPipe'})
export class NameFilterPipe implements PipeTransform {
    transform(value: Hero[], filterStr: string): Hero[] {
        return value.filter(
            hero => hero.name.includes(filterStr));
    }
}