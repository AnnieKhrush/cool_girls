#
#
# # from .models import Ingredient, Recipe
# # from django.http import JsonResponse
# # from django.db.models import Count, Q
# #
# #
# # def all_ingredients(request):
# #     ingredients = Ingredient.objects.all().values()
# #     return JsonResponse(list(ingredients), safe=False)
# # def all_recipes(request):
# #     recipes = Recipe.objects.all().values()
# #     return JsonResponse(list(recipes), safe=False)
# #
# # def recipes_by_ingredients(request):
# #     selected_ingredients = request.GET.get('ingredient_ids')
# #     if selected_ingredients:
# #         selected_ingredient_ids = [int(i) for i in selected_ingredients.split(',')]
# #
# #         # Получаем все объекты Recipe
# #         recipes = Recipe.objects.all()
# #
# #         # Используем Q объект для построения запроса
# #         query = Q()
# #         for ingredient_id in selected_ingredient_ids:
# #             query |= Q(ingredient__id=ingredient_id)
# #
# #         # Фильтруем рецепты по выбранным ингредиентам
# #         recipes = recipes.filter(query)
# #
# #         # Отбираем рецепты, которые содержат только выбранные ингредиенты
# #         final_recipes = set()
# #         for recipe in recipes:
# #             recipe_ingredients = [ingredient.id for ingredient in recipe.ingredient.all()]
# #             if set(selected_ingredient_ids) >= set(recipe_ingredients):
# #                 final_recipes.add(recipe)
# #
# #         return JsonResponse([{"name_recipe": recipe.name_recipe} for recipe in final_recipes], safe=False)
# #
# #     else:
# #         return JsonResponse([], safe=False)  # Если ингредиенты не выбраны, возвращаем пустой список рецептов
# #
# # def recipe_by_id(request, recipe_id):
# #     try:
# #         recipe = Recipe.objects.get(pk=recipe_id)
# #         recipe_data = {
# #             'name_recipe': recipe.name_recipe,
# #             'description': recipe.description,
# #             'ingredients': list(recipe.ingredient.values_list('name_ingredient', flat=True))
# #         }
# #         return JsonResponse(recipe_data)
# #     except Recipe.DoesNotExist:
# #         return JsonResponse({'error': 'Recipe not found'}, status=404)
#
#
#
#
# from .models import Ingredient, Recipe
# from django.http import JsonResponse
# from django.db.models import Count, Q
#
#
# def all_ingredients(request):
#     ingredients = Ingredient.objects.all().values()
#     return JsonResponse(list(ingredients), safe=False)
# def all_recipes(request):
#     recipes = Recipe.objects.all().values()
#     return JsonResponse(list(recipes), safe=False)
#
# def recipes_by_ingredients(request):
#     selected_ingredients = request.GET.get('ingredient_ids')
#     if selected_ingredients:
#         selected_ingredient_ids = [int(i) for i in selected_ingredients.split(',')]
#
#         # Получаем все объекты Recipe
#         recipes = Recipe.objects.all()
#
#         # Используем Q объект для построения запроса
#         query = Q()
#         for ingredient_id in selected_ingredient_ids:
#             query |= Q(ingredient__id=ingredient_id)
#
#         # Фильтруем рецепты по выбранным ингредиентам
#         recipes = recipes.filter(query)
#
#         # Отбираем рецепты, которые содержат только выбранные ингредиенты
#         final_recipes = set()
#         for recipe in recipes:
#             recipe_ingredients = [ingredient.id for ingredient in recipe.ingredient.all()]
#             if set(selected_ingredient_ids) == set(recipe_ingredients):
#                 final_recipes.add(recipe)
#
#         return JsonResponse([{"name_recipe": recipe.name_recipe, 'id': recipe.id} for recipe in final_recipes], safe=False)
#
#     else:
#         return JsonResponse([], safe=False)  # Если ингредиенты не выбраны, возвращаем пустой список рецептов
#
# def recipe_by_id(request, recipe_id):
#     try:
#         recipe = Recipe.objects.get(id=recipe_id)
#         recipe_data = {
#             "name_recipe": recipe.name_recipe,
#             "description": recipe.description,
#             "ingredients": list(recipe.ingredient.values_list('name_ingredient', flat=True))
#         }
#         return JsonResponse(recipe_data, safe=False)
#     except Recipe.DoesNotExist:
#         return JsonResponse({'error': 'Recipe not found'}, status=404)
#
# from django.views.decorators.csrf import csrf_exempt
#
# @csrf_exempt
# def add_to_favorites(request, recipe_id):
#     try:
#         recipe = Recipe.objects.get(pk=recipe_id)
#         # Здесь вы можете реализовать логику добавления рецепта в избранное для текущего пользователя
#         # Например, если у вас есть модель пользователя, вы можете добавить рецепт к его избранным рецептам
#         # Это может выглядеть примерно так:
#         # current_user = request.user
#         # current_user.favorite_recipes.add(recipe)
#         return JsonResponse({'success': 'Recipe added to favorites'})
#     except Recipe.DoesNotExist:
#         return JsonResponse({'error': 'Recipe not found'}, status=404)
#
# @csrf_exempt
# def create_recipe(request):
#     if request.method == 'POST':
#         data = request.POST
#         name_recipe = data.get('name_recipe')
#         description = data.get('description')
#         ingredient_ids = data.getlist('ingredient_ids[]')  # Получаем список ID ингредиентов из формы
#         try:
#             # Создаем новый рецепт
#             recipe = Recipe.objects.create(name_recipe=name_recipe, description=description)
#             # Добавляем выбранные ингредиенты к рецепту
#             recipe.ingredient.add(*ingredient_ids)
#             return JsonResponse({'success': 'Recipe created successfully'})
#         except Exception as e:
#             return JsonResponse({'error': str(e)}, status=400)
#     else:
#         return JsonResponse({'error': 'Invalid request method'}, status=405)





# from .models import Ingredient, Recipe
# from django.http import JsonResponse
# from django.db.models import Count, Q
#
#
# def all_ingredients(request):
#     ingredients = Ingredient.objects.all().values()
#     return JsonResponse(list(ingredients), safe=False)
# def all_recipes(request):
#     recipes = Recipe.objects.all().values()
#     return JsonResponse(list(recipes), safe=False)
#
# def recipes_by_ingredients(request):
#     selected_ingredients = request.GET.get('ingredient_ids')
#     if selected_ingredients:
#         selected_ingredient_ids = [int(i) for i in selected_ingredients.split(',')]
#
#         # Получаем все объекты Recipe
#         recipes = Recipe.objects.all()
#
#         # Используем Q объект для построения запроса
#         query = Q()
#         for ingredient_id in selected_ingredient_ids:
#             query |= Q(ingredient__id=ingredient_id)
#
#         # Фильтруем рецепты по выбранным ингредиентам
#         recipes = recipes.filter(query)
#
#         # Отбираем рецепты, которые содержат только выбранные ингредиенты
#         final_recipes = set()
#         for recipe in recipes:
#             recipe_ingredients = [ingredient.id for ingredient in recipe.ingredient.all()]
#             if set(selected_ingredient_ids) >= set(recipe_ingredients):
#                 final_recipes.add(recipe)
#
#         return JsonResponse([{"name_recipe": recipe.name_recipe} for recipe in final_recipes], safe=False)
#
#     else:
#         return JsonResponse([], safe=False)  # Если ингредиенты не выбраны, возвращаем пустой список рецептов
#
# def recipe_by_id(request, recipe_id):
#     try:
#         recipe = Recipe.objects.get(pk=recipe_id)
#         recipe_data = {
#             'name_recipe': recipe.name_recipe,
#             'description': recipe.description,
#             'ingredients': list(recipe.ingredient.values_list('name_ingredient', flat=True))
#         }
#         return JsonResponse(recipe_data)
#     except Recipe.DoesNotExist:
#         return JsonResponse({'error': 'Recipe not found'}, status=404)




from .models import Ingredient, Recipe
from users.models import User
from django.http import JsonResponse
from django.db.models import Count, Q
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import get_object_or_404


def all_ingredients(request):
    ingredients = Ingredient.objects.all().values()
    return JsonResponse(list(ingredients), safe=False)
def all_recipes(request):
    recipes = Recipe.objects.all().values()
    return JsonResponse(list(recipes), safe=False)

def recipes_by_ingredients(request):
    selected_ingredients = request.GET.get('ingredient_ids')
    if selected_ingredients:
        selected_ingredient_ids = [int(i) for i in selected_ingredients.split(',')]

        # Получаем все объекты Recipe
        recipes = Recipe.objects.all()

        # Используем Q объект для построения запроса
        query = Q()
        for ingredient_id in selected_ingredient_ids:
            query |= Q(ingredient__id=ingredient_id)

        # Фильтруем рецепты по выбранным ингредиентам
        recipes = recipes.filter(query)

        # Отбираем рецепты, которые содержат только выбранные ингредиенты
        final_recipes = set()
        for recipe in recipes:
            recipe_ingredients = [ingredient.id for ingredient in recipe.ingredient.all()]
            if set(selected_ingredient_ids) == set(recipe_ingredients):
                final_recipes.add(recipe)

        return JsonResponse([{"name_recipe": recipe.name_recipe, 'id': recipe.id} for recipe in final_recipes], safe=False)

    else:
        return JsonResponse([], safe=False)  # Если ингредиенты не выбраны, возвращаем пустой список рецептов
'''
def recipe_by_id(request, recipe_id):
    try:
        recipe = Recipe.objects.get(pk=recipe_id)
        recipe_data = {
            "name_recipe": recipe.name_recipe,
            "description": recipe.description,
            "ingredients": list(recipe.ingredient.values_list('name_ingredient', flat=True))
        }
        return JsonResponse(recipe_data, safe=False)
    except Recipe.DoesNotExist:
        return JsonResponse({'error': 'Recipe not found'}, status=404)
'''

def recipe_by_id(request, recipe_id):
    recipe = get_object_or_404(Recipe, id=recipe_id)
    recipe_data = {
        "name_recipe": recipe.name_recipe,
        "description": recipe.description,
        "ingredients": list(recipe.ingredient.values_list('name_ingredient', flat=True))
    }
    return JsonResponse(recipe_data)

@csrf_exempt
def add_to_favorites(request, recipe_id):
    try:
        recipe = Recipe.objects.get(id=recipe_id)
        user_id = request.user.id
        user = User.objects.get(id=user_id)
        user.favorites.add(recipe)
        return JsonResponse({'success': 'Recipe added to favorites'})
    except Recipe.DoesNotExist:
        return JsonResponse({'error': 'Recipe not found'}, status=404)
    
@csrf_exempt
def get_favorites(request):
    try:
        user_id = request.user.id
        user = User.objects.get(id=user_id)
        favorite_recipes = user.favorites.all()
        recipes_data = [{'id': recipe.id, 'name_recipe': recipe.name_recipe, 'description': recipe.description} for recipe in favorite_recipes]
        return JsonResponse(recipes_data, safe=False)
    except User.DoesNotExist:
        return JsonResponse({'error': 'User not found'}, status=404)


@csrf_exempt
def create_recipe(request):
    if request.method == 'POST':
        data = request.POST
        name_recipe = data.get('name_recipe')
        description = data.get('description')
        ingredient_ids = data.getlist('ingredient_ids[]')  # Получаем список ID ингредиентов из формы
        try:
            # Создаем новый рецепт
            recipe = Recipe.objects.create(name_recipe=name_recipe, description=description)
            # Добавляем выбранные ингредиенты к рецепту
            recipe.ingredient.add(*ingredient_ids)
            return JsonResponse({'success': 'Recipe created successfully'})
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)
