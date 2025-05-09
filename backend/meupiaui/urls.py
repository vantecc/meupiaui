from rest_framework.routers import DefaultRouter
from .views import CityViewSet, TouristPointViewSet, FavoriteViewSet, CategoryViewSet,ProfileViewSet, RegisterView, CustomObtainAuthToken, ExistProfileView, SearchPoint, HasFavorite
from rest_framework.authtoken.views import obtain_auth_token
from django.urls import path, include


router = DefaultRouter()
router.register(r'cities', CityViewSet)
router.register(r'tourist-points', TouristPointViewSet)
router.register(r'favorites', FavoriteViewSet)
router.register(r'categories', CategoryViewSet)
router.register(r'profile', ProfileViewSet)
router.register(r'search', SearchPoint, basename='search')

urlpatterns = [
    path('', include(router.urls)),
    path('login/', CustomObtainAuthToken.as_view(), name='auth_token'),
    path('has-profile/', ExistProfileView.as_view()),
    path('has-favorite/', HasFavorite.as_view()),
    path('register/', RegisterView.as_view(), name='register')
]