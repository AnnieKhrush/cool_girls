from django.db import models

class Ingredient(models.Model):
    name_ingredient = models.CharField(max_length=100)
    def __str__(self):
        return self.name_ingredient
class Recipe(models.Model):
    name_recipe = models.CharField(max_length=100)
    ingredient = models.ManyToManyField(Ingredient)
    description = models.TextField(default=None)
    def __str__(self):
        return self.name_recipe






