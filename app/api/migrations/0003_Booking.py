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
            name='Booking',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('turfId', models.ForeignKey(default=1, to='api.Turf')),
                ('userId', models.ForeignKey(default=1, to=settings.AUTH_USER_MODEL)),
                ('timeId', models.ForeignKey(default=1, to='api.TimeRent')),
                ('price', models.DecimalField())
            ],
        ),
    ]