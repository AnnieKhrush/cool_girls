# from django.contrib import admin
#
# from .models import Ingredient, Recipe
#
# class IngredientAdmin(admin.ModelAdmin):
#     list_display = ('name_ingredient',)
#
# class RecipeAdmin(admin.ModelAdmin):
#     list_display = ('name_recipe',)
#
# admin.site.register(Ingredient, IngredientAdmin)
# admin.site.register(Recipe, RecipeAdmin)

from django.contrib import admin
from .models import Ingredient, Recipe

admin.site.register(Ingredient)
admin.site.register(Recipe)



