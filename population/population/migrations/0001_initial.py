# Generated by Django 2.1.3 on 2018-11-07 19:24

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Location',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('nineteen_eighty', models.FloatField(null=True)),
                ('nineteen_eighty_one', models.FloatField(null=True)),
                ('nineteen_eighty_two', models.FloatField(null=True)),
                ('nineteen_eighty_three', models.FloatField(null=True)),
                ('nineteen_eighty_four', models.FloatField(null=True)),
                ('nineteen_eighty_five', models.FloatField(null=True)),
                ('nineteen_eighty_six', models.FloatField(null=True)),
                ('nineteen_eighty_seven', models.FloatField(null=True)),
                ('nineteen_eighty_eight', models.FloatField(null=True)),
                ('nineteen_eighty_nine', models.FloatField(null=True)),
                ('nineteen_ninety', models.FloatField(null=True)),
                ('nineteen_ninety_one', models.FloatField(null=True)),
                ('nineteen_ninety_two', models.FloatField(null=True)),
                ('nineteen_ninety_three', models.FloatField(null=True)),
                ('nineteen_ninety_four', models.FloatField(null=True)),
                ('nineteen_ninety_five', models.FloatField(null=True)),
                ('nineteen_ninety_six', models.FloatField(null=True)),
                ('nineteen_ninety_seven', models.FloatField(null=True)),
                ('nineteen_ninety_eight', models.FloatField(null=True)),
                ('nineteen_ninety_nine', models.FloatField(null=True)),
                ('two_thousand', models.FloatField(null=True)),
                ('two_thousand_one', models.FloatField(null=True)),
                ('two_thousand_two', models.FloatField(null=True)),
                ('two_thousand_three', models.FloatField(null=True)),
                ('two_thousand_four', models.FloatField(null=True)),
                ('two_thousand_five', models.FloatField(null=True)),
                ('two_thousand_six', models.FloatField(null=True)),
                ('two_thousand_seven', models.FloatField(null=True)),
                ('two_thousand_eight', models.FloatField(null=True)),
                ('two_thousand_nine', models.FloatField(null=True)),
                ('two_thousand_ten', models.FloatField(null=True)),
            ],
        ),
    ]