import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mimimi'
})
export class MimimiPipe implements PipeTransform {

  transform(value: string, letter: string = 'i'): unknown {
    return value.replace(/[aeiou]/gi, letter);
  }

}
