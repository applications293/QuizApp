import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  wc98: string; wc02:string; wc06:string; wc10:string; wc14:string;

  //quizAnswer: string = this.wc98+"#"+this.wc02+"#"+this.wc06+"#"+this.wc10+"#"+this.wc14;
  
  count: number=0;
  x: number=0;
  tokens=[];
  correctAnswers=['France','Brazil'
  ,'Andres Iniesta','Germany','Spain'];
  userAnswers:string;

  pc1:string; pc2:string; pc3:string; pc4:string;
  pcAnswers=['Central Processing Unit','The motherboard'
  ,'.doc','Random Access Memory','True'];

  m1:number; m2:number; m3:number; m4:number; m5:number;
  mathAnswers=[ 91,333,180, 49,9];
  display: number=0;
  main: number =0;


  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public toastCtrl: ToastController) {

  }
  
  _wc98(userAnswers) {
      
    this.tokens= [userAnswers];
    for( this.x = 0; this.x < this.tokens.length ; this.x++){
          
        if((this.wc98)==(this.correctAnswers[this.x])){
            this.count++;
            
            console.log(this.wc98);
        }else{
          this.x=0;
          this.count=this.count;
      } 
    }
  }

  _wc14(userAnswers){
    this.tokens= [userAnswers];
    for( this.x = 0; this.x < this.tokens.length ; this.x++){
        
        if((this.wc14)==(this.correctAnswers[1])){
            this.count++;
            
            console.log(this.wc14);
        }else{
          this.x=0;
          this.count=this.count;
      } 
    }
  }

  _wc10(userAnswers){
    this.tokens= [userAnswers];
    for( this.x = 0; this.x < this.tokens.length ; this.x++){
        
        if((this.wc10)==(this.correctAnswers[2])){
            this.count++;
            
            console.log(this.wc10);
        }else{
          this.x=0;
          this.count=this.count;
      } 
    }
  }

  /*=================================================================================================================
    ================================================================================================================*/

    _pc1(userAnswers) {
      
      this.tokens= [userAnswers];
      for( this.x = 0; this.x < this.tokens.length ; this.x++){
            
          if((this.pc1)==(this.pcAnswers[this.x])){
              this.count++;
              
              console.log(this.pc1);
          }else{
            this.x=0;
            this.count=this.count;
        } 
      }
    }
  
    _pc2(userAnswers){
      this.tokens= [userAnswers];
      for( this.x = 0; this.x < this.tokens.length ; this.x++){
          
          if((this.pc2)==(this.pcAnswers[1])){
              this.count++;
              
              console.log(this.pc2);
          }else{
            this.x=0;
            this.count=this.count;
        } 
      }
    }
  
    _pc3(userAnswers){
      this.tokens= [userAnswers];
      for( this.x = 0; this.x < this.tokens.length ; this.x++){
          
          if((this.pc3)==(this.pcAnswers[2])){
              this.count++;
              
              console.log(this.pc3);
          }else{
            this.x=0;
            this.count=this.count;
        } 
      }
    }

     /*=================================================================================================================
    ================================================================================================================*/

    _m1(userAnswers) {
      
      this.tokens= [userAnswers];
      for( this.x = 0; this.x < this.tokens.length ; this.x++){
            
          if((this.m1)==(this.mathAnswers[this.x])){
              this.count++;
              
              console.log(this.m1);
          }else{
            this.x=0;
            this.count=this.count;
        } 
      }
    }
  
    _m2(userAnswers){
      this.tokens= [userAnswers];
      for( this.x = 0; this.x < this.tokens.length ; this.x++){
          
          if((this.m2)==(this.mathAnswers[1])){
              this.count++;
              
              console.log(this.m2);
          }else{
            this.x=0;
            this.count=this.count;
        } 
      }
    }
  
    _m3(userAnswers){
      this.tokens= [userAnswers];
      for( this.x = 0; this.x < this.tokens.length ; this.x++){
          
          if((this.m3)==(this.mathAnswers[2])){
              this.count++;
              
              console.log(this.m3);
          }else{
            this.x=0;
            this.count=this.count;
        } 
      }
    }

    Display(position: string){

      this.loadingCtrl.create({
        content: 'Fetching Results...',
        duration: 2000,
        dismissOnPageChange: true
      }).present();

      const toast = this.toastCtrl.create({
        message: 'Yaay!! Quiz Completed, Results updated!',
        duration: 6000,
        position: position
      });
      toast.present();

      this.display = 1;
      
    }

    StartQ(){

      this.loadingCtrl.create({
        content: 'Starting Quiz...',
        duration: 2000,
        dismissOnPageChange: true
      }).present();

      this.main = 1;

    }

}
