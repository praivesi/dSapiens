# Generated by Django 4.1.3 on 2022-12-03 10:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        (
            "article_app",
            "0003_rename_date_article_create_date_article_content_and_more",
        ),
    ]

    operations = [
        migrations.AlterField(
            model_name="introduction",
            name="description",
            field=models.TextField(default=""),
        ),
    ]
