from django.middleware.csrf import CsrfViewMiddleware

class TokenExemptCsrfViewMiddleware(CsrfViewMiddleware):
    def process_view(self, request, callback, callback_args, callback_kwargs):
        if request.META.get('HTTP_AUTHORIZATION', None) and "Bearer" in request.META.get('HTTP_AUTHORIZATION', None):
            print "Using Token bearer authentication, skip CSRF"
            return None
        return super(TokenExemptCsrfViewMiddleware, self).process_view(request, callback, callback_args, callback_kwargs)
