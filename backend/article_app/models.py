from django.db import models

# Create your models here.

genre_choies = [
    (0, 'None'),
    (1, 'SwHw'),
    (2, 'AdvancedCS'),
    (3, 'Science'),
    (4, 'Economics'),
    (5, 'Philosophy'),
    (6, 'Life')
]

class Article(models.Model):
    title = models.CharField(max_length=100)
    genre = models.IntegerField(choices = genre_choies, default = 0)
    author = models.CharField(max_length=100)
    content = models.TextField(default = '')
    create_date = models.DateTimeField(auto_now_add=True, blank = True)
    update_date = models.DateTimeField(auto_now_add=True, blank = True)

    def __str__(self):
        return self.title

class Introduction(models.Model):
    name = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=100)
    github = models.CharField(max_length=100)
    blog = models.CharField(max_length=100)
    description = models.CharField(max_length=10000)

    def __str__(self):
        return self.name