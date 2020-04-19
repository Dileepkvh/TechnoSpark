import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'namefilter'
})

export class Filterpipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        console.log(value);
        let counter=0;
        value.forEach(element => {
            if(element==='dileep'){
                counter=counter+1;
                
            }
            
        });
        return counter;

    }
}