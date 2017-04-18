from django.shortcuts import render

# serves up frontend bundle
def index(request):
    
    # if user is logged in, fire up the frontend app
    if request.user.is_authenticated():
        return render(request, 'frontend/index.html')
        
    # otherwise not logged in, send them to login screen
    path = request.path
    if path[0] == '/':
        path = path[1:]
        
    return redirect('/accounts/login/?next=%s' % path)
