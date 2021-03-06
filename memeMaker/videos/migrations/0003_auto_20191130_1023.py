# Generated by Django 2.2.7 on 2019-11-30 17:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('videos', '0002_auto_20191123_1455'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='videoclip',
            name='end_time',
        ),
        migrations.RemoveField(
            model_name='videoclip',
            name='start_time',
        ),
        migrations.AddField(
            model_name='videoclip',
            name='end_minutes',
            field=models.IntegerField(default=0),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='videoclip',
            name='end_seconds',
            field=models.DecimalField(decimal_places=3, default=0, max_digits=6),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='videoclip',
            name='start_minutes',
            field=models.IntegerField(default=0),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='videoclip',
            name='start_seconds',
            field=models.DecimalField(decimal_places=3, default=0, max_digits=6),
            preserve_default=False,
        ),
    ]
