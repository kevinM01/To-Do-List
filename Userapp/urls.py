
from django.contrib import admin
from django.urls import path,include
from .views import CustomRegisterView


urlpatterns = [

    path('signup/',CustomRegisterView.as_view()),
    path('api-auth/', include('rest_framework.urls')),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
]
