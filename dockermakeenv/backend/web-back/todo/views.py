from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from rest_framework import generics
from rest_framework.response import Response
from .models import Todo
from .serializers import TodoSerializer
import logging

class ListTodo(generics.ListAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

    def list(self, request):
        print("dd")
        logger = logging.getLogger(__name__)
        logger.info('something here')
        queryset = self.get_queryset()
        serializer_class = self.get_serializer_class()
        serializer = serializer_class(queryset, many=True)

        return Response(serializer.data)


class DetailTodo(generics.RetrieveAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer