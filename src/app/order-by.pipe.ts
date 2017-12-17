/**
 * Pipe (filters)
 * 
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
  pure: false
})
export class OrderByPipe implements PipeTransform {
  transform(items: any[], sortedBy: string): any {
    console.log('sortedBy', sortedBy);    
    return items.sort((a, b) => {return b[sortedBy] - a[sortedBy]});
}
}

