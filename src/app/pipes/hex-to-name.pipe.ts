import {NgModule, Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'hexToName'
})
export class HexToNamePipe implements PipeTransform {

  transform(webColors: Array<{hex: string, text: string}>, key: string): any {
    let colors = webColors.map(item => {
      if (item.hex === key)
        return item.text;
      return "";
    });
    return colors.filter(result => result.length > 1);
  }
}

@NgModule({
  declarations: [
    HexToNamePipe
  ],
  exports: [
    HexToNamePipe
  ]
})
export class HexToNamePipeModule {}
