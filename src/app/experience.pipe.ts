import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './member.model';

@Pipe({
  name: 'experience',
  pure: false
})

export class ExperiencePipe implements PipeTransform {

  transform(input: Member[], desiredExperience) {
    var output: Member[] = [];
    if (desiredExperience === 'beginners') {
      for (var i = 0; i < input.length; i++) {
        if (input[i].experience === 'Beginner') {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredExperience === 'intermediates') {
      for (var i = 0; i < input.length; i++) {
        if (input[i].experience === 'Intermediate') {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredExperience === 'experts') {
      for (var i = 0; i < input.length; i++) {
        if (input[i].experience === 'Advanced') {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
