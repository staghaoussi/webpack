from rest_framework import viewsets
from .models import Vm, Server
from .serializers import VmSerializer, ServerSerializer


class VmViewSet(viewsets.ModelViewSet):
    queryset = Vm.objects.all()
    serializer_class = VmSerializer


class ServerViewSet(viewsets.ModelViewSet):
    queryset = Server.objects.all()
    serializer_class = ServerSerializer