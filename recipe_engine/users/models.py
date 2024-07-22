# from django.db import models
from recipes.models import Recipe


from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    favorites = models.ManyToManyField(Recipe, related_name='user_favourites')

