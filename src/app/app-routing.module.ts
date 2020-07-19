import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'recipes',
    children:[
      {
        path:'',
        loadChildren: () => import('./recipes/recipes.module').then( m => m.RecipesPageModule)
      },
      {
        path:':recipeId',
        loadChildren:()=> import('./recipes/recipe-details/recipe-details.module').then( m => m.RecipeDetailsPageModule)
      }
    ]
    
  // },
  // {
  //   path:'recipe/details',
  //   loadChildren:()=> import('./recipes/recipe-details/recipe-details.module').then( m => m.RecipeDetailsPageModule)
   }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
