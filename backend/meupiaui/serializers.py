from rest_framework import serializers
from .models import City, TouristPoint, Category, Favorite, Profile
from django.contrib.auth.models import User

class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = '__all__'

class TouristPointSerializer(serializers.ModelSerializer):
    city_name = serializers.CharField(source='city.name', read_only=True)
    category_name = serializers.CharField(source='category.name', read_only=True)

    class Meta:
        model = TouristPoint
        fields = '__all__'

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class ProfileSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(source='user.email', read_only=True)
    class Meta:
        model = Profile
        fields = ['first_name', 'last_name', 'image', 'email']

class FavoriteSerializer(serializers.ModelSerializer):
    name = serializers.CharField(source='point.name', read_only=True)
    username = serializers.CharField(source='user.username', read_only=True)
    city_name = serializers.CharField(source='point.city', read_only=True)
    category_name = serializers.CharField(source='point.category', read_only=True)
    latitude = serializers.CharField(source='point.latitude', read_only=True)
    longitude = serializers.CharField(source='point.longitude', read_only=True)
    description = serializers.CharField(source='point.description', read_only=True)
    image = serializers.SerializerMethodField()
    user = serializers.PrimaryKeyRelatedField(read_only=True) 

    class Meta:
        model = Favorite
        fields = '__all__'

    def get_image(self, obj):
        request = self.context.get('request')
        if obj.point.image and hasattr(obj.point.image, 'url'):
            return request.build_absolute_uri(obj.point.image.url) if request else obj.point.image.url
        return None
    
class RegisterSerializer(serializers.Serializer):
    username = serializers.CharField(required=True, max_length=150)
    email = serializers.EmailField(required=True)
    password = serializers.CharField(required=True, write_only=True)

    def validate_username(self, value):
        #  melhorar essa validação dps
        if User.objects.filter(username=value).exists():
            raise serializers.ValidationError("Usuário já existe!")
        return value

    def create(self, validated_data): 

        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )
        return user