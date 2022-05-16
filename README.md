# Angular Course 🔥
## By Ultrasdzcoder You can See Full Course here
---

### install Angular & Create New App :

         npm i -g @angular/cli
         ng new <name of this app>

### Run the app :
         cd <path of this apllication>
         ng serve --open


### Hello World first app

1. Go To **App** folder in src
2. Create new file in the same folder named *'hello.component.ts'*
3. into this file import Component from Angular Core

         import { Compopnent } from '@angular/core'

4. Create Component Decorator 

         @Component({
            selector:'app-hello-udc',
            tamplate:'<h1> {{ title }} </h1> ',
            styles:[`
               h1{
                  color:red
               }
            `]
         })

5. Also Create class of this component

         export class HelloUdc {
            title = "hello  udc"
         }


6. Now You must Go to *'app.module.ts'* and import the component


         import { HelloUdc } from './hello.component'


7. Add *HelloUdc* to *@NgModule* in *decalrations*


            @NgModule({
               decalrations:{
                  HelloUdc
               }
            })


---

### Separate Html Css Filles

1. Create *'hello.component.html'* for Html & *'hello.component.css'* for Css 
2. In *'hello.component.ts'* must be change temlate & styles To :

            templateUrl:"./hello.component.html",
            styleUrls:["./hello.component.css"]


---
### Make Component As Siparated floder

1. Create Folder *Hello*
2. Place *'hello.component.html'* , *'hello.component.css'* , *'hello.component.ts'* into *hello* Folder
3. Cheke if path in app is correct 

---
### Generate Component
1. In terminal 

            ng generate component <Componnet Name> 

2. Cheke if path in app is correct 

---

### Passing function tp tamplate 
1. In *'hello.component.ts'*  create new function **'getName'** & put it in class Component without keyword function 
2. You can declare which type is it 

            getName(name:string):string{
    
               return `My name is ${name}`
            } 

3. In *'hello.component.html'* invoke this function .


---
### Create new folder with component
1. In Treminal typed "ng generate component <pathFolder/nameComponent>"
2. You Will see Folder that have components
   

--- 
### Make Component Reuseable
1. Create button Component 
2. In *'button.component.html'*  add button tag .
3. In *'hello.component.html'* add <app-button> tag twice 
4. You can append atterbuites like :

            <app-button text="left" color="red" ></app-button> 
            <app-button text="right" color="green" ></app-button> 

   1. In *'button.component.ts'* import Input
   2. Add the attrebuits in ButtonComponnent Like That an is Input decorator :

            @Input() text:string
            @Input() color:string

   3. Dont forget to add this propperties in constracture
   
            constructor() {
               this.text = ""
               this.color = ""
            } 


5. We have Two attrs text,color So we can passed them in button 

            <button [ngStyle] = {"'background-color':color"} > {{ text }} </button>

6. As you see we use **[ngStyle]** to add styling inline css 
7. Most be Use {""} to write css propperty .
8. Final Result we can see Two Buttons With different text and color


---
### Add Functionality to Components
1. Create function **getColor** with arg *color:string* under Constractur

            getColor(color:string){
               console.log(color)
            }

2. In *'button.component.html'* :

            <button (click)="getColor(color)" [ngStyle]="{'background-color':color}">{{ text }}</button>

3. You can see the result (grap color)


---
### Create Custume Function (Event)
1. In *'button.component.ts'* Create new function **onClick()**:
2. Import Output and EventEmitter and create new property :

               @Output() btnEvent = new EventEmitter()

3. In **onClick()** :

               onClick(){
                  this.btnEvent.emit()
               }

4. Go to *'button.component.html'*

               <button (click)="onClick()" [ngStyle]="{'background-color':color}">{{ text }}</button>

6. Now we can add new custume function *func1()* in  *'hello.component.html'*

               <app-button text="right" color="green" (btnEvent)="func1()" ></app-button>

7. In *'hello.component.ts'* Create this function *func1()*
   

               func1(){
                  console.log("first")
               }


---
### Create list 
1. Create new component List
2. add the List to *hello.comopnent.html* 
3. from *list.component.html* create ul list with li
4. in ListComponent add propperty 

                  list:string[] = ["html","css","js"]

5. pass list to *list.component.html* in for loop 

                  <ul *ngFor="let item of list" >
                     <li> {{ item }} </li>
                  </ul>


---
### Bind with Data 
1. Create in src folder file data.ts , dataSchema.ts
2. in dataSchema.ts add this code 


                  export interface Schema {
                     id?:number,
                     title:string,
                     url:string
                  }

4. in data.ts copy this random data into array with importing dataSchema
   

                  export const DataBase: Schema[] = [{
    
                     "id": 1,
                     "title": "accusamus beatae ad facilis cum similique qui sunt",
                     "url": "https://via.placeholder.com/600/92c952",
                     
                  },
                  {
                     
                     "id": 2,
                     "title": "reprehenderit est deserunt velit ipsam",
                     "url": "https://via.placeholder.com/600/771796",
                     
                  },
                  {
                     
                     "id": 3,
                     "title": "officia porro iure quia iusto qui ipsa ut modi",
                     "url": "https://via.placeholder.com/600/24f355",

                  },
                  {
                     "id": 4,
                     "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
                     "url": "https://via.placeholder.com/600/d32776",
                  }]


5. import shema , data from past fils 
6. replace :


                  list:Schema[] = DataBase

7. we must be change *list.component.html* : 
   

                  <ul *ngFor="let item of lists ">
                     <li>
                        {{ item.id }} : {{ item.title }}
                        <img src="{{ item.url }}" alt=" {{ item.title }} " width="20"  >
                     </li>
                  </ul>



---
### Create Iterable Comopnent
1. generate new component list-item
2. replace ul list with app-list-item
3. open *list-item.component.html* and create ul list 
4. now go to *list.component.html* and past:

                  <app-list-item *ngFor="let item of lists " [item]="item"></app-list-item>

5. You see we loop for lists property and make [item] = "item 
6. in *list-item.comonent.ts* :

                  @Input() item?: Schema

7. dont forget importing Schema 
8. now in list-item.component.html add new li like that :

                  <ul>
                     <li>
                        {{ item?.id }}
                        {{ item?.title}}
                        &nbsp; <img src="{{ item?.url}}" alt="" width="20">
                     </li>
                  </ul>


---
### Add Condetion 
1. Generate new component cond
2. add them to hello component
3. in *cond.component.ts* :


                  hide:boolean = true

                  toggle(){
                     this.hide = !this.hide
                     console.log(this.hide)
                  }

4. in *cond.component.ts* :


                  <button (click)="toggle()" >toggle</button>
                  <h1 *ngIf="hide" >cond works!</h1>


5. now we can toggle h1