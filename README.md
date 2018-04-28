# ionic-lifecycle-interface
*ionic-lifecycle-interface* is a package for using the [Ionic Framework](https://ionic.io).

# How To Install
```bash 
$ npm i --save ionic-lifecycle-interface
```

## How To Use
 - install the package
 - import the package to directory
 - add `implements <name of interface minus ion>`
 - add to the class 

### Example
```typescript
import { Component } from '@angular/core';
import { ViewDidLoad } from 'ionic-lifecycle-interface';

@Component({
  templateUrl: 'my-page.html'
})
export class MyPage implements ViewDidLoad {

  ionViewDidLoad() {
      console.log("Page Loaded");
  }

}
```

