from rest_framework import serializers
from .models import Server, Vm

class ServerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Server
        fields = '__all__'
        
class VmSerializer(serializers.ModelSerializer):
    server = ServerSerializer()
    class Meta:
        model = Vm
        fields = '__all__'


