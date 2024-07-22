from django.shortcuts import render


def home_page(request):
    return render(request, 'home_page.html')


def login(request):
    return render(request, 'login.html')
