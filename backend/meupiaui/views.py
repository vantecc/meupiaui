from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
from django.http import JsonResponse
import json
from rest_framework import status
from .models import TouristPoint, City, Favorite, Category, Profile
from .serializers import TouristPointSerializer, CitySerializer, FavoriteSerializer, CategorySerializer, ProfileSerializer

# Create your views here.

class CityViewSet(viewsets.ModelViewSet):
    queryset = City.objects.all()
    serializer_class = CitySerializer
    permission_classes = [AllowAny]

class TouristPointViewSet(viewsets.ModelViewSet):
    queryset = TouristPoint.objects.all()
    serializer_class = TouristPointSerializer
    permission_classes = [IsAuthenticated]

class SearchPoint(viewsets.ModelViewSet):
    queryset = TouristPoint.objects.all()
    serializer_class = TouristPointSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        name_point = self.request.query_params.get('name')
        if name_point:
            queryset = TouristPoint.objects.filter(name__icontains=name_point)
            return queryset
        
class FavoriteViewSet(viewsets.ModelViewSet):
    serializer_class = FavoriteSerializer
    queryset = Favorite.objects.all()
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Favorite.objects.filter(user=self.request.user)
    
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class HasFavorite(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        point_id = self.request.query_params.get('point')
        

        if point_id:
            favorite = Favorite.objects.filter(user=request.user, point=point_id).first()
            
            return JsonResponse({
                "is_favorite": bool(favorite),
                "id_favorite": favorite.id if favorite else None
            })


class CategoryViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Profile.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class ExistProfileView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        has_profile = Profile.objects.filter(user=request.user).exists();
        return JsonResponse({'has_profile': has_profile})

@csrf_exempt
def register_view(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            username = data['username'] 
            email = data['email']        
            password = data['password'] 

            if not username or not password:
                return JsonResponse({'error': 'Username e senha são obrigatórios!'}, status=400)
            
            if User.objects.filter(username=username).exists():
                return JsonResponse({'error': 'Usuário já existe!'}, status=400)
            
            user = User.objects.create_user(username=username, email=email, password=password)
            return JsonResponse({'message': 'Usuário registrado com sucesso!', 'user': user.username})

        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
        
    return JsonResponse({'error': 'Método não permitido'}, status=405)

class CustomObtainAuthToken(APIView):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        username = request.data.get('username')
        password = request.data.get('password')
        
        user = User.objects.filter(username=username).first()
        if user and user.check_password(password):

            token, created = Token.objects.get_or_create(user=user)
            
            return JsonResponse({
                'token': token.key,
                'user': {
                    'id': user.id,
                    'username': user.username,
                    'email': user.email
                }
            })
        
        return JsonResponse({'error': 'Usuário ou senha incorretos'}, status=400)