import { useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as AuthSession from 'expo-auth-session';
import { loginWithGoogle } from '../api/auth';
import { Alert } from 'react-native';

WebBrowser.maybeCompleteAuthSession();

const CLIENT_ID = '306015779914-fbtmsk2imefibgs3e0v68l9ujdp6f7cq.apps.googleusercontent.com';

export default function useGoogleAuth(navigation) {
  const discovery = {
    authorizationEndpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
    tokenEndpoint: 'https://oauth2.googleapis.com/token',
    revocationEndpoint: 'https://oauth2.googleapis.com/revoke',
  };

  const [request, response, promptAsync] = AuthSession.useAuthRequest(
    {
      clientId: CLIENT_ID,
      redirectUri: AuthSession.makeRedirectUri({ useProxy: true }),
      scopes: ['openid', 'profile', 'email'],
      usePKCE: true,
      responseType: 'code',
    },
    discovery
  );

  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;

      loginWithGoogle(id_token)
        .then((user) => {
          Alert.alert('Login com Google', `Bem-vindo(a), ${user.nome}!`);
          // navigation.navigate('Home');
        })
        .catch(() => {
          Alert.alert('Erro', 'Falha ao autenticar com o Google');
        });
    }
  }, [response]);

  return {
    loginWithGooglePrompt: () =>
      promptAsync({
        useProxy: true,
        projectNameForProxy: '@decleve/frontend',
      }),
    request,
  };
}
