from rest_framework import serializers
from Userapp.models import CustomUser
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password
from rest_auth.registration.serializers import RegisterSerializer
from allauth.account.adapter import get_adapter

# class RegisterSerializer(RegisterSerializer):
#     email = serializers.EmailField(
#             required=True,
#             validators=[UniqueValidator(queryset=User.objects.all())]
#             )

#     password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
#     password2 = serializers.CharField(write_only=True, required=True)

#     class Meta:
#         model = User
#         fields = ('username', 'password', 'password2', 'email', 'first_name', 'last_name')
#         extra_kwargs = {
#             'first_name': {'required': True},
#             'last_name': {'required': True}
#         }

#     def validate(self, attrs):
#         if attrs['password'] != attrs['password2']:
#             raise serializers.ValidationError({"password": "Password fields didn't match."})

#         return attrs

#     def create(self, validated_data):
#         user = User.objects.create(
#             username=validated_data['username'],
#             email=validated_data['email'],
#             first_name=validated_data['first_name'],
#             last_name=validated_data['last_name']
#         )

        
#         user.set_password(validated_data['password'])
#         user.save()

#         return user

class CustomRegisterSerializer(RegisterSerializer):
    phone = serializers.BooleanField()
   

    class Meta:
        model = CustomUser
        fields = ('__all__')

    def get_cleaned_data(self):
        return {
            'username': self.validated_data.get('username', ''),
            'password1': self.validated_data.get('password1', ''),
            'password2': self.validated_data.get('password2', ''),
            'email': self.validated_data.get('email', ''),
            'phone': self.validated_data.get('phone', ''),
           
        }

    def save(self, request):
        adapter = get_adapter()
        user = adapter.new_user(request)
        self.cleaned_data = self.get_cleaned_data()
        phone = self.cleaned_data.get('phone')
        user.save()
        adapter.save_user(request, user, self)
        return user

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('__all__')