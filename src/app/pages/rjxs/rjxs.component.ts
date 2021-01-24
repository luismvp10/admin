import {Component, OnDestroy} from '@angular/core';
import {Observable, interval, Subscription} from 'rxjs';
import {filter, map, retry, take} from 'rxjs/operators';

@Component({
  selector: 'app-rjxs',
  templateUrl: './rjxs.component.html',
  styles: []
})
export class RjxsComponent implements OnDestroy{
  public intervalSubs: Subscription;

  constructor() {

    // this.retornaObservable().pipe(
    //   retry(2)
    // ).subscribe(
    //   value => console.log('Valor ' + value),
    //   error => console.warn('Error:' + error),
    //   () => console.info('Obs terminado')
    // );
    this.intervalSubs = this.retornaIntervalo().subscribe(console.log);


  }
  ngOnDestroy() {
    this.intervalSubs.unsubscribe();
  }


  retornaIntervalo() {

    return interval(500)
      .pipe(
        // take(10),
        map(value => value + 1 ),
        filter( value => ( value % 2 === 0 ) ? true : false)
      );


  }


  retornaObservable(): Observable<number> {
    let i = -1;

    return new Observable<number>(observer => {

      const intervalo = setInterval(() => {
        i++;
        observer.next(i);

        if (i === 4) {
          clearInterval(intervalo);
          observer.complete();
        }

        if (i === 2) {
          // i = 0;
          // console.log('i = 2... error');
          observer.error('i llego al valor de 2');
        }

      }, 1000);

    });

  }


}
