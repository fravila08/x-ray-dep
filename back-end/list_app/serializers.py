from .models import List
from rest_framework.serializers import ModelSerializer
from task_app.serialiers import TaskSerializer

class ListSerializer(ModelSerializer):
    tasks = TaskSerializer(many=True, read_only=True)
    
    class Meta:
        model = List
        fields = '__all__'