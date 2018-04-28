/**
 *
 * Page Lifecycle Hooks
 * In order from start to finish
 *
 */

export interface ViewCanEnter {
    ionViewCanEnter(): void;
  }
  
  export interface ViewDidLoad {
    ionViewDidLoad(): void;
  }
  
  export interface ViewWillEnter {
    ionViewWillEnter(): void;
  }
  
  export interface ViewDidEnter {
    ionViewDidEnter(): void;
  }
  
  export interface ViewCanLeave {
    ionViewCanLeave(): void;
  }
  
  export interface ViewWillLeave {
    ionViewWillLeave(): void;
  }
  
  export interface ViewDidLeave {
    ionViewDidLeave(): void;
  }
