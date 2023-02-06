import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'vuela'
})
export class VuelaPipe implements PipeTransform{
    transform(value:boolean):string{
        if(value){
            return 'Vuela';
        }else{
            return 'No vuela';
        }
        
    }
    // return(vuela) ? value = 'vuela' : value = 'no vuela';
    // }
}