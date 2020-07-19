import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
})
export class RecipeDetailsPage implements OnInit {

  public recipe:Recipe;

  constructor(
    private recipesService:RecipesService, 
    private activatedRoute: ActivatedRoute,
    private router:Router,
    private alertCtrl: AlertController
    ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap=> {
      if(!paramMap.has('recipeId')){
        //redirect
        return;
      }
    const recipeId= paramMap.get('recipeId');
    console.log(recipeId);
    console.log("..."+this.recipe)
    this.recipe= this.recipesService.getRecipe(recipeId);
    });

  }
  ionViewWillEnter(){
    console.log('ionViewWillEnter');
    //this.recipes= this.recipesService.getAllRecipes();
  }
  ionViewDidEnter(){
    console.log('ionViewDidEnter');
  }
  ionViewWillLeave(){
    console.log('ionViewWillLeave');
  }
  ionViewDidLeave(){
    console.log('ionViewDidLeave');
  }

  ngOnDestroy(){

  }
  onDelete(){
    this.alertCtrl.create({
      message:'Do you really want to delete this recipe?',
      header:'Are you sure?',
      buttons:[{
        text:'Cancel',
        role:'cancel'
      },
      {
        text:'Delete',
        handler:()=>{
          this.recipesService.deleteRecipe(this.recipe.id);
          this.router.navigate(['/recipes']);
        }
      }]
    }).then(alertEle=>{
      alertEle.present();
    });
  }

}
