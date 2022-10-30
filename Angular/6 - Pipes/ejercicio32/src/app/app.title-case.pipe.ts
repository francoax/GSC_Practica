import { Pipe, PipeTransform } from '@angular/core';

@Pipe ({name : 'titlecase'})

export class TitleCasePipe implements PipeTransform {

    transform(text: string) {
        let textworked : string[] = text.split(" ").map(word => {
            return word[0].toUpperCase() + word.slice(1);
        })
        return textworked.join(" ");
    }
    
}