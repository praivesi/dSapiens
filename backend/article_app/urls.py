from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('articles/', views.ArticleAPI.as_view()),
    path('articles/<int:article_id>/', views.ArticleAPI.as_view())
]