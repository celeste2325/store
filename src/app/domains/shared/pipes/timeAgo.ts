import {Pipe, PipeTransform} from '@angular/core';
import {formatDistance} from 'date-fns';

@Pipe({
  name: 'timeAgo',
  standalone: true
})
export class TimeAgoPipe implements PipeTransform {

  transform(creationAt: string): string {
    const currentDate = new Date();
    const creationDate = new Date(creationAt);
    return formatDistance(currentDate, creationDate);
  }
}
