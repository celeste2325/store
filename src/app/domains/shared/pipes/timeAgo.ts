import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'timeAgo',
  standalone: true
})
export class TimeAgoPipe implements PipeTransform {

  transform(creationAt: string): string {
    const currentDate = new Date();
    const creationDate = new Date(creationAt);
    let timeDifference = currentDate.getTime() - creationDate.getTime();
    let daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    let yearsDifference = Math.floor(daysDifference / 365);
    let monthsDifference = Math.floor((daysDifference % 365) / 30);
    return `${yearsDifference > 0 ? yearsDifference + ' Years ago.' : ''}
    ${monthsDifference > 0 && yearsDifference == 0 ? monthsDifference + ' Months ago.' : ''}
    ${monthsDifference == 0 && yearsDifference == 0 && daysDifference > 0 ? daysDifference + ' Days ago.' : ''}
    ${yearsDifference == 0 && monthsDifference == 0 && daysDifference == 0 ? 'Today' : ''}`
  }
}
