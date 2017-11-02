import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './project.model';

@Pipe({
  name: 'userFilter'
})
export class UserFilterPipe implements PipeTransform {

  transform(input: Project[]) {
    if (input) {      
      let output: Project[] = [];
      for(var i = 0; i < input.length; i++){
        if(input[i].email === "dandanilyuk@gmail.com"){
          output.push(input[i])
        }
      }
      return output
    }
  }

}
