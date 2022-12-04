from rest_framework import serializers
from .models import Article

class BaseArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        # fields = ['title', 'author']
        fields = '__all__'