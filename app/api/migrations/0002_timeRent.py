from django.db import migrations, models
from django.conf import settings

class Migration(migrations.Migration):

    initial = True

    dependencies = [
         migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('api','0001_initial'),
    ]
    operations = [
        migrations.CreateModel(
            name='TimeRent',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('startTime', models.TimeField()),
                ('endTime', models.TimeField())
            ],
        ),
    ]