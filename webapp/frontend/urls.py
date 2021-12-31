from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('home/', index),
    path('experience', index),
    path('projects', index)
]