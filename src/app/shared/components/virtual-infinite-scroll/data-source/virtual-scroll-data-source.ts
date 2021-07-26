import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

export abstract class VirtualScrollDataSource<T> extends DataSource<T> {
  public cached = Array.from<T>({ length: 0 });

  public dataStream = new BehaviorSubject<(T | undefined)[]>(this.cached);

  public subscription = new Subscription();

  public pageSize = 10;

  public lastPage = 0;

  public page: number;

  connect(
    collectionViewer: CollectionViewer
  ): Observable<(T | undefined)[] | ReadonlyArray<T | undefined>> {
    this.subscription.add(
      collectionViewer.viewChange.subscribe(range => {
        this.page = this.getPageForIndex(range.end);

        if (this.page > this.lastPage) {
          this.lastPage = this.page;
          this.getDataSource();
        }
      })
    );
    return this.dataStream;
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.subscription.unsubscribe();
  }

  private getPageForIndex(i: number): number {
    return Math.floor(i / this.pageSize);
  }

  abstract getDataSource(): void;
}
