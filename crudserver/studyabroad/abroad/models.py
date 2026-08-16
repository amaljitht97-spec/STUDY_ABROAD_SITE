from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Students(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE,related_name="students")
    email=models.EmailField(max_length=100)
    phone=models.CharField(max_length=15)
    address=models.CharField(max_length=400)
    course=models.CharField(max_length=200,null=True)
    created_at=models.DateTimeField(auto_now_add=True)



class Student(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    course = models.CharField(max_length=100)
    age = models.IntegerField()

    def __str__(self):
        return self.name