import {NgModule, Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'nameToHex'
})
export class NameToHexPipe implements PipeTransform {

  transform(webColors: Array<{hex: string, text: string}>, key: string): any {
    let colors = webColors.map(item => {
      if (item.text === key)
        return item.hex;
      return "";
    });
    return colors.filter(result => result.length > 1);
  }
}

@NgModule({
  declarations: [
    NameToHexPipe
  ],
  exports: [
    NameToHexPipe
  ]
})
export class NameToHexPipeModule {}
