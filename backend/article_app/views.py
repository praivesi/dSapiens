from lib2to3.pytree import Base
from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Article
from .serializers import BaseArticleSerializer


def index(request):
    return HttpResponse('Hello world! This is article_app!')

@api_view(['GET'])
def ArticleAPI(request, id):
    cur_article = Article()
    cur_article.title = 'Article Title'
    cur_article.author = 'Article Author'

    serializer = BaseArticleSerializer(cur_article)

    return Response(serializer.data)