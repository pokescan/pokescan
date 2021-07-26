import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  TemplateRef,
  Type
} from '@angular/core';
import { Cloudinary } from '@cloudinary/angular-5.x';
import { AbstractService } from '@shared/services/abstract/abstract.service';
import { PokemonDisplayCommon } from '@shared/utils';
import { VirtualScrollDataSource } from './data-source/virtual-scroll-data-source';

@Component({
  selector: 'pks-virtual-infinite-scroll',
  templateUrl: './virtual-infinite-scroll.component.html',
  styleUrls: ['./virtual-infinite-scroll.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VirtualInfiniteScrollComponent<
    S extends AbstractService<unknown, unknown>,
    D
  >
  extends PokemonDisplayCommon
  implements OnInit {
  @Input() items: any[];

  @Input() dtoType: Type<D>;

  @Input() serviceType: Type<S>;

  @Input() itemSize: number;

  @Input() templateName: TemplateRef<any>;

  @Input() onScrollStart: EventEmitter<void> = new EventEmitter<void>();

  dataSource: VirtualScrollDataSource<unknown>;

  constructor(cloudinary: Cloudinary) {
    super(cloudinary);
  }

  ngOnInit(): void {
    console.log(
      '🚀 ~ file: virtual-infinite-scroll.component.ts ~ line 45 ~ ngOnInit ~ new this.serviceType()',
      new this.serviceType()
    );
    // this.dataSource = new VirtualScrollDataSource(new this.serviceType());
  }

  infiniteScroll(): void {
    this.onScrollStart.emit();
  }
}
