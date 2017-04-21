from django.shortcuts import render, redirect

# serves up landing page
def index(request):
    
    # if user is not logged in, send them to the logout
    if not request.user.is_authenticated():
        return redirect('/accounts/login/')
        
    return render(request, 'landing/index.html')
