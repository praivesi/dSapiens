from lib2to3.pytree import Base
from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import viewsets
from rest_framework import permissions
from rest_framework.views import APIView
from .models import Article
from .serializers import BaseArticleSerializer


def index(request):
    return HttpResponse('Hello world! This is API Root!')

class ArticleAPI(APIView):
    def get(self, request):
        queryset = Article.objects.all()
        print(queryset)
        serializer = BaseArticleSerializer(queryset, many = True)
        return Response(serializer.data)