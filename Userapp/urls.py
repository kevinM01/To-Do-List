
from django.contrib import admin
from django.urls import path
from .views import RegisterView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('signup/',RegisterView.as_view())
]
