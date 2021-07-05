from django.contrib.auth import login, authenticate
from django.shortcuts import render, redirect
from .models import User
from rest_framework import generics
from .serializers import RegisterSerializer
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import serializers, status


# Create your views here.

class Userlist(APIView):

    def get(self, request):
        Userapp = User.objects.all()
        serializer = RegisterSerializer(User, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class Userdetail(APIView):
    def get_object(self, pk):
        try:
            return User.objects.get(pk=pk)
        except User.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        Task = self.get_object(pk)
        serializer = RegisterSerializer(Task)
        return Response(serializer.data)

    def put(self, request, pk):
        Task = self.get_object(pk)
        serializer = RegisterSerializer(Task, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        Task = self.get_object(pk)
        Task.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    # permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer
