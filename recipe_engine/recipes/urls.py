#
#
# from django.urls import path
# from . import views
#
# urlpatterns = [
#     path('ingredients/', views.all_ingredients, name='all_ingredients'),
#     path('recipes/', views.all_recipes, name='all_recipes'),
#     path('recipes_by_ingredients/', views.recipes_by_ingredients, name='recipes_by_ingredients'),
#     path('recipes/<int:recipe_id>/', views.recipe_by_id, name='recipe_by_id'),
# ]
#
#


# from django.urls import path
# from . import views
#
# urlpatterns = [
#     path('ingredients/', views.all_ingredients, name='all_ingredients'),
#     path('recipes/', views.all_recipes, name='all_recipes'),
#     path('recipes_by_ingredients/', views.recipes_by_ingredients, name='recipes_by_ingredients'),
# ]
#

from django.urls import path
from . import views

urlpatterns = [
    path('ingredients/', views.all_ingredients, name='all_ingredients'),
    path('recipes/', views.all_recipes, name='all_recipes'),
    path('recipes_by_ingredients/', views.recipes_by_ingredients, name='recipes_by_ingredients'),
    path('recipes/<int:recipe_id>/', views.recipe_by_id, name='recipe_by_id'),
    path('add_to_favorites/<int:recipe_id>', views.add_to_favorites, name='add_to_favorites'),
    path('get_favorites/', views.get_favorites, name='get_favorites'),
    path('create_recipe/', views.create_recipe, name='create_recipe'),
]


