from django.contrib import admin
from . import models

# Register your models here.
admin.site.register(models.TouristPoint)
admin.site.register(models.Favorite)
admin.site.register(models.Category)
admin.site.register(models.City)
admin.site.register(models.Profile)

