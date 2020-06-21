import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as cocoSSD from '@tensorflow-models/coco-ssd';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('img', { static: true }) imagem: ElementRef<HTMLImageElement>;

  async ngOnInit() {
    const model = await cocoSSD.load();
    const result = await model.detect(this.imagem.nativeElement);
    console.log(result);
  }

}
