from lib2to3.pytree import Base
from re import L, search
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .models import Article
from .serializers import BaseArticleSerializer
from django.core.paginator import Paginator, PageNotAnInteger
# from .pagination import StandardResultsSetPagination


def index(request):
    return HttpResponse('Hello world! This is API Root!')

class ArticleAPI(APIView):
    # pagination = StandardResultsSetPagination

    def post(self, request):
        serializer = BaseArticleSerializer(data = request.data)

        if not serializer.is_valid():
            return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)

        serializer.save()
        return Response(serializer.data, status = status.HTTP_201_CREATED)

    def get(self, request, **kargs):
        if kargs.get('article_id') is None:
            totalArticles = Article.objects.all()

            pageNum = request.GET.get('pageNum', '1')
            print(f'TEST PAGE => {pageNum}')

            paginator = Paginator(totalArticles, '5') # 5 articles per page
            paginatedArticles = paginator.get_page(pageNum)

            serializer = BaseArticleSerializer(paginatedArticles, many = True)
        else:
            article_id = kargs.get('article_id')
            serializer = BaseArticleSerializer(Article.objects.get(id = article_id))

        return Response(serializer.data, status = status.HTTP_200_OK)

    def put(self, request, **kargs):
        article_id = kargs.get('article_id')

        if article_id is None:
            return Response('Invalid request (Article ID is none)', status = status.HTTP_400_BAD_REQUEST)
        
        article = Article.objects.get(id = article_id)
        serializer = BaseArticleSerializer(article, data = request.data)

        if not serializer.is_valid():
            return Response('Invalid request (Article could not be serialized)', status = status.HTTP_400_BAD_REQUEST)
        
        serializer.save()
        return Response(serializer.data, status = status.HTTP_200_OK)
            

    def delete(self, request, **kargs):
        article_id = kargs.get('article_id')

        if article_id is None:
            return Response('Invalid request (Article ID is none)', status = status.HTTP_400_BAD_REQUEST)
        
        article = Article.objects.get(id = article_id)
        article.delete()

        return Response(f'Article (id = {article_id}) deleted.', status = status.HTTP_200_OK)